import React from "react";
import { PillButton } from "@/app/[locale]/components/ui/pill-button";

interface FeaturesHeaderProps {
  title: string;
  subtitle: string;
  cta?: {
    label: string;
    href: string;
  };
}

/**
 * FeaturesHeader Component
 * 
 * Header layout for Why Digital Marketing section:
 * - Left side: 800px max width bold title (45px DM Sans) + subtitle (18px Manrope).
 * - Right side: Dynamic global PillButton "Explore More Case Studies ↗".
 */
export const FeaturesHeader: React.FC<FeaturesHeaderProps> = ({
  title,
  subtitle,
  cta,
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12 mb-12 lg:mb-14">
      {/* Left: Title & Description */}
      <div className="flex flex-col items-start gap-4 max-w-[800px]">
        <h2 className="font-dm-sans font-bold text-3xl sm:text-4xl lg:text-[45px] text-[#092856] leading-tight lg:leading-[54px] tracking-[-0.02em]">
          {title}
        </h2>
        <p className="font-manrope font-normal text-base sm:text-lg text-[#495162] leading-relaxed lg:leading-[27px]">
          {subtitle}
        </p>
      </div>

      {/* Right: Global Reusable Pill Button */}
      {cta && (
        <div className="flex-shrink-0 self-start lg:self-center">
          <PillButton
            href={cta.href}
            label={cta.label}
            variant="outline"
            hoverVariant="dark"
            size="lg"
          />
        </div>
      )}
    </div>
  );
};

export default FeaturesHeader;
