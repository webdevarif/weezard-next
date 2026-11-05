/**
 * BlogHeroSection Component
 * Main hero banner for the Blog index page:
 * - 1920x800 background photo with dark navy tint
 * - Centered 1014px middle container
 * - Responsive DM Sans typography, 600px search box, and 8 category filter pills
 */

"use client";

import React from "react";
import Image from "next/image";
import heroBg from "./assets/hero-bg.webp";
import HeroContent from "./components/HeroContent";
import HeroSearchBar from "./components/HeroSearchBar";
import CategoryFilters from "./components/CategoryFilters";

interface BlogHeroSectionProps {
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
  onSearch?: (query: string) => void;
}

export const BlogHeroSection: React.FC<BlogHeroSectionProps> = ({
  activeCategory,
  onSelectCategory,
  onSearch,
}) => {
  return (
    <section className="relative w-full min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-[#091E42]">
      {/* Background photo matching Figma Rectangle 9041 */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Weezard Blog Hero Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Ambient Dark Navy gradient overlay for optimal text contrast */}
        <div className="absolute inset-0 bg-[#091E42]/60 mix-blend-multiply" />
      </div>

      {/* Middle Content Container matching 1014px Figma Frame */}
      <div className="relative z-10 w-full max-w-[1014px] mx-auto px-4 sm:px-6 py-20 sm:py-24 lg:py-[110px] flex flex-col items-center">
        <HeroContent />
        <HeroSearchBar onSearch={onSearch} />
        <CategoryFilters
          activeCategory={activeCategory}
          onSelectCategory={onSelectCategory}
        />
      </div>
    </section>
  );
};

export default BlogHeroSection;

