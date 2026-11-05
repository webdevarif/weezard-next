/**
 * HeroHeadline Component
 * 
 * Main heading conforming 100% to Figma tokens (hero,txt):
 * - "All-In-One " (color: #092856)
 * - "Web" (color: #305CD8)
 * - "Design Packages " (color: #305CD8)
 * - "for" (color: #092856)
 * - "Small Businesses" (color: #092856)
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";

export const HeroHeadline: React.FC = () => {
  return (
    <motion.h1
      variants={fadeInUp}
      className="text-[36px] sm:text-[46px] md:text-[50px] lg:text-[54px] xl:text-[58px] font-bold font-dm-sans leading-[1.12] -tracking-[0.025em] text-[#092856]"
    >
      All-In-One{" "}
      <span className="text-[#305CD8]">Web</span>
      <br className="hidden sm:inline" />
      <span className="text-[#305CD8]">Design Packages</span>{" "}
      for
      <br className="hidden sm:inline" />
      Small Businesses
    </motion.h1>
  );
};

export default HeroHeadline;
