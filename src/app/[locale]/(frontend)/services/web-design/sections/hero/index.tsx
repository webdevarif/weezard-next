/**
 * Hero Section for Services / Web Design Page
 * 
 * Pixel-perfect clone conforming 100% to Figma desktop specifications (hero,txt):
 * - Left column: Trust rating badge, exact 3-line title with royal blue highlights, description, and 290x60 pill CTA.
 * - Right column: Layered 3D website mockups, floating interactive pills, and centered awards badge.
 * - Background: Exact gradient with precisely placed decorative circular arc swoosh.
 */

"use client";

import React from "react";
import HeroBackgroundDecor from "./components/HeroBackgroundDecor";
import HeroContent from "./components/HeroContent";
import HeroVisual from "./components/HeroVisual";
import HeroFloatingPills from "./components/HeroFloatingPills";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-[45px] sm:pt-[50px] sm:pb-[55px] lg:pt-[75px] lg:pb-[65px] bg-gradient-to-b from-white to-[#F5F7FA]">
      {/* Background Decorative Waves & Glows */}
      <HeroBackgroundDecor />

      {/* Main Content Container with Desktop Centering & Figma Margins */}
      <div className="relative z-10 max-w-[1320px] 2xl:max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Mobile-Only Top Floating Pills Cluster (Figma mobile_hero_svg.txt) */}
        <div className="lg:hidden mb-4 sm:mb-6 w-full">
          <HeroFloatingPills isMobileOnly={true} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[500px] lg:min-h-[560px]">
          {/* Left Column: Headline, Trust & CTA */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <HeroContent />
          </div>

          {/* Right Column: Interactive Visuals, Mockups & Floating Badges */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
