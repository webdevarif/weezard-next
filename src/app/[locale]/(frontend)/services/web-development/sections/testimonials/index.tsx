/**
 * Testimonials Carousel Section for Web Development
 * 
 * Pixel-Perfect match to Figma CSS & specifications:
 * - Background: #EEF2F9
 * - Header: Title 45px DM Sans Bold (#092856), Subtitle 18px Manrope Regular (#495162), CTA 219x60px
 * - Content Frame: 1320px x 414px (Left 590px Media Card + Right 700px Blue Card)
 * - Navigation: Global <SliderArrowButton> placed outside the 1320px box with normal (light/slate border) and hover (solid navy fill + white arrow) states
 */

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SliderArrowButton } from "@/app/[locale]/components/ui/slider-arrow-button";
import { TestimonialsHeader } from "./components/TestimonialsHeader";
import { TestimonialMediaCard } from "./components/TestimonialMediaCard";
import { TestimonialQuoteCard } from "./components/TestimonialQuoteCard";

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  quote: string;
  rating: number;
  image: string;
}

export interface TestimonialsProps {
  data: {
    header: {
      title: string;
      subtitle: string;
      cta?: {
        label: string;
        href: string;
      };
    };
    items: TestimonialItem[];
  };
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const activeItem = data.items[currentIndex] || data.items[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === data.items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#EEF2F9] select-none">
      <div className="max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Header (Frame 1686558268) */}
        <TestimonialsHeader
          title={data.header.title}
          subtitle={data.header.subtitle}
          cta={data.header.cta}
        />

        {/* Carousel Showcase Container with Arrow Buttons Outside the 1320px Box */}
        <div className="relative">
          {/* Left Navigation Arrow Button - Positioned outside the cards */}
          <div className="hidden xl:block absolute -left-14 2xl:-left-16 top-1/2 -translate-y-1/2 z-20">
            <SliderArrowButton
              direction="left"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
            />
          </div>

          {/* Testimonial Two-Card Box (590px Media + 700px Quote = 1320px + 30px gap) */}
          <div className="w-full max-w-[1320px] mx-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-[30px]"
              >
                {/* Left Card: 590px x 414px */}
                <TestimonialMediaCard
                  image={activeItem.image}
                  clientName={activeItem.clientName}
                />

                {/* Right Card: 700px x 414px in #305CD8 */}
                <TestimonialQuoteCard
                  quote={activeItem.quote}
                  clientName={activeItem.clientName}
                  clientRole={activeItem.clientRole}
                  rating={activeItem.rating}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Navigation Arrow Button - Positioned outside the cards */}
          <div className="hidden xl:block absolute -right-14 2xl:-right-16 top-1/2 -translate-y-1/2 z-20">
            <SliderArrowButton
              direction="right"
              onClick={handleNext}
              aria-label="Next Testimonial"
            />
          </div>
        </div>

        {/* Mobile & Tablet Slider Controls below card box */}
        <div className="flex xl:hidden justify-center items-center gap-4 mt-8">
          <SliderArrowButton
            size="sm"
            direction="left"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
          />

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {data.items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? "w-6 h-2.5 bg-[#092856]"
                    : "w-2.5 h-2.5 bg-[#CAD6F4]"
                }`}
              />
            ))}
          </div>

          <SliderArrowButton
            size="sm"
            direction="right"
            onClick={handleNext}
            aria-label="Next Testimonial"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
