/**
 * CtaBannerAmbientGlows Component
 *
 * Renders the pixel-perfect ambient blur ellipses inside the CTA Banner (Mask group):
 * - Mobile (< 640px, Frame 1686558309):
 *   - Ellipse 6638: width 183px, height 181.47px, left 268px, top -65.44px, #FFFFFF, opacity 0.5, blur(85px)
 *   - Ellipse 6639: width 179px, height 189px, left -49px, top 307px, #EAD53F, blur(85px)
 * - Desktop (>= 640px, Frame 1686558271):
 *   - Ellipse 6638: 620x620px top-right white glow, opacity 0.5, blur(140.5px)
 *   - Ellipse 6639: 620x620px bottom-left golden-yellow glow (#EAD53F), blur(140.5px)
 */

"use client";

import React from "react";

export const CtaBannerAmbientGlows: React.FC = () => {
  return (
    <>
      {/* Top-Right White Glow (Ellipse 6638) */}
      <div
        aria-hidden="true"
        className="absolute left-[268px] -top-[65.44px] w-[183px] h-[181.47px] sm:left-auto sm:-top-[281px] sm:-right-[100px] lg:right-[-80px] sm:w-[620px] sm:h-[620px] rounded-full bg-white opacity-50 blur-[85px] sm:blur-[140.5px] pointer-events-none select-none"
      />

      {/* Bottom-Left Golden-Yellow Glow (Ellipse 6639) */}
      <div
        aria-hidden="true"
        className="absolute -left-[49px] top-[307px] w-[179px] h-[189px] sm:top-auto sm:-bottom-[280px] sm:-left-[150px] lg:left-[-120px] sm:w-[620px] sm:h-[620px] rounded-full bg-[#EAD53F] blur-[85px] sm:blur-[140.5px] pointer-events-none select-none"
      />
    </>
  );
};

export default CtaBannerAmbientGlows;
