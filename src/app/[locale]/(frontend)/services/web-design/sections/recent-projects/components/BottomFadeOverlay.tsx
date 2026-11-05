/**
 * BottomFadeOverlay Component
 * 
 * Elegant gradient fade overlay at the bottom of the section matching Figma:
 * Smoothly transitions from the project cards into the white background of the next section.
 */

"use client";

import React from "react";

export const BottomFadeOverlay: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none z-10"
    />
  );
};

export default BottomFadeOverlay;
