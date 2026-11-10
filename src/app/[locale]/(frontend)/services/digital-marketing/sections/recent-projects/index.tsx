import React from "react";
import { StrategyHeaderCard } from "./components/StrategyHeaderCard";
import { StrategyRoadmap } from "./components/StrategyRoadmap";
import { StrategySectionData } from "./data/strategySteps";

interface DigitalMarketingRecentProjectsProps {
  data?: StrategySectionData;
}

/**
 * DigitalMarketingRecentProjects Component
 * 
 * Section 4: "How We Craft Your Marketing Strategy"
 * - All content (Header text, CTA, and 5 Roadmap Steps) dynamically passed from content.ts
 * - Clean semantic SVG asset paths
 * - Pure white canvas background with exact 1320px width & 50px vertical gap
 */
export const DigitalMarketingRecentProjects: React.FC<DigitalMarketingRecentProjectsProps> = ({
  data,
}) => {
  if (!data) return null;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1320px] flex flex-col gap-10 lg:gap-[50px]">
        {/* Top Header Card (1320x305px, Frame 1686558376) */}
        <StrategyHeaderCard
          title={data.header.title}
          subtitle={data.header.subtitle}
          ctaText={data.header.cta?.label}
          ctaHref={data.header.cta?.href}
        />

        {/* Bottom 5-Step Strategic Roadmap (1320x368px, Frame 1686558377) */}
        <StrategyRoadmap steps={data.steps} />
      </div>
    </section>
  );
};

export default DigitalMarketingRecentProjects;
