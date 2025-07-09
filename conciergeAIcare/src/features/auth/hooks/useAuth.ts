// src/features/auth/hooks/useAuth.ts
import { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  type User,
  type UserCredential,
} from "firebase/auth";
import { auth } from "../../../services/firebase";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  async function login(email: string, password: string): Promise<UserCredential> {
    setError(null);
    return await signInWithEmailAndPassword(auth, email, password);
    // If error, it will throw and be caught in your AuthForm!
  }

  async function register(email: string, password: string): Promise<UserCredential> {
    setError(null);
    return await createUserWithEmailAndPassword(auth, email, password);
    // If error, it will throw and be caught in your AuthForm!
  }

  async function logout() {
    await signOut(auth);
  }

  return { user, loading, error, login, register, logout };
}
