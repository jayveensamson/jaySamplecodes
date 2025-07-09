import React from "react";
import { motion } from "framer-motion";

const WhySection: React.FC = () => (
  <section
    id="why"
    className="relative w-full bg-[#6B758A] py-14 px-4 sm:px-0 flex justify-center items-center overflow-hidden"
  >
    {/* Floating animated accent (circle) */}
    <motion.div
      className="absolute left-0 top-0 w-36 h-36 bg-amber-200/30 rounded-full blur-3xl z-0"
      initial={{ scale: 0.6, opacity: 0.5, x: -40, y: -20 }}
      animate={{
        scale: [0.6, 1.1, 0.95, 1],
        opacity: [0.5, 0.6, 0.4, 0.5],
        x: [-40, 12, -20, -40],
        y: [-20, 12, -8, -20],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
    <motion.div
      className="max-w-3xl w-full mx-auto flex flex-col items-center text-center relative z-10"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {/* Animated badge */}
      <motion.div
        className="uppercase text-sm font-medium font-PlusJakarta text-white tracking-widest mb-3"
        initial={{ y: -20, opacity: 0, scale: 0.85 }}
        whileInView={{ y: 0, opacity: 1, scale: 1.09 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          type: "spring",
          stiffness: 120,
        }}
        viewport={{ once: true }}
      >
        WHY CONCIERGE CARE?
      </motion.div>
      {/* Headline with animated underline */}
      <motion.h2
        className="relative text-3xl sm:text-4xl md:text-5xl font-bold font-PlusJakarta text-white mb-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.12 }}
        viewport={{ once: true }}
      >
        A Smarter Way To Access Your Doctor
        {/* Animated underline */}
        <motion.span
          className="absolute left-1/2 -bottom-3 -translate-x-1/2 h-[5px] w-40 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300 opacity-80"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ transformOrigin: "center" }}
        />
      </motion.h2>
      {/* Paragraph */}
      <motion.div
        className="text-base sm:text-lg font-medium font-PlusJakarta text-white/90 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.22 }}
        viewport={{ once: true }}
      >
        Explore a smarter way to access your doctor with our concierge medicine
        membership. Enjoy consistent care, same-day visits, and a direct line to
        your physician—without the usual delays.
      </motion.div>
    </motion.div>
    {/* Optional: Another floating accent shape on the right */}
    <motion.div
      className="absolute right-0 bottom-0 w-24 h-24 bg-white/20 rounded-full blur-2xl z-0"
      initial={{ scale: 0.7, opacity: 0.4, x: 30, y: 30 }}
      animate={{
        scale: [0.7, 1.08, 0.9, 0.7],
        opacity: [0.4, 0.56, 0.37, 0.4],
        x: [30, 6, 24, 30],
        y: [30, 10, 26, 30],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
  </section>
);

export default WhySection;
