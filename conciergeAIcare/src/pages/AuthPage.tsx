import React from "react";
import { motion } from "framer-motion";
import { AuthForm } from "../features/auth/components/AuthForm";
import { ContactInfoPanel } from "../features/auth/components/ContactInfoPanel";
import logo from "../assets/logo.png"; // Place your logo in /public or /src/assets

export default function AuthPage() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Logo and Brand */}
      <div className="flex flex-col items-center mb-8">
        <img src={logo} alt="Concierge Care Logo" className="h-16 mb-2" />
        <h1 className="text-3xl font-bold text-[#191e26] tracking-tight">Concierge Care</h1>
      </div>
      <motion.div
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-100"
        initial={{ opacity: 0, scale: 0.96, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Auth Form */}
        <div className="flex-1 px-8 py-10 flex items-center">
          <AuthForm />
        </div>
        {/* Info panel */}
        <div className="bg-[#f9fafc] md:border-l border-gray-100 flex items-center px-8 py-10 md:w-[340px] w-full">
          <ContactInfoPanel />
        </div>
      </motion.div>
    </div>
  );
}
