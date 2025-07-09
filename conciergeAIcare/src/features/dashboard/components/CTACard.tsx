import React, { useEffect, useRef } from "react";
import doc1 from "../../../assets/Choose Your Subscription (8).png";
import doc2 from "../../../assets/Choose Your Subscription (9).png";

const CTACard: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating animation for CTA
    if (ctaRef.current && ctaRef.current.animate) {
      ctaRef.current.animate(
        [
          { transform: "translateY(0px)" },
          { transform: "translateY(-12px)" },
          { transform: "translateY(0px)" },
        ],
        { duration: 3600, direction: "alternate", iterations: Infinity }
      );
    }
  }, []);

  return (
    <div
      id="ctaCard"
      ref={ctaRef}
      className="relative w-full flex justify-center -mb-28 z-10"
    >
      <div className="max-w-6xl w-full bg-[#181F2A] rounded-[42px] flex flex-col md:flex-row items-center px-8 py-8 shadow-lg gap-6 md:gap-0">
        <div className="flex-1 flex flex-col justify-center py-4">
          <div className="uppercase text-sm font-Hind text-white/70 mb-2">
            Join Us
          </div>
          <div className="text-3xl md:text-4xl font-bold font-PlusJakarta text-white mb-3 leading-snug">
            Join Us and Take
            <br />
            Control of Your Health
          </div>
          <div className="font-Hind text-white/80 text-base md:text-lg leading-snug">
            Experience personalized, priority access to healthcare with our
            concierge medicine membership. Enjoy same-day appointments, direct
            communication with your physician, and care that fits your
            lifestyle. Get started today and feel the difference.
          </div>
        </div>
        <div className="hidden sm:flex flex-shrink-0 items-end gap-4 mt-6 md:mt-0">
          <img
            src={doc1}
            alt="Doctor 1"
            className="h-48 md:h-60 object-contain"
          />
          <img
            src={doc2}
            alt="Doctor 2"
            className="-ml-20 h-48 md:h-60 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CTACard;
