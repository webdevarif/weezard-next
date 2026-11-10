/**
 * Step Process Section for Web Development
 *
 * 5-Step Staggered / Alternating Timeline Process matching Figma (Process.svg):
 * - Desktop (>= 1024px):
 *   - Step 1, 3, 5 sit in top row (top = 0px)
 *   - Step 2, 4 sit in bottom row (top = 139px offset)
 *   - Exact 11px horizontal gap between 255px wide cards in 1319px container
 *   - Connected seamlessly with Figma's original curved dashed gradient arrows
 *   - Floating centered pill badges on top border
 * - Mobile (< 1024px):
 *   - Frame 1686558306 (430px x 753px, bg #EEF2F9)
 *   - Bottom-right ambient purple blur glow (cx=457, cy=727, r=115, #903DD1, opacity 0.4, blur 150px)
 *   - Single-card horizontal snap-scroll step slider (ProcessMobileSlider)
 *   - Exact Figma curved dashed arrow pointing directly to pagination dots
 *   - Full width 390px x 48px outline CTA button
 */

"use client";

import React from "react";
import { ProcessHeader } from "./components/ProcessHeader";
import { ProcessStepCard, StepItemData } from "./components/ProcessStepCard";
import { ProcessConnectors } from "./components/ProcessConnectors";
import { ProcessCtaButton } from "./components/ProcessCtaButton";
import { ProcessMobileSlider } from "./components/ProcessMobileSlider";

export interface StepProcessProps {
  data: {
    header: {
      title: string;
      subtitle?: string;
    };
    steps: StepItemData[];
    cta?: {
      label: string;
      href: string;
    };
  };
}

export const StepProcessSection: React.FC<StepProcessProps> = ({ data }) => {
  // Exact desktop card coordinate positions matching Figma Process.svg:
  const desktopCardOffsets = [
    { left: "0px", top: "0px" },
    { left: "266px", top: "139px" },
    { left: "532px", top: "0px" },
    { left: "798px", top: "139px" },
    { left: "1064px", top: "0px" },
  ];

  return (
    <section className="relative overflow-hidden pt-[60px] pb-[60px] lg:py-24 bg-[#EEF2F9] select-none">
      {/* Mobile Bottom-Right Ambient Purple Blur Glow (matching circle cx="457" cy="727" r="115" fill="#903DD1" fill-opacity="0.4" blur(150px)) */}
      <div
        aria-hidden="true"
        className="block lg:hidden absolute right-[-142px] bottom-[-89px] w-[230px] h-[230px] rounded-full bg-[#903DD1]/40 opacity-80 blur-[150px] pointer-events-none select-none z-0"
      />

      <div className="relative z-10 max-w-[1360px] 2xl:max-w-[1400px] mx-auto px-0 lg:px-10">
        {/* Section Header */}
        <ProcessHeader title={data.header.title} subtitle={data.header.subtitle} />

        {/* --- DESKTOP VIEW: Staggered 5-Step Timeline (>= 1024px) --- */}
        <div className="hidden lg:block relative w-[1319px] h-[373px] mx-auto my-8">
          {/* Exact Connector Curved Dashed Arrows spanning 1319px x 373px */}
          <ProcessConnectors />

          {/* 5 Alternating Staggered Cards (255px wide x 234px high each) */}
          <div className="relative w-full h-full z-10 pointer-events-none">
            {data.steps.map((step, idx) => {
              const pos = desktopCardOffsets[idx] || { left: "0px", top: "0px" };

              return (
                <div
                  key={step.stepNumber}
                  className="absolute pointer-events-auto"
                  style={{
                    left: pos.left,
                    top: pos.top,
                  }}
                >
                  <ProcessStepCard
                    step={step}
                    index={idx}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* --- MOBILE VIEW: Interactive Snap Slider with Curved Arrow & Dots (< 1024px) --- */}
        <div className="block lg:hidden w-full">
          <ProcessMobileSlider steps={data.steps} />
        </div>

        {/* Bottom Call To Action Button */}
        <ProcessCtaButton label={data.cta?.label} href={data.cta?.href} />
      </div>
    </section>
  );
};

export default StepProcessSection;
