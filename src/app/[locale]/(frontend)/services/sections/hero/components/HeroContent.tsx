/**
 * HeroContent Component for Service Page
 * 
 * Renders the primary title, subtitle, and call-to-action button
 * on the Service page hero section matching Figma design specifications:
 * - Title: "Designed to Grow Your Business"
 * - Subtitle: "From Branding design to full-stack development, we provide end-to-end digital solutions."
 * - CTA Button: "View Our Packages ↗" linking smoothly to #pricing.
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
    <div className="text-left w-full max-w-[620px] mx-0">
      {/* Primary Hero Heading */}
      <motion.h1
        variants={fadeInUp}
        className="text-[32px] xs:text-[36px] sm:text-[48px] lg:text-[60px] xl:text-[68px] leading-[1.15] sm:leading-[1.12] mb-[14px] sm:mb-[22px] text-navy font-bold font-dm-sans -tracking-[0.02em] text-left"
      >
        Designed to Grow <br className="block sm:inline" />
        <span className="text-navy">Your Business</span>
      </motion.h1>

      {/* Subtitle / Descriptive Copy matching Figma */}
      <motion.p
        variants={fadeInUp}
        className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal text-secondary mb-[24px] sm:mb-[36px] max-w-full sm:max-w-[480px] leading-[1.55] sm:leading-[1.6] text-left"
      >
        From Branding design to full-stack development, we provide end-to-end digital solutions.
      </motion.p>

      {/* Call To Action Button: View Our Packages */}
      <motion.div
        variants={fadeInUp}
        className="w-full sm:w-auto flex justify-start items-center"
      >
        <Button
          variant="default"
          size="lg"
          className="w-full sm:w-auto bg-blue hover:bg-blue/90 text-white rounded-full h-[48px] sm:h-[54px] lg:h-[56px] px-[24px] sm:px-[34px] font-medium text-[15px] sm:text-[16px] shadow-[0px_8px_20px_rgba(37,99,235,0.25)] transition-all duration-200"
          asChild
        >
          <Link href="#pricing" className="flex items-center justify-center w-full">
            <span>View Our Packages</span>
            <GoArrowUpRight className="!h-[20px] !w-[20px] ml-1.5" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroContent;

