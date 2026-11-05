/**
 * HeroAwardsBadge Component
 * 
 * Floating awards recognition pill badge positioned right under the main showcase card.
 * Conforms to Figma SVG dimensions: 304px width x 76px height, rx=18px, centered under main card.
 */

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AwardsBadgeImg from "../../../assets/hero/Frame 1686558016.png";

export const HeroAwardsBadge: React.FC = () => {
  return (
    <motion.div
      animate={{ y: [0, 4, 0] }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="absolute -bottom-6 sm:-bottom-8 left-[45%] -translate-x-1/2 z-20"
    >
      <div className="relative w-[210px] sm:w-[260px] lg:w-[290px] xl:w-[304px] aspect-[424/196] drop-shadow-[0_12px_28px_rgba(30,58,138,0.18)] hover:scale-105 transition-transform duration-300">
        <Image
          src={AwardsBadgeImg}
          alt="10+ Web Design Awards Won by Weezard"
          fill
          priority
          sizes="(max-width: 640px) 210px, (max-width: 1024px) 260px, 304px"
          className="object-contain"
        />
      </div>
    </motion.div>
  );
};

export default HeroAwardsBadge;
