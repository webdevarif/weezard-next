/**
 * RecentProjectsGrid Component
 * 
 * Assembles the asymmetric 4-card project showcase grid matching Figma coordinates:
 * - Left Column: Large featured luxury car website showcase (576px x 646px) filling 100% height
 * - Right Column Top: 2 side-by-side compact cards (Pixel 5 & iPad Pro, 316px x 306px each)
 * - Right Column Bottom: 1 full-width horizontal card (VR World, 676px x 308px)
 */

"use client";

import React from "react";
import ProjectShowcaseCard from "./ProjectShowcaseCard";

// Static Assets
import CarShowcaseImg from "../../../assets/recent_projects/project-car-showcase.png";
import PixelPhoneImg from "../../../assets/recent_projects/project-pixel-phone.png";
import IPadProImg from "../../../assets/recent_projects/project-ipad-pro.png";
import VrWorldImg from "../../../assets/recent_projects/project-vr-world.png";

export const RecentProjectsGrid: React.FC = () => {
  return (
    <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-11 items-stretch">
      {/* Left Column: Big Showcase Card (Rolls Royce / Luxury Car) */}
      <div className="lg:col-span-5 flex flex-col">
        <ProjectShowcaseCard
          imageSrc={CarShowcaseImg}
          title="Automotive Luxury Car Web Design"
          isFullHeight={true}
          sizes="(max-width: 1024px) 100vw, 580px"
          className="h-full flex-1"
        />
      </div>

      {/* Right Column: 3 Cards (2 Top, 1 Wide Bottom) */}
      <div className="lg:col-span-7 flex flex-col justify-between gap-6 sm:gap-8">
        {/* Top Row: 2 Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <ProjectShowcaseCard
            imageSrc={PixelPhoneImg}
            title="Google Pixel 5 Showcase Website"
            aspectClass="aspect-[316/306]"
            sizes="(max-width: 640px) 100vw, 340px"
          />
          <ProjectShowcaseCard
            imageSrc={IPadProImg}
            title="Apple iPad Pro Performance Web Design"
            aspectClass="aspect-[316/306]"
            sizes="(max-width: 640px) 100vw, 340px"
          />
        </div>

        {/* Bottom Row: 1 Full-Width Horizontal Card (VR World) */}
        <div>
          <ProjectShowcaseCard
            imageSrc={VrWorldImg}
            title="VR World Interactive Digital Platform"
            aspectClass="aspect-[676/308]"
            sizes="(max-width: 1024px) 100vw, 700px"
          />
        </div>
      </div>
    </div>
  );
};

export default RecentProjectsGrid;
