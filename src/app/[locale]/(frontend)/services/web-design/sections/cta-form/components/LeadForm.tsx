/**
 * LeadForm Component for Services / Web Design Page
 * Renders the high-converting contact form card matching Figma tokens:
 * - Card: bg-[#092856], 1px solid #305CD8, rounded-[16px], top subtle linear blue gradient
 * - Inputs: bg-white/[0.06], 1px solid #5073A7, rounded-[8px]
 * - Submit: Accent yellow #EAD53F pill button with "Send Message ↗"
 */

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";
import { ArrowUpRight, ChevronDown, CheckCircle2 } from "lucide-react";

export const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "Web Design",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full lg:max-w-[600px] relative rounded-[16px] bg-[#092856] border border-[#305CD8] p-6 sm:p-9 lg:p-[40px] shadow-[0_20px_60px_rgba(37,75,148,0.13)] overflow-hidden"
    >
      {/* Figma Linear Gradient Fill overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[16px] opacity-60"
        style={{
          background:
            "linear-gradient(180deg, rgba(48, 92, 216, 0.4) 0%, rgba(48, 92, 216, 0) 100%)",
        }}
      />

      <div className="relative z-10">
        {submitted ? (
          <div className="py-16 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EAD53F]/20 text-[#EAD53F] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-[24px] font-bold text-white font-dm-sans">
              Thank You!
            </h3>
            <p className="text-[#CBD5E1] text-[15px] max-w-[360px] mx-auto leading-relaxed">
              Your message has been received. Our team will review your inquiry and get back to you within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({ fullName: "", email: "", service: "Web Design", message: "" });
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-dm-sans transition-colors"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Field 1: Full Name */}
            <div>
              <label
                htmlFor="cta-fullName"
                className="block text-[14px] text-white font-dm-sans font-medium mb-2"
              >
                Full Name
              </label>
              <input
                id="cta-fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder="Chris Classer"
                className="w-full h-[54px] rounded-[8px] bg-white/[0.06] border border-[#5073A7] px-4 text-white text-[15px] font-dm-sans placeholder:text-white/50 focus:border-[#305CD8] focus:bg-white/[0.09] focus:outline-none transition-all"
              />
            </div>

            {/* Field 2: Email Address */}
            <div>
              <label
                htmlFor="cta-email"
                className="block text-[14px] text-white font-dm-sans font-medium mb-2"
              >
                Email Address
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Weezard@gmail.com"
                className="w-full h-[54px] rounded-[8px] bg-white/[0.06] border border-[#5073A7] px-4 text-white text-[15px] font-dm-sans placeholder:text-white/50 focus:border-[#305CD8] focus:bg-white/[0.09] focus:outline-none transition-all"
              />
            </div>

            {/* Field 3: Services */}
            <div>
              <label
                htmlFor="cta-services"
                className="block text-[14px] text-white font-dm-sans font-medium mb-2"
              >
                Services
              </label>
              <div className="relative">
                <select
                  id="cta-services"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full h-[54px] rounded-[8px] bg-white/[0.06] border border-[#5073A7] px-4 pr-11 text-white text-[15px] font-dm-sans focus:border-[#305CD8] focus:bg-white/[0.09] focus:outline-none appearance-none transition-all cursor-pointer"
                >
                  <option value="Web Design" className="bg-[#092856] text-white">
                    Web Design
                  </option>
                  <option value="UI/UX Design" className="bg-[#092856] text-white">
                    UI/UX Design
                  </option>
                  <option value="Web Development" className="bg-[#092856] text-white">
                    Web Development
                  </option>
                  <option value="Full-Stack Solution" className="bg-[#092856] text-white">
                    Full-Stack Solution
                  </option>
                  <option value="Custom Project" className="bg-[#092856] text-white">
                    Custom Project
                  </option>
                </select>
                <ChevronDown className="w-5 h-5 text-white absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none stroke-[2]" />
              </div>
            </div>

            {/* Field 4: Message */}
            <div>
              <label
                htmlFor="cta-message"
                className="block text-[14px] text-white font-dm-sans font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="cta-message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Writing message"
                className="w-full min-h-[140px] sm:min-h-[154px] rounded-[8px] bg-white/[0.06] border border-[#5073A7] p-4 text-white text-[15px] font-dm-sans placeholder:text-white/50 focus:border-[#305CD8] focus:bg-white/[0.09] focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-[58px] rounded-full bg-[#EAD53F] hover:bg-[#f2de4a] text-[#092856] font-dm-sans font-bold text-[16px] sm:text-[17px] flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_9px_45px_rgba(0,100,210,0.37)] hover:shadow-[0_12px_50px_rgba(234,213,63,0.35)] active:scale-[0.99] cursor-pointer"
              >
                <span>Send Message</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.2]" />
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default LeadForm;
