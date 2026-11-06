/**
 * HeroAwardsBadge Component
 * 
 * Floating awards recognition pill badge positioned right under the main showcase card.
 * Conforms to Figma SVG exact coordinates (x:1104, y:611 relative to card at x:999, y:247):
 * width: 64.7%, top: 77.8%, centered horizontally with left-1/2 -translate-x-1/2.
 * Sits seamlessly tucked behind the card bottom border (z-0 behind z-10 card image).
 */

"use client";

import React from "react";
import Image from "next/image";
import AwardsBadgeImg from "../../../assets/hero/Frame 1686558016.png";

export const HeroAwardsBadge: React.FC = () => {
  return (
    <div className="absolute top-[77.8%] left-1/2 -translate-x-1/2 w-[64.7%] z-0 pointer-events-auto select-none">
      <div className="relative w-full hover:scale-105 transition-transform duration-300 select-none">
        <Image
          src={AwardsBadgeImg}
          alt="10+ Web Design Awards Won by Weezard"
          priority
          className="w-full h-auto select-none pointer-events-none"
        />
      </div>
    </div>
  );
};

export default HeroAwardsBadge;
