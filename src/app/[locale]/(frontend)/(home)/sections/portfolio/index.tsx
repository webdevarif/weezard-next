/**
 * Portfolio Section Container
 * 
 * Orchestrates the modular Portfolio section:
 * - DotGridBackground: Exact Figma 1920x1129 SVG Dot Pattern + atmospheric ambient radial glow overlay
 * - PortfolioHeader: Case study badge, title, and descriptive intro
 * - PortfolioCategoryFilter: Pixel-perfect floating category cluster matching Figma
 * - PortfolioVerticalSlider: Desktop 2-column continuous vertical scrolling ticker
 * - PortfolioMobileCarousel: Responsive mobile carousel with touch swipe & indicators
 */

"use client";

import React, { useState, useMemo } from "react";
import { DotGridBackground } from "./components/DotGridBackground";
import { PortfolioHeader } from "./components/PortfolioHeader";
import { PortfolioCategoryFilter } from "./components/PortfolioCategoryFilter";
import { PortfolioVerticalSlider } from "./components/PortfolioVerticalSlider";
import { PortfolioMobileCarousel } from "./components/PortfolioMobileCarousel";
import { CategoryFilterItem, PortfolioItem } from "./types";

// Local image assets
import Banner1 from "./assets/banner-1.jpg";
import Banner2 from "./assets/banner-2.jpg";
import Banner3 from "./assets/banner-3.jpg";
import Banner4 from "./assets/banner-4.jpg";

/**
 * Category configuration with pixel-perfect desktop coordinates and angles
 * matching the Figma reference screenshot 1:1.
 */
const CATEGORIES: CategoryFilterItem[] = [
  {
    name: "All",
    rotationDeg: 0,
    desktopPosition: { left: "8%", top: "8%", zIndex: 30 },
    offsetClass: "z-20",
  },
  {
    name: "Website Design",
    rotationDeg: 18,
    desktopPosition: { left: "27%", top: "2%", zIndex: 10 },
    offsetClass: "-translate-y-1 translate-x-1",
  },
  {
    name: "Web Development",
    rotationDeg: -14,
    desktopPosition: { left: "60%", top: "15%", zIndex: 10 },
    offsetClass: "-translate-y-0.5 translate-x-2",
  },
  {
    name: "Digital Marketing",
    rotationDeg: -16,
    desktopPosition: { left: "3%", top: "40%", zIndex: 20 },
    offsetClass: "translate-y-1",
  },
  {
    name: "SEO",
    rotationDeg: 0,
    desktopPosition: { left: "40%", top: "42%", zIndex: 15 },
    offsetClass: "translate-x-1",
  },
  {
    name: "Design Branding",
    rotationDeg: 0,
    desktopPosition: { left: "58%", top: "54%", zIndex: 10 },
    offsetClass: "translate-x-1",
  },
  {
    name: "Social Media",
    rotationDeg: -15,
    desktopPosition: { left: "21%", top: "68%", zIndex: 25 },
    offsetClass: "translate-y-1.5",
  },
  {
    name: "Marketing",
    rotationDeg: 0,
    desktopPosition: { left: "50%", top: "76%", zIndex: 10 },
    offsetClass: "translate-y-1 translate-x-1",
  },
];

/**
 * Portfolio showcase items matching Figma reference
 * - Left column: Banner1 (Nike Air Max) & Banner4 (GetTrip)
 * - Right column: Banner2 (Cyber Security) & Banner3 (UI/UX Dark Mockup)
 */
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, category: "DESIGN BRANDING", image: Banner1 },
  { id: 2, category: "WEB DEVELOPMENT", image: Banner2 },
  { id: 3, category: "DESIGN BRANDING", image: Banner4 },
  { id: 4, category: "UI/UX", image: Banner3 },
  { id: 5, category: "WEBSITE DESIGN", image: Banner1 },
  { id: 6, category: "DIGITAL MARKETING", image: Banner2 },
  { id: 7, category: "MARKETING", image: Banner4 },
  { id: 8, category: "SEO", image: Banner3 },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Dynamically filter items based on the active category pill
  const filteredItems = useMemo(() => {
    if (activeCategory.toLowerCase() === "all") {
      return PORTFOLIO_ITEMS;
    }
    const filtered = PORTFOLIO_ITEMS.filter((item) =>
      item.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
      activeCategory.toLowerCase().includes(item.category.toLowerCase())
    );
    // Fallback to all items if a category has no items yet
    return filtered.length > 0 ? filtered : PORTFOLIO_ITEMS;
  }, [activeCategory]);

  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-white">
      {/* 
        ========================================================================
        Full Section Background Overlay (Dot Grid + Ambient Glow)
        Renders at z-0 so it sits cleanly on top of bg-white and behind z-10 content
        ========================================================================
      */}
      <DotGridBackground />

      {/* Main Content Container Layer (z-10) */}
      <div className="container relative z-10 mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Header and Interactive Floating Filter Buttons */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center">
            <PortfolioHeader />
            <PortfolioCategoryFilter
              categories={CATEGORIES}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>

          {/* Right Column: Dynamic Project Showcase (Vertical Ticker on Desktop, Carousel on Mobile) */}
          <div className="col-span-1 lg:col-span-7">
            <PortfolioVerticalSlider items={filteredItems} />
            <PortfolioMobileCarousel items={filteredItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
