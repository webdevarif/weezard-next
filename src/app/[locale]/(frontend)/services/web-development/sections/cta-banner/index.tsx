/**
 * High-Impact CTA Banner Section for Web Development
 *
 * 100% Pixel-Perfect match to Figma:
 * - Mobile (< 640px, Frame 1686558309):
 *   - Outer margin: 20px left/right
 *   - Banner Box (Rectangle 8980): width 390px, min-h 424px, rounded-[16px], bg #305CD8
 *   - Ambient Orbs:
 *     - Ellipse 6638: 183x181.47px white glow at left 268px, top -65.44px, opacity 0.5, blur(85px)
 *     - Ellipse 6639: 179x189px golden-yellow glow (#EAD53F) at left -49px, top 307px, blur(85px)
 *   - Typography (Frame 1686558052, width 358px, top 60px, gap 10px):
 *     - Title: DM Sans Bold, 32px / 45px (#FFFFFF)
 *     - Subtitle: Manrope Regular, 14px / 22px (#FFFFFF, 2 lines, height 44px)
 *   - Button Group (Frame 1686558308, width 240px, top 252px, gap 16px):
 *     - Primary & Secondary: 240px x 48px, DM Sans Medium 14px / 24px
 * - Desktop (>= 640px, Frame 1686558271):
 *   - Container: max-w-[1320px], min-h-[486px], rounded-[16px], bg #305CD8
 *   - Title: 45px / 54px DM Sans Bold, Subtitle: 18px / 27px Manrope Regular
 */

"use client";

import React from "react";
import { CtaBannerAmbientGlows } from "./components/CtaBannerAmbientGlows";
import { CtaBannerButtons } from "./components/CtaBannerButtons";

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
    <section className="relative overflow-hidden py-10 sm:py-20 lg:py-24 bg-white select-none">
      <div className="max-w-[1320px] 2xl:max-w-[1360px] mx-auto px-[20px] sm:px-6 lg:px-8">
        {/* Banner Box (Rectangle 8980 / 8981) */}
        <div className="relative overflow-hidden w-full max-w-[390px] sm:max-w-none min-h-[424px] sm:min-h-[486px] mx-auto rounded-[16px] bg-[#305CD8] px-[16px] sm:px-12 lg:px-16 pt-[60px] pb-[60px] sm:py-20 lg:py-[100px] text-center flex flex-col items-center justify-start sm:justify-center shadow-lg">
          {/* Ambient Blur Glow Ellipses (Ellipse 6638 & 6639) */}
          <CtaBannerAmbientGlows />

          {/* Inner Content Frame */}
          <div className="relative z-10 w-full max-w-[358px] sm:max-w-[920px] lg:max-w-[980px] mx-auto flex flex-col items-center gap-[13px] sm:gap-10 lg:gap-12">
            {/* Title & Description Container (Frame 1686558052: width 358px, gap 10px on mobile) */}
            <div className="flex flex-col items-center gap-[10px] sm:gap-4 w-full">
              <h2 className="w-full font-dm-sans font-bold text-[32px] leading-[45px] sm:text-4xl lg:text-[46px] sm:leading-tight lg:leading-[56px] text-white sm:tracking-[-0.02em] text-center max-w-[358px] sm:max-w-[920px]">
                {data.title}
              </h2>

              <p className="w-full font-manrope font-normal text-[14px] leading-[22px] sm:text-lg lg:text-[18px] sm:leading-relaxed lg:leading-[28px] text-white text-center max-w-[358px] sm:max-w-[820px] line-clamp-2 sm:line-clamp-none">
                {data.subtitle}
              </p>
            </div>

            {/* Button Group (Frame 1686558308 on mobile, Frame 1686558270 on desktop) */}
            <CtaBannerButtons
              primaryCta={data.primaryCta}
              secondaryCta={data.secondaryCta}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerSection;
