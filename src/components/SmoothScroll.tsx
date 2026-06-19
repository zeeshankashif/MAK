/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

interface SmoothScrollProps {
  children: React.ReactNode;
  isActive: boolean;
}

export default function SmoothScroll({ children, isActive }: SmoothScrollProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Measure content height dynamically with ResizeObserver to support viewport modifications
  useEffect(() => {
    if (!contentRef.current || !isActive) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
        setContentHeight(entry.contentRect.height);
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(contentRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isActive]);

  // Set document body height to enable native scrollbar handling matching the offset containers
  useEffect(() => {
    if (!isActive) return;
    document.body.style.height = `${contentHeight}px`;
    return () => {
      document.body.style.height = "";
    };
  }, [contentHeight, isActive]);

  // Framer Motion spring scroll coordinates
  const { scrollY } = useScroll();

  // Kinetic smooth scrolling parameters approximating Damping = 0.12, Mass = 1.0 model
  const springScrollY = useSpring(scrollY, {
    damping: 18,     // Smooth deceleration
    stiffness: 85,   // Elastic stiffness coordinate
    mass: 1.0,       // Fluid drag inertia
    restDelta: 0.1,
    restSpeed: 0.1
  });

  // Transform scroll position into upward container translation
  const y = useTransform(springScrollY, (value) => -value);

  // If the preloader is still running or if we are on a mobile touch device, bypass fixed smooth-scroll
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  if (!isActive || isTouchDevice) {
    return <div className="w-full relative">{children}</div>;
  }

  return (
    <>
      {/* Scrollable transform container */}
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform"
      >
        {children}
      </motion.div>
    </>
  );
}
