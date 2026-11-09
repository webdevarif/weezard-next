import React from "react";

interface ProcessProps {
  data: {
    header: {
      tag: string;
      title: string;
      subtitle: string;
    };
    steps: Array<{
      stepNumber: string;
      title: string;
      description: string;
    }>;
  };
}

/**
 * DigitalMarketingProcess Component
 * 
 * 4-Step Growth Framework:
 * 1. Deep Audit & Market Research
 * 2. Custom Growth Strategy & Setup
 * 3. Campaign Execution & A/B Testing
 * 4. Scale, Optimize & Compound
 */
export const DigitalMarketingProcess: React.FC<ProcessProps> = ({ data }) => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Header */}
        <div className="text-center max-w-[850px] mx-auto mb-16 md:mb-20">
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

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-solid border-slate-200 flex flex-col justify-between hover:border-[#305CD8]/40 transition-colors"
            >
              <div>
                <span className="inline-block text-3xl font-bold font-dm-sans text-[#305CD8] mb-4">
                  {step.stepNumber}
                </span>
                <h3 className="text-[#092856] font-dm-sans font-bold text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-[#495162] font-manrope text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Phase {idx + 1}</span>
                <span className="text-[#305CD8]">Active Focus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingProcess;
