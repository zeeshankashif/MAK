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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#181818] border-b border-[#e5e5e5]"
      style={{
        backgroundImage: `linear-gradient(rgba(24, 24, 24, 0.45), rgba(24, 24, 24, 0.75)), url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
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
              visible: { transition: { staggerChildren: 0.03 } }
            }}
            className="flex items-center justify-center flex-wrap gap-x-1"
            style={{ 
              fontFamily: "'Smooch Sans', sans-serif",
              fontSize: "32px",
              fontWeight: 400
            }}
            id="hero-mak-developers-mimic"
          >
            {/* " DEVELOPE TO DOMINATE " */}
            <div className="flex select-none tracking-tight font-normal">
              {'" DEVELOPE TO DOMINATE "'.split("").map((char, index) => {
                const isQuote = char === '"';
                return (
                  <motion.span
                    key={`char-${index}`}
                    variants={{
                      hidden: { opacity: 0, y: 15, scale: 0.95 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.12, 
                      color: isQuote ? "#ffffff" : "#94fa50",
                      y: -4,
                      transition: { duration: 0.15, ease: "easeOut" } 
                    }}
                    className={`inline-block transition-colors duration-200 cursor-pointer font-normal ${
                      isQuote ? "text-[#94fa50]" : "text-white"
                    }`}
                    style={{ 
                      display: char === " " ? "inline" : "inline-block", 
                      marginRight: char === " " ? "10px" : "1px",
                      willChange: "transform, opacity"
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                );
              })}
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
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10 font-mono text-[9px] text-[#8A8A8A] tracking-[0.2em]">
        <div>COORDINATES: 40.7128° N, 74.0060° W</div>
        <div>MAK_DEV_REV_2026 - SYSTEM_ACTIVE</div>
      </div>
    </section>
  );
}
