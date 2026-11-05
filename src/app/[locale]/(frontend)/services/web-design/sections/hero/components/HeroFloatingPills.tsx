/**
 * HeroFloatingPills Component
 * 
 * Floating feature tag pills hovering directly and tightly above the main hero showcase card:
 * - "Fast Loading" sits ~10-12px right above the card
 * - "Unique Designs" and "Mobile Responsive" hover ~30px above the card
 * - "Unlimited revision" and "Visitor Analysis" sit at ~55px above the card
 * - "SEO-Friendly" sits neatly at ~75px above the card
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
  floatY = [0, -4, 0],
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
      className={`group inline-flex items-center justify-center h-[32px] sm:h-[35px] px-3.5 sm:px-4 rounded-full text-[12px] sm:text-[13px] font-semibold cursor-pointer select-none transition-all duration-300 ease-out hover:scale-105 active:scale-95 whitespace-nowrap ${baseClasses} ${className}`}
    >
      <span className="transition-colors duration-300">{label}</span>
    </motion.div>
  );
};

export const HeroFloatingPills: React.FC = () => {
  return (
    <>
      {/* Desktop & Tablet Floating Layout - Hugging closely above the Card */}
      <div className="hidden sm:block absolute top-0 left-0 right-0 w-full h-[120px] pointer-events-none z-20">
        <div className="relative w-full h-full max-w-[580px] lg:max-w-[620px] mx-auto pointer-events-auto">
          {/* 1. Unlimited revision (Purple, rotated -15deg) */}
          <div className="absolute left-[3%] lg:left-[5%] top-[18px] transform -rotate-[15deg]">
            <PillItem
              label="Unlimited revision"
              isPurple={true}
              floatY={[0, -4, 0]}
              duration={3.8}
            />
          </div>

          {/* 2. Unique Designs (Yellow, hugging above left side of card) */}
          <div className="absolute left-[16%] lg:left-[18%] top-[56px]">
            <PillItem
              label="Unique Designs"
              floatY={[0, -3, 0]}
              duration={4.2}
              delay={0.5}
            />
          </div>

          {/* 3. Visitor Analysis (Yellow, rotated +8.5deg) */}
          <div className="absolute left-[34%] lg:left-[36%] top-[18px] transform rotate-[8.5deg]">
            <PillItem
              label="Visitor Analysis"
              floatY={[0, -4, 0]}
              duration={4.5}
              delay={0.2}
            />
          </div>

          {/* 4. Fast Loading (Yellow, rotated -9.6deg, right above card top) */}
          <div className="absolute left-[36%] lg:left-[38%] top-[68px] transform -rotate-[9.6deg]">
            <PillItem
              label="Fast Loading"
              floatY={[0, -3, 0]}
              duration={3.6}
              delay={0.8}
            />
          </div>

          {/* 5. SEO-Friendly (Yellow, top right) */}
          <div className="absolute left-[56%] lg:left-[58%] top-[0px]">
            <PillItem
              label="SEO-Friendly"
              floatY={[0, -4, 0]}
              duration={4.6}
              delay={0.3}
            />
          </div>

          {/* 6. Mobile Responsive (Yellow, right side above card) */}
          <div className="absolute left-[64%] lg:left-[66%] top-[50px]">
            <PillItem
              label="Mobile Responsive"
              floatY={[0, -4, 0]}
              duration={4.0}
              delay={0.7}
            />
          </div>
        </div>
      </div>

      {/* Mobile Flow Wrap Layout (< 640px) */}
      <div className="sm:hidden flex flex-wrap items-center justify-center gap-2 mb-4 px-2">
        <PillItem
          label="Unlimited revision"
          isPurple={true}
          className="-rotate-3 text-[11px]"
        />
        <PillItem
          label="Visitor Analysis"
          className="text-[11px]"
        />
        <PillItem
          label="SEO-Friendly"
          className="text-[11px]"
        />
        <PillItem
          label="Mobile Responsive"
          className="text-[11px]"
        />
        <PillItem
          label="Unique Designs"
          className="text-[11px]"
        />
        <PillItem
          label="Fast Loading"
          className="text-[11px]"
        />
      </div>
    </>
  );
};

export default HeroFloatingPills;
