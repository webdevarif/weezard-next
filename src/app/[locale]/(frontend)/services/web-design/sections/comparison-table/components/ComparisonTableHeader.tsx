"use client";

import React from "react";
import { ExpandableParagraph } from "@/app/[locale]/components/ui/expandable-paragraph";

export interface ComparisonTableHeaderProps {
  title?: string;
  subtitle?: string;
}

/**
 * ComparisonTableHeader Component
 * 
 * Header component for the Compare Table section:
 * - Dynamic or fallback title & subtitle
 * - Centered descriptive subtitle with expandable 3-line clamping on mobile
 */
export const ComparisonTableHeader: React.FC<ComparisonTableHeaderProps> = ({
  title = "What You Get with Weezard's Web Design Services",
  subtitle = "Weezard is built for small businesses that want to do things right from the start. Every package we offer includes the core elements needed for an effective, modern website. No guesswork, no hidden gaps - just results-focused design.",
}) => {
  return (
    <div className="text-center max-w-[850px] mx-auto mb-10 md:mb-16 px-4">
      <h2 className="text-[#092856] font-dm-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[52px] tracking-tight">
        {title}
      </h2>

      {/* Desktop Subtitle */}
      <p className="hidden md:block mt-4 text-[#495162] font-dm-sans text-sm md:text-base lg:text-[16px] leading-relaxed max-w-[760px] mx-auto">
        {subtitle}
      </p>

      {/* Mobile Subtitle with 3-line clamp and See More */}
      <div className="block md:hidden mt-3 max-w-[420px] mx-auto">
        <ExpandableParagraph
          text={subtitle}
          lines={3}
          variant="blue"
          align="center"
          className="text-xs sm:text-sm leading-relaxed"
        />
      </div>
    </div>
  );
};
