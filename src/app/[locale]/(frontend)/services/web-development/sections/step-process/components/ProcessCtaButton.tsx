/**
 * Process CTA Button Component
 *
 * Pixel-perfect pill button matching Figma Process section CTA:
 * "Kickstart Your Project ↗"
 * Powered by global reusable PillButton (@/app/[locale]/components/ui/pill-button)
 * with proper 1px border (#092856) and exact 390px x 48px mobile sizing.
 */

"use client";

import React from "react";
import { PillButton } from "@/app/[locale]/components/ui/pill-button";

interface ProcessCtaButtonProps {
  label?: string;
  href?: string;
}

export const ProcessCtaButton: React.FC<ProcessCtaButtonProps> = ({
  label = "Kickstart Your Project",
  href = "/contact-us",
}) => {
  return (
    <div className="flex justify-center w-full px-[20px] sm:px-4 mt-[21px] lg:mt-20 relative z-10">
      <PillButton
        href={href}
        label={label}
        variant="outline"
        hoverVariant="dark"
        size="default"
        className="w-full max-w-[390px] sm:w-auto !min-h-[48px] !h-[48px] !border !border-solid !border-[#092856]"
      />
    </div>
  );
};

export default ProcessCtaButton;
