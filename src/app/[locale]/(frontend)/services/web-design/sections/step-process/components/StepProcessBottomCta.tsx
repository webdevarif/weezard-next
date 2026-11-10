/**
 * StepProcessBottomCta Component
 * 
 * Mobile-only full-width CTA button rendered at the bottom of the Step-by-Step section
 * matching the uploaded mobile Figma design:
 * - Hidden on desktop (lg:hidden)
 * - 100% width button on mobile
 * - border-2 border-solid border-[#092856]
 * - Smooth hover transition to royal blue (#305CD8)
 */

"use client";

import React from "react";
import { Link } from "@/lib/i18n/routing";

export const StepProcessBottomCta: React.FC = () => {
  return (
    <div className="mt-8 sm:mt-10 lg:hidden w-full">
      <Link
        href="/contact-us"
        className="group flex items-center justify-center gap-2.5 w-full h-[52px] sm:h-[56px] rounded-full border-2 border-solid border-[#092856] text-[#092856] text-[15px] sm:text-[16px] font-semibold transition-all duration-300 hover:bg-[#305CD8] hover:border-[#305CD8] hover:text-white shadow-sm hover:shadow-[0_8px_20px_rgba(48,92,216,0.25)]"
      >
        <span>Kickstart Your Project</span>
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H7M17 7V17"
          />
        </svg>
      </Link>
    </div>
  );
};

export default StepProcessBottomCta;
