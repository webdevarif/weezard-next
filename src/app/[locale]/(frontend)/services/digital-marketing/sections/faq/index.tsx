"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  data: {
    title: string;
    subtitle: string;
    items: FaqItem[];
    conclusion: {
      text: string;
    };
  };
}

/**
 * DigitalMarketingFaq Component
 * 
 * Accordion FAQs + Conclusion Card at the bottom:
 * - Dynamic open/close interactive items
 * - Figma-matched conclusion frame with dashed divider Vector 53
 */
export const DigitalMarketingFaq: React.FC<FaqProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FBFDFF] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Header */}
        <div className="text-center max-w-[850px] mx-auto mb-14 md:mb-16">
          <h2 className="text-[#092856] font-dm-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[52px] tracking-tight mb-4">
            {data.title}
          </h2>
          <p className="text-[#495162] font-manrope text-base sm:text-lg leading-relaxed max-w-[760px] mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-[920px] mx-auto space-y-4 mb-20">
          {data.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-solid border-[#D9E2F2] overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4"
                >
                  <span className="text-[#092856] font-dm-sans font-bold text-base sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform text-[#305CD8] font-bold bg-blue-50 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-[#495162] font-manrope text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Conclusion Frame with dashed divider Vector 53 matching Figma */}
        <div className="max-w-[1320px] mx-auto flex flex-col items-center">
          {/* Vector 53 Divider */}
          <div
            className="w-full h-0 mb-8"
            style={{ borderTop: "1.5px dashed #BEC8E5" }}
            aria-hidden="true"
          />

          <div className="w-full bg-white rounded-2xl p-6 sm:p-10 md:p-12 border border-solid border-[#E2E8F0] shadow-sm">
            <p className="text-[#495162] font-dm-sans font-normal text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-[34px] max-w-[1220px]">
              {data.conclusion.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingFaq;
