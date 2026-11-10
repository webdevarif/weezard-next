import React from "react";
import { PillButton } from "@/app/[locale]/components/ui/pill-button";

interface ProcessLeftContentProps {
  title: string;
  subtitle: string;
  cta?: {
    label: string;
    href: string;
  };
}

/**
 * ProcessLeftContent Component
 * 
 * Sticky/Static left column matching Figma:
 * - Title: 45px DM Sans Bold (#FFFFFF)
 * - Description: 18px Manrope Regular (#FFFFFF)
 * - Purple CTA: "Talk to a Marketing Expert ↗" (#903DD1 filled pill button)
 */
export const ProcessLeftContent: React.FC<ProcessLeftContentProps> = ({
  title,
  subtitle,
  cta,
}) => {
  return (
    <div className="flex flex-col items-start gap-7 sm:gap-9 max-w-[536px]">
      <div className="flex flex-col gap-4">
        <h2 className="font-dm-sans font-bold text-3xl sm:text-4xl lg:text-[45px] text-white leading-tight lg:leading-[54px] tracking-[-0.02em]">
          {title}
        </h2>
        <p className="font-manrope font-normal text-base sm:text-lg text-white/95 leading-relaxed lg:leading-[27px]">
          {subtitle}
        </p>
      </div>

      {cta && (
        <div className="flex-shrink-0 pt-2">
          <PillButton
            href={cta.href}
            label={cta.label}
            variant="solid-purple"
            size="lg"
            className="sm:min-w-[278px] h-[60px] px-[27px] py-[18px]"
          />
        </div>
      )}
    </div>
  );
};

export default ProcessLeftContent;
