import React from "react";
import fbIcon from "../../../assets/facebook.svg";
import twitterIcon from "../../../assets/twitter.svg";
import linkedinIcon from "../../../assets/linkedin.svg";

const Footer: React.FC = () => (
  <footer
    id="footer"
    className="w-full bg-[#6B7587] pt-36 md:pt-40 pb-8 px-4 sm:px-10"
  >
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-6 justify-between">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-white text-lg md:text-xl font-Hind font-medium max-w-md mb-6">
            Skip the delays, cut the red tape, and get expert care when you need
            it most. With concierge medicine, you’re not just another
            patient—you’re a priority.
          </p>
          <a
            href="/contactus"
            className="inline-flex items-center gap-1 bg-[#878FA2] text-white rounded-[30px] px-8 py-3 text-lg font-semibold font-Hind shadow hover:bg-[#6B7587] transition"
          >
            Contact Us
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex-1 flex flex-col sm:flex-row gap-12 md:gap-20">
        <div>
          <div className="uppercase text-xs font-semibold font-Hind tracking-wider text-white mb-3">
            Useful Links
          </div>
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="#"
                className="opacity-60 text-white text-sm font-medium font-Hind leading-snug"
              >
                Concierge Care
              </a>
            </li>
            <li>
              <a
                href="#"
                className="opacity-60 text-white text-sm font-medium font-Hind leading-snug"
              >
                Partner Doctors
              </a>
            </li>
            <li>
              <a
                href="#"
                className="opacity-60 text-white text-sm font-medium font-Hind leading-snug"
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="opacity-60 text-white text-sm font-medium font-Hind leading-snug"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="opacity-60 text-white text-sm font-medium font-Hind leading-snug"
              >
                Sitemap
              </a>
            </li>
            <li>
              <a
                href="#"
                className="opacity-60 text-white text-sm font-medium font-Hind leading-snug"
              >
                News
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="uppercase text-xs font-semibold font-Hind tracking-wider text-white mb-3">
            Company
          </div>
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="#"
                className="opacity-60 text-white text-sm font-medium font-Hind leading-snug"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="opacity-60 text-white text-sm font-medium font-Hind leading-snug"
              >
                Meet The Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium font-Hind leading-snug"
              >
                How it Works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="opacity-60 text-white text-sm font-medium font-Hind leading-snug"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="opacity-60 text-white text-sm font-medium font-Hind leading-snug"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="opacity-60 text-white text-sm font-medium font-Hind leading-snug"
              >
                Blogs
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="uppercase text-xs font-semibold font-Hind tracking-wider text-white mb-3">
          Get Contact
        </div>
        <div className="opacity-60 text-white text-sm font-medium font-Hind leading-snug mb-2">
          Lorem ipsum dolor sit amet, Suite 400
        </div>
        <a
          href="mailto:Support@conciergecare.com"
          className="text-indigo-200 text-sm font-medium font-Hind underline leading-snug mb-1"
        >
          Support@conciergecare.com
        </a>
        <div className="opacity-60 text-white text-sm font-medium font-Hind leading-snug mb-3">
          (+1 234 567 890)
        </div>
        <div className="flex gap-4 mt-2">
          <a href="#" className="opacity-60 hover:opacity-100">
            <img src={fbIcon} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" className="opacity-60 hover:opacity-100">
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white text-sm">
      <div>
        <span className="font-Hind">Copyright © 2025 </span>
        <span className="font-bold text-amber-400 font-Hind">
          Concierge Care
        </span>
        <span className="font-Hind">. All Rights Reserved.</span>
      </div>
      <div className="flex gap-3 items-center">
        <a href="#" className="opacity-60 hover:opacity-100 font-Hind">
          Privacy Policy
        </a>
        <span className="w-px h-5 bg-gray-200 opacity-10"></span>
        <a href="#" className="opacity-60 hover:opacity-100 font-Hind">
          Terms and Conditions
        </a>
        <span className="w-px h-5 bg-gray-200 opacity-10"></span>
        <a href="#" className="opacity-60 hover:opacity-100 font-Hind">
          Security
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
