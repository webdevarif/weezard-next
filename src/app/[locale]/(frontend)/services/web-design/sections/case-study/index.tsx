"use client";

import React, { useState } from "react";
import { CASE_STUDIES } from "./data";
import { CaseStudyHeader } from "./components/CaseStudyHeader";
import { CaseStudyDetails } from "./components/CaseStudyDetails";
import { CaseStudyImage } from "./components/CaseStudyImage";
import { CaseStudyMobileSlider } from "./components/CaseStudyMobileSlider";

/**
 * CaseStudySection Component
 * 
 * "Real Results That Created Impact"
 * Positioned directly after the Compare Table section on the Web Design page.
 * - Desktop: 2-column showcase (Left details card + Right photo)
 * - Mobile: Dedicated touch-enabled card slider with dots matching Figma
 */

export const CaseStudySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeCaseStudy = CASE_STUDIES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : CASE_STUDIES.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < CASE_STUDIES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="relative py-14 md:py-24 lg:py-28 bg-[#FFFFFF] overflow-hidden">
      {/* Soft Ambient Background Glows */}
      <div
        className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-blue-50/60 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-40 w-96 h-96 rounded-full bg-slate-50/80 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 max-w-[1320px]">
        {/* Section Heading & CTA */}
        <CaseStudyHeader />

        {/* Desktop 2-Column Showcase (Left Details Card + Right Photo) */}
        <div className="hidden lg:flex items-stretch gap-6 lg:gap-8">
          {/* Left Details Card */}
          <CaseStudyDetails
            caseStudy={activeCaseStudy}
            currentIndex={currentIndex}
            totalCount={CASE_STUDIES.length}
            onPrev={handlePrev}
            onNext={handleNext}
          />

          {/* Right Showcase Image */}
          <CaseStudyImage imageAlt={activeCaseStudy.imageAlt} />
        </div>

        {/* Mobile Responsive Dot Slider */}
        <div className="block lg:hidden">
          <CaseStudyMobileSlider />
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;

