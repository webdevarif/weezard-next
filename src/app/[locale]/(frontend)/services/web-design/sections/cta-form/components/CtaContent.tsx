/**
 * CtaContent Component for Services / Web Design Page
 * Renders the headline, description, and high-fidelity collaboration mockup
 * with a floating royal blue "Book Your Free Consultation ↗" pill CTA button.
 */

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";
import { Link } from "@/lib/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import ctaConsultationImg from "../assets/cta_consultation.webp";

export const CtaContent: React.FC = () => {
  return (
    <div className="w-full lg:max-w-[630px] flex flex-col gap-8 lg:gap-10 text-white">
      {/* Header text container */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-4 sm:space-y-5"
      >
        <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-bold font-dm-sans leading-[1.18] -tracking-[0.02em] text-white">
          Ready to Build a Website That Performs?
        </h2>
        <p className="text-[#CBD5E1] text-[15px] sm:text-[16px] font-dm-sans leading-[1.65] max-w-[540px]">
          Let’s create something that not only looks great but drives real business results. Whether you’re just starting out or looking to improve your current website, we’re here to help.
        </p>
      </motion.div>

      {/* Collaboration showcase image card with floating CTA pill */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative w-full aspect-[630/337] rounded-[16px] overflow-hidden border border-white/10 group"
      >
        <Image
          src={ctaConsultationImg}
          alt="Weezard Web Design and Strategy Team collaborating on digital products"
          fill
          priority={false}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 630px"
        />

        {/* Floating pill CTA button placed inside image (matching Figma coordinates) */}
        <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-[#305CD8] hover:bg-[#254cb8] text-white font-dm-sans font-semibold text-[14px] sm:text-[15px] shadow-[0_9px_45px_rgba(0,100,210,0.37)] transition-all duration-300 hover:shadow-[0_12px_50px_rgba(0,100,210,0.55)] active:scale-95"
          >
            <span>Book Your Free Consultation</span>
            <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default CtaContent;
