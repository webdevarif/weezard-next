"use client";

import React from "react";
import { HeroBackgroundCanvas } from "./components/HeroBackgroundCanvas";
import { LeftShowcaseCard } from "./components/LeftShowcaseCard";
import { RightIllustrationGroup } from "./components/RightIllustrationGroup";
import { HeroDashFlightPath } from "./components/HeroDashFlightPath";
import { CenterHeroContent } from "./components/CenterHeroContent";
import { HeroSectionProps } from "./types";
import { webDevelopmentData } from "../../content";

/**
 * Web Development Hero Section
 *
 * 100% Figma Pixel-Perfect Implementation:
 * - Data: Dynamically supplied from content.ts (webDevelopmentData.hero)
 * - Background Canvas: Exact gradient mesh & soft lighting (bg-canvas.svg)
 * - Left: "Find a Comfortable workplace" tilted showcase with layered cards (left-showcase.svg)
 * - Right: Team, Rocket, Speedometer, and Dashboard illustration (right-illustration.svg)
 * - Trajectory: Animated Dash Array Flight Path (flight-trajectory.svg curve)
 * - Paper Airplane: Hovering and floating at path terminus (paper-airplane.svg)
 * - Center: Dynamic typography, 5-star rating, inline laptop icon, and "Audit Your Website for Free ↗" CTA
 */
export default function WebDevelopmentHero({
  data = webDevelopmentData.hero,
  className = ""
}: HeroSectionProps) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-white min-h-[640px] md:min-h-[720px] lg:min-h-[800px] flex items-center justify-center ${className}`}
    >
      {/* 1. Background Grid & Gradient Ambiance */}
      <HeroBackgroundCanvas />

      {/* 2. Left Floating Showcase Card (Find a Comfortable workplace) */}
      <LeftShowcaseCard />

      {/* 3. Right Floating Illustration Group (Rocket, Team, Speedometer) */}
      <RightIllustrationGroup />

      {/* 4. Animated Dash Array Trajectory & Paper Airplane */}
      <HeroDashFlightPath />

      {/* 5. Center Dynamic Content with 5-Star Rating & CTA Button */}
      <div className="container mx-auto px-4 relative z-30">
        <CenterHeroContent data={data} />
      </div>
    </section>
  );
}
