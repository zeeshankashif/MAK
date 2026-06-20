/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import MetricHub from "./components/MetricHub";
import WhoWeAre from "./components/WhoWeAre";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import ExtendedData from "./components/ExtendedData";
import { CAPABILITIES } from "./data";
import { motion, AnimatePresence } from "motion/react";
import { Info, X, Zap, Cpu, Gauge } from "lucide-react";

export default function App() {
  const [isPreloading, setIsPreloading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);

  // Split-screen preloader trigger callback
  const handlePreloadComplete = useCallback(() => {
    setIsPreloading(false);
  }, []);

  // Smooth jump navigate implementation support
  const handleNavigate = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Since Y coordinates might shift under fixed SmoothScroll container translate Y,
        // we determine absolute scroll Y relative to of document body scroll height.
        const scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollOffset - 80; // Subtract navbar offset height

        window.scrollTo({
          top: targetY,
          behavior: "smooth"
        });
      }
    }, 100);
  }, []);

  // Intersect API tracking active elements on screen
  useEffect(() => {
    if (isPreloading) return;

    const sections = ["home", "marketing", "development", "about", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-25% 0px -65% 0px" // precise viewing center triggers
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.disconnect();
        }
      });
    };
  }, [isPreloading]);

  return (
    <div className="bg-[#f1f1f1] min-h-screen text-[#181818] selection:bg-[#94fa50] selection:text-[#181818]">
      
      {/* 1. Kinetic preloader split system */}
      <Preloader onComplete={handlePreloadComplete} />

      {/* 2. Top Navigation system (Mounts fully after preloading, staggered entrance) */}
      <AnimatePresence>
        {!isPreloading && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-40"
          >
            <Navbar onNavigate={handleNavigate} activeSection={activeSection} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Smooth scrolling layout controller */}
      <SmoothScroll isActive={!isPreloading}>
        <AnimatePresence>
          {!isPreloading && (
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col w-full relative"
              id="main-scroller-stage"
            >
              {/* VIEW 01: Hero section */}
              <div id="home" className="scroll-mt-20">
                <Hero onLearnMore={() => handleNavigate("development")} />
              </div>

              {/* VIEW 02 & VIEW 03: Unified capabilities section */}
              <Capabilities onCapabilityClick={(title) => setSelectedCapability(title)} />

              {/* VIEW 04: Who We Are / Agency specs section */}
              <div id="about" className="scroll-mt-20">
                <WhoWeAre />
                <AboutPage />
              </div>

              {/* Extended engineering grids, integration protocols, and FAQs */}
              <ExtendedData />

              {/* VIEW 05: Action/Form Audit and statistical section */}
              <div id="contact" className="scroll-mt-20">
                <MetricHub />
              </div>

              {/* Footer navigation block */}
              <Footer onNavigate={handleNavigate} />
            </motion.main>
          )}
        </AnimatePresence>
      </SmoothScroll>

      {/* 4. PREMIUM SPEC MODAL (ZEXAN design alternative to window.alert) */}
      <AnimatePresence>
        {selectedCapability && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#181818]/60 backdrop-blur-sm pointer-events-auto">
            {/* Modal Box: Absolutely zero shadows, perfect 1px borders, #ffffff background */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="bg-white border-2 border-[#181818] p-8 max-w-lg w-full relative"
              id="spec-modal"
            >
              {/* Red-accent marker */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-[#FF3333]" />
              <div className="absolute top-0 right-0 w-4 h-4 bg-[#181818]" />

              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2">
                  <Info size={16} className="text-[#FF3333]" />
                  <span className="font-mono text-[10px] text-[#8A8A8A] tracking-[0.25em] uppercase">
                    MODULE DETAILS
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCapability(null)}
                  className="p-1 hover:text-[#94fa50] transition-colors cursor-pointer border border-[#e5e5e5] hover:border-black"
                  aria-label="Close details"
                >
                  <X size={16} />
                </button>
              </div>

              <h4 className="font-sans text-2xl font-black tracking-tight text-[#181818] uppercase mb-4">
                {selectedCapability}
              </h4>

              {(() => {
                const matchedCap = CAPABILITIES.find((c) => c.title === selectedCapability);
                return (
                  <>
                    <div className="bg-[#f1f1f1] border border-[#e5e5e5] p-5 mb-4 font-sans text-xs text-[#181818] leading-relaxed uppercase">
                      "{matchedCap?.detailedDesc || "Our premium architectural delivery pipelines are engineered for zero latency and calibrated for peak enterprise conversion."}"
                    </div>

                    <div className="space-y-2 mb-6 border border-[#e5e5e5] bg-white p-4">
                      <div className="flex items-center justify-between border-b border-[#f1f1f1] pb-2">
                        <span className="font-mono text-[9px] text-[#8A8A8A] uppercase">BENCHMARK LOAD STATE:</span>
                        <span className="font-mono text-[9px] text-[#FF3333] font-bold uppercase">{matchedCap?.benchmark || "99.9% INTEGRAL"}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-[#8A8A8A] uppercase">RESOLVE RESPONSE TIME:</span>
                        <span className="font-mono text-[9px] text-[#94fa50] bg-[#181818] px-1.5 py-0.5 font-bold uppercase">{matchedCap?.latency || "12ms LATENCY"}</span>
                      </div>
                    </div>
                  </>
                );
              })()}

              {/* Status and CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#e5e5e5] pt-6">
                <div className="flex items-center gap-2 font-mono text-[10px] text-[#8A8A8A] tracking-widest uppercase">
                  <Zap size={12} className="text-[#94fa50] animate-pulse" />
                  STATION READY - LATENCY: 12MS
                </div>
                <button
                  onClick={() => {
                    setSelectedCapability(null);
                    handleNavigate("contact");
                  }}
                  className="px-5 py-2.5 bg-[#181818] text-white hover:bg-[#94fa50] hover:text-[#181818] font-mono text-[10px] tracking-widest uppercase transition-colors border border-black hover:border-[#94fa50] cursor-pointer"
                >
                  ORDER THIS CAPABILITY
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
