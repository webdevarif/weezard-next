/**
 * StepCardItem Component
 * 
 * Individual step card conforming 100% to Figma design:
 * - Width: 319px (fixed shrink-0 for horizontal scrolling)
 * - Height: ~170px
 * - Default state: Clean white card (bg-white, border border-[#E2E8F0], subtle shadow)
 * - Hover state: Holographic iridescent pastel texture (step-card-hover-bg.jpg)
 *   fades in smoothly with subtle elevation and border accent.
 */

"use client";

import React from "react";
import Image from "next/image";
import { StepItemData } from "../types";
import HoverBgImg from "../../../assets/step-card-hover-bg.jpg";

interface StepCardItemProps {
  step: StepItemData;
}

export const StepCardItem: React.FC<StepCardItemProps> = ({ step }) => {
  return (
    <div className="relative group w-[310px] sm:w-[319px] h-[170px] rounded-[14px] overflow-hidden bg-white border border-[#E2E8F0] shadow-[0_4px_16px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_28px_rgba(48,92,216,0.14)] transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer flex-shrink-0 select-none">
      {/* Holographic Pastel Background (Fades in on hover) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out pointer-events-none z-0">
        <Image
          src={HoverBgImg}
          alt=""
          fill
          sizes="320px"
          className="object-cover object-center"
        />
        {/* Subtle white veil to keep text high-contrast & legible */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Card Text Content */}
      <div className="relative z-10 h-full p-6 sm:p-7 flex flex-col justify-center">
        <h3 className="text-[18px] sm:text-[19px] font-bold font-dm-sans text-[#092856] leading-[1.25] mb-2.5 transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-[13.5px] sm:text-[14px] text-[#495162] leading-[1.55] line-clamp-3">
          {step.description}
        </p>
      </div>

      {/* Hover border glow outline */}
      <div className="absolute inset-0 rounded-[14px] border-2 border-transparent group-hover:border-[#8B5CF6]/40 pointer-events-none transition-colors duration-300" />
    </div>
  );
};

export default StepCardItem;
