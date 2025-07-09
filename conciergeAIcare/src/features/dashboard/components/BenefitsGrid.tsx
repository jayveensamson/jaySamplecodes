import React from "react";
import { motion } from "framer-motion";
import benefit1 from "../../../assets/Untitled design.png";
import benefit2 from "../../../assets/Untitled design (1).png";
import benefit3 from "../../../assets/Untitled design (2).png";
import benefit4 from "../../../assets/Untitled design (3).png";
import benefit5 from "../../../assets/Untitled design (4).png";

const benefits = [
  {
    img: benefit1,
    title: "24/7 Access to Your Physician",
    desc: "Get immediate, around-the-clock access to your personal physician anytime you need expert medical advice or care—no more waiting.",
  },
  {
    img: benefit2,
    title: "Personalized Care Plans That Fits You",
    desc: "Receive customized health plans tailored specifically to your unique needs, lifestyle, and goals for better, more effective care.",
  },
  {
    img: benefit3,
    title: "Proactive Health Monitoring and Prevention",
    desc: "Benefit from continuous health tracking and early intervention strategies designed to prevent illness before it starts.",
  },
  {
    img: benefit4,
    title: "Stay Ahead of Health Issues",
    desc: "Identify potential health concerns early with regular check-ins and personalized guidance to maintain your wellness.",
  },
  {
    img: benefit5,
    title: "One Provider Who Coordinates All Your Care",
    desc: "Enjoy seamless, coordinated healthcare with a single provider managing all aspects of your medical needs for peace of mind.",
  },
];

export default function BenefitsGrid() {
  return (
    <section
      id="benefits"
      className="relative w-full max-w-7xl mx-auto px-2 sm:px-6 py-10 z-10"
    >
      {/* Decorative blue shimmer accent */}
      <motion.div
        className="absolute -top-12 left-0 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-70 pointer-events-none z-0"
        animate={{
          x: [0, 30, -10, 0],
          y: [0, 16, -8, 0],
          scale: [1, 1.15, 0.92, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Top row: 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.slice(0, 3).map((b, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              bounce: 0.22,
              duration: 0.75,
              delay: idx * 0.1,
            }}
            className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center text-center gap-4 relative z-10"
            whileHover={{
              scale: 1.055,
              boxShadow: "0px 6px 36px 0px #60a5fa55",
              transition: { type: "spring", stiffness: 300, damping: 18 },
            }}
            whileTap={{
              scale: 0.98,
              boxShadow: "0px 4px 24px 0px #60a5fa33",
            }}
          >
            <motion.img
              src={b.img}
              className="w-32 h-40 sm:w-40 sm:h-48 rounded-2xl object-cover mx-auto shadow-lg"
              whileHover={{
                scale: 1.08,
                y: -6,
                boxShadow: "0 8px 36px 0 #60a5fabb",
              }}
              transition={{ type: "spring", stiffness: 250 }}
              alt={b.title}
            />
            <div className="text-2xl font-bold font-PlusJakarta text-slate-900">
              {b.title}
            </div>
            <div className="text-gray-500 text-base font-normal font-Hind">
              {b.desc}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom row: 2 cards, centered */}
      <div
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center"
        style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}
      >
        {benefits.slice(3).map((b, idx) => (
          <motion.div
            key={idx + 3}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              bounce: 0.22,
              duration: 0.75,
              delay: (idx + 3) * 0.1,
            }}
            className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center text-center gap-4 relative z-10"
            whileHover={{
              scale: 1.055,
              boxShadow: "0px 6px 36px 0px #60a5fa55",
              transition: { type: "spring", stiffness: 300, damping: 18 },
            }}
            whileTap={{
              scale: 0.98,
              boxShadow: "0px 4px 24px 0px #60a5fa33",
            }}
          >
            <motion.img
              src={b.img}
              className="w-32 h-40 sm:w-40 sm:h-48 rounded-2xl object-cover mx-auto shadow-lg"
              whileHover={{
                scale: 1.08,
                y: -6,
                boxShadow: "0 8px 36px 0 #60a5fabb",
              }}
              transition={{ type: "spring", stiffness: 250 }}
              alt={b.title}
            />
            <div className="text-2xl font-bold font-PlusJakarta text-slate-900">
              {b.title}
            </div>
            <div className="text-gray-500 text-base font-normal font-Hind">
              {b.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
