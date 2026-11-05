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
import HeroAwardsBadge from "./HeroAwardsBadge";

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[580px] lg:max-w-[640px] mx-auto pt-24 sm:pt-28 lg:pt-28 pb-8 sm:pb-12">
      {/* Soft Ambient Radial Glow Behind Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square rounded-full bg-[radial-gradient(circle,_rgba(200,218,255,0.45)_0%,_rgba(235,242,255,0.2)_50%,_transparent_75%)] blur-[60px] -z-10 pointer-events-none" />

      {/* Floating Feature Pills - tightly hugging the card top */}
      <HeroFloatingPills />

      {/* Layered Showcase Cards Mockup */}
      <HeroCardMockup />

      {/* Floating 10+ Award Recognition Badge */}
      <HeroAwardsBadge />
    </div>
  );
};

export default HeroVisual;
