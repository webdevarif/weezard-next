/**
 * HeroVisual Component
 * 
 * Right-hand hero composition assembling:
 * - Floating feature tag pills (HeroFloatingPills) closely hugging the top of the card
 * - Layered showcase card mockups (HeroCardMockup)
 * - Centered floating awards badge (HeroAwardsBadge)
 * - Ambient radial backlight glow
 */

"use client";

import React from "react";
import HeroFloatingPills from "./HeroFloatingPills";
import HeroCardMockup from "./HeroCardMockup";

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[430px] lg:max-w-[620px] mx-auto pt-4 sm:pt-6 lg:pt-[160px] pb-2 sm:pb-4">
      {/* Soft Ambient Radial Glow Behind Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square rounded-full bg-[radial-gradient(circle,_rgba(200,218,255,0.45)_0%,_rgba(235,242,255,0.2)_50%,_transparent_75%)] blur-[60px] -z-10 pointer-events-none" />

      {/* Floating Feature Pills - Desktop only inside HeroVisual */}
      <HeroFloatingPills />

      {/* Layered Showcase Cards Mockup (includes centered Awards Badge at bottom) */}
      <HeroCardMockup />
    </div>
  );
};

export default HeroVisual;
