/**
 * Step Process Section Header Component
 *
 * Renders the pixel-perfect section title:
 * - Desktop: 45px / 54px bold (#092856)
 * - Mobile: "Our Development Process" 32px / 45px DM Sans Bold (#092856) center aligned
 */

"use client";

import React from "react";

interface ProcessHeaderProps {
  title: string;
  subtitle?: string;
}

export const ProcessHeader: React.FC<ProcessHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-[800px] mx-auto mb-[32px] lg:mb-16 px-4">
      {/* Mobile Header ("Our Development Process" in 2 lines matching Figma 430x753 SVG) */}
      <h2 className="block lg:hidden text-[32px] font-bold text-[#092856] font-dm-sans leading-[45px] tracking-tight">
        Our Development
        <br />
        Process
      </h2>

      {/* Desktop Header */}
      <h2 className="hidden lg:block text-[45px] font-bold text-[#092856] font-dm-sans leading-[54px] tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 sm:mt-4 text-[15px] sm:text-[18px] text-[#556987] font-manrope font-normal leading-[24px] sm:leading-[27px]">
          {subtitle}
        </p>
      )}
    </div>
  );
};
