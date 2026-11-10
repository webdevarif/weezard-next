import React from "react";
import HeroLeftContent from "./components/HeroLeftContent";
import HeroBannerIllustration from "./components/HeroBannerIllustration";

interface HeroSectionProps {
  data: {
    title: {
      prefix: string;
      accent: string;
      suffix: string;
    };
    description: string;
    cta: {
      label: string;
      href: string;
    };
  };
}

/**
 * DigitalMarketingHero Component
 * 
 * Section 1: Hero Section for Digital Marketing
 * Sourced directly from Figma CSS & layout specifications:
 * - Canvas Background: 3-layer gradient matching Figma Rectangle 8910
 * - Left Frame: 752px container with DM Sans 72px bold title, Manrope 24px description, and 310px CTA button
 * - Right Frame: 634x590 vector banner illustration from hero_banner.svg
 */
export const DigitalMarketingHero: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <section
      className="relative w-full pt-[95px] pb-12 sm:pt-[115px] sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
      style={{
        background: `
          linear-gradient(50.11deg, rgba(0, 104, 255, 0) 75.46%, rgba(0, 104, 255, 0.8) 160.3%),
          linear-gradient(321.81deg, rgba(149, 120, 254, 0) 59.64%, rgba(120, 189, 246, 0.8) 195.76%),
          linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)
        `,
      }}
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-[1440px]">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[752px_1fr] items-center gap-10 lg:gap-12 xl:gap-14">
          {/* Left Column: Title, Description, and CTA */}
          <HeroLeftContent
            title={data.title}
            description={data.description}
            cta={data.cta}
          />

          {/* Right Column: Hero Banner Vector Graphic */}
          <div className="flex justify-center lg:justify-end w-full">
            <HeroBannerIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingHero;
