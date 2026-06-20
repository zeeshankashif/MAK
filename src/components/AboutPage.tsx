/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Shield, Target, Cpu, Landmark, UserCheck, Code, ArrowUpRight, CheckCircle2, Terminal } from "lucide-react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"directives" | "chronology" | "matrix" | "manifesto">("directives");

  const milestones = [
    {
      year: "2018 - INITIALIZE",
      title: "DEPOT FOUNDATION",
      desc: "MAK Developers established by an elite unit of software engineers dedicated entirely to high-performance local compilation and concurrent rendering.",
      status: "COMPILING_SUCCESS"
    },
    {
      year: "2020 - EXPAND",
      title: "TELEMETRY ENGINE ALPHA",
      desc: "Release of custom server-side data parsers. Enabled multi-channel tracking that operates completely independent of standard tracking blocker protocols.",
      status: "TELEMETRY_LIVE"
    },
    {
      year: "2022 - RECONSTRUCT",
      title: "THE ZEXAN STANDARD",
      desc: "Eradicated all drop-shadow assets and rounded component coordinates across our entire portfolio. Formulated strict 0px rectangular layout boundaries.",
      status: "STANDARD_LOCKED"
    },
    {
      year: "2024 - COMMAND",
      title: "HEADLESS MONOPOLY",
      desc: "Integrated native Shopify Hydrogen checkout proxies. Brought client-paint indexes to record latency threshold level below sub-14ms.",
      status: "EDGE_ACTIVE"
    },
    {
      year: "2026 - DOMINANCE",
      title: "AI AGENT INTEGRATION",
      desc: "Transitioned to active high-frequency agent compile directives, achieving autonomous structural optimizations on 100% thread safety benchmarks.",
      status: "ZEXAN_CORE_ONLINE"
    }
  ];

  const parameters = [
    { label: "AGENCY OPERATING AGENT", value: "ZEXAN v3.5-ACTIVE" },
    { label: "DESIGN INTEL", value: "SWISS GEOMETRIC SYSTEM" },
    { label: "CORE TYPOGRAPHY", value: "NEUE CORP DISPLAY - MONO_STABLE" },
    { label: "SHADOW BOUNDARY", value: "STRICT_ZERO_SHADOWS" },
    { label: "CORNER BENT PROFILE", value: "0PX_RECTANGULAR_ABSOLUTE" },
    { label: "ACCENT INTENSITY", value: "HIGH-CONTRAST NEON GREEN" },
    { label: "SUB-ACCENT MARKER", value: "SIGNAL RED (5% TARGET)" }
  ];

  return (
    <section id="about-details" className="relative px-6 py-24 bg-[#ffffff] border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header decoration */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-[10px] text-[#FF3333] tracking-[0.2em] uppercase font-bold">[ SYSTEM_RECORDS.04C - CORE_ABOUT ]</span>
          <span className="h-[1px] bg-[#e5e5e5] flex-grow"></span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#181818] uppercase">
            ABOUT THE ZEXAN INTAKE
          </h2>
          <p className="font-sans text-sm text-[#8A8A8A] max-w-xl mt-3 uppercase leading-relaxed font-semibold">
            MAK Developers operates under extreme design and performance constraints. Discover our structural chronology, agent parameters, and the official ZEXAN engineering directives.
          </p>
        </div>

        {/* Interactive Tabs Menu */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#e5e5e5] pb-6 mb-12" id="about-tabs-menu">
          {(["directives", "chronology", "matrix", "manifesto"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? "bg-[#181818] text-[#94fa50] font-bold"
                  : "bg-[#f1f1f1] text-[#181818] hover:bg-[#181818] hover:text-white border border-[#e5e5e5]"
              }`}
            >
              {tab === "directives" && "01 - AGENT DIRECTIVES"}
              {tab === "chronology" && "02 - CHRONOLOGICAL PATH"}
              {tab === "matrix" && "03 - COHORT MATRIX"}
              {tab === "manifesto" && "04 - ZEXAN MANIFESTO"}
            </button>
          ))}
        </div>

        {/* Content Stages */}
        <div className="min-h-[420px]" id="about-dynamic-content-box">
          
          {/* TAB 01: AGENT DIRECTIVES */}
          {activeTab === "directives" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="directives-tab-pane">
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#f1f1f1] border border-[#e5e5e5] p-6 relative">
                  <span className="absolute top-0 right-0 bg-[#FF3333] text-white font-mono text-[8px] py-0.5 px-2 tracking-widest">PROP_MATRIX</span>
                  <h4 className="font-sans font-black text-md text-[#181818] uppercase mb-4">MAK CORE VALUES</h4>
                  <ul className="space-y-3 font-sans text-xs text-[#8A8A8A] leading-relaxed uppercase">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#94fa50] block mt-1"></span>
                      <span>HIGH-DENSITY COMPACT CODE BASES WRITTEN IN PURE TYPESCRIPT</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#94fa50] block mt-1"></span>
                      <span>ZERO DROP SHADOWS OR RADIAL COMPONENT ROUNDINGS</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#94fa50] block mt-1"></span>
                      <span>FIRST-PARTY DATA INGESTION DRIVEN BY EXTREME ON-EDGE SPEED</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#94fa50] block mt-1"></span>
                      <span>SWISS STYLE HIGH CONTRAST TYPOGRAPHY SYSTEM</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-[#e5e5e5] p-6">
                  <h4 className="font-sans font-black text-sm text-[#181818] uppercase mb-3">CONVERSION SUPREMACY</h4>
                  <p className="font-sans text-xs text-[#8A8A8A] leading-relaxed uppercase">
                    WE REFUSE STANDARD SITE BUILDERS THAT DEPLETE RENDER CHANNELS and drop user response weights. Every line we write is designed to secure consumer attention indexes instantly.
                  </p>
                </div>
              </div>

              {/* Technical parameters sheet */}
              <div className="lg:col-span-7 bg-[#181818] text-white p-8 border-2 border-black font-mono text-xs">
                <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4">
                  <Shield size={14} className="text-[#94fa50]" />
                  <span className="text-zinc-400 font-bold tracking-widest uppercase">ZEXAN_CORE_SYSTEM_SPEC</span>
                </div>

                <div className="space-y-4">
                  {parameters.map((param, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500 font-bold uppercase">{param.label}:</span>
                      <span className="text-white hover:text-[#94fa50] transition-colors">{param.value}</span>
                    </div>
                  ))}
                </div>

                {/* Status Bar */}
                <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-500 uppercase">
                  <span>DEPLOYMENT SYSTEM: SECURED</span>
                  <span className="text-[#94fa50] tracking-widest font-black uppercase">CORE_METRION_TRUE</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 02: CHRONOLOGY SCHEDULE */}
          {activeTab === "chronology" && (
            <div className="space-y-6" id="chronology-tab-pane">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {milestones.map((ms, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-[#e5e5e5] hover:border-black p-6 flex flex-col justify-between min-h-[220px] transition-all duration-300 relative group"
                  >
                    <div>
                      <span className="font-mono text-[9px] text-[#FF3333] font-bold block mb-2">{ms.year}</span>
                      <h4 className="font-sans font-black text-sm text-[#181818] uppercase mb-3 transition-colors group-hover:text-[#94fa50]">{ms.title}</h4>
                      <p className="font-sans text-[11px] text-[#8A8A8A] leading-relaxed uppercase">{ms.desc}</p>
                    </div>

                    <div className="border-t border-[#f1f1f1] pt-3 mt-4 flex items-center gap-1 font-mono text-[8px] text-[#8A8A8A]">
                      <span className="w-1 h-1 bg-[#94fa50] inline-block"></span>
                      <span>{ms.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 03: COHORT MATRIX */}
          {activeTab === "matrix" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="matrix-tab-pane">
              <div className="lg:col-span-4 bg-white border border-[#e5e5e5] p-8 flex flex-col justify-between min-h-[300px]">
                <div>
                  <Landmark className="text-[#181818] mb-4" />
                  <h4 className="font-sans font-black text-lg text-[#181818] uppercase mb-2">MAK LAB QUANTUMS</h4>
                  <p className="font-sans text-xs text-[#8A8A8A] leading-relaxed uppercase">
                    Our operations scale to support concurrent production streams across EMEA, North America, and APAC client depots.
                  </p>
                </div>

                <div className="border-t border-[#e5e5e5] pt-4 mt-6">
                  <div className="font-mono text-3xl font-black text-black">450+</div>
                  <div className="font-mono text-[9px] text-[#8A8A8A] uppercase">STABLE VERIFIED ENGINE WORKERS</div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white border border-[#e5e5e5] p-8 flex flex-col justify-between min-h-[300px]">
                <div>
                  <Target className="text-[#181818] mb-4" />
                  <h4 className="font-sans font-black text-lg text-[#181818] uppercase mb-2">CONVERSION SHIELD</h4>
                  <p className="font-sans text-xs text-[#8A8A8A] leading-relaxed uppercase">
                    Every interface build undergoes rigorous automated Core Web Vitals checks before direct deployment onto distributed networks.
                  </p>
                </div>

                <div className="border-t border-[#e5e5e5] pt-4 mt-6">
                  <div className="font-mono text-3xl font-black text-black">99/100</div>
                  <div className="font-mono text-[9px] text-[#8A8A8A] uppercase">AVERAGE PERFORMANCE RATINGS</div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#181818] text-white p-8 flex flex-col justify-between min-h-[300px] border-2 border-black">
                <div>
                  <Cpu className="text-[#94fa50] mb-4" />
                  <h3 className="font-sans font-black text-lg uppercase mb-2 text-white">REDUCING CARBON LATENCY</h3>
                  <p className="font-mono text-[11px] text-zinc-400 leading-relaxed uppercase">
                    We strip redundant JavaScript compilation chains, protecting the client processor cache thread and saving precious compute cycles.
                  </p>
                </div>

                <div className="border-t border-zinc-800 pt-4 mt-6">
                  <div className="font-mono text-3xl font-black text-[#94fa50]">14ms</div>
                  <div className="font-mono text-[9px] text-zinc-500 uppercase font-bold">MEDIAN FIRST INFUSION REBOUND</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 04: ZEXAN COMPILER MANIFESTO */}
          {activeTab === "manifesto" && (
            <div className="bg-[#181818] text-white p-8 border-2 border-black font-mono text-[11px]" id="manifesto-tab-pane">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6 uppercase">
                <div className="flex items-center gap-2">
                  <Terminal size={12} className="text-[#94fa50]" />
                  <span className="text-white font-bold">ZEXAN_MANIFESTO.TXT</span>
                </div>
                <span className="text-zinc-500 bg-zinc-900 px-2 py-0.5 border border-zinc-800">[READ_ONLY]</span>
              </div>

              <div className="space-y-4 text-zinc-300 uppercase leading-relaxed max-w-4xl">
                <p>
                  &gt;&gt; WE DEFINE BEAUTY AS THE ULTIMATE SPEED OF RESOLUTION. A CARD THAT RENDERS IN 14 SECONDS WITH BLABS AND BLURS IS AN INCOMPLETE CONTRACT WITH SYSTEM RESOURCES.
                </p>
                <p>
                  &gt;&gt; ZERO SHADOWS ALLOWS PIXELS TO BE ALIGNED WITHOUT GRADIENT COMPENSATION. ZERO OVERLAY PRESERVES CONTRAST RATIO METRICS OVER OUTDOOR DEVICE BRIGHTNESS COEFFICIENTS.
                </p>
                <p>
                  &gt;&gt; THE SWISS MODERNISTS TAUGHT ACCLESIASTICAL TEXT POSITION ENFORCEMENT. WE PAIR THREAD STABILITY AND GEOMETRIC GRIDS SO THAT DESIGN DOES NOT DECORATE CONTENT; THE GRID BECOMES THE SYSTEM.
                </p>
                <p>
                  &gt;&gt; IF A MODULE CANNOT RUN WITHOUT EXTERNAL API CALL COOLDOWNS, CACHE THE MODEL NATIVELY ON THE CLIENT ENTRUSTED DOMAINS. OFFLINE_FIRST SHOULD BE STANDARD, NOT A PREMIUM FEATURE.
                </p>
                <p className="text-[#94fa50] font-bold">
                  &gt;&gt; [CONVENTION VERDICT]: RUN_READY - SYSTEM STATUS IS CONCURRENT_ACTIVE 
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
