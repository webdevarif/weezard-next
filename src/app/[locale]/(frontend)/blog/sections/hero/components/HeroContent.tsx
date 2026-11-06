/**
 * HeroContent Component for Blog Page
 * Renders the primary header copy:
 * - Headline: "Our most recent blog"
 * - Subtitle: Company mission and digital strategy overview
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";

export const HeroContent: React.FC = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="space-y-3.5 sm:space-y-5 text-center max-w-[760px] mx-auto"
    >
      {/* 
        Responsive heading:
        On mobile, capped with max-w-[340px] so "Our most recent" and "blog" break into two balanced lines matching Figma.
      */}
      <h1 className="text-[34px] xs:text-[38px] sm:text-[46px] lg:text-[52px] font-bold font-dm-sans text-white leading-[1.18] -tracking-[0.02em] max-w-[340px] sm:max-w-none mx-auto">
        Our most recent blog
      </h1>
      <p className="text-white/80 text-[14.5px] sm:text-[16px] lg:text-[17px] font-dm-sans leading-[1.6] sm:leading-[1.65] max-w-[680px] mx-auto">
        TechNest empowers small businesses to thrive online by boosting their digital presence. Whether starting a new project or upgrading, we ensure your website and marketing strategies align perfectly.
      </p>
    </motion.div>
  );
};

export default HeroContent;

