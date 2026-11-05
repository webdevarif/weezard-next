/**
 * WhyChooseUsHeader Component
 * 
 * Section headline and explanatory narrative.
 * Conforms 100% to Figma typography and palette.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";

export const WhyChooseUsHeader: React.FC = () => {
  return (
    <div className="space-y-3.5 mb-6 sm:mb-7">
      <motion.h2
        variants={fadeInUp}
        className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold font-dm-sans text-[#092856] leading-[1.18] -tracking-[0.02em]"
      >
        Why Choose Our Web Design Packages?
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        className="text-[#495162] text-[15px] sm:text-[15.5px] lg:text-[16px] leading-[1.65] max-w-[620px]"
      >
        Your website is often the first impression your business makes. We specialize in creating websites that not only look great but also work perfectly. From design to launch, our team ensures your site is fast, responsive, secure, and designed to help your business grow online.
      </motion.p>
    </div>
  );
};

export default WhyChooseUsHeader;

