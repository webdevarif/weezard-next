/**
 * FeaturesHeader Component
 *
 * Renders the section title and subtitle with expandable paragraph on mobile.
 * Uses the existing ExpandableParagraph component for clamping text to 3 lines
 * with a "See More / See Less" toggle on mobile screens.
 */

"use client";

import React from "react";
import { ExpandableParagraph } from "@/app/[locale]/components/ui/expandable-paragraph";

export interface FeaturesHeaderProps {
  title: string;
  subtitle?: string;
}

export const FeaturesHeader: React.FC<FeaturesHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="text-center max-w-[390px] md:max-w-[1020px] mx-auto mb-8 sm:mb-12 lg:mb-16 px-2">
      {/* Section Title */}
      <h2 className="text-[32px] sm:text-4xl lg:text-[45px] font-bold text-[#092856] font-dm-sans leading-[42px] sm:leading-[1.2] lg:leading-[54px] tracking-tight mb-3 sm:mb-4">
        {title}
      </h2>

      {/* Expandable Subtitle for Mobile / Full text on Desktop */}
      {subtitle && (
        <div className="w-full">
          <ExpandableParagraph
            text={subtitle}
            lines={3}
            variant="blue"
            align="center"
            className="text-[14px] sm:text-base lg:text-[18px] font-normal text-[#495162] sm:text-[#556987] font-manrope leading-[22px] sm:leading-[27px]"
            buttonClassName="text-[14px] font-manrope font-medium text-[#305CD8] underline"
          />
        </div>
      )}
    </div>
  );
};

export default FeaturesHeader;
