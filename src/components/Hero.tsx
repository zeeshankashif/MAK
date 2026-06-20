/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface HeroProps {
  onLearnMore: () => void;
}

export default function Hero({ onLearnMore }: HeroProps) {
  const imageUrl = "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section 
      id="home" 
      className="relative min-h-0 h-auto pt-24 pb-10 md:min-h-screen md:py-0 flex items-center justify-center overflow-hidden bg-[#181818] border-b border-[#e5e5e5]"
      style={{
        backgroundImage: `linear-gradient(rgba(24, 24, 24, 0.45), rgba(24, 24, 24, 0.75)), url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "calc(50% + 30px) top",
      }}
    >
      {/* Centered Minimal Content Block */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center" id="hero-main-content">
        <div className="overflow-visible inline-block block">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="text-white uppercase select-none cursor-pointer tracking-wider"
            id="hero-massive-headline"
          >
            BUILDING BRANDS, CODING FUTURES
          </motion.h1>
        </div>

        {/* Dynamic Mimic-Font Block: " MAK DEVELOPERS " */}
        <div className="mt-4 overflow-visible flex justify-center items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 1.0, 
                  ease: [0.25, 1, 0.5, 1], 
                  delay: 0.35,
                  staggerChildren: 0.015,
                  delayChildren: 0.5
                } 
              }
            }}
            className="flex items-center justify-center flex-wrap gap-x-1 text-[22px] sm:text-[32px] overflow-visible"
            style={{ 
              fontFamily: "'Smooch Sans', sans-serif",
              fontWeight: 400
            }}
            id="hero-mak-developers-mimic"
          >
            {/* " WE DEVELOPE TO DOMINATE " formatted by stable word chunks to prevent character-level truncation */}
            <div className="flex flex-wrap justify-center select-none tracking-tight font-normal">
              {[
                { word: '"', isQuote: true },
                { word: 'WE', isQuote: false },
                { word: 'DEVELOPE', isQuote: false },
                { word: 'TO', isQuote: false },
                { word: 'DOMINATE', isQuote: false },
                { word: '"', isQuote: true }
              ].map((wordItem, wordIdx) => (
                <motion.div 
                  key={`word-${wordIdx}`} 
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.015 } }
                  }}
                  className="inline-flex flex-nowrap mr-2 sm:mr-3"
                >
                  {wordItem.word.split("").map((char, charIdx) => {
                    const isQuote = wordItem.isQuote;
                    const index = wordIdx * 10 + charIdx;
                    return (
                      <motion.div
                        key={`char-${index}`}
                        style={{ 
                          position: "relative",
                          overflow: "hidden",
                          display: "inline-block", 
                          marginRight: "1px",
                          willChange: "transform, opacity"
                        }}
                        variants={{
                          hidden: { opacity: 0, y: 15, scale: 0.95 },
                          visible: { 
                            opacity: 1, 
                            y: 0, 
                            scale: 1,
                            transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
                          }
                        }}
                        whileHover="hover"
                        className="h-[1.25em] cursor-pointer"
                      >
                        {/* Primary Text Layer (Slides Up Out of View) */}
                        <motion.span
                          variants={{
                            hover: { y: "-100%", skewY: -6, opacity: 0 }
                          }}
                          transition={{ type: "spring", stiffness: 360, damping: 18 }}
                          className={`inline-block font-normal transition-colors duration-150 ${
                            isQuote ? "text-[#94fa50]" : "text-white"
                          }`}
                          style={{ transformOrigin: "top left" }}
                        >
                          {char}
                        </motion.span>

                        {/* Secondary Text Layer (Slides Up From Below Into View) */}
                        <motion.span
                          initial={{ y: "100%", opacity: 0 }}
                          variants={{
                            hover: { y: "0%", skewY: 0, opacity: 1 }
                          }}
                          transition={{ type: "spring", stiffness: 360, damping: 18 }}
                          className={`absolute left-0 top-0 font-normal ${
                            isQuote ? "text-white font-bold" : "text-[#94fa50] font-bold"
                          }`}
                          style={{ transformOrigin: "bottom left" }}
                        >
                          {char}
                        </motion.span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Clean minimal Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <button 
            onClick={onLearnMore}
            className="px-8 py-4 bg-[#94fa50] text-[#181818] font-mono text-[10px] tracking-[0.2em] uppercase font-black transition-all duration-300 hover:bg-white hover:text-[#181818] border border-[#94fa50] hover:border-white cursor-pointer"
            id="hero-primary-btn"
          >
            DISCOVER THE SYSTEM
          </button>
        </motion.div>
      </div>

      {/* Aesthetic bottom bar coordinates */}
      <div className="absolute bottom-6 right-6 hidden md:flex justify-between items-center z-10 font-sans text-[8px] text-[#8A8A8A] tracking-[0.2em] text-bold">
        <div>MAK DEV REV 2026 - SYSTEM ACTIVE</div>
      </div>
    </section>
  );
}
