"use client";

import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "./TestimonialIcons";

/**
 * TestimonialControls Component
 * 
 * Interactive navigation controls conforming to Figma design:
 * - Prev Button (Floating Left):
 *   - Normal: white circle with 1.5px solid rgba(73, 81, 98, 0.45) & slate arrow
 *   - Hover: solid navy #092856 with white arrow
 * - Next Button (Floating Right):
 *   - Normal: white circle with 1.5px solid rgba(73, 81, 98, 0.45) & slate arrow
 *   - Hover: solid navy #092856 with white arrow
 * - Pagination Dots: 4 dots at bottom (active: #305CD8, inactive: #D9D9D9)
 */

interface TestimonialControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (index: number) => void;
}

export const TestimonialArrowButton: React.FC<{
  direction: "prev" | "next";
  onClick: () => void;
  ariaLabel: string;
  className?: string;
}> = ({ direction, onClick, ariaLabel, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={ariaLabel}
      className={`w-[54px] h-[54px] rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 flex-shrink-0 z-20 cursor-pointer ${
        isHovered
          ? "bg-[#092856] text-white shadow-md"
          : "bg-white text-[#495162] shadow-sm"
      } ${className}`}
      style={{
        border: isHovered
          ? "1.5px solid #092856"
          : "1.5px solid rgba(73, 81, 98, 0.45)",
      }}
    >
      {direction === "prev" ? (
        <ArrowLeftIcon className="w-5 h-5 transition-colors duration-200" />
      ) : (
        <ArrowRightIcon className="w-5 h-5 transition-colors duration-200" />
      )}
    </button>
  );
};

export const PaginationDots: React.FC<{
  total: number;
  currentIndex: number;
  onSelect: (index: number) => void;
}> = ({ total, currentIndex, onSelect }) => {
  return (
    <div className="flex items-center justify-center gap-2.5 mt-10">
      {Array.from({ length: total }).map((_, idx) => {
        const isActive = idx === currentIndex;
        return (
          <button
            key={idx}
            type="button"
            onClick={() => onSelect(idx)}
            aria-label={`Go to testimonial slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              isActive
                ? "w-3 h-3 bg-[#305CD8] scale-110"
                : "w-2.5 h-2.5 bg-[#D9D9D9] hover:bg-[#CAD6F4]"
            }`}
          />
        );
      })}
    </div>
  );
};

