/**
 * HeroContent Component for Service Page
 * 
 * Renders the primary title, subtitle, and primary call-to-action button
 * on the Service page hero section with Framer Motion animations.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";
import { Button } from "@/app/[locale]/components/ui/button";
import { Link } from "@/lib/i18n/routing";
import { GoArrowUpRight } from "react-icons/go";

export const HeroContent: React.FC = () => {
  return (
    <div className="text-center lg:text-start max-w-[620px] mx-auto lg:mx-0">
      {/* Primary Hero Heading */}
      <motion.h1
        variants={fadeInUp}
        className="text-[36px] sm:text-[48px] lg:text-[72px] leading-[1.15] mb-[20px] sm:mb-[24px] text-navy font-bold font-dm-sans -tracking-[0.03em]"
      >
        Designed to Grow <br className="hidden sm:inline" />
        <span className="text-navy">Your Business</span>
      </motion.h1>

      {/* Subtitle / Descriptive Copy */}
      <motion.p
        variants={fadeInUp}
        className="text-body-base sm:text-heading-2 font-normal text-secondary mb-[28px] sm:mb-[36px] max-w-[500px] mx-auto lg:mx-0 leading-relaxed"
      >
        From branding and UI to full stack development, we grow brand to specialized solutions.
      </motion.p>

      {/* Call To Action Button */}
      <motion.div
        variants={fadeInUp}
        className="flex justify-center lg:justify-start items-center"
      >
        <Button
          variant="default"
          size="lg"
          className="w-full sm:w-auto bg-blue hover:bg-blue/90 text-white rounded-full h-[54px] sm:h-[60px] px-[28px] sm:px-[34px] font-semibold text-[15px] sm:text-[16px] shadow-[0px_10px_25px_rgba(48,92,216,0.25)]"
          asChild
        >
          <Link href="/audit">
            <span>Audit Your Website for Free</span>
            <GoArrowUpRight className="!h-[20px] !w-[20px] ml-1" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroContent;

