"use client";

import React, { useState, useRef } from "react";
import { CASE_STUDIES } from "../data";
import { CalendarIcon } from "./CaseStudyIcons";

/**
 * CaseStudyMobileSlider Component
 * 
 * Mobile & Tablet (< lg) responsive view:
 * - Touch swipeable card slider matching the uploaded Figma reference
 * - Header: "Case Study-X" (Bold Navy) + Calendar Icon + Published Date
 * - 3 Content Blocks:
 *   1. Problem (#EBF3FF pastel blue, dark navy title, #495162 text)
 *   2. Solution (#F0F9EC pastel mint, dark navy title, #495162 text)
 *   3. Result (#305CD8 vibrant blue, bold white title, crisp white text)
 * - Pagination dots at bottom (#305CD8 active, #D9D9D9 inactive)
 * - Touch swipe gestures (left/right) with smooth slide transition
 */

export const CaseStudyMobileSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalCount = CASE_STUDIES.length;
  const currentItem = CASE_STUDIES[currentIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      // Next slide
      setCurrentIndex((prev) => (prev < totalCount - 1 ? prev + 1 : 0));
    } else if (isRightSwipe) {
      // Prev slide
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalCount - 1));
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full max-w-[430px] mx-auto select-none">
      {/* Slide Card Container */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full bg-gradient-to-br from-[#F6F9FF] to-[#FFFFFF] rounded-2xl p-5 sm:p-6 shadow-sm border border-solid border-[#CAD6F4] transition-all duration-300"
      >
        {/* Header: Title and Date */}
        <div className="flex items-center justify-between gap-3 pb-5 border-b border-solid border-[#E2E8F0]/70">
          <h3 className="text-[#092856] font-dm-sans font-bold text-2xl tracking-tight">
            {currentItem.badgeTitle}
          </h3>
          <div className="flex items-center gap-1.5 text-[#495162] font-dm-sans text-xs sm:text-sm font-normal">
            <CalendarIcon className="w-4 h-4 text-[#495162] flex-shrink-0" />
            <span>{currentItem.date}</span>
          </div>
        </div>

        {/* 3 Content Blocks */}
        <div className="mt-5 space-y-3.5">
          {/* 1. Problem Block */}
          <div className="bg-[#EBF3FF] rounded-[10px] p-4 sm:p-5 transition-all duration-200">
            <h4 className="text-[#092856] font-dm-sans font-bold text-[15px] sm:text-base mb-1">
              {currentItem.problem.title}
            </h4>
            <p className="text-[#495162] font-dm-sans text-xs sm:text-sm leading-relaxed">
              {currentItem.problem.description}
            </p>
          </div>

          {/* 2. Solution Block */}
          <div className="bg-[#F0F9EC] rounded-[10px] p-4 sm:p-5 transition-all duration-200">
            <h4 className="text-[#092856] font-dm-sans font-bold text-[15px] sm:text-base mb-1">
              {currentItem.solution.title}
            </h4>
            <p className="text-[#495162] font-dm-sans text-xs sm:text-sm leading-relaxed">
              {currentItem.solution.description}
            </p>
          </div>

          {/* 3. Result Block */}
          <div className="bg-[#305CD8] rounded-[10px] p-4 sm:p-5 shadow-sm transition-all duration-200">
            <h4 className="text-white font-dm-sans font-bold text-[15px] sm:text-base mb-1">
              {currentItem.result.title}
            </h4>
            <p className="text-white font-dm-sans text-xs sm:text-sm leading-relaxed font-normal">
              {currentItem.result.description}
            </p>
          </div>
        </div>

        {/* Bottom Pagination Dots inside the card */}
        <div className="mt-6 pt-2 flex items-center justify-center gap-2">
          {CASE_STUDIES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to Case Study ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? "w-2.5 h-2.5 bg-[#305CD8] scale-110"
                  : "w-2.5 h-2.5 bg-[#D9D9D9] hover:bg-[#B0B8C8]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
