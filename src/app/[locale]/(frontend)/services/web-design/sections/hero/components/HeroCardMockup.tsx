/**
 * HeroCardMockup Component
 * 
 * Renders the layered 3D website design showcase:
 * 1. Main Headphone landing page card mockup (image-2.png) with Figma gradient border
 * 2. Secondary eCommerce tilted website mockup peeking from behind (image.png)
 */

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MainCardImg from "../../../assets/hero/image-2.png";
import SideMockupImg from "../../../assets/hero/image.png";
import HeroAwardsBadge from "./HeroAwardsBadge";

export const HeroCardMockup: React.FC = () => {
  return (
    <div className="relative w-full mx-auto select-none">
      {/* Secondary Tilted Mockup (Behind main card, desktop only) */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="hidden lg:block absolute -right-[18%] sm:-right-[22%] lg:-right-[26%] top-[6%] sm:top-[8%] lg:top-[9%] w-[58%] sm:w-[64%] lg:w-[68%] z-0 select-none pointer-events-none drop-shadow-[0_15px_35px_rgba(20,35,70,0.14)]"
      >
        <Image
          src={SideMockupImg}
          alt="E-commerce web design showcase"
          priority
          className="w-full h-auto select-none pointer-events-none"
        />
      </motion.div>

      {/* Main Showcase Card (Headphones design mockup - no double container/borders) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full select-none"
      >
        {/* 10+ Award Recognition Badge placed BEHIND the main card, centered, tucked under bottom border */}
        <HeroAwardsBadge />

        {/* Main Card Image (z-10 in front of the badge top edge) */}
        <Image
          src={MainCardImg}
          alt="All-In-One Web Design Packages Showcase"
          priority
          className="relative z-10 w-full h-auto select-none pointer-events-none"
        />
      </motion.div>
    </div>
  );
};

export default HeroCardMockup;
