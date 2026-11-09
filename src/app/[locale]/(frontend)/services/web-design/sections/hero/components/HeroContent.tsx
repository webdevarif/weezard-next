/**
 * HeroContent Component
 * 
 * Composes the left-hand hero column:
 * - Trust & Rating Badge
 * - Primary Headline
 * - Value Proposition Paragraph
 * - Action CTA Button
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations/framer";
import HeroTrustBadge from "./HeroTrustBadge";
import HeroHeadline from "./HeroHeadline";
import HeroDescription from "./HeroDescription";
import HeroCtaButton from "./HeroCtaButton";

export const HeroContent: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center lg:items-start lg:text-start space-y-4 sm:space-y-6 max-w-[600px] mx-auto lg:mx-0 z-10"
    >
      {/* 5-Star Rating & Trust */}
      <HeroTrustBadge />

      {/* Main Headline */}
      <HeroHeadline />

      {/* Supporting Copy */}
      <HeroDescription />

      {/* Primary CTA */}
      <HeroCtaButton />
    </motion.div>
  );
};

export default HeroContent;
