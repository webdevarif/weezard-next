"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/lib/i18n/routing";
import laptopWebp from "../../../assets/hero/laptop.webp";
import { HeroDataType, webDevelopmentData } from "../../../content";

interface CenterHeroContentProps {
  data?: HeroDataType;
}

/**
 * CenterHeroContent Component
 * Renders the central typography, rating badge, inline laptop icon, and CTA button
 * 100% Figma SVG Match (viewBox 0 0 430 842):
 * - Rating: Y=235px, (4,5/5) Trusted by 500+ Businesses
 * - Headline: Y=262px, 48px/54px DM Sans Bold
 * - Laptop Icon: X=38px, Y=329px, width 56.35px, height 36.97px, -15deg rotated
 * - Description: Y=384px, Manrope 16px/27px
 * - CTA Button: Y=534px, width 390px, height 48px
 */
export const CenterHeroContent: React.FC<CenterHeroContentProps> = ({
  data = webDevelopmentData.hero
}) => {
  const { rating, title, description, cta } = data;

  return (
    <div className="relative z-30 flex flex-col items-center text-center max-w-[390px] sm:max-w-[680px] lg:max-w-[720px] mx-auto pt-[215px] sm:pt-10 pb-[235px] sm:pb-8 px-2 sm:px-4">
      {/* 1. Dynamic Star Rating display (Figma Y=235px) */}
      <div className="inline-flex items-center gap-1.5 mb-2.5 sm:mb-5">
        <div className="flex items-center gap-0.5 text-[#FF9900]">
          {[...Array(rating.stars || 5)].map((_, i) => (
            <span key={i} className="text-sm sm:text-base leading-none">
              ★
            </span>
          ))}
        </div>
        <span className="font-manrope text-[13px] sm:text-sm text-[#495162] font-medium tracking-tight">
          ({rating.score}) {rating.text}
        </span>
      </div>

      {/* 2. Dynamic Headline matching Figma structure (Figma Y=262px) */}
      <h1 className="font-dm-sans text-[38px] sm:text-5xl lg:text-[56px] font-bold tracking-[-0.02em] leading-[1.12] sm:leading-[1.16] mb-3 sm:mb-5">
        <span className="text-[#305CD8] block sm:inline">{title.primary}</span>
        <span className="inline-flex items-center align-middle mx-1 translate-y-[-2px] sm:translate-y-[-4px] lg:translate-y-[-6px]">
          <span className="relative w-[56.35px] h-[36.97px] sm:w-[84px] sm:h-[55px] lg:w-[105.42px] lg:h-[69.17px] inline-block -rotate-[15deg]">
            <Image
              src={laptopWebp}
              alt="Laptop Website Preview"
              width={105}
              height={69}
              className="w-full h-full object-contain"
              priority
            />
          </span>
        </span>
        <span className="text-[#092856]">{title.accent}</span>
        <br className="hidden sm:inline" />
        <span className="text-[#092856] sm:ml-0 ml-1.5">{title.highlight}</span>
      </h1>

      {/* 3. Dynamic Subtitle / Description (Figma Y=384px) */}
      <p className="font-manrope text-[15px] sm:text-base lg:text-[17px] text-[#495162] max-w-[390px] sm:max-w-[560px] leading-[26px] sm:leading-[27px] mb-5 sm:mb-8 font-normal">
        {description}
      </p>

      {/* 4. Dynamic CTA Button (Figma Y=534px, width 390px, height 48px) */}
      <div className="w-full flex justify-center">
        <Link
          href={cta.href}
          className="group relative inline-flex items-center justify-center gap-2 w-full max-w-[390px] sm:w-auto h-[48px] px-6 sm:px-8 py-3 rounded-full bg-[#305CD8] hover:bg-[#2049b8] text-white font-manrope font-semibold text-sm sm:text-base shadow-[0px_9px_45px_rgba(0,95,200,0.17)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>{cta.label}</span>
          <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
};
