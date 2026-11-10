import React from "react";

interface TestimonialsHeaderProps {
  title: string;
  subtitle: string;
}

/**
 * TestimonialsHeader Component
 * 
 * Strict Figma Pixel-Perfect Sizing:
 * - Title: 45px DM Sans Bold, line-height 54px, letter-spacing -0.02em, color #092856, centered
 * - Subtitle: 18px Manrope Regular, line-height 27px, color #495162, centered
 * - Container max-width: 848px
 */
export const TestimonialsHeader: React.FC<TestimonialsHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col items-center text-center gap-3 sm:gap-4 max-w-[848px] mx-auto select-none">
      <h2 className="font-dm-sans font-bold text-[30px] sm:text-[38px] lg:text-[45px] leading-tight lg:leading-[54px] tracking-[-0.02em] text-[#092856]">
        {title}
      </h2>
      <p className="font-manrope font-normal text-base sm:text-[18px] leading-relaxed lg:leading-[27px] text-[#495162]">
        {subtitle}
      </p>
    </div>
  );
};

export default TestimonialsHeader;
