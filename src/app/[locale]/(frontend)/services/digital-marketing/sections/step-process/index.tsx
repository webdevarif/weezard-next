import React from "react";
import { ProcessLeftContent } from "./components/ProcessLeftContent";
import { ProcessScrollList } from "./components/ProcessScrollList";
import { ProcessItemData } from "./components/ProcessCard";

interface ProcessProps {
  data: {
    header: {
      title: string;
      subtitle: string;
      cta?: {
        label: string;
        href: string;
      };
    };
    steps: ProcessItemData[];
  };
}

/**
 * DigitalMarketingProcess Component
 * 
 * "What’s Included in Our Marketing Services" Section (Figma Frame 1686558341):
 * - Deep navy canvas background: #092856
 * - Ambient white blush glow (left) & royal blue glow (right)
 * - Left side: 45px DM Sans Bold headline + Manrope description + Purple #903DD1 Pill Button
 * - Right side: Vertical interactive 10-step service cards with custom yellow (#EAD53F) scroll indicator
 */
export const DigitalMarketingProcess: React.FC<ProcessProps> = ({ data }) => {
  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#092856]">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Left White / Soft Lavender Blush Glow */}
        <div
          className="absolute -left-[300px] sm:-left-[450px] top-[200px] w-[550px] sm:w-[787px] h-[650px] sm:h-[978px] rounded-full bg-white opacity-15 blur-[90px] sm:blur-[110px]"
          aria-hidden="true"
        />

        {/* Right Royal Blue Glow */}
        <div
          className="absolute -right-[150px] sm:-right-[220px] -top-[120px] sm:-top-[256px] w-[450px] sm:w-[569px] h-[400px] sm:h-[492px] rounded-full bg-[#305CD8] opacity-80 blur-[130px] sm:blur-[160px]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1320px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[76px]">
          {/* Left Sticky/Static Content (Frame 1686558340: 536px width) */}
          <div className="w-full lg:w-[536px] flex-shrink-0 lg:sticky lg:top-24">
            <ProcessLeftContent
              title={data.header.title}
              subtitle={data.header.subtitle}
              cta={data.header.cta}
            />
          </div>

          {/* Right Scrollable Cards Container (Group 1413375660: 708px width) */}
          <div className="w-full lg:w-[708px] flex-shrink-0 flex justify-center lg:justify-end">
            <ProcessScrollList items={data.steps} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingProcess;
