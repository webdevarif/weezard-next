"use client";

import React from "react";
import { motion } from "framer-motion";
import chunks from "./bannerSvgChunks.json";

/**
 * HeroBannerIllustration Component
 * 
 * Modular Animated Digital Marketing Hero Illustration:
 * - 46% card is rendered in front of the curved trajectory line (arc line is behind the card).
 * - Interactive mouse hover animations on the floating cards with smooth spring transition.
 * - Initial staggered entrance animation on first load.
 * - Continuous infinite floating and pulsing motions.
 */
export const HeroBannerIllustration: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[360px] xs:max-w-[390px] sm:max-w-[480px] lg:max-w-[580px] xl:max-w-[634px] mx-auto lg:mx-0 select-none">
      <svg
        width="634"
        height="590"
        viewBox="0 0 634 590"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="w-full h-auto overflow-visible drop-shadow-sm pointer-events-auto"
      >
        {/* Layer 1: Ambient Purple Glow (Soft Breathing Infinite Pulse) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.25, 0.5, 0.25],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          dangerouslySetInnerHTML={{ __html: chunks.glow }}
        />

        {/* Layer 2: Trajectory Arc Line & White Dots (BEHIND 46% and 100% cards) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          dangerouslySetInnerHTML={{ __html: chunks.arc }}
        />

        {/* Layer 3: 3D SEO Letters & Arc Floating Icons (With gentle hover effect) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -5, 0],
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          transition={{
            opacity: { duration: 0.7, delay: 0.5 },
            scale: { duration: 0.7, delay: 0.5 },
            y: {
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            },
          }}
          className="cursor-pointer pointer-events-auto"
          dangerouslySetInnerHTML={{ __html: chunks.seoAndIcons }}
        />

        {/* Layer 4: Growth Bar Chart & Upward Growth Arrow (With hover pop) */}
        <motion.g
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: 1,
            y: [0, -4, 0],
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
            transition: { duration: 0.25 },
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.4 },
            y: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.0,
            },
          }}
          className="cursor-pointer pointer-events-auto"
          dangerouslySetInnerHTML={{ __html: chunks.barChartAndArrow }}
        />

        {/* Layer 5: 100% More Conversion Card (Drop in + Float + Interactive Hover) */}
        <motion.g
          initial={{ opacity: 0, y: -25, scale: 0.92 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          whileHover={{
            scale: 1.06,
            y: -14,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          transition={{
            opacity: { duration: 0.7, delay: 0.2 },
            scale: { duration: 0.7, delay: 0.2 },
            y: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            },
          }}
          className="cursor-pointer pointer-events-auto"
          dangerouslySetInnerHTML={{ __html: chunks.card100 }}
        />

        {/* Layer 6: 46% Local Searches Card (IN FRONT of the trajectory line + Interactive Hover) */}
        <motion.g
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, 8, 0],
          }}
          whileHover={{
            scale: 1.06,
            y: 2,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          transition={{
            opacity: { duration: 0.7, delay: 0.35 },
            scale: { duration: 0.7, delay: 0.35 },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.05,
            },
          }}
          className="cursor-pointer pointer-events-auto"
          dangerouslySetInnerHTML={{ __html: chunks.card46 }}
        />

        {/* Layer 7: Target/Badge Icon (With rotate on hover) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: [0, 2, -2, 0],
          }}
          whileHover={{
            scale: 1.12,
            rotate: 8,
            transition: { duration: 0.3 },
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.6 },
            scale: { duration: 0.6, delay: 0.6 },
            rotate: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.3,
            },
          }}
          className="cursor-pointer pointer-events-auto"
          dangerouslySetInnerHTML={{ __html: chunks.remainingIcon }}
        />

        {/* SVG Defs (Filters, Gradients, Clip Paths, Embedded Images) */}
        <g dangerouslySetInnerHTML={{ __html: chunks.defs }} />
      </svg>
    </div>
  );
};

export default HeroBannerIllustration;
