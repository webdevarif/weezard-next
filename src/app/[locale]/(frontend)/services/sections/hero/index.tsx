/**
 * Hero Section Container for Services Page
 * 
 * Orchestrates HeroContent and HeroGraphic components in a responsive
 * 2-column grid layout on desktop, and a clean vertical stacked layout on mobile.
 * 
 * Figma Desktop Alignment:
 * - Base canvas background: linear-gradient(180deg, #FFFFFF 0%, #F6F8FA 100%)
 * - Top-left ambient glow: radial/linear violet-cyan halo
 * - Right backdrop: translucent angled rounded card (rotated ~21.13°)
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
      className="relative z-0 overflow-hidden pt-[40px] pb-[50px] sm:pt-[65px] sm:pb-[75px] lg:pt-[90px] lg:pb-[110px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F6F8FA_100%)]"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Top ambient background horizontal bar glow */}
      <div className="absolute w-[90vw] md:w-[80vw] h-[25px] sm:h-[35px] -top-2 start-1/2 -translate-x-1/2 rounded-[50%] bg-[linear-gradient(272.91deg,#C7B0FE_17.7%,#305CD8_88.86%)] blur-[35px] sm:blur-[55px] -z-[1] pointer-events-none" />

      {/* Top-left ambient soft glow matching Figma paint1/paint2 */}
      <div 
        className="absolute -top-[100px] sm:-top-[120px] -left-[80px] sm:-left-[100px] w-[320px] sm:w-[450px] lg:w-[520px] h-[320px] sm:h-[450px] lg:h-[520px] rounded-full bg-gradient-to-br from-[#9578FE]/20 via-[#78BDF6]/15 to-transparent blur-[60px] sm:blur-[85px] pointer-events-none -z-[1]"
        aria-hidden="true"
      />

      {/* Angled backdrop card on the right matching Figma: x=1260 y=307 w=1078 h=899 rx=141 deg=21.13 */}
      <div
        className="hidden lg:block absolute -right-[120px] xl:-right-[60px] top-[140px] xl:top-[160px] w-[780px] xl:w-[940px] h-[640px] xl:h-[780px] rounded-[120px] xl:rounded-[141px] rotate-[21.13deg] bg-gradient-to-br from-[#305CD8] to-[#903DD1] opacity-[0.09] pointer-events-none -z-[1]"
        aria-hidden="true"
      />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.15fr] gap-y-[32px] sm:gap-y-[40px] gap-x-[30px] lg:gap-x-[40px] xl:gap-x-[60px] items-center">
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

