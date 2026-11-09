/**
 * WhyChooseUs Section Container for Services Page
 * 
 * Arranges the WhyChooseUsContent and WhyChooseUsGraphic into a 2-column layout
 * on desktop (>= lg) and stacked vertically on mobile (< lg).
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations/framer";
import { WhyChooseUsContent } from "./components/WhyChooseUsContent";
import { WhyChooseUsGraphic } from "./components/WhyChooseUsGraphic";

export const WhyChooseUsSection: React.FC = () => {
  return (
    <motion.section
      className="py-[48px] sm:py-[80px] lg:py-[120px] bg-white overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-y-[36px] lg:gap-x-[36px] items-center">
          {/* Left Column: Text Content & Points */}
          <div className="w-full">
            <WhyChooseUsContent />
          </div>

          {/* Right Column: Collage Graphic */}
          <div className="w-full">
            <WhyChooseUsGraphic />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;

