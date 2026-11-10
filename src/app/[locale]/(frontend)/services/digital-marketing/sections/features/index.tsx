import React from "react";
import { FeaturesHeader } from "./components/FeaturesHeader";
import { FeatureCard, FeatureCardData } from "./components/FeatureCard";
import { FeaturesBannerImage } from "./components/FeaturesBannerImage";

interface FeaturesProps {
  data: {
    header: {
      title: string;
      subtitle: string;
      cta?: {
        label: string;
        href: string;
      };
    };
    items: FeatureCardData[];
    banner?: {
      src: string;
      alt: string;
    };
  };
}

/**
 * DigitalMarketingFeatures Component
 * 
 * "Why Digital Marketing Is a Game-Changer for Small Businesses" Section:
 * - 3 atmospheric ambient background blur orbs matching Figma spec:
 *   - Blue glow top right: #305CD8 (opacity 0.1, blur 150px)
 *   - Orange glow top left: #FF9900 (opacity 0.15, blur 150px)
 *   - Purple glow bottom right: #903DD1 (opacity 0.15, blur 150px)
 * - Header with DM Sans title & Manrope subtitle + "Explore More Case Studies ↗" CTA pill
 * - 4 modular Feature Cards (315px x 310px, 12px rounded, composable 3D icon layer)
 * - 1320px x 600px bottom strategic marketing banner image
 */
export const DigitalMarketingFeatures: React.FC<FeaturesProps> = ({ data }) => {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 overflow-hidden bg-white">
      {/* Figma Ambient Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Top-Left Warm Orange Glow */}
        <div
          className="absolute -left-[200px] sm:-left-[314px] -top-[200px] sm:-top-[374px] w-[450px] sm:w-[614px] h-[450px] sm:h-[614px] rounded-full bg-[#FF9900] opacity-15 blur-[120px] sm:blur-[150px]"
          aria-hidden="true"
        />

        {/* Top-Right Royal Blue Glow */}
        <div
          className="absolute -right-[150px] sm:-right-[200px] -top-[100px] sm:-top-[171px] w-[450px] sm:w-[614px] h-[450px] sm:h-[614px] rounded-full bg-[#305CD8] opacity-10 blur-[120px] sm:blur-[150px]"
          aria-hidden="true"
        />

        {/* Bottom-Right Deep Purple Glow */}
        <div
          className="absolute -right-[150px] sm:-right-[200px] bottom-[100px] sm:bottom-[150px] w-[450px] sm:w-[614px] h-[450px] sm:h-[614px] rounded-full bg-[#903DD1] opacity-15 blur-[120px] sm:blur-[150px]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1320px]">
        {/* Section Header */}
        <FeaturesHeader
          title={data.header.title}
          subtitle={data.header.subtitle}
          cta={data.header.cta}
        />

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5 mb-12 sm:mb-16">
          {data.items.map((card) => (
            <FeatureCard key={card.id} card={card} />
          ))}
        </div>

        {/* Bottom Banner Image */}
        {data.banner && (
          <FeaturesBannerImage
            src={data.banner.src}
            alt={data.banner.alt}
          />
        )}
      </div>
    </section>
  );
};

export default DigitalMarketingFeatures;
