import React from "react";

interface FeaturesProps {
  data: {
    header: {
      tag: string;
      title: string;
      subtitle: string;
    };
    items: Array<{
      id: string;
      title: string;
      description: string;
      iconBg: string;
    }>;
  };
}

/**
 * DigitalMarketingFeatures Component
 * 
 * 6-card feature grid highlighting core marketing competencies:
 * - High-Intent SEO
 * - High-ROI Paid Advertising
 * - Conversion Funnel Optimization
 * - Content Strategy
 * - 100% Transparent Live Analytics
 * - Dedicated Growth Specialists
 */
export const DigitalMarketingFeatures: React.FC<FeaturesProps> = ({ data }) => {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Header */}
        <div className="text-center max-w-[850px] mx-auto mb-14 md:mb-20">
          <span className="text-[#305CD8] font-dm-sans font-semibold text-sm uppercase tracking-wider mb-3 inline-block">
            {data.header.tag}
          </span>
          <h2 className="text-[#092856] font-dm-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[52px] tracking-tight mb-4">
            {data.header.title}
          </h2>
          <p className="text-[#495162] font-manrope text-base sm:text-lg leading-relaxed max-w-[760px] mx-auto">
            {data.header.subtitle}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 border border-solid border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl mb-6 ${item.iconBg}`}
              >
                ✦
              </div>
              <h3 className="text-[#092856] font-dm-sans font-bold text-xl mb-3 group-hover:text-[#305CD8] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#495162] font-manrope text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingFeatures;
