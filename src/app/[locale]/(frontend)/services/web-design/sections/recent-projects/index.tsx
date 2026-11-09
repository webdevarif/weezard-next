/**
 * RecentProjectsSection Component
 * 
 * Our Recent Web Design Projects Section:
 * - 100% pixel-perfect clone matching Figma SVG & screenshot
 * - Header with centered title and copy
 * - Asymmetric 4-card showcase grid (zero white gaps)
 * - Bottom smooth gradient fade overlay
 */

"use client";

import React from "react";
import RecentProjectsHeader from "./components/RecentProjectsHeader";
import RecentProjectsGrid from "./components/RecentProjectsGrid";
import BottomFadeOverlay from "./components/BottomFadeOverlay";

export const RecentProjectsSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 bg-gradient-to-b from-[#F8FAFD] via-white to-white">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-[10%] left-[5%] w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,_rgba(220,233,254,0.35)_0%,_transparent_70%)] blur-[90px] -z-10 pointer-events-none" />
      <div className="absolute top-[30%] right-[5%] w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,_rgba(240,235,255,0.35)_0%,_transparent_70%)] blur-[90px] -z-10 pointer-events-none" />

      {/* Main Content Container (Max width: 1320px in Figma) */}
      <div className="max-w-[1320px] 2xl:max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14 relative z-0">
        {/* Centered Section Header */}
        <RecentProjectsHeader />

        {/* Asymmetric 4-Card Portfolio Showcase */}
        <RecentProjectsGrid />
      </div>

      {/* Bottom Gradient Fade Overlay (Transitions cards into the next section) */}
      <BottomFadeOverlay />
    </section>
  );
};

export default RecentProjectsSection;
