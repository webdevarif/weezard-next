"use client";

import React, { useState } from "react";
import { CaseStudyItem } from "../data";
import { CalendarIcon, ArrowLeftIcon, ArrowRightIcon } from "./CaseStudyIcons";

/**
 * CaseStudyDetails Component
 * 
 * Left card displaying active case study details:
 * - Case Study title & published date with calendar icon
 * - Pastel Blue "Problem" block (#EBF3FF)
 * - Pastel Mint "Solution" block (#F0F9EC)
 * - Royal Blue "Result" block (#305CD8) with crisp white text
 * - Circular Prev / Next navigation buttons
 */

interface CaseStudyDetailsProps {
  caseStudy: CaseStudyItem;
  currentIndex: number;
  totalCount: number;
  onPrev: () => void;
  onNext: () => void;
}

export const CaseStudyDetails: React.FC<CaseStudyDetailsProps> = ({
  caseStudy,
  currentIndex,
  totalCount,
  onPrev,
  onNext,
}) => {
  const [prevHovered, setPrevHovered] = useState(false);
  const [nextHovered, setNextHovered] = useState(false);

  return (
    <div
      className="flex-1 w-full lg:max-w-[744px] bg-gradient-to-br from-[#F6F9FF] to-[#FFFFFF] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col justify-between transition-all duration-300"
      style={{ border: "1.5px solid #CAD6F4" }}
    >
      <div>
        {/* Header: Title and Date */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]/70">
          <h3 className="text-[#092856] font-dm-sans font-bold text-2xl sm:text-3xl tracking-tight">
            {caseStudy.badgeTitle}
          </h3>
          <div className="flex items-center gap-2 text-[#495162] font-dm-sans text-sm sm:text-base font-normal">
            <CalendarIcon className="w-5 h-5 text-[#495162] flex-shrink-0" />
            <span>{caseStudy.date}</span>
          </div>
        </div>

        {/* 3 Content Blocks */}
        <div className="mt-6 space-y-4 sm:space-y-5">
          {/* 1. Problem Block */}
          <div className="bg-[#EBF3FF] rounded-[10px] p-5 sm:p-6 transition-all duration-200">
            <h4 className="text-[#092856] font-dm-sans font-bold text-base sm:text-lg mb-1.5">
              {caseStudy.problem.title}
            </h4>
            <p className="text-[#495162] font-dm-sans text-sm sm:text-[15px] leading-relaxed">
              {caseStudy.problem.description}
            </p>
          </div>

          {/* 2. Solution Block */}
          <div className="bg-[#F0F9EC] rounded-[10px] p-5 sm:p-6 transition-all duration-200">
            <h4 className="text-[#092856] font-dm-sans font-bold text-base sm:text-lg mb-1.5">
              {caseStudy.solution.title}
            </h4>
            <p className="text-[#495162] font-dm-sans text-sm sm:text-[15px] leading-relaxed">
              {caseStudy.solution.description}
            </p>
          </div>

          {/* 3. Result Block */}
          <div className="bg-[#305CD8] rounded-[10px] p-5 sm:p-6 shadow-md transition-all duration-200">
            <h4 className="text-white font-dm-sans font-bold text-base sm:text-lg mb-1.5">
              {caseStudy.result.title}
            </h4>
            <p className="text-white/95 font-dm-sans text-sm sm:text-[15px] leading-relaxed font-medium">
              {caseStudy.result.description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons (Prev / Next) */}
      <div className="mt-8 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Prev Button - Circular border as in Figma/screenshot */}
          <button
            type="button"
            onClick={onPrev}
            onMouseEnter={() => setPrevHovered(true)}
            onMouseLeave={() => setPrevHovered(false)}
            aria-label="Previous Case Study"
            className={`w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 ${
              prevHovered
                ? "bg-[#092856] text-white shadow-md"
                : "bg-transparent text-[#627282]"
            }`}
            style={{
              border: prevHovered
                ? "1.5px solid #092856"
                : "1.5px solid rgba(73, 81, 98, 0.45)",
            }}
          >
            <ArrowLeftIcon className="w-5 h-5 transition-colors duration-200" />
          </button>

          {/* Next Button - Circular border as in Figma/screenshot */}
          <button
            type="button"
            onClick={onNext}
            onMouseEnter={() => setNextHovered(true)}
            onMouseLeave={() => setNextHovered(false)}
            aria-label="Next Case Study"
            className={`w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 ${
              nextHovered
                ? "bg-[#092856] text-white shadow-md"
                : "bg-transparent text-[#627282]"
            }`}
            style={{
              border: nextHovered
                ? "1.5px solid #092856"
                : "1.5px solid rgba(73, 81, 98, 0.45)",
            }}
          >
            <ArrowRightIcon className="w-5 h-5 transition-colors duration-200" />
          </button>
        </div>

        {/* Counter Indicator (e.g. 01 / 03) */}
        <div className="text-[#495162] font-dm-sans text-sm font-semibold tracking-wider">
          <span className="text-[#092856]">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span className="mx-1 text-[#CBD5E1]">/</span>
          <span>{String(totalCount).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
};

