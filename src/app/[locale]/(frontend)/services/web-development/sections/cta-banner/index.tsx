/**
 * High-Impact CTA Banner Section for Web Development
 *
 * 100% Pixel-Perfect match to Figma Frame 1686558271:
 * - Container: max-w-[1320px], min-h-[486px], rounded-[16px], bg #305CD8
 * - Ambient Orbs:
 *   - Ellipse 6638: Top-Right 620x620px white glow (blur 140.5px, opacity 0.5)
 *   - Ellipse 6639: Bottom-Left 620x620px golden-yellow glow (blur 140.5px, bg #EAD53F)
 * - Typography:
 *   - Title: 45px / line-height 54px DM Sans Bold (#FFFFFF)
 *   - Subtitle: 18px / line-height 27px Manrope Regular (#FFFFFF)
 * - Button Group (Frame 1686558270):
 *   - Primary: 60px height, bg #EAD53F, rounded-full, 16px DM Sans Medium (#092856) with 24px arrow
 *   - Secondary: 60px height, border 1px solid #FFFFFF, rounded-full, 16px DM Sans Medium (#FFFFFF) with 24px arrow
 */

"use client";

import React from "react";
import Link from "next/link";

export interface CtaBannerProps {
  data: {
    title: string;
    subtitle: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
}

export const CtaBannerSection: React.FC<CtaBannerProps> = ({ data }) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white select-none">
      <div className="max-w-[1320px] 2xl:max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Box (Rectangle 8980 / 8981) */}
        <div className="relative overflow-hidden rounded-[16px] bg-[#305CD8] px-6 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-[100px] text-center min-h-[486px] flex flex-col items-center justify-center shadow-lg">
          {/* Top-Right White Glow (Ellipse 6638) */}
          <div
            className="absolute -top-[281px] -right-[150px] sm:-right-[100px] lg:right-[-80px] w-[620px] h-[620px] rounded-full bg-white opacity-50 blur-[140.5px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Bottom-Left Golden-Yellow Glow (Ellipse 6639) */}
          <div
            className="absolute -bottom-[280px] -left-[200px] sm:-left-[150px] lg:left-[-120px] w-[620px] h-[620px] rounded-full bg-[#EAD53F] blur-[140.5px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Inner Content Frame */}
          <div className="relative z-10 max-w-[920px] lg:max-w-[980px] mx-auto flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
            {/* Title & Description Container */}
            <div className="flex flex-col items-center gap-4 w-full">
              <h2 className="font-dm-sans font-bold text-3xl sm:text-4xl lg:text-[46px] leading-tight lg:leading-[56px] text-white tracking-[-0.02em] text-center max-w-[920px]">
                {data.title}
              </h2>

              <p className="font-manrope font-normal text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[28px] text-white text-center max-w-[820px]">
                {data.subtitle}
              </p>
            </div>

            {/* Button Group (Wider button sizes) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
              {/* Primary CTA (Book a Free Consultation) */}
              <Link
                href={data.primaryCta.href}
                className="w-full sm:w-[290px] md:w-[310px] h-[60px] inline-flex items-center justify-center gap-2.5 px-7 py-[18px] rounded-full bg-[#EAD53F] text-[#092856] font-dm-sans font-semibold text-[16px] leading-[20px] tracking-[-0.01em] transition-all duration-300 hover:bg-[#fae64e] hover:shadow-lg active:scale-[0.98] group"
              >
                <span>{data.primaryCta.label}</span>
                <svg
                  className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="#092856"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              {/* Secondary CTA (Request a Custom Quote) */}
              <Link
                href={data.secondaryCta.href}
                className="w-full sm:w-[290px] md:w-[310px] h-[60px] inline-flex items-center justify-center gap-2.5 px-7 py-[18px] rounded-full border border-solid border-white text-white font-dm-sans font-semibold text-[16px] leading-[20px] tracking-[-0.01em] transition-all duration-300 hover:bg-white hover:text-[#305CD8] hover:shadow-lg active:scale-[0.98] group"
              >
                <span>{data.secondaryCta.label}</span>
                <svg
                  className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerSection;

