import React from "react";
import { Link } from "@/lib/i18n/routing";

interface HeroLeftContentProps {
  title: {
    prefix: string;
    accent: string;
    suffix: string;
  };
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

/**
 * HeroLeftContent Component
 * 
 * Exact Typography & Button Layout matching Figma design:
 * - Desktop:
 *   - Title: DM Sans 72px / 85px (Bold, #092856) with royal blue (#305CD8) accent
 *   - Description: Manrope 24px / 36px (Regular, #495162)
 *   - CTA Button: 340px x 60px, #305CD8, rounded-full
 * - Mobile (< 768px):
 *   - Title: DM Sans 48px / 54px (Bold, #092856), text-center, tracking-[-0.01em]
 *   - Description: Manrope 16px / 27px (Regular, #495162), text-center
 *   - CTA Button: Full width (390px max), 48px height, 14px font-medium, padding 12px 24px
 */
export const HeroLeftContent: React.FC<HeroLeftContentProps> = ({
  title,
  description,
  cta,
}) => {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full max-w-[390px] sm:max-w-[580px] lg:max-w-[752px]">
      {/* Title & Description Container (Frame 1686558384) */}
      <div className="flex flex-col items-center lg:items-start w-full gap-2 lg:gap-3 mb-7 sm:mb-8 md:mb-9">
        {/* Title */}
        <h1 className="font-dm-sans font-bold text-[#092856] text-[34px] xs:text-[40px] sm:text-[48px] lg:text-[68px] xl:text-[72px] leading-[40px] xs:leading-[46px] sm:leading-[54px] lg:leading-[1.18] tracking-[-0.01em] lg:tracking-[-0.02em]">
          {title.prefix}{" "}
          <span className="text-[#305CD8]">{title.accent}</span>{" "}
          {title.suffix}
        </h1>

        {/* Description */}
        <p className="font-manrope font-normal text-[#495162] text-[15px] sm:text-[16px] md:text-xl xl:text-[24px] leading-[26px] sm:leading-[27px] md:leading-relaxed xl:leading-[36px] max-w-[390px] sm:max-w-[540px] lg:max-w-[752px]">
          {description}
        </p>
      </div>

      {/* Primary CTA Button Container (Frame 1686558053) */}
      <div className="w-full max-w-[390px] sm:max-w-none flex justify-center lg:justify-start">
        <Link
          href={cta.href}
          className="group inline-flex items-center justify-center gap-2 sm:gap-3 w-full max-w-[390px] sm:w-[340px] h-[48px] sm:h-[60px] px-6 sm:px-8 py-3 sm:py-[18px] rounded-full bg-[#305CD8] hover:bg-[#254DBF] text-white font-dm-sans font-medium sm:font-semibold text-[14px] sm:text-base leading-6 sm:leading-5 tracking-[-0.01em] transition-all duration-300 shadow-[0px_9px_45px_rgba(0,95,200,0.17)] hover:shadow-[0px_12px_50px_rgba(0,95,200,0.28)] hover:-translate-y-0.5"
        >
          <span>{cta.label}</span>
          {/* Figma exact diagonal arrow with 2px stroke */}
          <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HeroLeftContent;
