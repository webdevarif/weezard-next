/**
 * Process CTA Button Component
 *
 * Pixel-perfect pill button matching Figma Process section CTA:
 * "Start Your Development Project ↗"
 */

"use client";

import React from "react";
import Link from "next/link";

interface ProcessCtaButtonProps {
  label?: string;
  href?: string;
}

export const ProcessCtaButton: React.FC<ProcessCtaButtonProps> = ({
  label = "Start Your Development Project",
  href = "/contact-us",
}) => {
  return (
    <div className="flex justify-center mt-14 sm:mt-16 lg:mt-20">
      <Link
        href={href}
        className="group relative inline-flex items-center justify-center gap-2.5 h-[54px] sm:h-[58px] px-8 sm:px-10 rounded-full border border-solid border-[#092856] text-[#092856] font-dm-sans font-bold text-base sm:text-lg transition-all duration-300 hover:bg-[#092856] hover:text-white hover:shadow-lg active:scale-[0.98]"
      >
        <span>{label}</span>
        <svg
          className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13L13 1M13 9V1H5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};
