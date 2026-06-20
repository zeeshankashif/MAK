/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ArrowUpRight, TrendingUp, Target, Mail } from "lucide-react";
import { CAPABILITIES } from "../data";

interface CapabilitiesProps {
  onCapabilityClick?: (capTitle: string) => void;
}

export default function Capabilities({ onCapabilityClick }: CapabilitiesProps) {
  // Filters for Bento Grid: "ALL" | "MARKETING" | "DEVELOPMENT"
  const [filter, setFilter] = useState<"ALL" | "MARKETING" | "DEVELOPMENT">("ALL");

  const filteredCapabilities = CAPABILITIES.filter((cap) => {
    if (filter === "ALL") return true;
    
    const marketingIds = ["02", "05", "06", "08", "09"];
    const devIds = ["01", "03", "04", "07", "10", "11", "12"];
    
    if (filter === "MARKETING") {
      return marketingIds.includes(cap.id);
    } else {
      return devIds.includes(cap.id);
    }
  });

  return (
    <section className="relative px-6 py-24 bg-[#f1f1f1] border-t border-[#e5e5e5]" id="capabilities-section">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================================================= */}
        {/* SEMANTIC ANCHOR 1: DEVELOPMENT SERVICES SECTION & DIMENTIONAL BENTO GRID */}
        {/* ========================================================================= */}
        <div id="development" className="scroll-mt-24 mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-sans text-[12px] text-[#181818] tracking-[0.2em] uppercase font-bold">02 SYSTEM VIEW</span>
            <span className="h-[1px] bg-[#e5e5e5] flex-grow"></span>
          </div>
          <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#181818] uppercase">
            DEVELOPMENT SERVICES
          </h2>
          <p className="font-sans text-sm text-[#8A8A8A] max-w-xl mt-3 uppercase leading-relaxed font-semibold">
            We render absolute programmatic strength. High-performance custom enterprise architectures, decoupled headless storefront systems, and secured local-first databases operating with supreme caching.
          </p>
        </div>

        {/* High-Contrast Interactive Filters */}
        <div className="flex flex-wrap items-center gap-4 border-b border-[#e5e5e5] pb-6 mb-12" id="capabilities-filter-bar">
          <span className="font-mono text-xs text-[#8A8A8A] tracking-[0.15em] uppercase mr-4">
            FILTER ARCHITECTURE:
          </span>
          <div className="flex items-center gap-2">
            {(["ALL", "MARKETING", "DEVELOPMENT"] as const).map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-5 py-2 font-mono text-[10px] tracking-widest uppercase transition-all duration-350 cursor-pointer ${
                  filter === opt
                    ? "bg-[#181818] text-[#94fa50] font-bold"
                    : "bg-[#ffffff] text-[#181818] hover:bg-[#181818] hover:text-white border border-[#e5e5e5]"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="ml-auto font-mono text-[10px] text-[#8A8A8A] hidden md:block">
            SHOWING: {filteredCapabilities.length} / 12 PIPELINE MODULES
          </div>
        </div>

        {/* CSS Bento Asymmetric Data Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
          id="bento-capabilities-grid"
        >
          {filteredCapabilities.map((cap) => (
            <div
              key={cap.id}
              onClick={() => onCapabilityClick?.(cap.title)}
              className="group relative bg-[#ffffff] hover:bg-[#94fa50] border border-[#e5e5e5] hover:border-[#94fa50] p-8 flex flex-col justify-between min-h-[240px] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Top Row: Index Tag & Category */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#181818] group-hover:text-[#181818] tracking-widest transition-colors duration-300">
                  [{cap.id}] {cap.tag}
                </span>
                <span className="w-2 h-2 bg-[#FF3333]/15 group-hover:bg-[#181818] transition-colors duration-300 font-bold"></span>
              </div>

              {/* Middle Row: Capability Title & Description */}
              <div className="my-6">
                <h3 className="font-sans text-xl font-black tracking-tight text-[#181818] group-hover:text-[#181818] uppercase transition-colors duration-300">
                  {cap.title}
                </h3>
                <p className="font-sans text-xs text-[#8A8A8A] group-hover:text-[#181818] leading-relaxed mt-2 uppercase transition-colors duration-300 font-semibold text-left">
                  {cap.description}
                </p>
              </div>

              {/* Bottom Row: Accent & Action Vector */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-100 group-hover:border-[#181818]/20 transition-colors mt-auto">
                <span className="font-mono text-[9px] text-[#8A8A8A] group-hover:text-[#181818] tracking-[0.2em] transition-colors">
                  VIEW INTAKE DETAILS
                </span>
                
                {/* Arrow rotating fluidly 45 degrees and flashing black on hover */}
                <div className="text-[#181818] group-hover:text-[#181818] group-hover:rotate-45 transform transition-all duration-300">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* SEMANTIC ANCHOR 2: MARKETING SOLUTIONS SECTION */}
        {/* ========================================================================= */}
        <div id="marketing" className="scroll-mt-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-sans text-[12px] text-[#181818] tracking-[0.2em] uppercase font-bold">03 SYSTEM VIEW</span>
            <span className="h-[1px] bg-[#e5e5e5] flex-grow"></span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            <div className="lg:col-span-6">
              <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#181818] uppercase">
                MARKETING SOLUTIONS
              </h2>
              <p className="font-sans text-sm text-[#8A8A8A] max-w-xl mt-3 uppercase leading-relaxed font-semibold">
                We design high-frequency customer acquisition pipelines. We strip away standard tracking blocks, re-engineering traffic coordinates into precise first-party server-side telemetry.
              </p>
            </div>

            {/* Pillars of MAK Acquisition Framework */}
            <div className="lg:col-span-6 space-y-4" id="marketing-pillars">
              <div className="bg-white border border-[#e5e5e5] p-5 flex gap-4 transition-colors hover:border-[#94fa50]">
                <div className="text-[#94fa50] mt-1"><Target size={18} /></div>
                <div>
                  <h4 className="font-sans font-bold text-xs tracking-tight text-[#181818] uppercase">FIRST PARTY USER CONVERSION</h4>
                  <p className="font-sans text-[11px] text-zinc-500 uppercase mt-1">Direct server-side API integration bypasses standard customer browser script blocks entirely.</p>
                </div>
              </div>

              <div className="bg-white border border-[#e5e5e5] p-5 flex gap-4 transition-colors hover:border-[#94fa50]">
                <div className="text-[#94fa50] mt-1"><TrendingUp size={18} /></div>
                <div>
                  <h4 className="font-sans font-bold text-xs tracking-tight text-[#181818] uppercase">ALGORITHMIC INTENT HARVESTING</h4>
                  <p className="font-sans text-[11px] text-zinc-500 uppercase mt-1">High-gravity semantic clustering directs search queries specifically into custom pre-hydrated destination funnels.</p>
                </div>
              </div>

              <div className="bg-white border border-[#e5e5e5] p-5 flex gap-4 transition-colors hover:border-[#94fa50]">
                <div className="text-[#94fa50] mt-1"><Mail size={18} /></div>
                <div>
                  <h4 className="font-sans font-bold text-xs tracking-tight text-[#181818] uppercase">HIGH REPUTATION RETENTION LOOPS</h4>
                  <p className="font-sans text-[11px] text-zinc-500 uppercase mt-1">We configure dedicated SMTP servers to route transaction-level lifecycles with near-perfect domain ratings.</p>
                </div>
              </div>
            </div>
          </div>

          {/* DRIVING REAL RESULTS PANEL */}
          <div className="col-span-12 mt-8 bg-white border border-[#e5e5e5] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 relative select-none">
            {/* Top outline corner accent */}
            <div className="absolute top-0 left-0 w-3 h-3 bg-[#181818]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#94fa50]" />

            {/* Left Column: Heading */}
            <div className="w-full lg:w-1/4 text-center lg:text-left">
              <h3 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-[#181818] uppercase leading-none">
                DRIVING <br className="hidden lg:block"/> REAL RESULTS
              </h3>
              <p className="font-mono text-[9px] text-[#94fa50] tracking-widest uppercase font-bold mt-2">
                BENCHMARK METRIC SYSTEM SEC
              </p>
            </div>

            {/* Middle Column: 3 Circular stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12 flex-grow">
              
              {/* Stat 1: 3% */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full border-2 border-[#181818]/10 group-hover:border-[#94fa50] transition-colors duration-300 flex flex-col items-center justify-center relative bg-[#f1f1f1]/50">
                  <span className="font-sans text-2xl font-black tracking-tighter text-[#181818]">3%</span>
                  <div className="text-[#94fa50] group-hover:text-[#181818] transition-colors duration-300 mt-0.5">
                    <ArrowUpRight size={14} className="rotate-[-45deg]" />
                  </div>
                </div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mt-3 font-bold">Of Google advertisers</span>
              </div>

              {/* Stat 2: 100% */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full border-2 border-[#181818]/10 group-hover:border-[#94fa50] transition-colors duration-300 flex flex-col items-center justify-center relative bg-[#f1f1f1]/50">
                  <span className="font-sans text-2xl font-black tracking-tighter text-[#181818]">100%</span>
                  <div className="text-[#94fa50] group-hover:text-[#181818] transition-colors duration-300 mt-0.5">
                    <ArrowUpRight size={14} className="rotate-[-45deg]" />
                  </div>
                </div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mt-3 font-bold">Growth clients</span>
              </div>

              {/* Stat 3: 15m */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full border-2 border-[#181818]/10 group-hover:border-[#94fa50] transition-colors duration-300 flex flex-col items-center justify-center relative bg-[#f1f1f1]/50">
                  <span className="font-sans text-2xl font-black tracking-tighter text-[#181818]">15m</span>
                  <div className="text-[#94fa50] group-hover:text-[#181818] transition-colors duration-300 mt-0.5">
                    <ArrowUpRight size={14} className="rotate-[-45deg]" />
                  </div>
                </div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mt-3 font-bold">Managed budgets</span>
              </div>

            </div>

            {/* Right Column: Lead generator highlight block */}
            <div className="w-full lg:w-[280px] bg-[#181818] border border-[#181818] p-6 flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-300">
              <span className="absolute top-0 left-0 w-2 h-2 bg-[#94fa50]" />
              <div className="font-sans text-3xl font-black text-white tracking-tight mb-1">
                282,000+
              </div>
              <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider mb-4 leading-normal">
                Leads generated so far...
              </p>
              
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    const rect = element.getBoundingClientRect();
                    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
                    const targetY = rect.top + scrollOffset - 80;
                    window.scrollTo({
                      top: targetY,
                      behavior: "smooth"
                    });
                  }
                }}
                className="w-full bg-[#94fa50] hover:bg-white text-[#181818] font-mono text-[10px] tracking-widest font-black uppercase py-2.5 transition-all duration-300 border border-[#94fa50] hover:border-white cursor-pointer flex items-center justify-center gap-1"
              >
                CONTACT US
                <ArrowUpRight size={12} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}