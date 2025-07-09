import React, { useState, useEffect, useRef } from "react";
import {
  HiOutlineEye,
  HiOutlineEyeOff,
  HiMail,
  HiLockClosed,
} from "react-icons/hi";
import clsx from "clsx";

// Initialize lockedEmail from localStorage, or empty if none saved
const lockedEmail = localStorage.getItem("userEmail") || "";

const Modals: React.FC = () => {
  const [modal, setModal] = useState<"login" | "signup" | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // Email state: start locked if lockedEmail is set
  const [email, setEmail] = useState(lockedEmail);

  // Animate open
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function onOpen(e: any) {
      setModal(e.detail === "loginModal" ? "login" : "signup");
      // When opening modal, update email from localStorage again (in case changed)
      setEmail(localStorage.getItem("userEmail") || "");
    }
    window.addEventListener("openModal", onOpen as any);
    return () => window.removeEventListener("openModal", onOpen as any);
  }, []);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.classList.add("scale-100", "opacity-100");
    }
  }, [modal]);

  // Handle show/hide password icons correctly
  const renderPasswordIcon = (
    show: boolean,
    toggle: () => void,
    label = "Toggle password visibility"
  ) => (
    <button
      type="button"
      aria-label={label}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
      onClick={toggle}
      tabIndex={-1}
    >
      {show ? <HiOutlineEye size={22} /> : <HiOutlineEyeOff size={22} />}
    </button>
  );

  return (
    <>
      {(modal === "signup" || modal === "login") && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-200">
          <div
            ref={modalRef}
            className={clsx(
              "relative bg-white rounded-2xl shadow-2xl w-[94vw] max-w-md px-7 pt-8 pb-6 mx-auto scale-95 opacity-0 transition-all duration-300",
              "flex flex-col gap-2"
            )}
            style={{
              fontFamily: "'Manrope', 'Hind', 'Plus Jakarta Sans', sans-serif",
              maxHeight: "90vh", // Limit height to viewport
              overflowY: "auto", // Enable vertical scroll
              paddingBottom: "3rem", // Extra bottom padding so content isn't hidden behind scroll or close button
            }}
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black text-2xl font-bold transition"
              aria-label="Close"
              tabIndex={0}
            >
              &times;
            </button>

            {modal === "signup" && (
              <>
                <h2 className="text-2xl font-bold text-center text-blue-900 mb-1">
                  Sign Up
                </h2>
                <p className="text-center text-gray-500 mb-5">
                  Invest in your healthcare today
                </p>
                <form className="space-y-5" autoComplete="off">
                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-blue-900 font-semibold mb-1"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <HiMail
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Email"
                        className={clsx(
                          "w-full pl-10 pr-3 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition",
                          lockedEmail
                            ? "bg-gray-200 cursor-not-allowed text-gray-600"
                            : ""
                        )}
                        value={email}
                        onChange={(e) =>
                          !lockedEmail && setEmail(e.target.value)
                        }
                        required
                        readOnly={!!lockedEmail}
                        disabled={!!lockedEmail}
                      />
                      {lockedEmail && (
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 text-xs font-bold select-none">
                          Locked
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-blue-900 font-semibold mb-1"
                    >
                      Password <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <HiLockClosed
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        autoComplete="new-password"
                        placeholder="Password"
                        className="w-full pl-10 pr-12 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                        required
                      />
                      {renderPasswordIcon(showPassword, () =>
                        setShowPassword((v) => !v)
                      )}
                    </div>
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-blue-900 font-semibold mb-1"
                    >
                      Confirm Password <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <HiLockClosed
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        id="confirmPassword"
                        type={showPassword2 ? "text" : "password"}
                        name="confirmPassword"
                        autoComplete="new-password"
                        placeholder="Confirm Password"
                        className="w-full pl-10 pr-12 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                        required
                      />
                      {renderPasswordIcon(
                        showPassword2,
                        () => setShowPassword2((v) => !v),
                        "Toggle confirm password visibility"
                      )}
                    </div>
                  </div>

                  {/* Medical Info Fields (static info) */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-blue-900 font-semibold mb-1">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-blue-900 font-semibold mb-1">
                        Date of Birth (DOB){" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
                        name="dob"
                        className="w-full px-4 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-blue-900 font-semibold mb-1">
                        Gender (or Sex Assigned at Birth){" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="gender"
                        className="w-full px-4 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Select gender
                        </option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                        <option value="preferNotToSay">
                          Prefer not to say
                        </option>
                      </select>
                    </div>

                    {/* The following fields are optional, so no required marker */}
                    <div>
                      <label className="block text-blue-900 font-semibold mb-1">
                        Height
                      </label>
                      <input
                        type="text"
                        name="height"
                        placeholder="e.g. 5'9 or 175 cm"
                        className="w-full px-4 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-blue-900 font-semibold mb-1">
                        Ethnicity / Race
                      </label>
                      <input
                        type="text"
                        name="ethnicity"
                        placeholder="Ethnicity or Race"
                        className="w-full px-4 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-blue-900 font-semibold mb-1">
                        Blood Type
                      </label>
                      <input
                        type="text"
                        name="bloodType"
                        placeholder="Blood Type"
                        className="w-full px-4 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-blue-900 font-semibold mb-1">
                        Nationality / Country of Origin
                      </label>
                      <input
                        type="text"
                        name="nationality"
                        placeholder="Nationality or Country of Origin"
                        className="w-full px-4 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-blue-900 font-semibold mb-1">
                        Place of Birth
                      </label>
                      <input
                        type="text"
                        name="placeOfBirth"
                        placeholder="Place of Birth"
                        className="w-full px-4 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-blue-900 font-semibold mb-1">
                        Family History of Diseases
                      </label>
                      <input
                        type="text"
                        name="familyHistory"
                        placeholder="Family History of Diseases"
                        className="w-full px-4 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-blue-900 font-semibold mb-1">
                        Genetic Information (e.g., BRCA status)
                      </label>
                      <input
                        type="text"
                        name="geneticInfo"
                        placeholder="Genetic Information"
                        className="w-full px-4 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-blue-900 font-semibold mb-1">
                        Allergies (if lifelong)
                      </label>
                      <input
                        type="text"
                        name="allergies"
                        placeholder="Allergies"
                        className="w-full px-4 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-blue-900 font-semibold mb-1">
                        Chronic Conditions (e.g., Type 1 Diabetes, Congenital
                        Disorders)
                      </label>
                      <input
                        type="text"
                        name="chronicConditions"
                        placeholder="Chronic Conditions"
                        className="w-full px-4 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-blue-900 font-semibold mb-1">
                        Insurance/ID Number (administrative)
                      </label>
                      <input
                        type="text"
                        name="insuranceId"
                        placeholder="Insurance or ID Number"
                        className="w-full px-4 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 shadow-lg transition-all duration-200"
                  >
                    Create Account
                  </button>

                  <p className="text-xs text-center text-gray-600 mt-2">
                    By continuing you agree to our
                    <a href="#" className="text-blue-600 hover:underline">
                      {" "}
                      Terms of Use
                    </a>{" "}
                    and
                    <a href="#" className="text-blue-600 hover:underline">
                      {" "}
                      Privacy Policy
                    </a>
                    .
                  </p>
                  <p className="text-sm text-center mt-2">
                    Already have an account?{" "}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setModal("login");
                      }}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Login
                    </a>
                  </p>
                </form>
              </>
            )}
            {modal === "login" && (
              <>
                <h2 className="text-2xl font-bold text-center text-blue-900 mb-5">
                  Login
                </h2>
                <form className="space-y-5" autoComplete="off">
                  <div className="relative">
                    <HiMail
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Email"
                      className={clsx(
                        "w-full pl-10 pr-3 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition",
                        lockedEmail
                          ? "bg-gray-200 cursor-not-allowed text-gray-600"
                          : ""
                      )}
                      value={email}
                      onChange={(e) => !lockedEmail && setEmail(e.target.value)}
                      required
                      readOnly={!!lockedEmail}
                      disabled={!!lockedEmail}
                    />
                    {lockedEmail && (
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 text-xs font-bold select-none">
                        Locked
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <HiLockClosed
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete="current-password"
                      placeholder="Password"
                      className="w-full pl-10 pr-12 py-3 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                      required
                    />
                    {renderPasswordIcon(showPassword, () =>
                      setShowPassword((v) => !v)
                    )}
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Remember me</span>
                    </label>
                    <a href="#" className="text-blue-600 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 shadow-lg transition-all duration-200"
                  >
                    Login
                  </button>
                  <p className="text-center text-sm mt-2">
                    Not registered yet?{" "}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setModal("signup");
                      }}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Create an Account
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;
