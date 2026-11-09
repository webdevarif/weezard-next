/**
 * Step Process Section for Web Development
 *
 * 5-Step Staggered / Alternating Timeline Process matching Figma (Process.svg):
 * - Step 1, 3, 5 sit in top row (top = 0px)
 * - Step 2, 4 sit in bottom row (top = 139px offset)
 * - Exact 11px horizontal gap between 255px wide cards in 1319px container
 * - Connected seamlessly with Figma's original curved dashed gradient arrows
 * - Floating centered pill badges on top border
 * - Responsive: On desktop (>= 1024px) alternates with arrows, on mobile/tablet stacks cleanly
 */

"use client";

import React, { useState } from "react";
import { ProcessHeader } from "./components/ProcessHeader";
import { ProcessStepCard, StepItemData } from "./components/ProcessStepCard";
import { ProcessConnectors } from "./components/ProcessConnectors";
import { ProcessCtaButton } from "./components/ProcessCtaButton";

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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Exact desktop card coordinate positions matching Figma Process.svg:
  // Card 1: left = 0px, top = 2px (aligned with 0px)
  // Card 2: left = 266px, top = 139px
  // Card 3: left = 532px, top = 0px
  // Card 4: left = 798px, top = 139px
  // Card 5: left = 1064px, top = 0px
  const desktopCardOffsets = [
    { left: "0px", top: "0px" },
    { left: "266px", top: "139px" },
    { left: "532px", top: "0px" },
    { left: "798px", top: "139px" },
    { left: "1064px", top: "0px" },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#EEF2F9]">
      <div className="max-w-[1360px] 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <ProcessHeader title={data.header.title} subtitle={data.header.subtitle} />

        {/* Desktop Staggered 5-Step Timeline (>= 1024px) */}
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
                    isHovered={hoveredIdx === idx}
                    onHover={setHoveredIdx}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Layout (< 1024px) */}
        <div className="lg:hidden flex flex-col items-center gap-10 sm:gap-12 max-w-[480px] mx-auto pt-6">
          {data.steps.map((step, idx) => (
            <div key={step.stepNumber} className="w-full flex justify-center">
              <ProcessStepCard
                step={step}
                index={idx}
                isHovered={hoveredIdx === idx}
                onHover={setHoveredIdx}
                className="w-full max-w-[320px]"
              />
            </div>
          ))}
        </div>

        {/* Bottom Call To Action Button */}
        <ProcessCtaButton label={data.cta?.label} href={data.cta?.href} />
      </div>
    </section>
  );
};

export default StepProcessSection;
