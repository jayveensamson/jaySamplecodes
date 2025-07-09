import React, { useEffect, useRef } from "react";
import logo from "../../../assets/Concierge (5).png";

// PulseIcon unchanged...

const navLinks = [
  { name: "Home", href: "/dashboard", highlight: true },
  { name: "Concierge Medicine", href: "/concierge-plan" },
  { name: "About Us", href: "/about-us" },
  { name: "Mission Statement", href: "/our-mission" },
  { name: "FAQ", href: "/faqs" },
  { name: "Contact", href: "/contactus" },
];
const PulseIcon = () => (
  <svg
    className="w-6 h-6 text-blue-500 ml-1 animate-pulse"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <polyline points="2 12 5 12 7 19 11 3 14 12 18 12 22 12" />
  </svg>
);

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.classList.add("opacity-100", "translate-y-0");
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className="opacity-0 translate-y-[-18px] transition-all duration-700 w-full px-4 sm:px-8 pt-6 pb-3 flex flex-col md:flex-row items-center md:justify-between gap-4 bg-white shadow-lg sticky top-0 z-30"
      style={{
        fontFamily: "'Manrope', 'Hind', 'Plus Jakarta Sans', sans-serif",
        boxShadow: "0 2px 18px 0 rgba(53, 113, 206, 0.09)",
      }}
    >
      <div className="flex items-center gap-2 w-full md:w-auto">
        {/* Static Logo */}
        <span className="flex items-center select-none pointer-events-none">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-contain rounded-full bg-white"
            draggable={false}
            style={{ userSelect: "none" }}
          />
          <PulseIcon />
        </span>
        <span className="text-2xl md:text-3xl font-bold font-PlusJakarta text-blue-950 tracking-tight ml-2 select-none">
          Concierge Care
        </span>
      </div>
      <nav className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-7 w-full md:w-auto">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`
              nav-anim-link
              relative px-1 py-0.5
              ${
                link.highlight
                  ? "text-blue-700 font-bold"
                  : "text-slate-900 font-bold"
              }
              text-sm font-Hind transition-colors
              hover:text-blue-500 focus:text-blue-600
              duration-200
            `}
            tabIndex={0}
          >
            {link.name}
          </a>
        ))}
      </nav>
      <div className="flex gap-2 w-full md:w-auto justify-center md:justify-end">
        <button
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent("openModal", { detail: "loginModal" })
            )
          }
          className="px-5 py-2 rounded-full border border-blue-300 font-bold font-PlusJakarta text-blue-700 bg-white hover:bg-blue-50 hover:-translate-y-[2px] focus:bg-blue-100 transition-all duration-200 shadow-none transform active:scale-95"
          style={{ minWidth: 88 }}
        >
          Login
        </button>
        <button
          onClick={(e) => {
            // Quick pulse effect
            const target = e.currentTarget;
            target.classList.add("animate-pulse");
            setTimeout(() => target.classList.remove("animate-pulse"), 300);
            window.dispatchEvent(
              new CustomEvent("openModal", { detail: "signupModal" })
            );
          }}
          className="px-5 py-2 rounded-full font-bold font-PlusJakarta text-white bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-[2px] focus:bg-blue-800 focus:shadow-md transition-all duration-200 shadow-sm transform active:scale-95"
          style={{ minWidth: 98 }}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
