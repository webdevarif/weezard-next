import React from "react";

interface Props {
  title?: string;
  subtitle?: string;
}

/**
 * DigitalMarketingCaseStudies Component
 * 
 * Section 7: Case Studies & Real Results
 * Matches Y: 7000 - 8000 in Digital Marketing SVG
 */
export const DigitalMarketingCaseStudies: React.FC<Props> = ({
  title = "Real Case Studies That Generated Growth",
  subtitle = "See how our tailored strategies, targeted ads, and conversion optimization transformed businesses across various industries.",
}) => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Section Header */}
        <div className="text-center max-w-[850px] mx-auto mb-14 md:mb-16">
          <span className="text-[#305CD8] font-dm-sans font-semibold text-sm uppercase tracking-wider mb-3 inline-block">
            Case Studies
          </span>
          <h2 className="text-[#092856] font-dm-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[52px] tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-[#495162] font-manrope text-base sm:text-lg leading-relaxed max-w-[760px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Placeholder / Layout Frame */}
        <div className="w-full min-h-[380px] rounded-2xl bg-[#F8FAFC] border border-dashed border-[#CAD6F4] flex flex-col items-center justify-center p-8 text-center shadow-sm">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-2xl mb-4">
            📈
          </div>
          <h3 className="text-[#092856] font-dm-sans font-bold text-xl mb-2">
            Client Success & Impact Metrics
          </h3>
          <p className="text-[#495162] font-manrope text-sm sm:text-base max-w-md">
            Problem, Solution, and Result case study cards ready for section-specific updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingCaseStudies;
