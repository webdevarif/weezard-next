"use client";

/**
 * CommentForm Component
 * 
 * Renders the "Leave a comment" section at the bottom of the article:
 * - Title: "Leave a comment"
 * - Subtitle: "Quickly actualize flexible innovation with diverse resources."
 * - Form fields: Your Name, Email, Your phone, Message
 * - Submit button: "Post comment ↗" (#305CD8 rounded pill)
 */

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function CommentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3500);
  };

  return (
    <section className="mt-12 pt-8 border-t border-[#EEF2F6]">
      {/* Heading */}
      <h3 className="text-[28px] sm:text-[34px] lg:text-[36px] font-bold text-[#092856] font-dm-sans mb-2 leading-tight">
        Leave a comment
      </h3>
      <p className="text-[15px] sm:text-[16px] text-[#495162] font-manrope mb-8">
        Quickly actualize flexible innovation with diverse resources.
      </p>

      {submitted ? (
        <div className="p-6 bg-blue/10 border border-blue/20 rounded-[14px] text-[#092856] text-[15px] font-manrope">
          Thank you! Your comment has been submitted and is awaiting moderation.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          {/* Your Name */}
          <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#305CD8] to-[#903DD1]">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-[60px] sm:h-[64px] bg-[#EEF2F9] rounded-[9px] px-6 text-[15px] sm:text-[16px] text-[#092856] placeholder-[#495162] font-manrope outline-none"
            />
          </div>

          {/* Email */}
          <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#305CD8] to-[#903DD1]">
            <input
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-[60px] sm:h-[64px] bg-[#EEF2F9] rounded-[9px] px-6 text-[15px] sm:text-[16px] text-[#092856] placeholder-[#495162] font-manrope outline-none"
            />
          </div>

          {/* Your phone */}
          <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#305CD8] to-[#903DD1]">
            <input
              type="tel"
              placeholder="Your phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full h-[60px] sm:h-[64px] bg-[#EEF2F9] rounded-[9px] px-6 text-[15px] sm:text-[16px] text-[#092856] placeholder-[#495162] font-manrope outline-none"
            />
          </div>

          {/* Message */}
          <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#305CD8] to-[#903DD1]">
            <textarea
              required
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full h-[210px] sm:h-[235px] bg-[#EEF2F9] rounded-[9px] p-6 text-[15px] sm:text-[16px] text-[#092856] placeholder-[#495162] font-manrope outline-none resize-none block"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2.5 h-[56px] sm:h-[60px] px-8 sm:px-9 rounded-full bg-[#305CD8] hover:bg-[#254cc0] active:scale-[0.98] text-white font-manrope font-semibold text-[15px] sm:text-[16px] shadow-[0_9px_45px_rgba(48,92,216,0.37)] hover:shadow-[0_12px_50px_rgba(48,92,216,0.5)] transition-all cursor-pointer"
            >
              <span>Post comment</span>
              <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={2} />
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

