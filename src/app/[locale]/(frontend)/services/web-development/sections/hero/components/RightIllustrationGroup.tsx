"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import rightIllustrationSvg from "../../../assets/hero/right-illustration.svg";

/**
 * RightIllustrationGroup Component
 * Renders the right illustration (Rocket launch, Speedometer, Target Dartboard, Dashboard, Team)
 * with counter-phase smooth floating animation for realistic multi-layer depth.
 */
export const RightIllustrationGroup: React.FC = () => {
  return (
    <motion.div
      className="absolute -right-12 sm:-right-6 lg:right-0 top-[15%] sm:top-[12%] lg:top-[10%] w-[300px] sm:w-[400px] md:w-[440px] lg:w-[480px] z-20 pointer-events-none select-none"
      initial={{ x: 20, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        y: [8, -10, 8],
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
      <div className="relative w-full h-auto drop-shadow-[0_20px_35px_rgba(48,92,216,0.12)]">
        <Image
          src={rightIllustrationSvg}
          alt="High-Performance Web Development Illustration"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </motion.div>
  );
};
