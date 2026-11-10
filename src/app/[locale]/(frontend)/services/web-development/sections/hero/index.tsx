"use client";

import React from "react";
import { HeroBackgroundCanvas } from "./components/HeroBackgroundCanvas";
import { LeftShowcaseCard } from "./components/LeftShowcaseCard";
import { RightIllustrationGroup } from "./components/RightIllustrationGroup";
import { HeroDashFlightPath } from "./components/HeroDashFlightPath";
import { HeroMobileFlightPath } from "./components/HeroMobileFlightPath";
import { CenterHeroContent } from "./components/CenterHeroContent";
import { HeroSectionProps } from "./types";
import { webDevelopmentData } from "../../content";

/**
 * WebDevelopmentHero Section
 *
 * 100% Figma Pixel-Perfect Implementation for both Mobile and Desktop:
 * - Desktop:
 *   - Left: "Find a Comfortable workplace" tilted showcase with layered cards
 *   - Right: Team, Rocket, Speedometer, and Dashboard illustration
 *   - Trajectory: Animated Dash Array Flight Path (Vector 79 curve) with animated paper airplane
 *   - Center: Dynamic typography, 5-star rating, inline laptop icon, and CTA
 * - Mobile:
 *   - Top: Left showcase card positioned above center headline with slight tilt
 *   - Top Trajectory: Vector 79 arching from showcase card across top
 *   - Center: Star rating, 48px/54px DM Sans Bold headline, rotated laptop icon, description, full-width 48px pill CTA
 *   - Bottom Trajectory: Vector 80 dashed curve flowing from left beneath CTA
 *   - Paper Airplane: Group.svg at the tip of Vector 80 pointing towards illustration
 *   - Bottom: Team + Rocket illustration anchored to bottom right
 */
export default function WebDevelopmentHero({
  data = webDevelopmentData.hero,
  className = ""
}: HeroSectionProps) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-white min-h-[780px] xs:min-h-[820px] sm:min-h-[720px] lg:min-h-[800px] flex items-center justify-center ${className}`}
    >
      {/* 1. Background Grid & Gradient Ambiance */}
      <HeroBackgroundCanvas />

      {/* 2. Top-Left Floating Showcase Card (Find a Comfortable workplace) */}
      <LeftShowcaseCard />

      {/* 3. Bottom-Right Floating Illustration Group (Rocket, Team, Dashboard) */}
      <RightIllustrationGroup />

      {/* 4. Desktop-only Animated Trajectory Flight Path */}
      <HeroDashFlightPath />

      {/* 5. Mobile-only Flight Paths (Vector 79 Top, Vector 80 Bottom) & Paper Airplane */}
      <HeroMobileFlightPath />

      {/* 6. Center Dynamic Content with 5-Star Rating & CTA Button */}
      <div className="container mx-auto px-4 relative z-30">
        <CenterHeroContent data={data} />
      </div>
    </section>
  );
}
