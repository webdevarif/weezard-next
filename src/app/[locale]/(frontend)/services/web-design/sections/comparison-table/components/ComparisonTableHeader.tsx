import React from "react";

/**
 * ComparisonTableHeader Component
 * 
 * Header component for the Compare Table section:
 * - Clean, bold heading matching Figma design
 * - Centered descriptive subtitle
 */

export const ComparisonTableHeader: React.FC = () => {
  return (
    <div className="text-center max-w-[850px] mx-auto mb-12 md:mb-16 px-4">
      <h2 className="text-[#092856] font-dm-sans font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[52px] tracking-tight">
        What You Get with Weezard&apos;s Web Design Services
      </h2>
      <p className="mt-4 text-[#495162] font-dm-sans text-sm md:text-base lg:text-[16px] leading-relaxed max-w-[760px] mx-auto">
        Weezard is built for small businesses that want to do things right from
        the start. Every package we offer includes the core elements needed for
        an effective, modern website. No guesswork, no hidden gaps - just
        results-focused design.
      </p>
    </div>
  );
};
