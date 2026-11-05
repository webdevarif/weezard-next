/**
 * Hero Section Container for Services Page
 * 
 * Orchestrates the HeroContent and HeroGraphic components in a responsive
 * 2-column grid layout on desktop, and a clean vertical stacked layout on mobile.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations/framer";
import { HeroContent } from "./components/HeroContent";
import { HeroGraphic } from "./components/HeroGraphic";

export const HeroSection: React.FC = () => {
  return (
    <motion.section
      className="relative z-0 overflow-hidden pt-[40px] pb-[60px] sm:pt-[60px] sm:pb-[80px] lg:pt-[80px] lg:pb-[100px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F5F8FE_100%)]"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Top ambient background horizontal bar glow */}
      <div className="absolute w-[80vw] h-[35px] -top-2 start-1/2 -translate-x-1/2 rounded-[50%] bg-[linear-gradient(272.91deg,#C7B0FE_17.7%,#305CD8_88.86%)] blur-[55px] -z-[1] pointer-events-none" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-y-[40px] gap-x-[30px] items-center">
          {/* Left Column: Heading, Subtitle, Button */}
          <div className="w-full">
            <HeroContent />
          </div>

          {/* Right Column: Hero Graphic */}
          <div className="w-full">
            <HeroGraphic />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;

