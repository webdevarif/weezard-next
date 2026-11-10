/**
 * CtaBannerButtons Component
 *
 * Renders the Primary (#EAD53F) and Secondary (1px solid #FFFFFF) CTA buttons:
 * - Mobile (< 640px, Frame 1686558308):
 *   - Column layout, width 240px, gap 16px
 *   - Each button: width 240px, height 48px, padding 12px 24px, gap 5px, rounded-full
 *   - Typography: DM Sans Medium (500), 14px / 24px, letter-spacing -0.01em
 *   - Icon: 24px x 24px arrow-narrow-up-right with 1.5px stroke
 * - Desktop (>= 640px, Frame 1686558270):
 *   - Row layout, gap 20px, height 60px, DM Sans SemiBold 16px / 20px
 */

"use client";

import React from "react";
import { Link } from "@/lib/i18n/routing";

interface CtaItem {
  label: string;
  href: string;
}

interface CtaBannerButtonsProps {
  primaryCta: CtaItem;
  secondaryCta: CtaItem;
}

export const CtaBannerButtons: React.FC<CtaBannerButtonsProps> = ({
  primaryCta,
  secondaryCta,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-[16px] sm:gap-5 w-[240px] sm:w-auto">
      {/* Primary CTA Button (bg: #EAD53F, color: #092856) */}
      <Link
        href={primaryCta.href}
        className="w-[240px] sm:w-[290px] md:w-[310px] h-[48px] sm:h-[60px] inline-flex items-center justify-center gap-[5px] sm:gap-2.5 px-[24px] sm:px-7 py-[12px] sm:py-[18px] rounded-full bg-[#EAD53F] text-[#092856] font-dm-sans font-medium sm:font-semibold text-[14px] sm:text-[16px] leading-[24px] sm:leading-[20px] tracking-[-0.01em] whitespace-nowrap transition-all duration-300 hover:bg-[#fae64e] hover:shadow-lg active:scale-[0.98] group"
      >
        <span>{primaryCta.label}</span>
        <svg
          className="w-[24px] h-[24px] sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6M18 6H9M18 6V15"
            stroke="#092856"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* Secondary CTA Button (border: 1px solid #FFFFFF, color: #FFFFFF) */}
      <Link
        href={secondaryCta.href}
        className="w-[240px] sm:w-[290px] md:w-[310px] h-[48px] sm:h-[60px] box-border inline-flex items-center justify-center gap-[5px] sm:gap-2.5 px-[24px] sm:px-7 py-[12px] sm:py-[18px] rounded-full border border-solid border-white text-white font-dm-sans font-medium sm:font-semibold text-[14px] sm:text-[16px] leading-[24px] sm:leading-[20px] tracking-[-0.01em] whitespace-nowrap transition-all duration-300 hover:bg-white hover:text-[#305CD8] hover:shadow-lg active:scale-[0.98] group"
      >
        <span>{secondaryCta.label}</span>
        <svg
          className="w-[24px] h-[24px] sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6M18 6H9M18 6V15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default CtaBannerButtons;
