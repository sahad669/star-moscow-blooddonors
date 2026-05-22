import React from "react";
// import { Facebook, Instagram, Heart } from "lucide-react";
import { FaFacebookF, FaInstagram, FaHeartbeat } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-red-100 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100">
           <FaHeartbeat size={18} />
          </span>

          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-slate-900">
              Star Moscow Blood Donors
            </p>
            <p className="text-xs text-slate-500">
              Donate blood, save lives
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/g/1CntiYEPu6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-600 ring-1 ring-slate-200 transition hover:bg-red-50 hover:text-red-600 hover:ring-red-100"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://www.instagram.com/starmoscow_pottachira?igsh=MWNrNm4ycXlmM29kcw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-600 ring-1 ring-slate-200 transition hover:bg-red-50 hover:text-red-600 hover:ring-red-100"
            >
               <FaInstagram size={18} />
            </a>
          </div>

          <p className="text-center text-sm text-slate-500 sm:text-right">
            © 2026 Star Moscow Blood Donors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;