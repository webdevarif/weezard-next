/**
 * HeroFloatingPills Component
 * 
 * Floating feature tag pills:
 * - On Desktop: hovers directly and tightly above the main hero showcase card (481x167 coordinates).
 * - On Mobile: hovers at the very top of the section (430x175 coordinates from mobile_hero_svg.txt).
 * 
 * Hover interaction: All pills transition smoothly to royal brand blue (#305CD8) with white text.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";

interface PillProps {
  label: string;
  isPurple?: boolean;
  className?: string;
  floatY?: [number, number, number];
  duration?: number;
  delay?: number;
}

const PillItem: React.FC<PillProps> = ({
  label,
  isPurple = false,
  className = "",
  floatY = [0, -3, 0],
  duration = 4,
  delay = 0,
}) => {
  const baseClasses = isPurple
    ? "bg-[#903DD1] text-white hover:bg-[#305CD8] hover:text-white shadow-[0_6px_16px_rgba(144,61,209,0.25)] hover:shadow-[0_8px_22px_rgba(48,92,216,0.35)]"
    : "bg-[#FFF3C4] text-[#092856] hover:bg-[#305CD8] hover:text-white shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_22px_rgba(48,92,216,0.35)]";

  return (
    <motion.div
      animate={{ y: floatY }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
      className={`group inline-flex items-center justify-center h-[31px] sm:h-[38px] px-3.5 sm:px-4 rounded-full text-[12px] sm:text-[13px] font-semibold cursor-pointer select-none transition-all duration-300 ease-out hover:scale-105 active:scale-95 whitespace-nowrap ${baseClasses} ${className}`}
    >
      <span className="transition-colors duration-300">{label}</span>
    </motion.div>
  );
};

export const HeroFloatingPills: React.FC<{ isMobileOnly?: boolean }> = ({ isMobileOnly = false }) => {
  if (isMobileOnly) {
    return (
      <div className="relative w-full max-w-[430px] h-[180px] mx-auto select-none overflow-visible">
        {/* Mobile Exact Coordinates from mobile_hero_svg.txt (Canvas 430px) */}

        {/* 1. SEO-Friendly (x: 251.9px, y: 40px, w: 94px, 0deg) */}
        <div className="absolute left-[58.6%] top-[40px] -translate-x-0">
          <PillItem
            label="SEO-Friendly"
            className="w-[94px] h-[31px] text-[11.5px]"
            floatY={[0, -3, 0]}
            duration={4.4}
            delay={0.2}
          />
        </div>

        {/* 2. Visitor Analysis (x: 177.9px, y: 66.7px, w: 107px, rotate: 8.47deg around top-left) */}
        <div className="absolute left-[41.4%] top-[66.7px] origin-top-left transform rotate-[8.47deg]">
          <PillItem
            label="Visitor Analysis"
            className="w-[107px] h-[31px] text-[11.5px]"
            floatY={[0, -4, 0]}
            duration={4.2}
            delay={0.4}
          />
        </div>

        {/* 3. Unlimited revision (x: 20px, y: 84px, w: 122px, rotate: -15deg around top-left) */}
        <div className="absolute left-[4.6%] top-[84px] origin-top-left transform -rotate-[15deg]">
          <PillItem
            label="Unlimited revision"
            className="w-[122px] h-[31px] text-[11.5px]"
            floatY={[0, -3, 0]}
            duration={3.8}
            delay={0.1}
          />
        </div>

        {/* 4. Unique Designs (x: 82.6px, y: 108.8px, w: 109px, 0deg) */}
        <div className="absolute left-[19.2%] top-[108.8px]">
          <PillItem
            label="Unique Designs"
            className="w-[109px] h-[31px] text-[11.5px]"
            floatY={[0, -3, 0]}
            duration={4.0}
            delay={0.5}
          />
        </div>

        {/* 5. Mobile Responsive (x: 283.5px, y: 108.8px, w: 125.5px, 0deg) */}
        <div className="absolute left-[65.9%] top-[108.8px]">
          <PillItem
            label="Mobile Responsive"
            className="w-[125px] h-[31px] text-[11.5px]"
            floatY={[0, -4, 0]}
            duration={4.5}
            delay={0.7}
          />
        </div>

        {/* 6. Fast Loading (x: 179px, y: 144.7px, w: 93px, rotate: -9.59deg around top-left) */}
        <div className="absolute left-[41.6%] top-[144.7px] origin-top-left transform -rotate-[9.59deg]">
          <PillItem
            label="Fast Loading"
            className="w-[93px] h-[31px] text-[11.5px]"
            floatY={[0, -3, 0]}
            duration={3.6}
            delay={0.8}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="hidden lg:block absolute top-0 left-0 right-0 w-full h-[167px] pointer-events-none z-20">
      <div className="relative w-[481px] h-[167px] mx-auto pointer-events-auto">
        {/* 1. SEO-Friendly (x: 286px, y: 0px, w: 116px, 0deg) */}
        <div className="absolute left-[286px] top-0">
          <PillItem
            label="SEO-Friendly"
            className="w-[116px]"
            floatY={[0, -4, 0]}
            duration={4.6}
            delay={0.3}
          />
        </div>

        {/* 2. Visitor Analysis (x: 195px, y: 33px, w: 132px, rotate: +8.47deg around top-left) */}
        <div className="absolute left-[195px] top-[33px] origin-top-left transform rotate-[8.47deg]">
          <PillItem
            label="Visitor Analysis"
            className="w-[132px]"
            floatY={[0, -4, 0]}
            duration={4.5}
            delay={0.2}
          />
        </div>

        {/* 3. Unlimited revision (x: 0px, y: 54px, w: 151px, rotate: -15deg around top-left) */}
        <div className="absolute left-0 top-[54px] origin-top-left transform -rotate-[15deg]">
          <PillItem
            label="Unlimited revision"
            className="w-[151px]"
            floatY={[0, -4, 0]}
            duration={3.8}
          />
        </div>

        {/* 4. Unique Designs (x: 77px, y: 85px, w: 135px, 0deg) */}
        <div className="absolute left-[77px] top-[85px]">
          <PillItem
            label="Unique Designs"
            className="w-[135px]"
            floatY={[0, -3, 0]}
            duration={4.2}
            delay={0.5}
          />
        </div>

        {/* 5. Mobile Responsive (x: 325px, y: 85px, w: 155px, 0deg) */}
        <div className="absolute left-[325px] top-[85px]">
          <PillItem
            label="Mobile Responsive"
            className="w-[155px]"
            floatY={[0, -4, 0]}
            duration={4.0}
            delay={0.7}
          />
        </div>

        {/* 6. Fast Loading (x: 196px, y: 129px, w: 115px, rotate: -9.59deg around top-left) */}
        <div className="absolute left-[196px] top-[129px] origin-top-left transform -rotate-[9.59deg]">
          <PillItem
            label="Fast Loading"
            className="w-[115px]"
            floatY={[0, -3, 0]}
            duration={3.6}
            delay={0.8}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroFloatingPills;
