import React from "react";

export interface FaqHeaderProps {
  title: string;
}

/**
 * FAQ Header matching Figma Frame 1686558268 / Title:
 * - Title: DM Sans 700 (Bold), 45px/54px, letter-spacing -0.02em, text-center, #092856
 */
export const FaqHeader: React.FC<FaqHeaderProps> = ({ title }) => {
  return (
    <div className="w-full text-center mb-10 sm:mb-12 lg:mb-[50px]">
      <h2 className="text-3xl sm:text-4xl lg:text-[45px] lg:leading-[54px] font-bold text-[#092856] font-dm-sans tracking-[-0.02em] text-center">
        {title}
      </h2>
    </div>
  );
};
