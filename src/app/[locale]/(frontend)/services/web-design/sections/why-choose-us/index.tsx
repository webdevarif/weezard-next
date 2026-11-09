/**
 * Why Choose Us Section for Services / Web Design Page
 * 
 * Pixel-perfect clone conforming 100% to Figma specifications:
 * - Left column: High-res office collaboration banner (635px) + floating 'Talk to Our Experts' CTA.
 * - Right column: Section header + 4 vertically stacked soft-colored feature cards with dual-tone icons (635px).
 * - Exact 50px desktop column gap, conforming to the 1320px Figma artboard.
 */

"use client";

import React from "react";
import { StaticImageData } from "next/image";
import WhyChooseUsBanner from "./components/WhyChooseUsBanner";
import WhyChooseUsHeader from "./components/WhyChooseUsHeader";
import FeatureCardsList from "./components/FeatureCardsList";

export interface WhyChooseUsSectionProps {
  bannerImage?: StaticImageData | string;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ bannerImage }) => {
  return (
    <section className="py-[60px] sm:py-[75px] lg:py-[105px] bg-white">
      <div className="max-w-[1360px] 2xl:max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[50px] items-center">
          {/* Left Column: Photo Banner (6 cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <WhyChooseUsBanner bannerImage={bannerImage} />
          </div>

          {/* Right Column: Title, Narrative & 4 Colored Cards (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <WhyChooseUsHeader />
            <FeatureCardsList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
