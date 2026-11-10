/**
 * Features / Why Choose Us Section
 *
 * 100% Figma Pixel-Perfect Implementation:
 * - Desktop: 6 horizontal feature cards (2 columns x 3 rows) with instant pure-CSS hover
 * - Mobile: Frame 1686558303 - horizontal snap-scroll slider with 320x250px cards,
 *   3-line expandable paragraph with "See More", and 12px circular pagination indicator dots.
 */

"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FeaturesBackground } from "./components/FeaturesBackground";
import { FeaturesHeader } from "./components/FeaturesHeader";
import { FeatureMobileCard } from "./components/FeatureMobileCard";
import { FeaturesPaginationDots } from "./components/FeaturesPaginationDots";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  isHovered?: boolean;
}

export interface FeaturesSectionProps {
  data: {
    header: {
      title: string;
      subtitle: string;
    };
    items: FeatureItem[];
  };
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ data }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Sync scroll position with active dot
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft } = scrollContainerRef.current;
    const cardWidthWithGap = 320 + 16; // 320px width + 16px gap
    const index = Math.round(scrollLeft / cardWidthWithGap);
    setActiveSlide(Math.min(Math.max(0, index), data.items.length - 1));
  };

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidthWithGap = 320 + 16;
    scrollContainerRef.current.scrollTo({
      left: index * cardWidthWithGap,
      behavior: "smooth",
    });
    setActiveSlide(index);
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-20 lg:py-24 bg-transparent select-none">
      {/* Background Ambient Glow & Light Accents */}
      <FeaturesBackground />

      <div className="max-w-[1320px] 2xl:max-w-[1360px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        {/* Section Header with Expandable Paragraph */}
        <FeaturesHeader
          title={data.header.title}
          subtitle={data.header.subtitle}
        />

        {/* --- MOBILE VIEW: Horizontal Snap Slider (< md) --- */}
        <div className="block md:hidden w-full">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex items-center gap-[16px] overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-2 pb-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {data.items.map((item) => (
              <FeatureMobileCard
                key={`mobile-${item.id}`}
                id={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>

          {/* Pagination Indicator Dots */}
          <FeaturesPaginationDots
            total={data.items.length}
            activeIndex={activeSlide}
            onSelect={scrollToSlide}
          />
        </div>

        {/* --- DESKTOP VIEW: 2-Column Grid (>= md) --- */}
        <div className="hidden md:grid md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
          {data.items.map((item) => {
            return (
              <div
                key={item.id}
                className="group relative p-[1px] rounded-2xl cursor-pointer transition-all duration-300 ease-out bg-gradient-to-r from-[#305CD8] to-[#903DD1] hover:bg-none hover:bg-[#305CD8] hover:shadow-[0_14px_36px_rgba(48,92,216,0.28)] hover:-translate-y-1 will-change-transform"
              >
                {/* Inner Card Container */}
                <div className="w-full h-full flex items-center p-6 sm:p-7 rounded-[15px] bg-white text-[#092856] transition-colors duration-300 ease-out group-hover:bg-[#305CD8] group-hover:text-white">
                  {/* Left Illustrated 3D Icon */}
                  <div className="flex-shrink-0 w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] rounded-2xl flex items-center justify-center mr-5 sm:mr-6 transition-transform duration-300 ease-out group-hover:scale-105">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold font-dm-sans tracking-tight mb-2 text-[#092856] transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base font-manrope leading-relaxed text-[#556987] transition-colors duration-300 group-hover:text-white/90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
