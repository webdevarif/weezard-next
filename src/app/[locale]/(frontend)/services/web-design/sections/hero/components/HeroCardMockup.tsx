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

export const HeroCardMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-[580px] lg:max-w-[620px] mx-auto">
      {/* Secondary Tilted Mockup (Behind main card, right side) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute -right-4 sm:-right-8 lg:-right-10 top-4 sm:top-6 w-[42%] sm:w-[46%] aspect-[411/373] z-0 select-none pointer-events-none drop-shadow-[0_15px_30px_rgba(20,35,70,0.14)]"
      >
        <Image
          src={SideMockupImg}
          alt="E-commerce web design sample"
          fill
          priority
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 240px, 290px"
          className="object-contain"
        />
      </motion.div>

      {/* Main Showcase Card (Headphones design mockup) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[88%] sm:w-[90%] aspect-[655/468] rounded-[18px] sm:rounded-[24px] overflow-hidden drop-shadow-[0_20px_45px_rgba(30,50,95,0.16)] border border-[#305CD8]/25 bg-white"
      >
        <Image
          src={MainCardImg}
          alt="All-In-One Web Design Packages Showcase"
          fill
          priority
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 520px, 600px"
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default HeroCardMockup;
