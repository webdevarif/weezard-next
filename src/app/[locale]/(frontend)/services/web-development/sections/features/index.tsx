/**
 * Features / Why Choose Us Section
 * 
 * 6 horizontal feature cards (2 columns x 3 rows) matching Figma SVG exactly.
 * - Dynamic data driven via props.
 * - Title: 45px bold, line-height 54px (#092856)
 * - Paragraph: 18px regular, line-height 27px (#556987)
 * - Cards: 1px linear-gradient border (0% #305CD8 to 100% #903DD1, 100% opacity)
 * - Hover / Active state: Solid blue (#305CD8), white text, elevated drop shadow
 */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FeaturesBackground } from "./components/FeaturesBackground";

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
  // First item is active by default to mirror Figma design
  const [activeId, setActiveId] = useState<string>("custom-dev");

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-transparent">
      {/* Background Ambient Glow & Light Accents SVG */}
      <FeaturesBackground />

      <div className="max-w-[1320px] 2xl:max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        {/* Section Header */}
        <div className="text-center max-w-[1020px] mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-[#092856] font-dm-sans leading-tight sm:leading-[1.2] lg:leading-[54px] tracking-tight">
            {data.header.title}
          </h2>
          {data.header.subtitle && (
            <p className="mt-4 text-base sm:text-[18px] font-normal text-[#556987] font-manrope leading-[26px] sm:leading-[27px]">
              {data.header.subtitle}
            </p>
          )}
        </div>

        {/* 6 Horizontal Cards Grid: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
          {data.items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                className={`group relative p-[1px] rounded-2xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#305CD8] shadow-[0_14px_36px_rgba(48,92,216,0.28)] -translate-y-1"
                    : "bg-gradient-to-r from-[#305CD8] to-[#903DD1] hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                {/* Inner Card Container */}
                <div
                  className={`w-full h-full flex items-center p-6 sm:p-7 rounded-[15px] transition-colors duration-300 ${
                    isActive ? "bg-[#305CD8] text-white" : "bg-white text-[#092856]"
                  }`}
                >
                  {/* Left Illustrated 3D Icon */}
                  <div
                    className={`flex-shrink-0 w-[72px] h-[72px] sm:w-[80px] h-[80px] rounded-2xl flex items-center justify-center mr-5 sm:mr-6 transition-transform duration-300 ${
                      isActive ? "scale-105" : "group-hover:scale-105"
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-lg sm:text-xl font-bold font-dm-sans tracking-tight mb-2 ${
                        isActive ? "text-white" : "text-[#092856]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base font-manrope leading-relaxed ${
                        isActive ? "text-white/90" : "text-[#556987]"
                      }`}
                    >
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
