"use client";

import React from "react";

interface FaqConclusionProps {
  text: string;
}

/**
 * FaqConclusion Component
 *
 * Pixel-Perfect match to Figma Frame 1686557869:
 * - Dashed divider: Vector 53, 1.5px dashed #BEC8E5
 * - Container: max-w-[1320px], bg #FFFFFF, padding 0px 50px 50px
 * - Typography: DM Sans Regular 24px, line-height 32px, color #495162
 */
export const FaqConclusion: React.FC<FaqConclusionProps> = ({ text }) => {
  return (
    <div className="max-w-[1320px] mx-auto w-full mt-14 sm:mt-16 lg:mt-20 flex flex-col items-start gap-[30px]">
      {/* Vector 53: 1.5px dashed divider */}
      <div
        className="w-full h-0 border-t-[1.5px] border-dashed border-[#BEC8E5]"
        aria-hidden="true"
      />

      {/* Frame 1686557869: Conclusion content */}
      <div className="w-full bg-white rounded-[16px] px-4 sm:px-8 lg:px-[50px] pb-6 sm:pb-10 lg:pb-[50px]">
        <div className="max-w-[1220px]">
          <p className="font-dm-sans font-normal text-lg sm:text-xl lg:text-[24px] leading-relaxed sm:leading-[30px] lg:leading-[32px] text-[#495162]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqConclusion;
