/**
 * Features Section Background Ambient Glow & Light Accents
 *
 * Exact ambient lighting match from Figma:
 * - Left/Bottom-Left: #903DD1 Purple ambient blur glow
 * - Right/Top-Right: #86DDF1 Cyan / Light Blue ambient blur glow
 * - Bottom-Right: #EAD53F Warm Yellow soft glow
 */

"use client";

import React from "react";

export const FeaturesBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none"
    >
      {/* 1. Purple Glow - Left Bottom */}
      <div
        className="absolute -left-[120px] bottom-[5%] w-[480px] sm:w-[560px] lg:w-[680px] h-[480px] sm:h-[560px] lg:h-[680px] rounded-full blur-[110px] lg:blur-[140px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(144,61,209,0.32) 0%, rgba(144,61,209,0.12) 50%, transparent 75%)",
        }}
      />

      {/* 2. Cyan / Sky Blue Glow - Top Right */}
      <div
        className="absolute -right-[150px] top-[5%] w-[520px] sm:w-[640px] lg:w-[750px] h-[520px] sm:h-[640px] lg:h-[750px] rounded-full blur-[120px] lg:blur-[150px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(134,221,241,0.45) 0%, rgba(134,221,241,0.18) 55%, transparent 75%)",
        }}
      />

      {/* 3. Warm Yellow Glow - Bottom Right */}
      <div
        className="absolute right-[5%] -bottom-[80px] w-[420px] sm:w-[500px] lg:w-[600px] h-[380px] sm:h-[450px] lg:h-[520px] rounded-full blur-[120px] lg:blur-[140px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(234,213,63,0.35) 0%, rgba(234,213,63,0.12) 50%, transparent 75%)",
        }}
      />

      {/* 4. Full SVG Filter backdrop layer */}
      <div className="absolute inset-0 flex items-center justify-center opacity-70 pointer-events-none">
        <svg
          viewBox="0 0 1920 1868"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full min-w-[1280px] object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <g opacity="0.8">
            <g opacity="0.9" filter="url(#f_yellow_glow)">
              <ellipse cx="1404.6" cy="1209.02" rx="260" ry="200" fill="#EAD53F" />
            </g>
            <g opacity="0.85" filter="url(#f_purple_glow)">
              <ellipse cx="220" cy="1316.77" rx="260" ry="200" fill="#903DD1" />
            </g>
            <g opacity="0.9" filter="url(#f_cyan_glow)">
              <ellipse cx="1636" cy="780" rx="340" ry="270" fill="#86DDF1" />
            </g>
          </g>
          <defs>
            <filter
              id="f_yellow_glow"
              x="700"
              y="550"
              width="1410"
              height="1320"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="220" />
            </filter>
            <filter
              id="f_purple_glow"
              x="-260"
              y="850"
              width="960"
              height="930"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="160" />
            </filter>
            <filter
              id="f_cyan_glow"
              x="750"
              y="0"
              width="1770"
              height="1560"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="240" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};
