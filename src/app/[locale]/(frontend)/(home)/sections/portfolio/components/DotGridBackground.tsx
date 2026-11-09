/**
 * DotGridBackground Component
 * 
 * Encapsulates the full-section atmospheric background overlay for the Portfolio section:
 * - Exact Figma 1920x1129 SVG Dot Grid (calibrated to opacity: 0.22 for crisp visibility)
 * - Clean white background matching Figma (ambient gradient glow removed)
 * 
 * Stacking context: Set to z-0 so it renders on top of the section's white background,
 * but cleanly behind the z-10 content.
 */

import React from "react";
import Image from "next/image";
import DotPattern from "../assets/dot-pattern.svg";

export const DotGridBackground: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Exact Figma SVG Dot Grid (1920x1129) */}
      <Image
        src={DotPattern}
        alt=""
        fill
        className="object-cover object-top opacity-100"
        priority
      />
    </div>
  );
};

