import React from "react";

interface Props {
  title?: string;
  subtitle?: string;
}

/**
 * DigitalMarketingRecentProjects Component
 * 
 * Section 4: Recent Campaigns & Work
 * Matches Y: 2342 - 3234 in Digital Marketing SVG
 */
export const DigitalMarketingRecentProjects: React.FC<Props> = ({
  title = "Our Recent Marketing Campaigns & Results",
  subtitle = "Take a look at how our data-driven marketing campaigns delivered explosive ROI and qualified pipeline growth for our clients.",
}) => {
  return (
    <section className="py-20 md:py-28 bg-[#F5F8FF] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Section Header */}
        <div className="text-center max-w-[850px] mx-auto mb-14 md:mb-16">
          <span className="text-[#305CD8] font-dm-sans font-semibold text-sm uppercase tracking-wider mb-3 inline-block">
            Proven Results
          </span>
          <h2 className="text-[#092856] font-dm-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[52px] tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-[#495162] font-manrope text-base sm:text-lg leading-relaxed max-w-[760px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Placeholder / Layout Frame */}
        <div className="w-full min-h-[380px] rounded-2xl bg-white border border-dashed border-[#CAD6F4] flex flex-col items-center justify-center p-8 text-center shadow-sm">
          <div className="w-16 h-16 rounded-full bg-blue-50 text-[#305CD8] flex items-center justify-center font-bold text-2xl mb-4">
            🚀
          </div>
          <h3 className="text-[#092856] font-dm-sans font-bold text-xl mb-2">
            Recent Marketing Projects & Case Highlights
          </h3>
          <p className="text-[#495162] font-manrope text-sm sm:text-base max-w-md">
            Campaign showcase cards ready for final SVG assets and case details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingRecentProjects;
