/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [stage, setStage] = useState<"loading" | "splitting" | "done">("loading");

  useEffect(() => {
    // 1.0s of initial loading display
    const splitTimer = setTimeout(() => {
      setStage("splitting");
      onComplete(); // Reveal content underneath during active split
    }, 1000);

    // 2.2s total to allow the elastic split animation to fully clear the viewport
    const doneTimer = setTimeout(() => {
      setStage("done");
    }, 2200);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (stage === "done") return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
      {/* Absolute base dark background */}
      <AnimatePresence>
        {stage !== "done" && (
          <div className="absolute inset-0 pointer-events-auto">
            {/* Top-Left Panel */}
            <motion.div
              className="absolute inset-0 bg-[#181818]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
              }}
              initial={{ x: 0, y: 0 }}
              animate={
                stage === "splitting"
                  ? { x: "-100%", y: "-100%" }
                  : { x: 0, y: 0 }
              }
              transition={{
                duration: 1.2,
                ease: [0.25, 1, 0.5, 1], // Custom high-friction elastic easing curve
              }}
            />

            {/* Bottom-Right Panel */}
            <motion.div
              className="absolute inset-0 bg-[#181818]"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              }}
              initial={{ x: 0, y: 0 }}
              animate={
                stage === "splitting"
                  ? { x: "100%", y: "100%" }
                  : { x: 0, y: 0 }
              }
              transition={{
                duration: 1.2,
                ease: [0.25, 1, 0.5, 1],
              }}
            />

            {/* The 1.5px Neon Green Edge Accent Line tracking the diagonal tear line */}
            {stage === "splitting" && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.8, 0] }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="w-full h-full relative">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    {/* Animated splitting line running diagonally from top-right down to bottom-left */}
                    <motion.line
                      x1="100"
                      y1="0"
                      x2="0"
                      y2="100"
                      stroke="#94fa50"
                      strokeWidth="0.4" // scaled representation of 1.5px
                      initial={{ pathLength: 1 }}
                      animate={
                        stage === "splitting"
                          ? {
                              x: ["0%", "50%", "100%"], // slides or spreads outward matching the split panels
                              opacity: [1, 0.5, 0],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1.2,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                    />
                  </svg>
                </div>
              </motion.div>
            )}

            {/* Minimalist, sharp wireframe vector logo outline in dead center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  stage === "loading"
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 1.08 }
                }
                transition={{
                  duration: 0.6,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="flex flex-col items-center gap-4"
              >
                {/* Tech logo symbol wireframe */}
                <div className="relative w-16 h-16 border border-[#a3a3a3] flex items-center justify-center">
                  {/* Subtle Neon Accents in core wireframe */}
                  <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF3333] -mt-1 -mr-1" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#94fa50] -mb-1 -ml-1 animate-pulse" />
                  <span className="font-mono text-zinc-300 text-sm tracking-wider font-semibold">
                    MAK
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="font-sans text-white text-base tracking-[0.3em] font-medium uppercase">
                    MAK DEVELOPERS
                  </h1>
                  <span className="font-mono text-xs text-[#8A8A8A] tracking-[0.2em] mt-1">
                    PRODUCTION REDESIGN v2026.1
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
