/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "HOME", id: "home" },
    { name: "DEVELOPMENT SERVICES", id: "development" },
    { name: "MARKETING SOLUTIONS", id: "marketing" },
    { name: "WHO WE ARE", id: "about" },
    { name: "CONTACT", id: "contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? "bg-[#f1f1f1]/95 backdrop-blur-md border-b border-[#e5e5e5] h-15" 
        : "bg-transparent border-b border-transparent h-20"
    }`}>
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Left Block: Logo */}
        <div 
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 cursor-pointer group"
          id="nav-logo"
        >
          <div className={`w-8 h-8 border flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
            isScrolled 
              ? "border-[#181818] bg-[#181818] text-white group-hover:bg-[#94fa50] group-hover:text-[#181818] group-hover:border-[#94fa50]" 
              : "border-white bg-transparent text-white group-hover:bg-[#94fa50] group-hover:text-[#181818] group-hover:border-[#94fa50]"
          }`}>
            M
          </div>
          <span className={`font-sans font-bold text-lg tracking-wider uppercase transition-colors duration-300 ${
            isScrolled ? "text-[#181818]" : "text-white"
          }`}>
            MAK Developers
          </span>
          <span className="w-1.5 h-1.5 bg-[#FF3333] rounded-none inline-block"></span>
        </div>

        {/* Center Block: Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 h-full" id="nav-links">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`relative h-full px-1 text-xs font-medium tracking-[0.2em] transition-colors duration-200 hover:text-[#94fa50] uppercase cursor-pointer ${
                  isScrolled ? "text-[#181818]" : "text-white"
                }`}
              >
                {link.name}
                {/* Active Tracking Underline */}
                {isActive && (
                  <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#94fa50]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Block: CTA button - aggressive rectangular hover */}
        <div className="hidden lg:block" id="nav-cta">
          <button
            onClick={() => onNavigate("contact")}
            className={`px-6 py-2 bg-transparent font-mono text-xs tracking-widest uppercase transition-all duration-300 border cursor-pointer ${
              isScrolled 
                ? "border-[#181818] text-[#181818] hover:bg-[#181818] hover:text-[#94fa50] hover:border-[#181818]" 
                : "text-[#94fa50] border-[#94fa50]/40 hover:bg-[#94fa50] hover:text-[#181818] hover:border-[#94fa50]"
            }`}
          >
            FREE AUDIT
          </button>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors hover:text-[#94fa50] ${
            isScrolled ? "text-[#181818]" : "text-white"
          }`}
          aria-label="Toggle Menu"
          id="hamburger-btn"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div 
          className={`lg:hidden absolute left-0 right-0 bg-[#181818] border-b border-zinc-800 py-6 px-6 flex flex-col gap-4 animate-fadeIn transition-all duration-300 ${
            isScrolled ? "top-15" : "top-20"
          }`}
          id="mobile-nav-panel"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left text-sm tracking-[0.15em] font-medium py-2 uppercase border-b border-zinc-800 transition-colors ${
                activeSection === link.id ? "text-[#94fa50]" : "text-zinc-300 hover:text-[#94fa50]"
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => {
              onNavigate("contact");
              setMobileMenuOpen(false);
            }}
            className="w-full py-3 mt-2 bg-[#94fa50] text-[#181818] font-mono text-xs tracking-widest uppercase text-center font-bold"
          >
            FREE AUDIT
          </button>
        </div>
      )}
    </nav>
  );
}
