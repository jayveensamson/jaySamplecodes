import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import clipboard from "../../../assets/Choose Your Subscription (5).png";
import globe from "../../../assets/Untitled design (5).png";
import doctor from "../../../assets/Choose Your Subscription (4).png";

const HeroSection: React.FC = () => {
  const typerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text =
      "Explore a smarter way to access your doctor with our concierge medicine membership. Enjoy consistent care, same-day visits, and a direct line to your physician—without the usual delays.";
    let i = 0;
    let timer: NodeJS.Timeout;

    function typeIt() {
      if (typerRef.current) {
        typerRef.current.innerHTML += text.charAt(i);
        i++;
        if (i < text.length) {
          timer = setTimeout(typeIt, 18);
        }
      }
    }
    if (typerRef.current) {
      typerRef.current.innerHTML = "";
      typeIt();
    }
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col items-center justify-center px-2 sm:px-6 pt-14 pb-20 bg-gradient-to-b from-[#f0f4ff] to-white overflow-hidden"
      style={{ minHeight: "90vh" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full flex flex-col items-center justify-center mx-auto z-10"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="font-PlusJakarta text-4xl sm:text-5xl md:text-6xl font-bold text-[#222] leading-tight mt-2 mb-3 relative z-10">
            <span>
              A{" "}
              <span className="relative inline-block px-3 font-extrabold">
                {/* Highlight background */}
                <span
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-100 opacity-90 blur-[2.5px] pointer-events-none"
                  aria-hidden="true"
                ></span>
                <span className="relative z-10 text-[#1a253f]">
                  Smarter
                  {/* Sparkle/star effect */}
                  <motion.span
                    className="absolute -right-4 -top-4"
                    animate={{
                      rotate: [0, 20, -15, 0],
                      scale: [1, 1.13, 1, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.2,
                      ease: "easeInOut",
                    }}
                  >
                    <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
                      <g>
                        <motion.circle
                          cx={12}
                          cy={12}
                          r={7}
                          fill="#fde68a"
                          animate={{
                            scale: [1, 1.16, 1],
                            opacity: [1, 0.82, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.path
                          d="M12 2v3M12 19v3M2 12h3M19 12h3M5.1 5.1l2.1 2.1M16.8 16.8l2.1 2.1M16.8 7.2l2.1-2.1M5.1 18.9l2.1-2.1"
                          stroke="#fbbf24"
                          strokeWidth={1.4}
                          strokeLinecap="round"
                        />
                      </g>
                    </svg>
                  </motion.span>
                </span>
                {/* Glossy Shine */}
                <span
                  className="pointer-events-none absolute top-0 left-0 w-full h-full rounded-xl"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(120deg,rgba(255,255,255,0.37) 25%,rgba(255,255,255,0.06) 65%)",
                    WebkitMaskImage:
                      "linear-gradient(90deg,transparent 0%,white 45%,white 55%,transparent 100%)",
                    maskImage:
                      "linear-gradient(90deg,transparent 0%,white 45%,white 55%,transparent 100%)",
                  }}
                ></span>
              </span>{" "}
              Way
              <br /> To Access Your Doctor
            </span>
          </h1>
          <div
            id="hero-typer"
            ref={typerRef}
            className="text-base sm:text-lg md:text-xl font-PlusJakarta font-normal text-[#222] opacity-80 mb-6 max-w-2xl mx-auto h-[44px] sm:h-[40px]"
          />
        </motion.div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 mt-8 z-10">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center w-full max-w-xs md:max-w-none md:w-auto"
          >
            <motion.img
              src={clipboard}
              alt="Medical clipboard"
              className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-[22px] sm:rounded-[36px] md:rounded-[50px] object-cover mb-4 shadow-xl shadow-amber-200/40"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 6px 40px 0px #fbbf24aa",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                boxShadow:
                  "0 4px 32px 0 rgba(251, 191, 36, 0.15), 0 1.5px 10px 0 rgba(0,0,0,0.12)",
              }}
            />
            <div className="bg-gray-100 rounded-2xl w-full max-w-[250px] p-4 sm:p-6 flex flex-col items-center shadow-md">
              <motion.div
                className="text-3xl sm:text-4xl font-bold font-Hind text-slate-900 mb-2"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.2 }}
              >
                95%
              </motion.div>
              <div className="text-blue-950 text-sm sm:text-base font-normal font-Hind leading-snug text-center">
                of users say the service improves their peace of mind about
                their health.
              </div>
            </div>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col items-center w-full max-w-xs md:max-w-none md:w-auto"
          >
            <motion.img
              src={globe}
              alt="Stethoscope globe"
              className="w-40 h-28 sm:w-52 sm:h-36 md:w-64 md:h-44 rounded-2xl object-cover mb-4 md:mb-0 shadow-xl shadow-blue-200/30"
              whileHover={{
                rotate: 2,
                scale: 1.03,
                boxShadow: "0px 6px 40px 0px #60a5facc",
              }}
              transition={{ type: "spring", stiffness: 180 }}
              style={{
                boxShadow:
                  "0 4px 28px 0 rgba(96, 165, 250, 0.16), 0 1.5px 10px 0 rgba(0,0,0,0.11)",
              }}
            />
          </motion.div>
          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col items-center w-full max-w-xs md:max-w-none md:w-auto"
          >
            <motion.img
              src={doctor}
              alt="Doctor"
              className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-[22px] sm:rounded-[36px] md:rounded-[50px] object-cover mb-4 shadow-xl shadow-rose-200/40"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 6px 40px 0px #fda4af88",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                boxShadow:
                  "0 4px 32px 0 rgba(253, 164, 175, 0.15), 0 1.5px 10px 0 rgba(0,0,0,0.12)",
              }}
            />
            <div className="bg-rose-200 rounded-2xl w-full max-w-[250px] p-4 sm:p-6 flex flex-col items-center shadow-md">
              <motion.div
                className="text-3xl sm:text-4xl font-bold font-Hind text-slate-900 mb-2"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.35 }}
              >
                87%
              </motion.div>
              <div className="text-slate-900 text-sm sm:text-base font-normal font-Hind leading-snug text-center">
                of patients feel more in control of their health journey.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Cue */}
        <motion.div
          className="mt-12 flex justify-center z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-10 h-16 rounded-full border-2 border-[#e0dcdc] flex flex-col items-center justify-start bg-white/60 backdrop-blur"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0 80 Q720 0 1440 80 V90 H0 V80Z"
            fill="#fffde4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 2 }}
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
