"use client";

import React, { useState } from "react";
import { TestimonialsHeader } from "./components/TestimonialsHeader";
import { TestimonialsGrid } from "./components/TestimonialsGrid";
import { TestimonialsNavigation } from "./components/TestimonialsNavigation";
import { TestimonialsSectionData } from "./data/testimonialsData";

interface DigitalMarketingTestimonialsProps {
  data?: TestimonialsSectionData;
}

/**
 * DigitalMarketingTestimonials Component
 * 
 * Section 8: "Listen Directly from Our Past Clients"
 * Figma Specs:
 * - Background: #EEF2F9
 * - Header: 848px centered (45px DM Sans Bold & 18px Manrope)
 * - 3-Column Masonry Grid: 1320px width x 669px height (gap 45px)
 * - 24 Dynamic reviews in content.ts paginated 6-per-page
 * - Centered SliderArrowButton navigation
 */
export const DigitalMarketingTestimonials: React.FC<DigitalMarketingTestimonialsProps> = ({
  data,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  if (!data || !data.items || data.items.length === 0) return null;

  const pageSize = 6;
  const totalPages = Math.ceil(data.items.length / pageSize);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const startIndex = currentPage * pageSize;
  const currentBatch = data.items.slice(startIndex, startIndex + pageSize);

  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-[100px] bg-[#EEF2F9] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1320px] flex flex-col gap-10 lg:gap-[45px]">
        {/* Top Header */}
        <TestimonialsHeader
          title={data.header.title}
          subtitle={data.header.subtitle}
        />

        {/* 3-Column Masonry Testimonial Grid */}
        <TestimonialsGrid currentItems={currentBatch} />

        {/* Bottom Navigation Buttons */}
        <TestimonialsNavigation
          onPrev={handlePrev}
          onNext={handleNext}
          canPrev={true}
          canNext={true}
          currentPage={currentPage + 1}
          totalPages={totalPages}
        />
      </div>
    </section>
  );
};

export default DigitalMarketingTestimonials;
