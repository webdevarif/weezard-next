"use client";

import React from "react";
import Image from "next/image";
import vector79Svg from "../../../assets/hero/phone/Vector 79.svg";
import bottomTrajectoryPlaneSvg from "../../../assets/hero/phone/bottom-trajectory-plane.svg";

/**
 * HeroMobileFlightPath Component
 *
 * 100% Figma SVG Mathematical Alignment:
 * 1. Vector 79 (Top Curve): Positioned high up (top: 38px, left: 81px) in sync with LeftShowcaseCard
 *    clearing the star rating completely.
 * 2. bottom-trajectory-plane.svg: Unified SVG containing both Vector 80 and the Paper Airplane,
 *    guaranteeing that the paper airplane is 100% locked and seamlessly aligned with the vector line's tip!
 */
export const HeroMobileFlightPath: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 block md:hidden select-none">
      {/* 1. Top Trajectory Curve (Vector 79) - Raised up to clear stars */}
      <div
        className="absolute w-[376px] h-auto opacity-90"
        style={{
          left: "81px",
          top: "38px",
        }}
      >
        <Image
          src={vector79Svg}
          alt="Top Flight Path Curve"
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 2. Unified Bottom Trajectory & Paper Airplane - 100% Seamless Alignment */}
      <div
        className="absolute w-[405px] h-auto opacity-95"
        style={{
          left: "-160px",
          top: "600px",
        }}
      >
        <Image
          src={bottomTrajectoryPlaneSvg}
          alt="Bottom Flight Path and Paper Airplane"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
};
