/**
 * HeroDescription Component
 * 
 * Supporting value proposition paragraph matching exact Figma color tokens (hero,txt):
 * - Text color: #495162
 * - Max width: ~490px
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";

export const HeroDescription: React.FC = () => {
  return (
    <motion.p
      variants={fadeInUp}
      className="text-[#495162] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.62] max-w-[490px]"
    >
      Weezard offers affordable web design packages for small businesses in the UK and worldwide. Our beautifully crafted and user-friendly websites are meticulously designed to convert visitors into customers.
    </motion.p>
  );
};

export default HeroDescription;
