"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import rightIllustrationWebp from "../../../assets/hero/right-illustration.webp";

/**
 * RightIllustrationGroup Component
 * Renders the right illustration (Rocket launch, Speedometer, Target Dartboard, Dashboard, Team)
 * with counter-phase smooth floating animation for realistic multi-layer depth.
 * 100% Figma SVG Match:
 * - Mobile: Exact height 224.75px (h-[224.75px] w-auto), flush at bottom-0 right-0
 * - Desktop: Floats on the right edge
 */
export const RightIllustrationGroup: React.FC = () => {
  return (
    <motion.div
      className="absolute right-0 sm:-right-6 lg:right-0 bottom-0 sm:bottom-auto sm:top-[12%] lg:top-[10%] h-[224.75px] w-auto sm:h-auto sm:w-[400px] md:w-[440px] lg:w-[480px] z-20 pointer-events-none select-none flex items-end justify-end"
      initial={{ x: 20, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        y: [3, -4, 3],
      }}
      transition={{
        opacity: { duration: 0.8, ease: "easeOut", delay: 0.2 },
        x: { duration: 0.8, ease: "easeOut", delay: 0.2 },
        y: {
          duration: 5.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        },
      }}
    >
      <div className="relative h-[224.75px] w-auto sm:h-auto sm:w-full drop-shadow-[0_15px_30px_rgba(48,92,216,0.12)]">
        <Image
          src={rightIllustrationWebp}
          alt="High-Performance Web Development Illustration"
          width={178}
          height={225}
          className="h-[224.75px] w-auto sm:h-auto sm:w-full object-contain"
          priority
        />
      </div>
    </motion.div>
  );
};
