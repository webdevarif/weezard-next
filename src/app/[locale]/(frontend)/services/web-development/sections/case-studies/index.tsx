/**
 * Case Studies & Impact Section for Web Development
 * 
 * Pixel-Perfect match to Figma Frame 1686558261 / 1686558313:
 * - Headline: 45px DM Sans Bold (#092856)
 * - Description: 18px Manrope Regular (#495162)
 * - Explore Button: 60px height, 1px solid #092856 with diagonal arrow
 * - 3-Card Carousel Display:
 *   - Frame size: 420px width, 457px height, background #F5F7FA, rounded 16px, padding 30px 24px
 *   - Image: 372px x 220px, rounded 12px
 *   - Info box: 372px x 145px, rounded 8px with custom 4px border-left and linear-gradient background
 *   - Label: 32px DM Sans Bold (#092856)
 *   - Title: 24px DM Sans Regular (#495162)
 * - Navigation: Left & Right circular control buttons to slide through sets of case studies.
 */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SliderArrowButton } from "@/app/[locale]/components/ui/slider-arrow-button";

export interface CaseStudyItem {
  id: string;
  label: string;
  title: string;
  image: string;
  borderColor: string;
  gradientBg: string;
}

export interface CaseStudiesProps {
  data: {
    header: {
      title: string;
      subtitle: string;
      cta?: {
        label: string;
        href: string;
      };
    };
    items: CaseStudyItem[];
  };
}

export const CaseStudiesSection: React.FC<CaseStudiesProps> = ({ data }) => {
  // Pagination by set of 3 cards
  const cardsPerPage = 3;
  const totalPages = Math.ceil(data.items.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  // Current visible items (3 cards per set)
  const visibleItems = data.items.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white select-none">
      <div className="max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Header (Frame 1686558261) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 lg:mb-14 gap-6">
          <div className="max-w-[635px]">
            <h2 className="text-3xl sm:text-4xl lg:text-[45px] lg:leading-[54px] font-bold text-[#092856] font-dm-sans tracking-tight">
              {data.header.title}
            </h2>
            {data.header.subtitle && (
              <p className="mt-3.5 text-base sm:text-[18px] sm:leading-[27px] text-[#495162] font-manrope">
                {data.header.subtitle}
              </p>
            )}
          </div>

          {data.header.cta && (
            <div className="flex-shrink-0">
              <Link
                href={data.header.cta.href}
                className="inline-flex items-center justify-center gap-2.5 h-[54px] sm:h-[60px] px-6 sm:px-8 rounded-full border border-solid border-[#092856] text-[#092856] font-dm-sans font-semibold text-[15px] sm:text-[16px] transition-all duration-300 hover:bg-[#092856] hover:text-white group flex-shrink-0"
              >
                <span>{data.header.cta.label}</span>
                <svg
                  className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L13 1M13 9V1H5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* Carousel Showcase Container with Figma Left & Right Control Buttons Outside the Grid */}
        <div className="relative">
          {/* Left Navigation Arrow Button - Outside grid */}
          <div className="hidden xl:block absolute -left-14 2xl:-left-16 top-1/2 -translate-y-1/2 z-20">
            <SliderArrowButton
              direction="left"
              onClick={handlePrev}
              aria-label="Previous Case Studies"
            />
          </div>

          {/* 3 Cards Container (Frame 1686558313) */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 xl:gap-[30px]"
              >
                {visibleItems.map((item) => (
                  <div
                    key={item.id}
                    className="w-full bg-[#F5F7FA] rounded-[16px] p-6 sm:p-[24px] lg:p-[30px_24px] flex flex-col justify-between gap-6 transition-all duration-300 hover:shadow-lg"
                  >
                    {/* Image Box (Rectangle 8978/8979) */}
                    <div className="relative w-full h-[220px] rounded-[12px] overflow-hidden bg-white shadow-inner">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 372px"
                      />
                    </div>

                    {/* Bottom Info Frame (Frame 1686558312) */}
                    <div
                      className="w-full min-h-[145px] p-4 rounded-[8px] flex flex-col justify-center gap-1 shadow-sm"
                      style={{
                        background: item.gradientBg,
                        borderLeft: `4px solid ${item.borderColor}`,
                      }}
                    >
                      {/* Label (Problem / Solution / Result) */}
                      <h3 className="font-dm-sans font-bold text-2xl sm:text-[32px] sm:leading-[45px] text-[#092856]">
                        {item.label}
                      </h3>

                      {/* Description Title */}
                      <p className="font-dm-sans font-normal text-base sm:text-[20px] lg:text-[24px] sm:leading-[32px] text-[#495162] line-clamp-2">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Navigation Arrow Button - Outside grid */}
          <div className="hidden xl:block absolute -right-14 2xl:-right-16 top-1/2 -translate-y-1/2 z-20">
            <SliderArrowButton
              direction="right"
              onClick={handleNext}
              aria-label="Next Case Studies"
            />
          </div>
        </div>

        {/* Mobile & Tablet Slider Controls below grid */}
        <div className="flex xl:hidden justify-center items-center gap-4 mt-8">
          <SliderArrowButton
            size="sm"
            direction="left"
            onClick={handlePrev}
            aria-label="Previous Case Studies"
          />

          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                aria-label={`Go to page ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === idx
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
            aria-label="Next Case Studies"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
