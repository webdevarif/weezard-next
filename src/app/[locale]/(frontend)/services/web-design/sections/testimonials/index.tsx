"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "./data";
import TestimonialsHeader from "./components/TestimonialsHeader";
import RatingBadgeCard from "./components/RatingBadgeCard";
import TestimonialCard from "./components/TestimonialCard";
import {
  TestimonialArrowButton,
  PaginationDots,
} from "./components/TestimonialControls";

/**
 * TestimonialsSection Component
 * 
 * "Listen Directly from Our Past Clients"
 * Positioned directly after the Case Study section on the Web Design service page.
 * Features:
 * - Clean ice-blue background fill: #EEF2F9
 * - Header with value proposition and "See More Reviews ↗" CTA
 * - Left 4.9 Rating Card with 3D stars bubble graphic
 * - Interactive carousel with 2 visible review cards side-by-side on desktop
 * - Floating circular Prev/Next buttons (normal: outlined, hover: solid navy)
 * - Bottom pagination dots
 */

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = TESTIMONIALS.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  // Get the 2 testimonials currently visible on desktop
  const firstCard = TESTIMONIALS[currentIndex];
  const secondCard = TESTIMONIALS[(currentIndex + 1) % total];

  return (
    <section className="relative py-16 md:py-24 lg:py-28 bg-[#EEF2F9] overflow-hidden">
      {/* Background Soft Glow Accents */}
      <div
        className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-blue-100/50 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-40 w-96 h-96 rounded-full bg-indigo-50/60 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 max-w-[1360px] 2xl:max-w-[1440px]">
        {/* Section Header */}
        <TestimonialsHeader />

        {/* 3-Card Interactive Carousel Layout */}
        <div className="relative flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
          {/* 1. Left Accent Card (4.9 Rating Card) */}
          <RatingBadgeCard />

          {/* 2. Right Reviews Carousel Wrapper */}
          <div className="relative flex-1 min-w-0">
            {/* Floating Prev Button (Left) */}
            <div className="hidden lg:block absolute -left-7 top-1/2 -translate-y-1/2 z-20">
              <TestimonialArrowButton
                direction="prev"
                onClick={handlePrev}
                ariaLabel="Previous Testimonials"
              />
            </div>

            {/* Testimonials Grid (2 cards visible on desktop, 1 on mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-full">
              {/* Card 1 */}
              <div className="h-full">
                <TestimonialCard testimonial={firstCard} />
              </div>

              {/* Card 2 (hidden on small mobile if desired, or responsive grid) */}
              <div className="h-full hidden md:block">
                <TestimonialCard testimonial={secondCard} />
              </div>
            </div>

            {/* Floating Next Button (Right) */}
            <div className="hidden lg:block absolute -right-7 top-1/2 -translate-y-1/2 z-20">
              <TestimonialArrowButton
                direction="next"
                onClick={handleNext}
                ariaLabel="Next Testimonials"
              />
            </div>
          </div>
        </div>

        {/* Mobile Arrow Controls (visible on screens < 1024px) */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
          <TestimonialArrowButton
            direction="prev"
            onClick={handlePrev}
            ariaLabel="Previous Testimonials"
          />
          <TestimonialArrowButton
            direction="next"
            onClick={handleNext}
            ariaLabel="Next Testimonials"
          />
        </div>

        {/* Bottom Pagination Dots */}
        <PaginationDots
          total={total}
          currentIndex={currentIndex}
          onSelect={setCurrentIndex}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;

