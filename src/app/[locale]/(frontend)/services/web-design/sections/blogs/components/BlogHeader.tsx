"use client";

import React from "react";
import { BLOG_HEADER } from "../data";
import { ExpandableParagraph } from "@/app/[locale]/components/ui/expandable-paragraph";

/**
 * BlogHeader Component
 * 
 * Header for the Web Design Blog / Resources section:
 * - Headline: "Dive into Our Resources for Greater Insights"
 * - Subtitle / Context paragraph (with 3-line clamp and See More toggle on mobile)
 */
export const BlogHeader: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
      {/* Left Headline */}
      <div className="max-w-[540px]">
        <h2 className="text-[#092856] font-dm-sans font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[52px] tracking-tight">
          {BLOG_HEADER.title}
        </h2>
      </div>

      {/* Right Description Paragraph */}
      <div className="max-w-[580px]">
        {/* Desktop View */}
        <p className="hidden md:block text-[#495162] font-dm-sans text-sm sm:text-base lg:text-[16px] leading-relaxed">
          {BLOG_HEADER.description}
        </p>

        {/* Mobile View with 3-line clamp */}
        <div className="block md:hidden">
          <ExpandableParagraph
            text={BLOG_HEADER.description}
            lines={3}
            variant="blue"
            className="text-sm leading-relaxed"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;

