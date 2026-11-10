import React from "react";
import { CaseStudiesHeader } from "./components/CaseStudiesHeader";
import { CaseStudiesShowcase } from "./components/CaseStudiesShowcase";
import { CaseStudiesSectionData } from "./data/caseStudiesData";

interface DigitalMarketingCaseStudiesProps {
  data?: CaseStudiesSectionData;
}

/**
 * DigitalMarketingCaseStudies Component
 * 
 * Section 7: "Real Businesses. Real Growth." (Case Studies & Impact)
 * Figma Specs:
 * - Main section container: 1320px width, 689px height, gap 28px between Header and Showcase
 * - Ambient background blur orbs (Group 1413375561, opacity 0.3):
 *   - Ellipse 103: #EAD53F (bottom right, blur 250px)
 *   - Ellipse 104: #305CD8 (bottom left, blur 150px)
 *   - Ellipse 105: #86DDF1 (top right, blur 150px)
 * - All text content dynamically sourced from content.ts
 */
export const DigitalMarketingCaseStudies: React.FC<DigitalMarketingCaseStudiesProps> = ({
  data,
}) => {
  if (!data) return null;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Mother Section Background Ambient Glow Orbs (Group 1413375561) */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-30"
        aria-hidden="true"
      >
        {/* Ellipse 105: Top-Right Cyan Glow (#86DDF1) */}
        <div className="absolute right-[-50px] top-0 w-[350px] sm:w-[495px] h-[260px] sm:h-[362px] rounded-full bg-[#86DDF1] blur-[150px]" />

        {/* Ellipse 103: Bottom-Center/Right Warm Yellow Glow (#EAD53F) */}
        <div className="absolute left-[58%] bottom-[12%] w-[280px] sm:w-[357px] h-[200px] sm:h-[261px] rounded-full bg-[#EAD53F] opacity-80 blur-[250px]" />

        {/* Ellipse 104: Bottom-Left Royal Blue Glow (#305CD8) */}
        <div className="absolute left-0 bottom-0 w-[250px] sm:w-[320px] h-[180px] sm:h-[234px] rounded-full bg-[#305CD8] blur-[150px]" />
      </div>

      {/* Main Content Container (1320px width, gap 28px) */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1320px] flex flex-col gap-7 lg:gap-[28px]">
        {/* Top Header Row (Frame 1686558261) */}
        <CaseStudiesHeader
          title={data.header.title}
          subtitle={data.header.subtitle}
          cta={data.header.cta}
        />

        {/* Bottom Case Studies Showcase (Frame 1686558382) */}
        <CaseStudiesShowcase tabs={data.tabs} imageSrc={data.image} />
      </div>
    </section>
  );
};

export default DigitalMarketingCaseStudies;
