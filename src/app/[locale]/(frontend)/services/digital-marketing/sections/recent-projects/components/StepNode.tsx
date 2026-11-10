import React from "react";
import { StepIcon } from "./StepIcon";

interface StepNodeProps {
  stepNumber: number;
  stepLabel: string;
  position: "top" | "bottom";
}

/**
 * StepNode Component
 * 
 * Timeline Circle Node + STEP Badge:
 * - 58x58px Circular White Glass Icon Box with drop shadow
 * - "STEP 1" - "STEP 5" Pill Badge: 62x27px, #D9E3FD background, 14px DM Sans Semibold, #305CD8
 * - Position awareness:
 *   - When card is at BOTTOM (Steps 1, 3, 5): Badge sits ABOVE the icon circle.
 *   - When card is at TOP (Steps 2, 4): Badge sits BELOW the icon circle.
 */
export const StepNode: React.FC<StepNodeProps> = ({
  stepNumber,
  stepLabel,
  position,
}) => {
  return (
    <div className="relative flex flex-col items-center select-none">
      {/* If Card is at Bottom, Step Badge is on Top (Steps 1, 3, 5) */}
      {position === "bottom" && (
        <div className="mb-2 inline-flex items-center justify-center px-[10px] py-[5px] rounded-full bg-[#D9E3FD] h-[27px] min-w-[62px]">
          <span className="font-dm-sans font-semibold text-[14px] leading-[17px] text-[#305CD8] uppercase tracking-wide">
            {stepLabel}
          </span>
        </div>
      )}

      {/* 58x58 Circular Icon */}
      <StepIcon stepNumber={stepNumber} />

      {/* If Card is at Top, Step Badge is on Bottom (Steps 2, 4) */}
      {position === "top" && (
        <div className="mt-2 inline-flex items-center justify-center px-[10px] py-[5px] rounded-full bg-[#D9E3FD] h-[27px] min-w-[62px]">
          <span className="font-dm-sans font-semibold text-[14px] leading-[17px] text-[#305CD8] uppercase tracking-wide">
            {stepLabel}
          </span>
        </div>
      )}
    </div>
  );
};

export default StepNode;
