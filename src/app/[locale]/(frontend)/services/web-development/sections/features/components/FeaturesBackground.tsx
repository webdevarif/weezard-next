/**
 * Features Section Background Ambient Glow & Light Accents
 *
 * Exact ambient lighting match from Figma using lightweight GPU-accelerated radial gradients:
 * - Left/Bottom-Left: #903DD1 Purple ambient glow
 * - Right/Top-Right: #86DDF1 Cyan / Sky Blue ambient glow
 * - Bottom-Right: #EAD53F Warm Yellow soft glow
 * (Eliminated heavy CPU-costly feGaussianBlur SVG filters for 0ms hover latency)
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
        className="absolute -left-[120px] bottom-[5%] w-[480px] sm:w-[560px] lg:w-[680px] h-[480px] sm:h-[560px] lg:h-[680px] rounded-full blur-[90px] lg:blur-[120px] pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(circle, rgba(144,61,209,0.35) 0%, rgba(144,61,209,0.15) 50%, transparent 75%)",
        }}
      />

      {/* 2. Cyan / Sky Blue Glow - Top Right */}
      <div
        className="absolute -right-[150px] top-[5%] w-[520px] sm:w-[640px] lg:w-[750px] h-[520px] sm:h-[640px] lg:h-[750px] rounded-full blur-[100px] lg:blur-[130px] pointer-events-none opacity-85"
        style={{
          background:
            "radial-gradient(circle, rgba(134,221,241,0.48) 0%, rgba(134,221,241,0.2) 55%, transparent 75%)",
        }}
      />

      {/* 3. Warm Yellow Glow - Bottom Right */}
      <div
        className="absolute right-[5%] -bottom-[80px] w-[420px] sm:w-[500px] lg:w-[600px] h-[380px] sm:h-[450px] lg:h-[520px] rounded-full blur-[90px] lg:blur-[120px] pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(circle, rgba(234,213,63,0.38) 0%, rgba(234,213,63,0.14) 50%, transparent 75%)",
        }}
      />
    </div>
  );
};
