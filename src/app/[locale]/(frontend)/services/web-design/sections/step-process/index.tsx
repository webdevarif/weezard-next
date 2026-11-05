/**
 * StepProcessSection Component
 * 
 * Our Step-by-Step Process for Building a Professional Website:
 * - Conforms 100% to Figma SVG design (Our Step-by-Step.txt)
 * - Light ice-blue background fill: #EEF2F9
 * - Header with value proposition and "Kickstart Your Project ↗" CTA
 * - 10-step horizontal timeline carousel with drag/scroll support
 * - Cards are clean white by default; hovering any card reveals the iridescent pastel background
 * - Connected bottom gradient progress track (#305CD8 to #903DD1)
 */

"use client";

import React from "react";
import StepProcessHeader from "./components/StepProcessHeader";
import StepProcessSlider from "./components/StepProcessSlider";

export const StepProcessSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-18 lg:pb-20 bg-[#EEF2F9]">
      <div className="max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
        {/* Section Header */}
        <StepProcessHeader />

        {/* 10-Step Process Slider with Timeline & Progress Track */}
        <StepProcessSlider />
      </div>
    </section>
  );
};

export default StepProcessSection;
