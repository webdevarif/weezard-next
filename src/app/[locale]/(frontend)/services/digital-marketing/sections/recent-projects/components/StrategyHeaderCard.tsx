import React from "react";
import { PillButton } from "@/app/[locale]/components/ui/pill-button";

interface StrategyHeaderCardProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

/**
 * StrategyHeaderCard Component
 * 
 * Frame 1686558376 from Figma:
 * - Width: 1320px, Height: 305px
 * - Background: #F1F5F8, Border Radius: 16px, Padding: 50px
 * - Title: 45px DM Sans Bold (#092856)
 * - Subtitle: 18px Manrope Regular (#495162)
 * - Button: Royal Blue (#305CD8) PillButton with arrow
 */
export const StrategyHeaderCard: React.FC<StrategyHeaderCardProps> = ({
  title = "How We Craft Your Marketing Strategy",
  subtitle = "We follow a strategic process that balances creativity with data. We listen, research, plan, and execute campaigns that make sense for your industry and budget.",
  ctaText = "Start With a Free Strategy Call",
  ctaHref = "/contact-us",
}) => {
  return (
    <div className="w-full rounded-[16px] bg-[#F1F5F8] p-6 sm:p-10 lg:p-[50px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-[40px] shadow-sm">
      {/* Left Content: Title & Subtitle */}
      <div className="flex flex-col gap-3 sm:gap-4 max-w-[570px]">
        <h2 className="font-dm-sans font-bold text-[28px] sm:text-[38px] lg:text-[45px] leading-tight lg:leading-[54px] tracking-[-0.02em] text-[#092856]">
          {title}
        </h2>
        <p className="font-manrope font-normal text-base sm:text-[18px] leading-relaxed lg:leading-[27px] text-[#495162]">
          {subtitle}
        </p>
      </div>

      {/* Right Content: Pill CTA Button (width: 312px, height: 60px, #305CD8) */}
      <div className="flex-shrink-0 w-full sm:w-auto">
        <PillButton
          href={ctaHref}
          label={ctaText}
          variant="solid-blue"
          size="lg"
          className="w-full sm:w-auto sm:min-w-[312px] h-[60px] px-[27px] py-[18px]"
        />
      </div>
    </div>
  );
};

export default StrategyHeaderCard;
