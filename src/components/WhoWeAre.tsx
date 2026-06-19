/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Users, Code, Award, Zap } from "lucide-react";

export default function WhoWeAre() {
  const specs = [
    {
      icon: <Users size={20} />,
      title: "450+ GLOBAL ENGINEERS",
      desc: "An elite assembly of product leaders, software architects, and performance marketing mathematical teams operating in coordinated sprints.",
    },
    {
      icon: <Code size={20} />,
      title: "COMPILE PRECISION",
      desc: "We write clean, typed code frameworks that run on zero-overhead server containers, avoiding bulky templates and prioritizing raw performance.",
    },
    {
      icon: <Award size={20} />,
      title: "CONVERSION AUTHORITY",
      desc: "Our systems are audited by leading index entities. We don't just optimize clicks—we engineer multi-stage pipeline flow overrides.",
    },
    {
      icon: <Zap size={20} />,
      title: "ZERO LAG LATENCY",
      desc: "Every layout we release is designed for sub-100ms kinetic interaction states, ensuring zero friction across any viewport density.",
    }
  ];

  return (
    <section 
      id="about" 
      className="relative px-6 py-24 bg-[#f1f1f1] border-t border-[#e5e5e5] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-[10px] text-[#FF3333] tracking-[0.2em] uppercase font-bold">[ VIEW.04 WHO WE ARE ]</span>
          <span className="h-[1px] bg-[#e5e5e5] flex-grow"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#181818] uppercase">
              WE DO NOT DECORATE.
              <br />
              WE COMPILE ACTIONS.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pl-6 border-l border-stone-300">
            <p className="font-sans text-sm sm:text-base text-[#181818] leading-relaxed">
              At MAK Developers, our core mission is simple: strip away the corporate bloat and rebuild the web to be hyper-fast and highly transactional. We partner with next-generation enterprise startups and scale structures to formulate technical authority systems.
            </p>
            <div className="flex gap-4 items-center mt-6">
              <span className="font-mono text-[10px] text-[#94fa50] bg-[#94fa50]/10 px-3 py-1 border border-[#94fa50]/20 uppercase tracking-widest font-bold">
                ENGINEERING DRIVEN
              </span>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                ESTABLISHED 2018
              </span>
            </div>
          </div>
        </div>

        {/* Technical spec sheets details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" id="who-we-are-specs">
          {specs.map((spec, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#e5e5e5] hover:border-[#181818] p-8 flex flex-col justify-between min-h-[250px] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                {/* Monospace tech numbering */}
                <span className="font-mono text-xs text-[#8A8A8A] tracking-wider font-bold">
                  {`0${idx + 1}`}
                </span>
                {/* Simple 1px sharp key icon housing */}
                <div className="p-2 border border-[#e5e5e5] text-[#181818] group-hover:bg-[#94fa50] group-hover:border-[#94fa50] transition-colors duration-300">
                  {spec.icon}
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-sans text-md font-bold tracking-tight text-[#181818] uppercase mb-2">
                  {spec.title}
                </h4>
                <p className="font-sans text-xs text-[#8A8A8A] leading-relaxed group-hover:text-black transition-colors">
                  {spec.desc}
                </p>
              </div>

              {/* Status bar */}
              <div className="border-t border-zinc-100 pt-3 mt-6 flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 bg-[#94fa50] rounded-none inline-block"></span>
                <span className="font-mono text-[9px] text-[#8A8A8A] tracking-widest">STABLE_MODULE_TRUE</span>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE MAK LAB DIVISIONS PANEL (ADD MORE DATA & INFORMATION CARDS) */}
        {/* ========================================================================= */}
        <div className="border-t border-[#e5e5e5] pt-16" id="mak-divisions-block">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-[10px] text-[#FF3333] tracking-[0.2em] uppercase font-bold">[ SYSTEM_RECORDS.04B ]</span>
            <span className="h-[1px] bg-[#e5e5e5] flex-grow"></span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h3 className="font-sans text-2xl sm:text-4xl font-black tracking-tight text-[#181818] uppercase">
                INTELLIGENT LAB DIVISIONS
              </h3>
              <p className="font-sans text-sm text-[#8A8A8A] max-w-xl mt-3 uppercase leading-relaxed font-semibold">
                MAK Developers operates specialized division depots to prototype and compile continuous system solutions. Click each division to inspect stable telemetry threads.
              </p>
            </div>
          </div>

          {/* Division Matrix Grid */}
          <DivisionMatrix />
        </div>

      </div>
    </section>
  );
}

// Internal customized sub-component to keep clean state isolation and modularity rules
const DIVISIONS_RECORDS = [
  {
    id: "DIV-RUNTIME.01",
    name: "CORE RUNTIME LAB",
    metric: "14ms SPEED CAP",
    objective: "THE COMPLETE ELIMINATION OF LATE BROWSER HYDRATION DELAYS",
    techStack: "RUST, CONCURRENT RE-ACT, LOCAL COGNITIVE WASM SHIELDS",
    systemStatus: "STABLE PROTOCOL: OPERATIONAL",
    threads: [
      "RUNTIME_THREAD_01: DYNAMIC CHUNKS MERGING NATIVE ENGINE",
      "STATIC_PREHTML_02: OPTIMISTIC DOM ELEMENT CACHING PIPES",
      "SECURITY_CORS_03: RATE-LIMIT INTEGRAL PRECLUSION CODES"
    ]
  },
  {
    id: "DIV-TELEMETRY.02",
    name: "TELEMETRY PARSING LAB",
    metric: "+242% DATABENT",
    objective: "REAL-TIME FIRST-PARTY VISITOR METRIC MODEL ENCODINGS",
    techStack: "TENSORFLOW INGEST, META CONVERSION APIS, EXPRESS STREAM",
    systemStatus: "DESTRUCTION ENGINE: BYPASSING SAFARI SCRIPTS TRACKERS",
    threads: [
      "API_EVENT_LOOP_01: DIRECT HTTP PROTOCOL TELEMETRY RELAYS",
      "COHORT_MODEL_02: SYSTEMATIC USER FUNNEL BOT EXCLUSIONS",
      "SECURE_AUDIT_03: PERSISTENT INVENTORY MATRIX RECALIBRATING"
    ]
  },
  {
    id: "DIV-COMMERCE.03",
    name: "HEADLESS COMMERCE DEPOT",
    metric: "0px LAYOUT DEF",
    objective: "HIGH-CONVERSION CHECKOUT INTEGRATION GATEWAY PROTOCOLS",
    techStack: "SHOPIFY HYDROGEN, DECOUPLED STRIPE CORE APIs, REDIS METRICS",
    systemStatus: "MERCHANT TERMINAL: VERIFIED INTEGRATION",
    threads: [
      "CHECKOUT_SPEED_01: SUB-120MS STRIPE PAYMENT RETRIEVAL GATEWAY",
      "INVENTORY_REF_02: DYNAMIC SYNC TABLES DIRECT FROM ERP DEPOTS",
      "REACTIVE_CART_03: CLIENT CACHED IMMUTABLE SYSTEM CHECKLISTS"
    ]
  },
  {
    id: "DIV-GRAPHICS.04",
    name: "BRAND SYSTEM SYNDICATE",
    metric: "100% CONTRAST",
    objective: "SWISS STYLE ARCHITECTURE AND HIGH-GRAVITY GRAPHICS",
    techStack: "NEUE CORP GEOMETRY MODULES, VECTOR COMPACT CONVENTIONS",
    systemStatus: "AESTHETIC CONTRAST SCORE: EXTREME SHARP",
    threads: [
      "TYPO_PAIRINGS_01: NEUE HAAS GROTESK & MONOSPACE TECH SYMMETRY",
      "LAYOUT_SHARP_02: RIGID 1PX BORDERS / ABSOLUTE ZERO SHADOWS",
      "KINETIC_FLOW_03: SPLIT-SCREEN DIAGONAL SVG RELIABLE PRELOAD"
    ]
  }
];

function DivisionMatrix() {
  const [activeDivIdx, setActiveDivIdx] = useState(0);
  const activeDiv = DIVISIONS_RECORDS[activeDivIdx];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="division-matrix-stage">
      {/* Selector side */}
      <div className="lg:col-span-5 flex flex-col gap-3" id="division-selector-panel">
        {DIVISIONS_RECORDS.map((div, idx) => {
          const isSelected = activeDivIdx === idx;
          return (
            <button
              key={div.id}
              onClick={() => setActiveDivIdx(idx)}
              className={`w-full p-6 text-left border cursor-pointer transition-all duration-300 relative ${
                isSelected
                  ? "bg-[#181818] border-black text-white"
                  : "bg-white border-[#e5e5e5] text-[#181818] hover:bg-zinc-50 hover:border-zinc-400"
              }`}
              id={`div-selector-btn-${idx}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-[9px] font-bold ${isSelected ? "text-[#94fa50]" : "text-[#FF3333]"}`}>
                  {div.id}
                </span>
                <span className={`font-mono text-[9px] font-bold tracking-widest ${isSelected ? "text-[#94fa50] bg-[#94fa50]/10 px-2 py-0.5 border border-[#94fa50]/20" : "text-[#8A8A8A]"}`}>
                  {div.metric}
                </span>
              </div>
              <h4 className="font-sans text-md font-black tracking-tight uppercase">
                {div.name}
              </h4>
              {isSelected && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#94fa50]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Details Display terminal screen */}
      <div className="lg:col-span-7 bg-[#181818] text-white p-8 border-2 border-black flex flex-col justify-between min-h-[380px] relative font-mono text-xs">
        <span className="absolute top-0 right-0 bg-[#94fa50] text-[#181818] font-mono text-[9px] py-1 px-3 tracking-widest font-black">
          RECORD_FILE: {activeDiv.id}
        </span>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#FF3333]" />

        <div>
          <div className="border-b border-zinc-800 pb-4 mb-6">
            <span className="text-zinc-500 uppercase tracking-wider block text-[10px] font-bold">// CORE DIV OBJECTIVE</span>
            <span className="text-[#94fa50] font-bold uppercase tracking-wide text-sm mt-1">{activeDiv.objective}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 uppercase text-[11px]">
            <div>
              <span className="text-zinc-500 block text-[9px] font-bold">// INTEGRATED TECH STACK</span>
              <span className="text-white font-semibold">{activeDiv.techStack}</span>
            </div>
            <div>
              <span className="text-zinc-500 block text-[9px] font-bold">// INGESTION INTEGRITY STATUS</span>
              <span className="text-[#FF3333] font-bold">{activeDiv.systemStatus}</span>
            </div>
          </div>

          {/* Sub threads logs */}
          <div className="mt-6">
            <span className="text-zinc-500 block text-[9px] uppercase tracking-wider mb-3 font-bold">// STABLE SYSTEM THREAD LOGS</span>
            <div className="space-y-2 bg-[#212121]/50 border border-zinc-800/80 p-4 font-mono text-[10px] text-zinc-300">
              {activeDiv.threads.map((thread, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <span className="text-[#94fa50] font-black">&gt;&gt;</span>
                  <span className="uppercase">{thread}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Micro coordinate status footer of terminal */}
        <div className="border-t border-zinc-800 pt-4 mt-8 flex items-center justify-between text-[9px] text-zinc-500 uppercase">
          <span>COORDINATE_THREAD: COMPLETE</span>
          <span className="text-[#94fa50] font-bold">STATION REFERENCE: MAK_ZEXAN_ENGINE // OK</span>
        </div>
      </div>
    </div>
  );
}
