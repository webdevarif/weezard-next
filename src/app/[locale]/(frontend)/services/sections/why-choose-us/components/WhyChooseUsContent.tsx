/**
 * WhyChooseUsContent Component for Service Page
 * 
 * Renders the section badge, heading, expandable mobile description paragraph,
 * bullet point features with dividers, and CTA button.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";
import { ListStarShapeIcon } from "@/lib/icons/list";
import { Button } from "@/app/[locale]/components/ui/button";
import { Link } from "@/lib/i18n/routing";
import { GoArrowUpRight } from "react-icons/go";
import { ExpandableParagraph } from "@/app/[locale]/components/ui/expandable-paragraph";

export const WhyChooseUsContent: React.FC = () => {
  const points = [
    "Tailored solutions, not templates",
    "Clear communication",
    "Scalable as you grow",
    "Fully white-label options",
  ];

  const descriptionText =
    "Small businesses choose Weezard because we speak their language, respect their budget, and focus on real outcomes. We’re fast, friendly, and flexible—delivering agency-level quality without the stress or big agency price tag.";

  return (
    <div className="w-full max-w-[540px] mx-auto lg:mx-0">
      {/* Category Badge */}
      <motion.div variants={fadeInUp} className="mb-[12px]">
        <span className="text-blue bg-blue/10 text-[13px] sm:text-[14px] inline-flex leading-[1.7] uppercase py-[4px] px-[14px] font-semibold rounded-full">
          Why Choose Us
        </span>
      </motion.div>

      {/* Main Section Heading */}
      <motion.h2
        variants={fadeInUp}
        className="text-[32px] sm:text-[40px] lg:text-title-2 font-bold text-navy leading-[1.2] mb-[16px]"
      >
        Why Small Businesses Choose Us
      </motion.h2>

      {/* Description Paragraph with Mobile Line-Clamping & 'See More' */}
      <motion.div variants={fadeInUp} className="mb-[30px] sm:mb-[40px]">
        <ExpandableParagraph
          text={descriptionText}
          className="text-body-base sm:text-heading-2 font-normal text-secondary leading-relaxed"
          variant="blue"
          align="left"
        />
      </motion.div>

      {/* Bullet Points with Dividers */}
      <motion.div
        variants={fadeInUp}
        className="space-y-[16px] sm:space-y-[20px] mb-[32px] sm:mb-[40px]"
      >
        {points.map((point, index) => (
          <React.Fragment key={index}>
            <div className="grid grid-cols-[18px_1fr] gap-[12px] items-center text-[16px] sm:text-heading-1 font-bold text-navy">
              <ListStarShapeIcon size={18} />
              <span>{point}</span>
            </div>
            {index < points.length - 1 && (
              <div className="bg-[#305CD8] w-full h-[1px] opacity-20" />
            )}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Call To Action Button */}
      <motion.div variants={fadeInUp}>
        <Button
          variant="default"
          size="lg"
          className="w-full sm:w-auto bg-blue hover:bg-blue/90 text-white h-[54px] sm:h-[60px] px-[28px] sm:px-[34px] rounded-full font-semibold text-[15px] sm:text-[16px] shadow-[0px_10px_25px_rgba(48,92,216,0.2)]"
          asChild
        >
          <Link href="/contact">
            <span>Let’s Talk About Your Business</span>
            <GoArrowUpRight className="!w-[20px] !h-[20px] ml-1" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default WhyChooseUsContent;

