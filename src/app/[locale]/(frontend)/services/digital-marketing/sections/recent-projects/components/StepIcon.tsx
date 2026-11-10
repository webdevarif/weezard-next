import React from "react";
import Image from "next/image";

interface StepIconProps {
  stepNumber: number;
  className?: string;
}

/**
 * StepIcon Component
 * 
 * Uses clean semantic SVG filenames:
 * - Step 1: icon-step-1-discovery.svg
 * - Step 2: icon-step-2-strategy.svg
 * - Step 3: icon-step-3-content.svg
 * - Step 4: icon-step-4-execution.svg
 * - Step 5: icon-step-5-reporting.svg
 */
export const StepIcon: React.FC<StepIconProps> = ({ stepNumber, className = "" }) => {
  const getIconSrc = (step: number) => {
    switch (step) {
      case 1:
        return "/services/digital-marketing/recent-projects/icon-step-1-discovery.svg";
      case 2:
        return "/services/digital-marketing/recent-projects/icon-step-2-strategy.svg";
      case 3:
        return "/services/digital-marketing/recent-projects/icon-step-3-content.svg";
      case 4:
        return "/services/digital-marketing/recent-projects/icon-step-4-execution.svg";
      case 5:
        return "/services/digital-marketing/recent-projects/icon-step-5-reporting.svg";
      default:
        return "/services/digital-marketing/recent-projects/icon-step-1-discovery.svg";
    }
  };

  return (
    <div className={`relative w-[58px] h-[58px] flex items-center justify-center ${className}`}>
      <div className="absolute inset-[-25px] pointer-events-none flex items-center justify-center">
        <Image
          src={getIconSrc(stepNumber)}
          alt={`Step ${stepNumber} Icon`}
          width={108}
          height={108}
          className="w-[108px] h-[108px] max-w-none"
        />
      </div>
    </div>
  );
};

export default StepIcon;
