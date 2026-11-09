import React from "react";

interface Props {
  title?: string;
  subtitle?: string;
}

/**
 * DigitalMarketingBlogs Component
 * 
 * Section 9: Resources & Marketing Insights
 * Matches Y: 9000 - 10000 in Digital Marketing SVG
 */
export const DigitalMarketingBlogs: React.FC<Props> = ({
  title = "Latest Marketing Insights & Growth Guides",
  subtitle = "Stay ahead of industry shifts with our proven playbooks on SEO, paid ads, and conversion optimization.",
}) => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Section Header */}
        <div className="text-center max-w-[850px] mx-auto mb-14 md:mb-16">
          <span className="text-[#305CD8] font-dm-sans font-semibold text-sm uppercase tracking-wider mb-3 inline-block">
            Resources & Insights
          </span>
          <h2 className="text-[#092856] font-dm-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[52px] tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-[#495162] font-manrope text-base sm:text-lg leading-relaxed max-w-[760px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Placeholder / Layout Frame */}
        <div className="w-full min-h-[360px] rounded-2xl bg-[#F8FAFC] border border-dashed border-[#CAD6F4] flex flex-col items-center justify-center p-8 text-center shadow-sm">
          <div className="w-16 h-16 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-2xl mb-4">
            📰
          </div>
          <h3 className="text-[#092856] font-dm-sans font-bold text-xl mb-2">
            Marketing Articles & Guides Grid
          </h3>
          <p className="text-[#495162] font-manrope text-sm sm:text-base max-w-md">
            Blog post cards and article links ready for section-by-section styling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingBlogs;
