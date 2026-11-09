/**
 * RecentProjectsHeader Component
 * 
 * Centered section header matching Figma typography:
 * - Headline: "Our Recent Web Design Projects"
 * - Subtitle paragraph describing brand capabilities
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";

export const RecentProjectsHeader: React.FC = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center max-w-[780px] mx-auto mb-12 sm:mb-16 px-4"
    >
      {/* Primary Section Title */}
      <h2 className="text-[34px] sm:text-[42px] md:text-[48px] font-bold font-dm-sans text-[#092856] -tracking-[0.025em] leading-[1.15]">
        Our Recent Web Design Projects
      </h2>

      {/* Subtitle Value Proposition */}
      <p className="mt-4 text-[15px] sm:text-[16px] text-[#495162] leading-[1.65]">
        We’ve worked with a variety of small businesses, startups and SMEs to build websites.
        Our work is a reflection of what we can do for the growth of your brand.
      </p>
    </motion.div>
  );
};

export default RecentProjectsHeader;

