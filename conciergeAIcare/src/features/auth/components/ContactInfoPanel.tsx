import React from "react";
import { motion } from "framer-motion";

export function ContactInfoPanel() {
  return (
    <motion.div
      className="w-full max-w-xs text-base"
      initial={{ scale: 0.98, opacity: 0.8 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className="flex items-center mb-3">
        <span className="inline-flex items-center justify-center bg-[#fdc32b] rounded-full w-9 h-9 mr-3 shadow">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className="text-[#191e26]">
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <path d="M3 7l9 7 9-7" />
          </svg>
        </span>
        <h3 className="text-lg md:text-xl font-bold text-[#191e26]">Want to tell us more?</h3>
      </div>
      <motion.div
        className="bg-[#fff8e1] border-l-4 border-[#fdc32b] p-4 rounded-xl shadow-md shadow-blue-100"
      >
        <p className="mb-2 text-[#191e26]">
          You can also email us at{" "}
          <a href="mailto:Aroth@conciergeaicare.com" className="text-[#fdc32b] font-bold underline hover:text-[#e9b11f] transition">
            Aroth@conciergeaicare.com
          </a>
          .
        </p>
        <ul className="list-disc list-inside text-[#191e26] mb-2">
          <li>Include your full name and the email you want to use.</li>
          <li>Share why you'd like access or how Concierge Care can help you.</li>
        </ul>
        <p className="text-sm text-[#191e26] mb-1">
          Our team will review your message and reply within 1 business day.
        </p>
        <p className="text-xs text-gray-600 italic">
          Already contacted us? Please wait for our response before submitting another request.
        </p>
      </motion.div>
    </motion.div>
  );
}
