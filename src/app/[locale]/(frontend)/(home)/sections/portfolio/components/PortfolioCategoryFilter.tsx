/**
 * PortfolioCategoryFilter Component
 * 
 * Renders the organic, floating cluster of category pills matching the Figma design.
 * Features:
 * - Desktop: Pixel-perfect absolute coordinate positioning inside a 1:1 canvas
 * - Permanent rotation locked via an outer wrapper div so hover/click never straightens the pill
 * - Smooth Framer Motion scale & tap micro-interactions
 * - Active gradient pill highlight with soft glow elevation
 * - Mobile (< md): Responsive flex-wrap cluster ensuring no horizontal clipping
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { PortfolioCategoryFilterProps, CategoryFilterItem } from "../types";

export const PortfolioCategoryFilter: React.FC<PortfolioCategoryFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  /**
   * Helper to render an individual pill button with locked rotation and active state
   */
  const renderPillButton = (cat: CategoryFilterItem) => {
    const isActive = activeCategory.toLowerCase() === cat.name.toLowerCase();

    return (
      <motion.button
        type="button"
        onClick={() => onSelectCategory(cat.name)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
        className={`
          relative inline-flex items-center justify-center
          h-[44px] sm:h-[48px] px-5 sm:px-6 rounded-full
          text-sm sm:text-[15px] font-semibold whitespace-nowrap
          cursor-pointer transition-colors duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2
          ${
            isActive
              ? "bg-[linear-gradient(129.49deg,#305CD8_7.87%,#903DD1_146.55%)] text-white shadow-lg shadow-blue/25"
              : "bg-[#E8EEFF] hover:bg-[#D8E4FF] text-[#2E3A59] hover:text-navy shadow-none"
          }
        `}
        aria-pressed={isActive}
      >
        {cat.name}
      </motion.button>
    );
  };

  return (
    <div className="relative w-full select-none pt-2 pb-4">
      {/* 
        ========================================================================
        1. Desktop Layout (>= md): 1:1 Pixel-Perfect Figma Positioned Canvas
        Each pill is positioned using exact percentage coordinates and locked angles.
        ========================================================================
      */}
      <div className="hidden md:block relative h-[280px] w-full max-w-[530px]">
        {categories.map((cat) => {
          const isActive = activeCategory.toLowerCase() === cat.name.toLowerCase();
          const zIndex = isActive ? 35 : cat.desktopPosition?.zIndex ?? 10;

          return (
            <div
              key={`desktop-${cat.name}`}
              className="absolute transition-transform duration-300"
              style={{
                left: cat.desktopPosition?.left ?? "0%",
                top: cat.desktopPosition?.top ?? "0%",
                zIndex: zIndex,
                transform: `rotate(${cat.rotationDeg}deg)`,
                transformOrigin: "center center",
              }}
            >
              {renderPillButton(cat)}
            </div>
          );
        })}
      </div>

      {/* 
        ========================================================================
        2. Mobile Layout (< md): Responsive Wrapped Cluster
        Gracefully arranges pills with their unique tilts without overflowing.
        ========================================================================
      */}
      <div className="flex md:hidden flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
        {categories.map((cat) => {
          const isActive = activeCategory.toLowerCase() === cat.name.toLowerCase();

          return (
            <div
              key={`mobile-${cat.name}`}
              className={`inline-block transition-transform duration-300 ${cat.offsetClass || ""}`}
              style={{
                transform: `rotate(${cat.rotationDeg}deg)`,
                transformOrigin: "center center",
                zIndex: isActive ? 20 : 10,
              }}
            >
              {renderPillButton(cat)}
            </div>
          );
        })}
      </div>
    </div>
  );
};
