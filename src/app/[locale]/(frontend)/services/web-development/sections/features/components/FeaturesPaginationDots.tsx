/**
 * FeaturesPaginationDots Component
 *
 * Renders the circular pagination indicator dots for the mobile card slider (Frame 1686558318).
 * Exact Figma match:
 * - 12px x 12px circular dots
 * - 10px gap
 * - Active: #305CD8
 * - Inactive: #D9D9D9
 */

"use client";

import React from "react";

export interface FeaturesPaginationDotsProps {
  total: number;
  activeIndex: number;
  onSelect?: (index: number) => void;
  className?: string;
}

export const FeaturesPaginationDots: React.FC<FeaturesPaginationDotsProps> = ({
  total,
  activeIndex,
  onSelect,
  className = "",
}) => {
  if (total <= 1) return null;

  return (
    <div
      className={`flex items-center justify-center gap-[10px] h-[12px] mt-6 md:hidden select-none ${className}`}
      role="tablist"
      aria-label="Features carousel pagination"
    >
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onSelect?.(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={isActive}
            role="tab"
            className={`w-[12px] h-[12px] rounded-full transition-colors duration-200 cursor-pointer ${
              isActive ? "bg-[#305CD8]" : "bg-[#D9D9D9] hover:bg-[#c0c0c0]"
            }`}
          />
        );
      })}
    </div>
  );
};

export default FeaturesPaginationDots;
