import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../hooks/useAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../services/firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useNavigate } from "react-router-dom";

export function AuthForm() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { login, register } = useAuth();
  const navigate = useNavigate();

  async function isUserApproved(uid: string): Promise<boolean> {
    const userDoc = await getDoc(doc(db, "users", uid));
    return userDoc.exists() && userDoc.data()?.approved === true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitLoading(true);
    setError(null);
    try {
      let userCredential;
      if (isSignIn) {
        userCredential = await login(email, password);
      } else {
        userCredential = await register(email, password);
        await setDoc(doc(db, "users", userCredential.user.uid), {
          email,
          provider: "email",
          approved: false,
          createdAt: new Date(),
        });
        setError(
          "Your account is awaiting approval. Please wait for admin approval."
        );
        setSubmitLoading(false);
        return;
      }
      const uid = userCredential.user.uid;
      const approved = await isUserApproved(uid);
      if (!approved) {
        setError(
          "Your account is awaiting approval. Please wait for admin approval."
        );
        await auth.signOut();
        setSubmitLoading(false);
        return;
      }
      // Save email to localStorage for dashboard use
      localStorage.setItem("userEmail", email);
      // Redirect to dashboard on success
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "An error occurred");
    }
    setSubmitLoading(false);
  }

  async function handleGoogleSignIn() {
    setGoogleLoading(true);
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const userDocRef = doc(db, "users", result.user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          email: result.user.email,
          provider: "google",
          approved: false,
          createdAt: new Date(),
        });
        setError(
          "Your account is awaiting approval. Please wait for admin approval."
        );
        await auth.signOut();
        setGoogleLoading(false);
        return;
      }
      const approved = userDoc.data()?.approved === true;
      if (!approved) {
        setError(
          "Your account is awaiting approval. Please wait for admin approval."
        );
        await auth.signOut();
        setGoogleLoading(false);
        return;
      }
      // Save email to localStorage for dashboard use
      localStorage.setItem("userEmail", result.user.email || "");
      // Redirect to dashboard on success
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Google sign-in failed");
    }
    setGoogleLoading(false);
  }

  const googleBtnText = isSignIn
    ? "Sign in with Google"
    : "Sign up with Google";

  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="mb-7 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-1">
          Welcome to Concierge Care
        </h2>
        <p className="text-gray-600 text-sm">
          Sign {isSignIn ? "in" : "up"} to access your account
        </p>
      </div>
      <div className="flex mb-7 rounded-lg overflow-hidden bg-blue-100 shadow-sm">
        <button
          className={`flex-1 py-2 font-bold text-base focus:outline-none transition
            ${
              isSignIn
                ? "bg-blue-600 text-white"
                : "bg-blue-400 text-white hover:bg-blue-300"
            }
            `}
          onClick={() => setIsSignIn(true)}
          type="button"
        >
          Sign In
        </button>
        <button
          className={`flex-1 py-2 font-bold text-base focus:outline-none transition
            ${
              !isSignIn
                ? "bg-blue-600 text-white"
                : "bg-blue-400 text-white hover:bg-blue-300"
            }
            `}
          onClick={() => setIsSignIn(false)}
          type="button"
        >
          Sign Up
        </button>
      </div>

      <button
        type="button"
        className="w-full flex items-center justify-center py-2 mb-4 rounded-xl bg-white text-gray-700 font-semibold border border-gray-200 shadow hover:bg-blue-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-200"
        onClick={handleGoogleSignIn}
        disabled={googleLoading}
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        {googleLoading ? "Processing..." : googleBtnText}
      </button>
      <div className="flex items-center mb-5">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="mx-3 text-gray-400 text-xs">
          or continue with email
        </span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            className="block text-blue-900 font-semibold mb-1"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium transition placeholder-gray-400"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label
            className="block text-blue-900 font-semibold mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete={isSignIn ? "current-password" : "new-password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium transition placeholder-gray-400"
            placeholder="Your password"
          />
        </div>
        <motion.button
          type="submit"
          className="w-full py-2 rounded-lg bg-blue-500 text-white font-bold text-base shadow-md hover:bg-blue-400 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 flex items-center justify-center"
          whileTap={{ scale: 0.97 }}
          disabled={submitLoading}
        >
          {submitLoading && (
            <span className="animate-spin mr-2 w-5 h-5 border-2 border-white border-t-blue-500 rounded-full inline-block"></span>
          )}
          {isSignIn ? "Sign In" : "Sign Up"}
        </motion.button>
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 text-sm mt-2 text-center"
          >
            {error}
          </motion.div>
        )}
      </form>
      <div className="mt-4 text-xs text-gray-500 text-center">
        <span>
          Accounts require approval by an administrator before you can log in.
        </span>
      </div>
    </div>
  );
}
