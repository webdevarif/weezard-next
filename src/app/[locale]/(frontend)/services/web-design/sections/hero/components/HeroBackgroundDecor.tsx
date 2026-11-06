/**
 * HeroBackgroundDecor Component
 * 
 * Ambient light radial glows and the decorative curved arc swoosh.
 * Conforms 100% to Figma SVG specifications (hero,txt & hero-arc.png):
 * - hero-arc.png is 1021x468 positioned at x=899, y=332 (bottom-right from ~46.8% across to right edge)
 * - Arches under the showcase card mockups
 * - Ambient gradient glows in the top-left and right corners
 */

"use client";

import React from "react";
import Image from "next/image";
import ArcImg from "../../../assets/hero/hero-arc.png";

export const HeroBackgroundDecor: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Top-left soft ambient light glow (from Figma SVG paint1_linear) */}
      <div className="absolute -top-[15%] left-[5%] w-[680px] h-[680px] rounded-full bg-gradient-to-br from-[#78BDF6]/25 via-[#9578FE]/12 to-transparent blur-[100px]" />

      {/* Top-right soft ambient light glow (from Figma SVG paint2_linear) */}
      <div className="absolute top-[5%] right-[5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(0,104,255,0.12)_0%,_rgba(120,189,246,0.06)_50%,_transparent_70%)] blur-[90px]" />

      {/* Decorative Curved Arc from Figma - positioned at right bottom behind right section on desktop only */}
      <div className="hidden lg:block absolute right-0 bottom-0 w-[60vw] min-w-[700px] max-w-[1021px] aspect-[1021/468] opacity-90 pointer-events-none select-none">
        <Image
          src={ArcImg}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 700px, 1021px"
          className="object-contain object-right-bottom select-none pointer-events-none"
        />
      </div>
    </div>
  );
};

export default HeroBackgroundDecor;
