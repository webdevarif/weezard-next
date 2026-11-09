"use client";

import React from "react";
import Image from "next/image";
import bgCanvasSvg from "../../../assets/hero/bg-canvas.svg";

/**
 * HeroBackgroundCanvas Component
 * Renders the exact Figma background canvas with soft gradient ambiance and subtle grid.
 */
export const HeroBackgroundCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      <Image
        src={bgCanvasSvg}
        alt="Background Canvas Gradient"
        priority
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};
