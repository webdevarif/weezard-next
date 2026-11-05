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
      <h3 className="text-[26px] sm:text-[30px] font-bold text-navy font-dm-sans mb-1">
        Leave a comment
      </h3>
      <p className="text-[14px] sm:text-[15px] text-[#64748B] font-manrope mb-8">
        Quickly actualize flexible innovation with diverse resources.
      </p>

      {submitted ? (
        <div className="p-5 bg-blue/10 border border-blue/20 rounded-[14px] text-navy text-[15px] font-manrope">
          Thank you! Your comment has been submitted and is awaiting moderation.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white border border-[#C7D2FE] rounded-[10px] px-5 py-3.5 text-[15px] text-navy placeholder-[#94A3B8] focus:outline-none focus:border-[#305CD8] focus:ring-1 focus:ring-[#305CD8] transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white border border-[#C7D2FE] rounded-[10px] px-5 py-3.5 text-[15px] text-navy placeholder-[#94A3B8] focus:outline-none focus:border-[#305CD8] focus:ring-1 focus:ring-[#305CD8] transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="Your phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-white border border-[#C7D2FE] rounded-[10px] px-5 py-3.5 text-[15px] text-navy placeholder-[#94A3B8] focus:outline-none focus:border-[#305CD8] focus:ring-1 focus:ring-[#305CD8] transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              rows={5}
              required
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white border border-[#C7D2FE] rounded-[10px] px-5 py-3.5 text-[15px] text-navy placeholder-[#94A3B8] focus:outline-none focus:border-[#305CD8] focus:ring-1 focus:ring-[#305CD8] transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#305CD8] hover:bg-[#254bbd] text-white font-medium text-[15px] px-8 py-3.5 rounded-full shadow-[0_4px_16px_rgba(48,92,216,0.3)] hover:shadow-[0_6px_22px_rgba(48,92,216,0.4)] transition-all cursor-pointer"
            >
              <span>Post comment</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

