/**
 * Process Step Card Component
 *
 * 100% Pixel-Perfect replication of Figma Process Cards:
 * - Dimensions: 255px width x 234px height
 * - Rounded corners: 12px (r=12)
 * - Top Floating Pill Badge: Centered on top border (floats -19.5px above card)
 * - Title Container (Frame 1686558288):
 *   - Display: flex, row, center, center
 *   - Padding: 8px, gap: 10px
 *   - Width: 215px, Height: 70px
 *   - Border Radius: 8px
 *   - Background: linear-gradient(90deg, rgba(48, 92, 216, 0) 0%, rgba(48, 92, 216, 0.18) 48.56%, rgba(48, 92, 216, 0) 100%)
 * - Title Typography:
 *   - Width: 199px, Height: 54px
 *   - Font Family: 'Manrope'
 *   - Font Weight: 700 (Bold)
 *   - Font Size: 20px, Line Height: 27px (135%), Letter Spacing: -0.01em
 *   - Color: #092856
 * - Description Typography:
 *   - Font Family: 'Manrope', Font Size: 14px, Line Height: 22px
 *   - Color: #556987
 */

"use client";

import React from "react";
import { StepBadge } from "./StepBadge";
import { CardFrame } from "./CardFrame";

export interface StepItemData {
  stepNumber: string;
  title: string;
  description: string;
}

interface ProcessStepCardProps {
  step: StepItemData;
  index: number;
  isHovered?: boolean;
  onHover?: (idx: number | null) => void;
  className?: string;
}

export const ProcessStepCard: React.FC<ProcessStepCardProps> = ({
  step,
  index,
  className = "",
}) => {
  const stepIdx = index + 1;

  return (
    <div
      className={`group relative w-[255px] h-[234px] rounded-[12px] transition-all duration-300 ease-out cursor-pointer select-none shadow-[0_20px_40px_rgba(37,75,148,0.10)] hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(37,75,148,0.18)] will-change-transform ${className}`}
    >
      {/* 1. Top Centered Floating Pill Badge (Synchronous inline SVG, 0ms latency) */}
      <div className="absolute -top-[19.5px] left-1/2 -translate-x-1/2 z-30 pointer-events-none drop-shadow-sm">
        <StepBadge stepIndex={stepIdx} />
      </div>

      {/* 2. SVG Card Background Frame (Synchronous inline SVG, 0ms latency) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[12px]">
        <CardFrame stepIndex={stepIdx} />
      </div>

      {/* 3. Card Content */}
      <div className="relative z-10 pt-[24px] px-[20px] pb-[16px] flex flex-col h-full pointer-events-auto">
        {/* Title Container: Frame 1686558288 (Auto height to tightly wrap title text) */}
        <div
          className="w-full min-h-[54px] rounded-[8px] flex flex-row items-center justify-start py-[8px] px-[10px] mb-[12px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(48, 92, 216, 0) 0%, rgba(48, 92, 216, 0.18) 48.56%, rgba(48, 92, 216, 0) 100%)",
          }}
        >
          <h3
            className="w-full font-manrope font-bold text-[20px] leading-[27px] tracking-[-0.01em] text-[#092856]"
          >
            {step.title}
          </h3>
        </div>

        {/* Description */}
        <p className="font-manrope font-normal text-[14px] leading-[22px] text-[#556987] px-1">
          {step.description}
        </p>
      </div>
    </div>
  );
};
