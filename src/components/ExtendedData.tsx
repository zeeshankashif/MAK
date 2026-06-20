import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Database, Code, ShieldCheck, Terminal, ChevronDown, ExternalLink, Activity, Check, GitBranch } from "lucide-react";

interface ShowcaseProject {
  id: string;
  client: string;
  category: string;
  tag: string;
  metric: string;
  metricLabel: string;
  description: string;
  logs: string[];
}

const PROJECT_DATA: ShowcaseProject[] = [
  {
    id: "MAK-202X-01",
    client: "Aether Grid Systems",
    category: "HEADLESS NEXT-GEN COMMERCE",
    tag: "ARCH_01",
    metric: "0.1Ghz latency reduction",
    metricLabel: "EDGE TIME TO FIRST BYTE",
    description: "Re-engineered standard React rendering pipeline into server-side streaming channels. Enabled real-time product query caching and predictive system loading.",
    logs: [
      "COMPILER: READY",
      "TTFB: 14ms (OPTIMAL)",
      "STABLE_DEPLOY: VERIFIED"
    ]
  },
  {
    id: "MAK-202X-02",
    client: "Tensor Flow-State LLC",
    category: "TELEMETRY & CONVERSION SYSTEM",
    tag: "ARCH_02",
    metric: "+342% Conversion Delta",
    metricLabel: "CUSTOMER RETENTION",
    description: "Built automated data routing pipeline and contextual checkout flows integrated directly with internal inventory tables. Sub-second completion speeds.",
    logs: [
      "PIPELINE: HOT",
      "CONVERSION_RATE: +342.2%",
      "INTEGRITY_CHECK: PASSED"
    ]
  },
  {
    id: "MAK-202X-03",
    client: "Zion Security Group",
    category: "MUTABLE COMPILER & ENGINE",
    tag: "ARCH_03",
    metric: "100% Zero-Leak Guard",
    metricLabel: "PENETRATION SUCCESS",
    description: "Designed extreme-isolation custom ERP system with immutable ledger tracking and instant database synchronization. Eradicated enterprise system overhead.",
    logs: [
      "ENCRYPTION: SHIELDED",
      "AUTH_STABILITY: 100%",
      "AUDIT_INDEX: SECURED"
    ]
  }
];

const STACK_CATEGORIES = [
  {
    id: "frontend",
    label: "FRONTEND COMPILATION",
    icon: <Code size={14} />,
    items: [
      { name: "React 18+", v: "V-18.3.1", desc: "Concurrent rendering and micro-hydration pipelines." },
      { name: "Vite + Bundlers", v: "V-5.4.2", desc: "Extremely fast compilation with localized chunk optimization." },
      { name: "Tailwind CSS v4", v: "V-4.0.0", desc: "Pre-compiled utility sheets with zero runtime performance impacts." },
      { name: "Motion Animations", v: "V-11.5", desc: "Accelerated layout animations executing directly on native thread." }
    ]
  },
  {
    id: "backend",
    label: "CORE DATA ARCHITECTURE",
    icon: <Database size={14} />,
    items: [
      { name: "Cloud Run Containers", v: "DOCKER-26", desc: "Automated scaling matrices with direct reverse-proxy ingestion." },
      { name: "PostgreSQL Database", v: "PG-16", desc: "Durable database architectures utilizing normalized index schemas." },
      { name: "Express API Engines", v: "EXP-5", desc: "Zero-overhead server-side logic routing data streams." },
      { name: "Redis Memory Stores", v: "RED-7.2", desc: "High-frequency caching layers ensuring sub-10ms response coordinates." }
    ]
  },
  {
    id: "telemetry",
    label: "SYSTEM TELEMETRY & SEO",
    icon: <Cpu size={14} />,
    items: [
      { name: "Meta Conversion API", v: "C_API-4.0", desc: "Server-side event dispatching bypassing client browser blockers." },
      { name: "Google Analytics 4 Engine", v: "GA4_NATIVE", desc: "Real-time user cohort modeling with continuous funnel telemetry." },
      { name: "Structural Authority SEO", v: "V-2026.04", desc: "Perfect Lighthouse index tracking - 100% Core Web Vitals score." },
      { name: "Hot-Module Security", v: "SEC_LEVEL_E", desc: "Automatic rate-limiting, strict CORS policies, and CORS shield." }
    ]
  }
];

