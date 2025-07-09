import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import subImg1 from "../../../assets/Choose Your Subscription.png";
import subImg2 from "../../../assets/Choose Your Subscription (1).png";
import subImg3 from "../../../assets/Choose Your Subscription (2).png";

const infoItems = [
  {
    img: subImg1,
    title: "CHOOSE YOUR SUBSCRIPTION",
    desc: "Pick the plan that fits your health needs and get instant access to personalized, high-quality care.",
  },
  {
    img: subImg2,
    title: "CONNECT ANYTIME, ANYWHERE",
    desc: "Enjoy 24/7 direct access to your dedicated physician through phone, video, or messaging—no waiting rooms or delays.",
  },
  {
    img: subImg3,
    title: "GET PERSONALIZED, PROACTIVE CARE",
    desc: "Receive a customized care plan with ongoing health monitoring and coordinated care to keep you healthy and ahead of any issues.",
  },
];

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto px-2 sm:px-6 py-12"
      ref={ref}
    >
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Form */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-slate-900 text-4xl sm:text-5xl font-bold font-Hind mb-3"
          >
            Got a Question?
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center text-slate-900 text-xl sm:text-2xl font-semibold font-Hind mb-8"
          >
            Please provide us with some details so that we can set-up a call for
            you with our team!
          </motion.div>

          <form
            className="bg-white rounded-2xl shadow p-6 flex flex-col gap-6 font-Manrope relative overflow-hidden"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 2200);
              (e.target as HTMLFormElement).reset();
            }}
          >
            {/* Submission Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                submitted
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 z-10 rounded-2xl pointer-events-none"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">✓</div>
              <div className="text-xl text-slate-900 font-semibold mb-2">
                Submitted!
              </div>
              <div className="text-gray-600">We’ll get back to you soon.</div>
            </motion.div>

            {[
              { label: "Name", name: "name", type: "text", required: false },
              { label: "Email", name: "email", type: "email", required: true },
              { label: "Phone", name: "phone", type: "tel", required: true },
              {
                label: "Current Location",
                name: "location",
                type: "text",
                required: false,
              },
            ].map(({ label, name, type, required }, idx) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
                className="flex flex-col gap-1"
              >
                <label className="text-black text-lg font-bold leading-tight">
                  {label} {required && <span className="text-red-600">*</span>}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.03, borderColor: "#334155" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type={type}
                  name={name}
                  required={required}
                  className="w-full h-12 px-4 py-2 bg-white rounded-[10px] border border-black focus:outline-none"
                />
              </motion.div>
            ))}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full h-12 bg-slate-900 rounded-[10px] text-red-50 text-xl font-bold text-center hover:bg-slate-800 transition"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        {/* Info Blocks */}
        <div className="flex-1 flex flex-col gap-8 justify-center">
          {infoItems.map(({ img, title, desc }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 + idx * 0.15 }}
              className="flex items-start gap-6"
            >
              <motion.img
                src={img}
                alt={title}
                className="w-32 h-32 rounded-2xl object-cover flex-shrink-0"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
              <div>
                <div className="font-bold text-xl font-PlusJakarta text-slate-900 mb-1">
                  {title}
                </div>
                <div className="text-slate-900 text-base font-Hind">{desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
