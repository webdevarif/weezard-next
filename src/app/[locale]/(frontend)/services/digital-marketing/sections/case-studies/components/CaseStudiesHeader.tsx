import React from "react";
import { PillButton } from "@/app/[locale]/components/ui/pill-button";

interface CaseStudiesHeaderProps {
  title: string;
  subtitle: string;
  cta?: {
    label: string;
    href: string;
  };
}

/**
 * CaseStudiesHeader Component
 * 
 * Strict Figma Pixel-Perfect Implementation (Frame 1686558261):
 * - Width: 1320px, Height: 151px
 * - Left:
 *   - Title: 45px DM Sans Bold, line-height 54px, letter-spacing -0.02em, #092856
 *   - Description: 18px Manrope Regular, line-height 27px, #495162 (max-width 613px)
 * - Right:
 *   - PillButton (outline variant): 285px x 60px, border 1px solid #092856, label "Explore More Case Studies"
 */
export const CaseStudiesHeader: React.FC<CaseStudiesHeaderProps> = ({
  title,
  subtitle,
  cta,
}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
      {/* Left: Title & Description (width 613px) */}
      <div className="flex flex-col gap-3 sm:gap-4 max-w-[613px]">
        <h2 className="font-dm-sans font-bold text-[30px] sm:text-[38px] lg:text-[45px] leading-tight lg:leading-[54px] tracking-[-0.02em] text-[#092856]">
          {title}
        </h2>
        <p className="font-manrope font-normal text-base sm:text-[18px] leading-relaxed lg:leading-[27px] text-[#495162]">
          {subtitle}
        </p>
      </div>

      {/* Right: Global PillButton */}
      {cta && (
        <div className="flex-shrink-0">
          <PillButton
            href={cta.href}
            label={cta.label}
            variant="outline"
            size="lg"
          />
        </div>
      )}
    </div>
  );
};

export default CaseStudiesHeader;
