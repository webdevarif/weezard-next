"use client";

/**
 * SidebarContactForm Component
 * 
 * Renders the secondary lead-capture contact widget on the single blog post sidebar:
 * - "Contact us" heading
 * - Input fields: Name, Email address, Message
 * - Purple CTA button: "Get a Free Quate ->"
 */

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function SidebarContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="w-full bg-white rounded-[20px] p-6 border border-[#EEF2F6] shadow-[0_10px_30px_rgba(20,40,90,0.03)]">
      {/* Title */}
      <h3 className="text-[20px] font-bold text-navy font-dm-sans mb-5">
        Contact us
      </h3>

      {submitted ? (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-[12px] text-emerald-800 text-[14px] text-center font-manrope">
          Thank you! We will get in touch with you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <input
              type="text"
              required
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#FAFCFF] border border-[#E2E8F0] rounded-[10px] px-4 py-3 text-[14px] text-navy placeholder-[#94A3B8] focus:outline-none focus:border-[#305CD8] focus:bg-white focus:ring-1 focus:ring-[#305CD8] transition-colors"
            />
          </div>

          <div>
            <input
              type="email"
              required
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#FAFCFF] border border-[#E2E8F0] rounded-[10px] px-4 py-3 text-[14px] text-navy placeholder-[#94A3B8] focus:outline-none focus:border-[#305CD8] focus:bg-white focus:ring-1 focus:ring-[#305CD8] transition-colors"
            />
          </div>

          <div>
            <textarea
              rows={4}
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#FAFCFF] border border-[#E2E8F0] rounded-[10px] px-4 py-3 text-[14px] text-navy placeholder-[#94A3B8] focus:outline-none focus:border-[#305CD8] focus:bg-white focus:ring-1 focus:ring-[#305CD8] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-[15px] py-3.5 px-6 rounded-[12px] flex items-center justify-between shadow-[0_4px_16px_rgba(139,92,246,0.35)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.45)] transition-all cursor-pointer"
          >
            <span>Get a Free Quate</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </form>
      )}
    </div>
  );
}

