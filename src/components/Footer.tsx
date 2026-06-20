/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PARTNERS, SOLUTIONS_COLUMN, ABOUT_COLUMN } from "../data";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full bg-[#181818] text-white border-t border-zinc-805" id="foot-root">
      
      {/* 1. TRUST BANNER SEGMENT: "A PARTNER, NOT A VENDOR" & monochrome hover-able logos */}
      <div className="border-b border-zinc-800 py-8 px-6" id="foot-trust-banner">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="font-sans font-black tracking-wider text-sm text-[#8A8A8A] uppercase">
            A PARTNER, <span className="text-white">NOT A VENDOR.</span>
          </div>

          {/* Monochrome partner badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10" id="partner-logos-stack">
            {PARTNERS.map((partner) => (
              <span
                key={partner.id}
                className="font-mono text-[10px] text-zinc-500 hover:text-white transition-colors duration-200 uppercase tracking-widest cursor-default select-none border border-zinc-800 px-3 py-1 bg-zinc-900/60"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </div>


      {/* 2. AUTHORITY STATEMENT & SOLUTIONS MATRIX GRID */}
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-12 gap-12" id="foot-matrix-layout">
        
        {/* Scale Authority Segment */}
        <div className="md:col-span-5 flex flex-col gap-6" id="foot-authority-segment">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF3333]"></span>
            <span className="font-mono text-[9px] text-[#8A8A8A] tracking-[0.2em] uppercase">SCALE MATRIX</span>
          </div>
          <h4 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight uppercase">
            Team of over 450 experts delivering premier solutions globally.
          </h4>
          <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-sm">
            MAK Developers operates globally at the convergence point of advanced technology compilation, data funnel conversions, and corporate branding frameworks.
          </p>

          {/* Micro structural system node */}
          <div className="mt-4 p-4 border border-zinc-800 bg-zinc-900/30 max-w-xs font-mono text-[9px] text-zinc-500 uppercase tracking-widest leading-normal">
            IP_EGRESS: STABLE - SHUNT_SYS: LIVE
            <br />
            VERSION: 2026.06.MAK - PLATFORM: CLOUD_RUN
          </div>
        </div>

        {/* Column 1: Solutions Navigation Links */}
        <div className="md:col-span-3 md:col-start-7 flex flex-col gap-6" id="foot-solutions-links">
          <h5 className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.25em] border-b border-zinc-800 pb-2">
            {SOLUTIONS_COLUMN.title.toUpperCase()}
          </h5>
          <ul className="flex flex-col gap-2.5">
            {SOLUTIONS_COLUMN.items.map((item, id) => (
              <li key={id}>
                <a
                  href="#capabilities-section"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.toLowerCase().includes("development") || item.toLowerCase().includes("software")) {
                      onNavigate("development");
                    } else {
                      onNavigate("marketing");
                    }
                  }}
                  className="font-sans text-xs text-zinc-400 hover:text-[#94fa50] transition-colors duration-150 uppercase tracking-wider block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: About Navigation Links */}
        <div className="md:col-span-2 flex flex-col gap-6" id="foot-about-links">
          <h5 className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.25em] border-b border-zinc-800 pb-2">
            {ABOUT_COLUMN.title.toUpperCase()}
          </h5>
          <ul className="flex flex-col gap-2.5">
            {ABOUT_COLUMN.items.map((item, id) => (
              <li key={id}>
                <button
                  onClick={() => {
                    if (item.toLowerCase() === "contact") onNavigate("contact");
                    else if (item.toLowerCase() === "about" || item.toLowerCase() === "team") onNavigate("about");
                    else onNavigate("home");
                  }}
                  className="font-sans text-xs text-zinc-400 hover:text-[#94fa50] transition-colors duration-150 uppercase tracking-wider block text-left cursor-pointer"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>


      {/* 3. COPYRIGHT BAR: Pinned, clean microscopics */}
      <div className="border-t border-zinc-900 py-6 px-6 bg-black" id="foot-copyright-bar">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider">
            © 2026 MAK DEVELOPERS INC. ALL RIGHTS RESERVED. (STATION ID: ZEXAN)
          </div>

          <div className="flex gap-6 font-mono text-[9px] text-zinc-500 uppercase tracking-wider">
            <a href="#home" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span className="text-zinc-700">|</span>
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-zinc-700">|</span>
            <span className="text-[#94fa50] font-bold">UTC: {new Date().toISOString().substring(11, 19)}</span>
          </div>

        </div>
      </div>

    </footer>
  );
}
