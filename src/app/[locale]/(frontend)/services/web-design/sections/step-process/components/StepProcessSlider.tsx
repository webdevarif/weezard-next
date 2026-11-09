/**
 * StepProcessSlider Component
 * 
 * Manages the horizontal scrolling track containing all 10 process steps:
 * - Supports drag-to-scroll, wheel scroll, touch gestures, and progress seeking
 * - Hides native ugly scrollbar and links smoothly to Figma StepSliderTrack
 * - Left/Right floating quick navigation arrows
 */

"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { StepItemData } from "../types";
import StepTimelineNode from "./StepTimelineNode";
import StepCardItem from "./StepCardItem";
import StepSliderTrack from "./StepSliderTrack";

const STEPS: StepItemData[] = [
  {
    stepNumber: 1,
    title: "Discovery & Strategy",
    description: "We study your business goals, target audience, and market landscape to map out the ideal strategy.",
  },
  {
    stepNumber: 2,
    title: "Wireframing & UX",
    description: "We create a clear, intuitive layout of your website structure to guarantee effortless navigation.",
  },
  {
    stepNumber: 3,
    title: "UI Design & Mockups",
    description: "We craft custom visual designs with modern aesthetics, precise typography, and brand consistency.",
  },
  {
    stepNumber: 4,
    title: "Development & Testing",
    description: "We engineer pixel-perfect, clean code and crosscheck across devices for speed and flawless functionality.",
  },
  {
    stepNumber: 5,
    title: "Content Integration",
    description: "We populate your website with compelling copy, high-res assets, and persuasive call-to-actions.",
  },
  {
    stepNumber: 6,
    title: "SEO & Speed Tuning",
    description: "We optimize loading speeds, meta tags, and structured schema to maximize organic search visibility.",
  },
  {
    stepNumber: 7,
    title: "Client Review & Feedback",
    description: "You review the functional staging site, and our team implements your feedback with unlimited revisions.",
  },
  {
    stepNumber: 8,
    title: "Security & QA Testing",
    description: "We perform rigorous quality audits, SSL setup, and security hardening prior to production deployment.",
  },
  {
    stepNumber: 9,
    title: "Launch & Analytics",
    description: "We seamlessly launch your site live and configure Google Analytics and conversion tracking.",
  },
  {
    stepNumber: 10,
    title: "Support & Optimization",
    description: "Once live, we keep improving your website with ongoing maintenance and performance optimizations.",
  },
];

export const StepProcessSlider: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Update progress bar percentage based on current scroll position
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setProgress(100);
      return;
    }
    const currentProgress = (el.scrollLeft / maxScroll) * 100;
    setProgress(Math.min(100, Math.max(0, currentProgress)));
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Click on the progress bar track to jump to position
  const handleSeek = (percentage: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({
      left: (percentage / 100) * maxScroll,
      behavior: "smooth",
    });
  };

  // Mouse drag-to-scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftState(el.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = scrollContainerRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Quick arrow scroll
  const scrollStep = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const stepWidth = 340;
    el.scrollBy({
      left: direction === "right" ? stepWidth : -stepWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Scroll Controls (Floating subtle arrows) */}
      <div className="hidden sm:flex items-center justify-end gap-2 mb-4">
        <button
          onClick={() => scrollStep("left")}
          disabled={progress <= 0}
          aria-label="Previous step"
          className="w-10 h-10 rounded-full border border-[#092856]/20 bg-white hover:bg-[#305CD8] hover:border-[#305CD8] hover:text-white text-[#092856] flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scrollStep("right")}
          disabled={progress >= 99}
          aria-label="Next step"
          className="w-10 h-10 rounded-full border border-[#092856]/20 bg-white hover:bg-[#305CD8] hover:border-[#305CD8] hover:text-white text-[#092856] flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Horizontally Scrollable Timeline Track */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex items-start gap-5 sm:gap-6 overflow-x-auto overflow-y-hidden pb-6 pt-2 cursor-grab active:cursor-grabbing select-none scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`}
        style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
      >
        {STEPS.map((step, index) => {
          const isLast = index === STEPS.length - 1;
          return (
            <div key={step.stepNumber} className="flex flex-col flex-shrink-0">
              {/* Step Circle & Connector Arrow */}
              <StepTimelineNode
                stepNumber={step.stepNumber}
                isLast={isLast}
              />

              {/* Step Process Card (White by default, holographic texture on hover) */}
              <StepCardItem step={step} />
            </div>
          );
        })}
      </div>

      {/* Bottom Figma Progress Track */}
      <StepSliderTrack progressPercentage={progress} onSeek={handleSeek} />
    </div>
  );
};

export default StepProcessSlider;
