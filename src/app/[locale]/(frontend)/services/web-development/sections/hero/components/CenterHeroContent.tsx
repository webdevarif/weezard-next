"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/lib/i18n/routing";
import laptopSvg from "../../../assets/hero/laptop.svg";
import { HeroDataType, webDevelopmentData } from "../../../content";

interface CenterHeroContentProps {
  data?: HeroDataType;
}

/**
 * CenterHeroContent Component
 * Renders the central typography, rating badge, inline laptop icon, and CTA button
 * using dynamic data from content.ts matching Figma pixel-perfect standards:
 * - rating: score, stars, text
 * - title: primary, accent, highlight
 * - description
 * - cta: label, href
 */
export const CenterHeroContent: React.FC<CenterHeroContentProps> = ({
  data = webDevelopmentData.hero
}) => {
  const { rating, title, description, cta } = data;

  return (
    <div className="relative z-30 flex flex-col items-center text-center max-w-[680px] lg:max-w-[720px] mx-auto pt-6 sm:pt-10 pb-8 px-4">
      {/* Dynamic Star Rating display */}
      <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
        <div className="flex items-center gap-1 text-[#FF9900]">
          {[...Array(rating.stars || 5)].map((_, i) => (
            <span key={i} className="text-sm sm:text-base leading-none">
              ★
            </span>
          ))}
        </div>
        <span className="font-dm-sans text-xs sm:text-sm text-[#495162] font-medium tracking-tight">
          ({rating.score}) {rating.text}
        </span>
      </div>

      {/* Dynamic Headline matching Figma structure */}
      <h1 className="font-manrope text-3xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.16] mb-5">
        <span className="text-[#305CD8]">{title.primary}</span>
        <span className="inline-flex items-center align-middle mx-0.5 sm:mx-1 translate-y-[-2px] sm:translate-y-[-4px] lg:translate-y-[-6px]">
          <span className="relative w-[56px] h-[37px] sm:w-[84px] sm:h-[55px] lg:w-[105.42px] lg:h-[69.17px] inline-block">
            <Image
              src={laptopSvg}
              alt="Laptop Website Preview"
              width={105}
              height={69}
              className="w-full h-full object-contain"
              priority
            />
          </span>
        </span>
        <span className="text-[#092856]">{title.accent}</span>
        <br />
        <span className="text-[#092856]">{title.highlight}</span>
      </h1>

      {/* Dynamic Subtitle / Description */}
      <p className="font-dm-sans text-sm sm:text-base lg:text-[17px] text-[#495162] max-w-[560px] leading-relaxed mb-8 font-normal">
        {description}
      </p>

      {/* Dynamic CTA Button matching Figma */}
      <div>
        <Link
          href={cta.href}
          className="group relative inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#305CD8] hover:bg-[#2049b8] text-white font-dm-sans font-medium text-sm sm:text-base shadow-[0_8px_20px_rgba(48,92,216,0.28)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>{cta.label}</span>
          <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
};