const SYSTEM_FAQS = [
  {
    q: "WHAT IS THE 'ZEXAN' ENGINEERING STANDARD?",
    a: "The ZEXAN standard is an elite digital deployment framework created to strip away the bloated, over-decorated structures of the legacy web. Every component contains zero unnecessary wrappers, zero box shadows, 100% sharp rectangular 1px borders, and is optimized for peak performance and visual high-contrast readability."
  },
  {
    q: "HOW DOES THE 12-HOUR CHIEF STRATEGIST AUDIT RESPONSE WORK?",
    a: "When a security or marketing audit profile is uploaded via our Metric Hub, our custom automation routes the data through an offline parsing engine. Within 12 hours, a lead architect compiles a custom layout response, establishing clear system boundaries and high-frequency conversion targets."
  },
  {
    q: "WHY DO YOU AVOID RADIAL BORDERS AND SOFT BLURS?",
    a: "Corporate website builders rely on heavy shadows, complex radial gradients, and soft radial blurs to distract from standard performance issues. MAK Developers enforces strict 0px border-radii and flat 1px borders to preserve high-contrast rendering and maintain an aggressive, industrial geometric aesthetic."
  },
  {
    q: "HOW DO Headless Storefronts EXCEED STANDARD WORDPRESS TEMPLATES?",
    a: "Standard WordPress models fetch data dynamically through single-threaded SQL queries during load-time, causing latency up to 2.4s. By decoupling the content management system (headless structure) and utilizing pre-compiled static edge distribution, we reduce page load speed to less than 150ms."
  }
];

