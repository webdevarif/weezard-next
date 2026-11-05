import React from "react";
import { BLOG_HEADER } from "../data";

/**
 * BlogHeader Component
 * 
 * Header for the Web Design Blog / Resources section:
 * - Headline: "Dive into Our Resources for Greater Insights"
 * - Subtitle / Context paragraph
 */
export const BlogHeader: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12 mb-12 lg:mb-16">
      {/* Left Headline */}
      <div className="max-w-[540px]">
        <h2 className="text-[#092856] font-dm-sans font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[52px] tracking-tight">
          {BLOG_HEADER.title}
        </h2>
      </div>

      {/* Right Description Paragraph */}
      <div className="max-w-[580px]">
        <p className="text-[#495162] font-dm-sans text-sm sm:text-base lg:text-[16px] leading-relaxed">
          {BLOG_HEADER.description}
        </p>
      </div>
    </div>
  );
};

export default BlogHeader;

