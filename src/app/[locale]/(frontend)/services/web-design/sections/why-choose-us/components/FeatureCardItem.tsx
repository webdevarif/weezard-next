/**
 * FeatureCardItem Component
 * 
 * Individual colored feature card for Why Choose Us section.
 * Renders the dual-tone icon, title, and description inside a soft pastel rounded card.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";

export interface FeatureCardItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  bgColor: string;
}

export const FeatureCardItem: React.FC<FeatureCardItemProps> = ({
  icon: IconComponent,
  title,
  description,
  bgColor,
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      style={{ backgroundColor: bgColor }}
      className="rounded-[16px] sm:rounded-[18px] p-4 sm:p-5 lg:p-5 flex items-start gap-4 sm:gap-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border border-black/[0.03]"
    >
      {/* Dual-Tone Vector Icon from Figma */}
      <div className="shrink-0 pt-0.5">
        <IconComponent className="w-10 h-10 sm:w-11 sm:h-11" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[#092856] font-dm-sans font-bold text-[17px] sm:text-[18px] lg:text-[19px] leading-tight">
          {title}
        </h3>
        <p className="text-[#495162] text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-[1.55] mt-1.5">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCardItem;
