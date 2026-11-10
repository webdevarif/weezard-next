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
import { ExpandableParagraph } from "@/app/[locale]/components/ui/expandable-paragraph";

export const RecentProjectsHeader: React.FC = () => {
  const descriptionText =
    "We’ve worked with a variety of small businesses, startups and SMEs to build websites. Our work is a reflection of what we can do for the growth of your brand. We design with purpose and clarity to ensure your project delivers lasting results.";

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center max-w-[780px] mx-auto mb-10 sm:mb-14 px-4"
    >
      {/* Primary Section Title - Larger & bold centered */}
      <h2 className="text-[34px] sm:text-[44px] md:text-[50px] font-bold font-dm-sans text-[#092856] -tracking-[0.025em] leading-[1.12]">
        Our Recent Web Design Projects
      </h2>

      {/* Subtitle Value Proposition with 3-line clamping on mobile */}
      <div className="mt-4 sm:mt-5">
        <ExpandableParagraph
          text={descriptionText}
          lines={3}
          variant="blue"
          align="center"
          className="text-[15px] sm:text-[16px] text-[#495162] leading-[1.65] text-justify sm:text-center"
          buttonClassName="font-medium text-[#305CD8] hover:underline"
        />
      </div>
    </motion.div>
  );
};

export default RecentProjectsHeader;

