"use client";

import React from "react";
import Link from "next/link";
import { ExternalArrowIcon } from "./CaseStudyIcons";
import { ExpandableParagraph } from "@/app/[locale]/components/ui/expandable-paragraph";

/**
 * CaseStudyHeader Component
 * 
 * Header for the Case Study section:
 * - Headline: "Real Results That Created Impact"
 * - Subtitle copy (with 3-line clamping & See More toggle on mobile)
 * - Pill CTA button:
 *   - font-family: DM Sans
 *   - font-size: 16px
 *   - border: 1.5px solid #092856
 *   - hover: solid fill #092856 with white text
 */

export const CaseStudyHeader: React.FC = () => {
  const subtitleText =
    "Our work speaks through results. We've helped businesses improve traffic, generate more leads, and build trust online, all through a well-designed, performance-focused website";

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12 lg:mb-16">
      {/* Title & Subtitle */}
      <div className="max-w-[680px]">
        <h2 className="text-[#092856] font-dm-sans font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[52px] tracking-tight">
          Real Results That Created Impact
        </h2>

        {/* Desktop Subtitle */}
        <p className="hidden md:block mt-3 text-[#495162] font-dm-sans text-sm md:text-base lg:text-[16px] leading-relaxed max-w-[580px]">
          {subtitleText}
        </p>

        {/* Mobile Subtitle with 3-line clamp and See More */}
        <div className="block md:hidden mt-3 max-w-[580px]">
          <ExpandableParagraph
            text={subtitleText}
            lines={3}
            variant="blue"
            className="text-sm leading-relaxed"
          />
        </div>
      </div>

      {/* CTA Button with explicit 1.5px border, font-dm-sans, text-[16px] */}
      <div className="flex-shrink-0">
        <Link
          href="/case-studies"
          className="inline-flex items-center justify-center gap-2.5 h-[50px] sm:h-[56px] px-6 sm:px-8 rounded-full text-[#092856] font-dm-sans font-bold text-[15px] sm:text-[16px] transition-all duration-300 hover:bg-[#092856] hover:text-white group flex-shrink-0"
          style={{ border: "1.5px solid #092856" }}
        >
          <span>Read More Case Studies</span>
          <ExternalArrowIcon className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
};
