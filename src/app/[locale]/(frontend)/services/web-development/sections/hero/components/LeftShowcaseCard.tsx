"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import leftCardSvg from "../../../assets/hero/left-showcase.svg";

/**
 * LeftShowcaseCard Component
 * Renders the tilted "Find a Comfortable workplace" website showcase card
 * with multi-layered drop shadows and smooth floating physics.
 */
export const LeftShowcaseCard: React.FC = () => {
  return (
    <motion.div
      className="absolute -left-12 sm:-left-4 lg:left-0 top-[18%] sm:top-[16%] lg:top-[12%] w-[280px] sm:w-[380px] md:w-[420px] lg:w-[480px] z-20 pointer-events-none select-none"
      initial={{ x: -20, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        y: [-8, 8, -8],
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
      <div className="relative w-full h-auto drop-shadow-[0_20px_35px_rgba(9,40,86,0.12)]">
        <Image
          src={leftCardSvg}
          alt="Find a Comfortable workplace Showcase Preview"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </motion.div>
  );
};
