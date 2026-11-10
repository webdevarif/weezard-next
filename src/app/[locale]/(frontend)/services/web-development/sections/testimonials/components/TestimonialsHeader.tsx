import React from "react";
import { PillButton } from "@/app/[locale]/components/ui/pill-button";

export interface TestimonialsHeaderProps {
  title: string;
  subtitle?: string;
  cta?: {
    label: string;
    href: string;
  };
}

/**
 * Header component matching Figma Frame 1686558268:
 * - Title: DM Sans 700, 45px/54px, letter-spacing -0.02em, #092856
 * - Subtitle: Manrope 400, 18px/27px, #495162
 * - CTA Button: Global PillButton (60px height, rounded-full, 1px solid #092856)
 */
export const TestimonialsHeader: React.FC<TestimonialsHeaderProps> = ({
  title,
  subtitle,
  cta,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 lg:mb-14 gap-6">
      <div className="max-w-[727px]">
        <h2 className="text-3xl sm:text-4xl lg:text-[45px] lg:leading-[54px] font-bold text-[#092856] font-dm-sans tracking-[-0.02em]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3.5 text-base sm:text-[18px] sm:leading-[27px] text-[#495162] font-manrope">
            {subtitle}
          </p>
        )}
      </div>

      {cta && (
        <div className="flex-shrink-0">
          <PillButton
            href={cta.href}
            label={cta.label}
            variant="outline"
            hoverVariant="dark"
            size="lg"
            className="w-full sm:w-[219px]"
          />
        </div>
      )}
    </div>
  );
};
