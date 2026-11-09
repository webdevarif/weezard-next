/**
 * Step Process Section Header Component
 *
 * Renders the pixel-perfect section title:
 * - Font Size: 45px
 * - Font Weight: Bold (700)
 * - Line Height: 54px
 * - Color: #092856 (Navy)
 */

"use client";

import React from "react";

interface ProcessHeaderProps {
  title: string;
  subtitle?: string;
}

export const ProcessHeader: React.FC<ProcessHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-[800px] mx-auto mb-14 lg:mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-[#092856] font-dm-sans leading-tight lg:leading-[54px] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-[18px] text-[#556987] font-manrope font-normal leading-[27px]">
          {subtitle}
        </p>
      )}
    </div>
  );
};
