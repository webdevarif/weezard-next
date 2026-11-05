/**
 * HeroTrustBadge Component
 * 
 * Displays the 5-star rating and trust metrics matching exact Figma tokens:
 * - 5 Gold Stars: fill="#FF9900"
 * - Trust Text: fill="#495162", font-medium
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";

// Golden Star SVG icon matching Figma SVG path
const StarIcon: React.FC<{ className?: string }> = ({ className = "w-[15px] h-[15px]" }) => (
  <svg
    viewBox="0 0 20 20"
    fill="#FF9900"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.068 2.485c.714.436 1.599-.207 1.405-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
      clipRule="evenodd"
    />
  </svg>
);

export const HeroTrustBadge: React.FC = () => {
  return (
    <motion.div
      variants={fadeInUp}
      className="inline-flex items-center gap-2.5"
    >
      {/* 5 Rating Stars in Figma #FF9900 */}
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-[15px] h-[15px]" />
        ))}
      </div>

      {/* Trust Rating Text in Figma #495162 */}
      <span className="text-[13px] sm:text-[14px] text-[#495162] font-medium tracking-wide">
        (4,5/5) Trusted by 500+ Businesses
      </span>
    </motion.div>
  );
};

export default HeroTrustBadge;
