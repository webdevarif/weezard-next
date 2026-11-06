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
    "Tailored services, not templates",
    "Clear communication",
    "Scalable as you grow",
    "Fully white-label options",
  ];

  const descriptionText =
    "Small businesses choose Weezard because we speak their language, respect their budget, and focus on real outcomes. We’re fast, friendly, and flexible—delivering agency-level quality without the stress or big agency price tag.";

  return (
    <div className="w-full max-w-[540px] mx-auto lg:mx-0">
      {/* Category Badge - Hidden on mobile to match Figma mobile specifications */}
      <motion.div variants={fadeInUp} className="hidden sm:block mb-[12px]">
        <span className="text-blue bg-blue/10 text-[13px] sm:text-[14px] inline-flex leading-[1.7] uppercase py-[4px] px-[14px] font-semibold rounded-full">
          Why Choose Us
        </span>
      </motion.div>

      {/* Main Section Heading */}
      <motion.h2
        variants={fadeInUp}
        className="text-[32px] sm:text-[40px] lg:text-title-2 font-bold text-navy leading-[1.15] sm:leading-[1.2] mb-[16px]"
      >
        Why Small Businesses Choose Us
      </motion.h2>

      {/* Description Paragraph with Mobile Line-Clamping & 'See More' */}
      <motion.div variants={fadeInUp} className="mb-[24px] sm:mb-[32px]">
        <ExpandableParagraph
          text={descriptionText}
          className="text-body-base sm:text-heading-2 font-normal text-secondary leading-relaxed"
          variant="blue"
          align="left"
        />
      </motion.div>

      {/* Bullet Points with Linear Gradient Dividers */}
      <motion.div
        variants={fadeInUp}
        className="mb-[28px] sm:mb-[36px]"
      >
        {points.map((point, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center gap-[12px] py-[12px] sm:py-[16px] text-[15px] sm:text-heading-1 font-bold text-navy">
              <div className="shrink-0 flex items-center justify-center">
                <ListStarShapeIcon size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <span>{point}</span>
            </div>
            {index < points.length - 1 && (
              <div
                className="w-full h-[1px]"
                style={{
                  background: "linear-gradient(90deg, #305CD8 0%, #C7B0FE 100%)",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Call To Action Button (Inline pill button, hugging content) */}
      <motion.div variants={fadeInUp}>
        <Button
          variant="default"
          size="lg"
          className="w-fit inline-flex items-center gap-[8px] bg-blue hover:bg-blue/90 text-white h-[50px] sm:h-[56px] px-[24px] sm:px-[30px] rounded-full font-semibold text-[15px] sm:text-[16px] shadow-[0px_8px_20px_rgba(48,92,216,0.25)]"
          asChild
        >
          <Link href="/contact" className="inline-flex items-center gap-[8px]">
            <span>Let’s Talk About Your Business</span>
            <GoArrowUpRight className="!w-[18px] !h-[18px] shrink-0" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default WhyChooseUsContent;

