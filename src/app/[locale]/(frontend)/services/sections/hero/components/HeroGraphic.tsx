/**
 * HeroGraphic Component for Service Page
 * 
 * Renders the circular hero illustration featuring a man pointing up
 * surrounded by floating 3D design and tech assets, with an ambient radial blur glow.
 */

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";
import HeroBannerSvg from "../../../assets/grow-business-hero-banner.svg";

export const HeroGraphic: React.FC = () => {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative flex justify-center items-center w-full max-w-[500px] sm:max-w-[580px] lg:max-w-[680px] mx-auto"
    >
      {/* Ambient background soft glow */}
      <div className="absolute w-[80%] aspect-square rounded-full bg-[radial-gradient(circle,_rgba(199,176,254,0.35)_0%,_rgba(48,92,216,0.15)_50%,_transparent_70%)] blur-[50px] -z-[1] pointer-events-none" />

      {/* Main Hero Illustration */}
      <div className="relative w-full aspect-[733/720]">
        <Image
          src={HeroBannerSvg}
          alt="Designed to Grow Your Business"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px"
          className="object-contain"
        />
      </div>
    </motion.div>
  );
};

export default HeroGraphic;