export default function ExtendedData() {
  const [activeStackTab, setActiveStackTab] = useState("frontend");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="bg-[#f1f1f1] border-t border-[#e5e5e5] py-24 px-6 relative" id="extended-services">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= SECTION 1: DETAILED CASE STUDIES ================= */}
        <div id="projects" className="scroll-mt-24 mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-[10px] text-[#FF3333] tracking-[0.2em] uppercase font-bold">[ SYSTEM_RECORDS.04 ]</span>
            <span className="h-[1px] bg-[#e5e5e5] flex-grow"></span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#181818] uppercase">
                ENGINEERING RECORDS
              </h2>
              <p className="font-sans text-sm text-[#8A8A8A] max-w-xl mt-3 uppercase">
                Deep architectural case studies showing high-frequency marketing, telemetry, and software execution.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-white p-3 border border-[#e5e5e5] font-mono text-[10px] text-[#181818] uppercase tracking-wider select-none">
              <Activity size={14} className="text-[#94fa50] animate-pulse" />
              STATUS: CONTINUOUS DELIVERY PROTOCOLS
            </div>
          </div>

          {/* Grid architecture - strictly 0px radius, 1px border cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="case-studies-grid">
            {PROJECT_DATA.map((proj) => (
              <div 
                key={proj.id}
                className="group relative bg-[#ffffff] border border-[#e5e5e5] hover:border-[#181818] p-8 flex flex-col justify-between min-h-[380px] transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top identifier */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[9px] text-[#8A8A8A] tracking-[0.25em] font-bold">
                      {proj.id}
                    </span>
                    <span className="font-mono text-[9px] bg-[#181818] text-[#94fa50] px-2 py-0.5 font-bold uppercase tracking-widest">
                      {proj.tag}
                    </span>
                  </div>

                  {/* Heading */}
                  <span className="font-mono text-[10px] text-[#FF3333] tracking-widest uppercase font-bold block mb-2">
                    {proj.category}
                  </span>
                  <h3 className="font-sans text-xl sm:text-2xl font-black tracking-tight text-[#181818] uppercase leading-tight mb-4 group-hover:text-[#94fa50] transition-colors">
                    {proj.client}
                  </h3>
                  
                  <p className="font-sans text-xs text-[#8A8A8A] leading-relaxed uppercase mb-6">
                    {proj.description}
                  </p>
                </div>

                {/* Bottom Stats & Metrics blocks */}
                <div className="border-t border-[#e5e5e5] pt-6">
                  <div className="mb-4">
                    <div className="font-sans text-xl sm:text-2xl font-black text-[#181818] tracking-tight uppercase">
                      {proj.metric}
                    </div>
                    <div className="font-mono text-[9px] text-[#8A8A8A] tracking-widest font-bold">
                      {proj.metricLabel}
                    </div>
                  </div>

                  {/* Virtual terminal system logs for architectural aesthetic */}
                  <div className="bg-[#181818] p-4 font-mono text-[9px] text-zinc-400 space-y-1">
                    {proj.logs.map((log, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-[#94fa50]">&gt;</span>
                        <span className="uppercase">{log}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct accent ribbon in corner */}
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-[#181818] transition-colors group-hover:bg-[#94fa50]" />
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: INTERACTIVE TECH STACK GRID ================= */}
        <div id="tech-stack" className="scroll-mt-24 mb-20 bg-[#181818] text-white p-8 sm:p-12 border-2 border-black relative">
          <span className="absolute top-0 right-0 bg-[#FF3333] text-white font-mono text-[9px] py-1 px-3 tracking-widest font-bold">
            INTELLIGENT COMPONENT METRIC
          </span>
          <span className="absolute bottom-0 left-0 w-4 h-4 bg-[#94fa50]" />

          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-[10px] text-[#94fa50] tracking-[0.2em] uppercase font-bold">[ CORE_ENGINE.05 ]</span>
            <span className="h-[1px] bg-zinc-800 flex-grow"></span>
          </div>

          <div className="max-w-3xl">
            <h2 className="font-sans text-2xl sm:text-4xl font-black tracking-tight text-white uppercase mb-3">
              INTEGRATION PROTOCOLS
            </h2>
            <p className="font-sans text-xs text-zinc-400 uppercase leading-relaxed tracking-wider mb-10">
              MAK Developers maintains zero-dependency compilation workflows using ultra-stable enterprise coordinates and high-speed telemetry libraries.
            </p>
          </div>

          {/* Interactive Stack Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-4 border-b border-zinc-800 pb-6 mb-8" id="stack-tab-container">
            {STACK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveStackTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 font-mono text-[10px] tracking-widest uppercase transition-all duration-350 cursor-pointer ${
                  activeStackTab === cat.id
                    ? "bg-[#94fa50] text-[#181818] font-bold"
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Active Tab System Specs */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStackTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              id="active-stack-grid"
            >
              {STACK_CATEGORIES.find((cat) => cat.id === activeStackTab)?.items.map((item, idx) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 flex flex-col justify-between min-h-[160px] hover:border-[#94fa50] transition-colors relative group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-sans font-bold text-sm tracking-tight text-white uppercase group-hover:text-[#94fa50] transition-colors">
                        {item.name}
                      </span>
                      <span className="font-mono text-[8px] bg-[#94fa50]/15 text-[#94fa50] px-1.5 py-0.5 border border-[#94fa50]/20 uppercase">
                        {item.v}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-zinc-400 uppercase leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="border-t border-zinc-800/60 pt-3 mt-4 flex items-center gap-1.5 font-mono text-[80%] text-zinc-600 uppercase select-none">
                    <Check size={8} className="text-[#94fa50]" />
                    SYS_STABLE_VERIFIED
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= SECTION 3: PROTOCOLS ACCORDION SYSTEM ================= */}
        <div id="protocols" className="scroll-mt-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-[10px] text-[#FF3333] tracking-[0.2em] uppercase font-bold">[ TECHNICAL_MEMORANDUM.06 ]</span>
            <span className="h-[1px] bg-[#e5e5e5] flex-grow"></span>
          </div>

          <div className="max-w-3xl mb-12">
            <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#181818] uppercase">
              SYSTEMATIC PROTOCOLS
            </h2>
            <p className="font-sans text-sm text-[#8A8A8A] max-w-xl mt-3 uppercase">
              Our fundamental operations methodology, responsive parameters, and performance development frameworks.
            </p>
          </div>

          {/* Clean 1px rect Accordion Grid */}
          <div className="max-w-4xl border-t border-[#e5e5e5]" id="protocols-accordion-container">
            {SYSTEM_FAQS.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div 
                  key={idx}
                  className="border-b border-[#e5e5e5] bg-white transition-colors hover:bg-zinc-50/50"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-6 px-8 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                    id={`faq-btn-${idx}`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs text-[#8A8A8A] mt-1 font-bold">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <span className="font-sans font-black text-sm sm:text-base tracking-tight text-[#181818] uppercase">
                        {faq.q}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      className="text-[#181818] p-1 border border-[#e5e5e5] bg-white"
                    >
                      <ChevronDown size={14} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence duration={0.3}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pl-[52px] font-sans text-xs text-[#8A8A8A] leading-relaxed uppercase border-t border-[#e5e5e5] pt-4 bg-[#fbfbfb]">
                          <p className="max-w-2xl mb-4 text-[#181818]">
                            {faq.a}
                          </p>
                          <div className="flex items-center gap-3 font-mono text-[9px] text-[#FF3333] tracking-widest font-bold">
                            <GitBranch size={10} />
                            STATION_COORD - METRIC: 100% STABLE INTEGRITY
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
