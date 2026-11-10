import React from "react";

interface StrategyCardProps {
  stepNumber: number;
  title: string;
  bgColor: string;
  waveColor: string;
}

/**
 * StrategyCard Component
 * 
 * Strict Figma Pixel-Perfect Card (252px x 120px):
 * - Step 1: #F6EBFE (Discovery & Audit)
 * - Step 2: #ECEDF9 (Strategy Planning)
 * - Step 3: #F3F0D7 (Content & Campaign Creation)
 * - Step 4: #F6EBFE (Execution & Monitoring)
 * - Step 5: #D7ECFE (Reporting & Optimization)
 * - Decorative inner wave stroke matching Figma Vector 116
 * - Title: 20px DM Sans Bold, line-height 27px, color #092856
 */
export const StrategyCard: React.FC<StrategyCardProps> = ({
  title,
  bgColor,
  waveColor,
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="relative w-full max-w-[252px] h-[120px] rounded-[12px] p-[25px_30px] flex items-center overflow-hidden shadow-sm flex-shrink-0"
    >
      {/* Decorative Wave Mask matching Figma Vector 116 */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 252 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <mask
          id={`mask-${title.replace(/\s+/g, "-")}`}
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="252"
          height="120"
        >
          <rect width="252" height="120" rx="12" fill={bgColor} />
        </mask>
        <g mask={`url(#mask-${title.replace(/\s+/g, "-")})`}>
          <path
            d="M-8 149.41C9.5 101.41 60.6 23.3095 125 94.9095C205.5 184.41 231 -45.9999 304.5 20.0017"
            strokeWidth="19"
            stroke={waveColor}
            strokeOpacity="0.55"
          />
        </g>
      </svg>

      {/* Card Title */}
      <h3 className="relative z-10 font-dm-sans font-bold text-[18px] sm:text-[20px] leading-[25px] sm:leading-[27px] text-[#092856] break-words">
        {title}
      </h3>
    </div>
  );
};

export default StrategyCard;
