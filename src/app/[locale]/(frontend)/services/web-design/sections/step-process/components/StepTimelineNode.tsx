/**
 * StepTimelineNode Component
 * 
 * Renders the circular step badge ("STEP 1", "STEP 2", etc.) and
 * the dashed directional arrow connector pointing to the next step.
 */

"use client";

import React from "react";

interface StepTimelineNodeProps {
  stepNumber: number;
  isLast?: boolean;
}

export const StepTimelineNode: React.FC<StepTimelineNodeProps> = ({
  stepNumber,
  isLast = false,
}) => {
  return (
    <div className="flex items-center w-[310px] sm:w-[319px] mb-6 flex-shrink-0 select-none">
      {/* Royal Blue Circular Step Badge (Diameter: 86px) */}
      <div className="relative flex-shrink-0 w-[82px] h-[82px] sm:w-[88px] sm:h-[88px] rounded-full bg-[#2555D6] shadow-[0_8px_20px_rgba(37,85,214,0.32)] flex items-center justify-center text-white font-bold text-[13px] sm:text-[14px] tracking-wider uppercase z-10 transition-transform duration-300 hover:scale-105">
        STEP {stepNumber}
      </div>

      {/* Dashed Connecting Line with Arrow (Hidden on the final step) */}
      {!isLast ? (
        <div className="flex-1 flex items-center pl-3 sm:pl-4 pr-1">
          <div className="relative w-full flex items-center">
            {/* Dashed Line */}
            <div className="w-full border-t-2 border-dashed border-[#305CD8]/35" />
            {/* Arrowhead */}
            <svg
              className="w-3.5 h-3.5 -ml-1 flex-shrink-0 text-[#305CD8]/60"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 2L10 7L5 12" />
            </svg>
          </div>
        </div>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
};

export default StepTimelineNode;

