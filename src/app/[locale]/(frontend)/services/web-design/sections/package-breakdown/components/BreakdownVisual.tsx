/**
 * BreakdownVisual Component
 * Renders the exact high-resolution report and package ROI metrics card extracted from Figma.
 */

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";
import { Zap } from "lucide-react";
import BreakdownReport from "@/app/[locale]/(frontend)/services/assets/banner-2.jpg";

export const BreakdownVisual: React.FC = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="relative flex flex-col justify-center items-center w-full max-w-[560px] mx-auto lg:mx-0"
    >
      {/* Background Graphic Frame */}
      <div className="relative w-full aspect-[1905/1429] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(20,40,90,0.1)] border border-[#E2E8F4]">
        <Image
          src={BreakdownReport}
          alt="Package ROI Breakdown Report"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 560px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
        
        {/* Bottom Metrics Pill */}
        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-[18px] p-5 border border-white/80 shadow-lg">
          <div className="grid grid-cols-3 gap-3 text-center divide-x divide-gray-100">
            <div>
              <span className="text-[24px] sm:text-[28px] font-bold text-navy font-dm-sans block">99.8%</span>
              <span className="text-[12px] text-secondary">Uptime Quality</span>
            </div>
            <div>
              <span className="text-[24px] sm:text-[28px] font-bold text-blue font-dm-sans block">&lt; 1.2s</span>
              <span className="text-[12px] text-secondary">Load Speed</span>
            </div>
            <div>
              <span className="text-[24px] sm:text-[28px] font-bold text-[#E68A00] font-dm-sans block">100%</span>
              <span className="text-[12px] text-secondary">Asset Rights</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge (Top Left) */}
      <div className="absolute -top-4 -left-3 sm:-left-6 bg-white rounded-[16px] p-3.5 shadow-[0_12px_30px_rgba(20,40,90,0.12)] border border-[#E2E8F4] flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-blue/10 text-blue flex items-center justify-center">
          <Zap className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[13px] font-bold text-navy block">Turnkey Delivery</span>
          <span className="text-[11px] text-secondary block">Ready to accept leads</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BreakdownVisual;
