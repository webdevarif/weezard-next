/**
 * FeatureCardsList Component
 * 
 * Vertical stack of the 4 soft-colored feature cards for Why Choose Us.
 * Conforms 100% to Figma copy, icons, and pastel fills.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations/framer";
import FeatureCardItem, { FeatureCardItemProps } from "./FeatureCardItem";
import {
  CustomUniqueIcon,
  SeoSpeedIcon,
  MobileResponsiveIcon,
  SecureScalableIcon,
} from "./WhyChooseIcons";

export const FeatureCardsList: React.FC = () => {
  const cards: FeatureCardItemProps[] = [
    {
      icon: CustomUniqueIcon,
      title: "Custom & Unique Designs",
      description:
        "We don't use typical templates. Every design is customized to match your brand and your goals, making you stand out in your industry.",
      bgColor: "#F0EAFD",
    },
    {
      icon: SeoSpeedIcon,
      title: "Fast Loading & SEO-Friendly",
      description:
        "We build websites that load quickly and are optimized for search engines, so your customers can find you easily.",
      bgColor: "#D7ECFE",
    },
    {
      icon: MobileResponsiveIcon,
      title: "Mobile Responsive",
      description:
        "Whether on a phone, tablet, or desktop—your website will look great and work smoothly on all screen sizes.",
      bgColor: "#FAF5D5",
    },
    {
      icon: SecureScalableIcon,
      title: "Secure & Scalable",
      description:
        "Your website will be protected with top-level security and built in a way that allows you to grow over time without starting over.",
      bgColor: "#FFE8D8",
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="space-y-3.5 sm:space-y-4"
    >
      {cards.map((card, idx) => (
        <FeatureCardItem key={idx} {...card} />
      ))}
    </motion.div>
  );
};

export default FeatureCardsList;
