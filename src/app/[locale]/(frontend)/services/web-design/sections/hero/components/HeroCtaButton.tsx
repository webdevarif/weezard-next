/**
 * HeroCtaButton Component
 * 
 * Primary conversion button matching exact Figma dimensions:
 * - Width: 290px (on desktop/tablet)
 * - Height: 60px
 * - Border-radius: 30px (rounded-full)
 * - Color: #305CD8 with hover #2348B8
 * - Diagonal arrow icon matching Figma SVG
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "@/lib/i18n/routing";
import { fadeInUp } from "@/lib/animations/framer";

export const HeroCtaButton: React.FC = () => {
  return (
    <motion.div variants={fadeInUp} className="pt-2 sm:pt-3">
      <Link
        href="/contact-us"
        className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-[290px] h-[56px] sm:h-[60px] rounded-full bg-[#305CD8] hover:bg-[#2348b8] text-white text-[15px] sm:text-[16px] font-semibold shadow-[0_10px_25px_rgba(48,92,216,0.3)] hover:shadow-[0_14px_30px_rgba(48,92,216,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        <span>Audit Your Website for Free</span>
        <svg
          className="w-4 h-4 sm:w-[18px] sm:h-[18px] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H7M17 7V17"
          />
        </svg>
      </Link>
    </motion.div>
  );
};

export default HeroCtaButton;
