/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Check, AlertCircle } from "lucide-react";
import { AuditFormData } from "../types";

export default function MetricHub() {
  const [formData, setFormData] = useState<AuditFormData>({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "NAME REQUIRED";
    if (!formData.email.trim()) {
      tempErrors.email = "EMAIL REQUIRED";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "INVALID EMAIL FORMAT";
    }
    if (!formData.phone.trim()) tempErrors.phone = "PHONE REQUIRED";
    if (!formData.website.trim()) tempErrors.website = "WEBSITE REQUIRED";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically as user types
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate high-speed form telemetry transmission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", website: "" });
    }, 1500);
  };

  // Check if form is valid in real time
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    /\S+@\S+\.\S+/.test(formData.email) &&
    formData.phone.trim() !== "" &&
    formData.website.trim() !== "";

  return (
    <section 
      className="relative w-full border-t border-[#e5e5e5] grid grid-cols-1 lg:grid-cols-2" 
      id="contact"
    >
      {/* LEFT COLUMN: The Authority Panel */}
      <div 
        className="bg-white/60 p-8 sm:p-12 md:p-16 flex flex-col justify-between border-r border-[#e5e5e5]" 
        id="metric-left-col"
      >
        <div className="flex items-center gap-2 mb-12">
          <span className="font-mono text-[10px] text-[#FF3333] tracking-[0.2em] uppercase font-bold">[ VIEW.04 METRIC ]</span>
          <span className="h-[1px] bg-[#e5e5e5] flex-grow"></span>
        </div>

        {/* Massive Stylized Brushed-Silver Flat Graphic Badge Block */}
        <div className="my-auto py-12 flex flex-col items-start gap-8" id="metric-silver-badge-container">
          <div 
            className="w-full bg-[#f1f1f1] border-2 border-stone-300 p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(200,200,200,0.1) 100%)",
            }}
            id="metric-brushed-badge"
          >
            {/* Tech accents */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#181818]" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#181818]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#181818]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#181818]" />

            <div className="font-mono text-xs text-[#181818] tracking-[0.25em] mb-4 uppercase">
              // AUDITED CONVERSION INCREASE
            </div>
            <div className="text-5xl sm:text-7xl font-sans font-black tracking-tighter leading-none text-[#181818] uppercase">
              95%
            </div>
            <div className="text-lg sm:text-2xl font-sans font-bold tracking-tight text-[#181818] mt-2 uppercase">
              INCREDIBLE CONVERSION RISE
            </div>
            <div className="font-sans text-xs text-[#8A8A8A] mt-2 max-w-md leading-relaxed uppercase">
              AUDITED VIA META WORKPLACE ANALYTICS & GOOGLE CLOUD DASHBOARDS ACROSS CLIENTS GLOBALLY.
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-sans text-2xl sm:text-[2.2rem] font-black tracking-[0.08em] leading-none text-[#181818] uppercase">
              FASTEST GROWING COMPANIES
            </h3>
            <p className="font-sans text-xs text-[#8A8A8A] mt-3 leading-relaxed max-w-md">
              MAK Developers has been consistently certified as a preferred partner for global enterprise transformations. Our optimized page architectures achieve near-instantaneous load boundaries, maximizing user completion rates.
            </p>
          </div>
        </div>

        {/* Foot coordinate block */}
        <div className="flex items-center justify-between border-t border-[#e5e5e5] pt-4 mt-8 font-mono text-[10px] text-[#8A8A8A] tracking-wider">
          <span>SECURED 256-BIT TLS SHIFT</span>
          <span>SYSTEM_SYS_1.4</span>
        </div>
      </div>


      {/* RIGHT COLUMN: The Action Engine (Free Marketing Audit Form) */}
      <div 
        className="bg-[#181818] p-8 sm:p-12 md:p-16 flex flex-col justify-between text-white relative" 
        id="metric-right-col"
      >
        <div className="flex items-center gap-2 mb-12">
          <span className="font-mono text-[10px] text-[#94fa50] tracking-[0.2em] uppercase font-bold">SECURE AUDIT UPLOAD</span>
          <span className="h-[1px] bg-zinc-800 flex-grow"></span>
        </div>

        {success ? (
          /* High Tech Success Screen */
          <div className="my-auto py-16 text-center flex flex-col items-center gap-6" id="form-success-boundary">
            <div className="w-16 h-16 border-2 border-[#94fa50] flex items-center justify-center text-[#94fa50] mb-4">
              <Check size={32} strokeWidth={2.5} />
            </div>
            <h3 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
              AUDIT QUEUED
            </h3>
            <p className="font-sans text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed uppercase">
              We have compiled your system parameters. A chief technology strategist will analyze your conversion boundaries and contact you in under 12 hours.
            </p>
            <div className="font-mono text-[10px] text-[#94fa50] bg-[#94fa50]/10 px-4 py-2 border border-[#94fa50]/20 mt-4 uppercase tracking-widest">
              TX_REFERENCE: {Math.random().toString(36).substring(2, 9).toUpperCase()}_OK
            </div>
            <button
              onClick={() => setSuccess(false)}
              className="mt-6 px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 font-mono text-xs text-white tracking-wider uppercase transition-colors"
            >
              TRANSMIT NEW BATCH
            </button>
          </div>
        ) : (
          /* The Form Interface */
          <div className="my-auto" id="audit-form-container">
            <div className="mb-8">
              <h3 className="font-sans text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
                GET YOUR FREE MARKETING AUDIT
              </h3>
              <p className="font-sans text-xs text-zinc-400 mt-2 uppercase tracking-wide">
                Zero fees. Zero strings attached. Let us audit your systems.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="audit-form">
              {/* Field: Name */}
              <div className="flex flex-col gap-1 relative">
                <label className="font-mono text-[10px] text-white font-normal uppercase tracking-widest">01 Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="EX: NIKOLA TESLA"
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-zinc-800 py-3 text-sm font-sans tracking-wide text-white focus:outline-none focus:border-[#94fa50] transition-colors placeholder-zinc-700 uppercase"
                />
                {errors.name && (
                  <div className="absolute right-0 bottom-3 text-red-500 flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider">
                    <AlertCircle size={10} /> {errors.name}
                  </div>
                )}
              </div>

              {/* Field: Email */}
              <div className="flex flex-col gap-1 relative">
                <label className="font-mono text-[10px] text-white font-normal uppercase tracking-widest">02 Enterprise Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="EX: TESLA@COMPANY.COM"
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-zinc-800 py-3 text-sm font-sans tracking-wide text-white focus:outline-none focus:border-[#94fa50] transition-colors placeholder-zinc-700 uppercase"
                />
                {errors.email && (
                  <div className="absolute right-0 bottom-3 text-red-500 flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider">
                    <AlertCircle size={10} /> {errors.email}
                  </div>
                )}
              </div>

              {/* Field: Phone Number */}
              <div className="flex flex-col gap-1 relative">
                <label className="font-mono text-[10px] text-white font-normal uppercase tracking-widest">03 Secure Line</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="EX: +1 555-0199"
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-zinc-800 py-3 text-sm font-sans tracking-wide text-white focus:outline-none focus:border-[#94fa50] transition-colors placeholder-zinc-700 uppercase"
                />
                {errors.phone && (
                  <div className="absolute right-0 bottom-3 text-red-500 flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider">
                    <AlertCircle size={10} /> {errors.phone}
                  </div>
                )}
              </div>

              {/* Field: Website */}
              <div className="flex flex-col gap-1 relative">
                <label className="font-mono text-[10px] text-white font-normal uppercase tracking-widest">04 System Endpoints (URL)</label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="EX: HTTPS://WORLDWIDEPAGE.COM"
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-zinc-800 py-3 text-sm font-sans tracking-wide text-white focus:outline-none focus:border-[#94fa50] transition-colors placeholder-zinc-700 uppercase"
                />
                {errors.website && (
                  <div className="absolute right-0 bottom-3 text-red-500 flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider">
                    <AlertCircle size={10} /> {errors.website}
                  </div>
                )}
              </div>

              {/* Submission Button - 0px corners edge-to-edge, flashes Neon Green when valid or on hover */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 mt-6 font-mono text-xs tracking-widest uppercase transition-all duration-350 cursor-pointer ${
                  isFormValid 
                    ? "bg-[#94fa50] text-[#181818] font-bold hover:bg-white hover:text-black" 
                    : "bg-[#2A2A2A] text-zinc-500 hover:bg-[#FF3333] hover:text-white"
                }`}
                id="submit-audit-btn"
              >
                {loading ? "TRANSMITTING DATA..." : "TELL US TODAY"}
              </button>
            </form>
          </div>
        )}

        {/* Bottom Status panel */}
        <div className="flex items-center justify-between border-t border-zinc-800 pt-4 mt-12 font-mono text-[10px] text-zinc-500 tracking-wider">
          <span>INTEGRITY_SHIELD: STABLE</span>
          <span>MAK_DEVELOPERS CORE CLOUD</span>
        </div>
      </div>
    </section>
  );
}
