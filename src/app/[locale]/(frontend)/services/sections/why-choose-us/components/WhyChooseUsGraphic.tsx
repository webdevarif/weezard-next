/**
 * WhyChooseUsGraphic Component for Service Page
 * 
 * Displays the collage banner featuring the team collaboration image,
 * the bullseye target photo, and the decorative geometric star accent.
 */

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";
import WhyChooseUsBanner from "../../../assets/why-business-choose-us-banner.png";

export const WhyChooseUsGraphic: React.FC = () => {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative w-full max-w-[620px] mx-auto lg:mx-0 flex justify-center items-center"
    >
      <div className="relative w-full aspect-[760/657]">
        <Image
          src={WhyChooseUsBanner}
          alt="Why Small Businesses Choose Us"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  );
};

export default WhyChooseUsGraphic;

