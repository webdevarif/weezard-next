"use client";

import React, { useRef, useState } from "react";
import { TESTIMONIALS } from "../data";
import TestimonialCard from "./TestimonialCard";

/**
 * TestimonialsMobileCarousel Component
 * 
 * Mobile & Tablet (< lg) responsive carousel:
 * - Displays cards in a horizontal snap slider
 * - First card takes ~85% width so the next card peeks from the right edge
 * - Supports touch gestures & smooth swipe
 */

export const TestimonialsMobileCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const cardWidth = containerRef.current.offsetWidth * 0.85;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), TESTIMONIALS.length - 1));
  };

  return (
    <div className="w-full relative">
      {/* Horizontal Peek Scroll Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 no-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {TESTIMONIALS.map((testimonial, idx) => (
          <div
            key={testimonial.id || idx}
            className="w-[85vw] max-w-[340px] flex-shrink-0 snap-start flex flex-col"
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsMobileCarousel;
