/**
 * WhyChooseUsBanner Component
 * 
 * High-resolution office design collaboration photo extracted directly from Figma.
 * Features rounded corners, subtle elevation shadow, and optional interactive CTA button.
 */

"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/lib/i18n/routing";
import { fadeInUp } from "@/lib/animations/framer";
import DefaultWhyChoosePhoto from "../../../assets/why_choose_us/why-choose-banner.png";

interface WhyChooseUsBannerProps {
  bannerImage?: StaticImageData | string;
}

export const WhyChooseUsBanner: React.FC<WhyChooseUsBannerProps> = ({
  bannerImage = DefaultWhyChoosePhoto,
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative w-full aspect-[635/865] rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden shadow-[0_15px_40px_rgba(20,40,90,0.08)] border border-black/[0.04] bg-[#F5F7FA]"
    >
      {/* High-Resolution Team Collaboration Photo */}
      <Image
        src={bannerImage}
        alt="Weezard Web Design Team Collaboration"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 635px"
      />

      {/* Subtle bottom gradient to enhance depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

      {/* Floating Action Button (Talk to Our Experts ↗) */}
      <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-10">
        <Link
          href="/contact-us"
          className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#EAD53F] hover:bg-[#dfc82f] text-[#092856] text-[13.5px] sm:text-[14.5px] font-bold shadow-[0_6px_18px_rgba(234,213,63,0.35)] hover:shadow-[0_8px_24px_rgba(234,213,63,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Talk to Our Experts</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default WhyChooseUsBanner;
