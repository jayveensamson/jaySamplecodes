import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: 50,
    desc: "Basic Concierge Care Subscription package",
    features: [
      "Annual personalized health assessment",
      "24/7 access to your physician via messaging",
      "Customized care plan tailored to your needs",
      "Basic preventive health advice and reminders",
      "Coordination of specialist referrals",
      "Access to AI-powered medical calculator for quick health insights",
    ],
    button: "bg-white text-[#181F2A] hover:bg-slate-200",
  },
  {
    name: "Premium",
    price: 100,
    desc: "Premium Concierge Care Subscription package",
    features: [
      "Unlimited phone and video consultations",
      "Quarterly health check-ins and progress reviews",
      "Advanced health monitoring and early detection",
      "Priority scheduling for in-person visits",
      "Personalized wellness coaching",
      "AI-driven calorie calculator to help manage nutrition and weight goals",
    ],
    extra: "Includes everything in the Basic Plan, plus:",
    button: "bg-amber-400 text-[#181F2A] hover:bg-amber-300",
    badge: "Best Value",
  },
  {
    name: "Elite",
    price: 200,
    desc: "Elite Concierge Care Subscription package",
    features: [
      "Same-day or next-day in-person visits",
      "Comprehensive annual physical exams with lab tests",
      "Chronic condition management and medication review",
      "Access to exclusive health and lifestyle resources",
      "Dedicated care coordinator for seamless management",
      "Enhanced AI tools for personalized health analytics and meal planning support",
    ],
    extra: "Includes everything in the Premium Plan, plus:",
    button: "bg-white text-[#181F2A] hover:bg-slate-200",
  },
];

// Animated price count up hook
function useAnimatedCount(to: number, inView: boolean, duration = 1.2) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = Math.min((now - startTime) / (duration * 1000), 1);
      setCount(Math.floor(elapsed * to));
      if (elapsed < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return count;
}

const PricingSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="pricing"
      className="w-full bg-[#6A768A] py-16 px-2 sm:px-6 flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-white text-2xl font-Hind uppercase font-semibold tracking-wider mb-2">
            Plans & Pricing
          </h2>
        </div>
        <motion.div
          ref={ref}
          className="relative bg-[#181F2A] rounded-[48px] p-6 md:p-14 mt-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, type: "spring" }}
        >
          {/* Animated badge */}
          <motion.div
            className="absolute left-1/2 -top-7 transform -translate-x-1/2 z-10"
            initial={{ y: -18, opacity: 0, scale: 0.92 }}
            animate={inView ? { y: 0, opacity: 1, scale: 1.08 } : {}}
            transition={{ type: "spring", duration: 0.7, delay: 0.3 }}
          >
            <span className="bg-white text-[#181F2A] px-6 py-2 rounded-full shadow font-Hind text-base font-semibold border border-[#eaeaea] whitespace-nowrap">
              Best Concierge Plan Available
            </span>
          </motion.div>

          {/* Pricing cards */}
          <div className="relative flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12 px-4">
            {plans.map((plan, i) => {
              const priceCount = useAnimatedCount(plan.price, inView, 1.3);

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 60, scale: 0.96 }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 60, scale: 0.96 }
                  }
                  transition={{
                    delay: i * 0.12,
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.82,
                  }}
                  className={`relative flex-1 max-w-md flex flex-col items-center px-6 py-10 md:py-8 rounded-3xl transition shadow-lg
                    ${
                      i === 1
                        ? "z-20 scale-105 md:scale-110 bg-amber-400/30 ring-4 ring-amber-300/30 shadow-amber-300/30"
                        : "z-10"
                    }
                    `}
                  whileHover={{
                    scale: 1.055,
                    boxShadow:
                      i === 1
                        ? "0px 12px 60px 0px #fbbf2477"
                        : "0px 6px 28px 0px #60a5fa44",
                  }}
                >
                  {/* Premium background sparkle */}
                  {i === 1 && (
                    <motion.div
                      className="absolute -left-8 -top-8 w-32 h-32 rounded-full bg-amber-200 opacity-40 blur-3xl z-0"
                      animate={{ scale: [1, 1.13, 1], y: [0, 10, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                  {/* Badge */}
                  {plan.badge && (
                    <motion.div
                      initial={{ scale: 0.88, opacity: 0 }}
                      animate={inView ? { scale: 1.1, opacity: 1 } : {}}
                      transition={{ type: "spring", delay: 0.2 + i * 0.05 }}
                      className="absolute right-5 -top-7 bg-amber-400 text-[#181F2A] px-5 py-1.5 rounded-full shadow font-bold font-PlusJakarta text-sm z-10 border border-amber-300"
                    >
                      {plan.badge}
                    </motion.div>
                  )}

                  <div className="self-start w-full">
                    <div
                      className={`text-2xl font-PlusJakarta font-semibold mb-1 ${
                        i === 1 ? "text-[#181F2A]" : "text-white"
                      }`}
                    >
                      {plan.name}
                    </div>
                    <div
                      className={`font-bold text-sm mb-2 ${
                        i === 1 ? "text-[#181F2A]" : "text-white"
                      }`}
                    >
                      {plan.desc}
                    </div>
                    <div className="flex items-end mb-3">
                      <span
                        className={`font-bold text-6xl tabular-nums`}
                        style={{
                          color: i === 1 ? "#181F2A" : "white",
                          minWidth: "95px",
                          display: "inline-block",
                          textAlign: "right",
                        }}
                      >
                        ${priceCount}
                      </span>
                      <span
                        className={`ml-1 font-Hind text-base ${
                          i === 1 ? "text-[#181F2A]" : "text-white"
                        }`}
                      >
                        /per month
                      </span>
                    </div>
                  </div>

                  <hr
                    className={`w-full my-4 ${
                      i === 1 ? "border-[#181F2A]/20" : "border-white/30"
                    }`}
                  />

                  <div className="self-start w-full mb-4">
                    {plan.extra && (
                      <div
                        className={`font-bold text-sm mb-1 ${
                          i === 1 ? "text-[#181F2A]" : "text-white"
                        }`}
                      >
                        {plan.extra}
                      </div>
                    )}
                    <ul
                      className={`${
                        i === 1 ? "text-[#181F2A]" : "text-white"
                      } text-sm mt-2 font-Hind list-disc ml-5 space-y-1`}
                    >
                      {plan.features.map((f, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 14 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: inView ? 0.55 + idx * 0.06 + i * 0.05 : 0,
                            type: "spring",
                            stiffness: 110,
                            damping: 15,
                          }}
                          viewport={{ once: true, amount: 0.4 }}
                        >
                          {f}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    onClick={() =>
                      window.dispatchEvent(
                        new CustomEvent("openModal", { detail: "loginModal" })
                      )
                    }
                    className={`mt-auto w-full py-3 rounded-full font-bold text-lg font-PlusJakarta transition 
                    ${plan.button}`}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.04 }}
                  >
                    Choose
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
