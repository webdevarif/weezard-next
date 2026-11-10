"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import leftCardWebp from "../../../assets/hero/left-showcase.webp";

/**
 * LeftShowcaseCard Component
 * Renders the tilted "Find a Comfortable workplace" website showcase card
 * with multi-layered drop shadows and smooth floating physics.
 * 100% Figma SVG Match:
 * - Mobile: Placed at X=-73px, top: 0px (raised to avoid overlapping the 5-star rating)
 *   with width 225px, rotated -15deg
 * - Desktop: Floats on the middle-left edge
 */
export const LeftShowcaseCard: React.FC = () => {
  return (
    <motion.div
      className="absolute -left-[73px] sm:-left-4 lg:left-0 top-0 sm:top-[16%] lg:top-[12%] w-[225px] sm:w-[380px] md:w-[420px] lg:w-[480px] z-20 pointer-events-none select-none -rotate-[15deg] sm:rotate-0"
      initial={{ x: -20, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        y: [-4, 4, -4],
      }}
      transition={{
        opacity: { duration: 0.8, ease: "easeOut" },
        x: { duration: 0.8, ease: "easeOut" },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <div className="relative w-full h-auto drop-shadow-[0_15px_30px_rgba(9,40,86,0.12)]">
        <Image
          src={leftCardWebp}
          alt="Find a Comfortable workplace Showcase Preview"
          width={480}
          height={380}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </motion.div>
  );
};
