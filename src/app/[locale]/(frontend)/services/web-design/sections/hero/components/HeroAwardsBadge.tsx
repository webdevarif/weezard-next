/**
 * HeroAwardsBadge Component
 *
 * Floating awards recognition pill badge positioned right under the main showcase card.
 * Conforms to Figma SVG exact coordinates (424x196 viewBox, pill 304x76 with rx 18):
 * - Linear gradient background with soft drop shadow filter
 * - 4 hexagonal trophy/medal award badges with gradient strokes
 * - Crisp direct rendering of individual high-res badge assets (Badge_01 - Badge_04)
 * - Dynamic customizable typography for count and label (e.g. "10+" and "Award")
 * - Seamlessly tucked behind the card bottom border
 */

"use client";

import React from "react";
import Badge01 from "../../../assets/hero/Badges/Badge_01.png";
import Badge02 from "../../../assets/hero/Badges/Badge_02.png";
import Badge03 from "../../../assets/hero/Badges/Badge_03.png";
import Badge04 from "../../../assets/hero/Badges/Badge_04.png";

export interface HeroAwardsBadgeProps {
  /** Numerical highlight or count (e.g., "10+", "25+", "100%") */
  count?: string;
  /** Subtitle or descriptive label (e.g., "Award", "Awards", "Reviews") */
  label?: string;
  /** Optional custom styling classes for container */
  className?: string;
}

export const HeroAwardsBadge: React.FC<HeroAwardsBadgeProps> = ({
  count = "10+",
  label = "Award",
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[72%] sm:top-[74%] lg:top-[75%] left-1/2 -translate-x-1/2 w-[80%] sm:w-[75%] lg:w-[72%] z-0 pointer-events-auto select-none ${className}`}
    >
      <div className="relative w-full hover:scale-105 transition-transform duration-300 select-none">
        <svg
          viewBox="0 0 424 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="w-full h-auto drop-shadow-none"
        >
          <g filter="url(#filter0_d_64746_3149)">
            {/* Pill Container Background with Gradient */}
            <rect
              x="60"
              y="40"
              width="304"
              height="76"
              rx="18"
              fill="url(#paint0_linear_64746_3149)"
              shapeRendering="crispEdges"
            />

            {/* Badge 1: Trophy Cup Hexagon */}
            <use xlinkHref="#stroke0_64746_3149" fill="#EBEFF6" />
            <mask id="stroke1_64746_3149" fill="white">
              <use xlinkHref="#stroke0_64746_3149" />
            </mask>
            <path
              d="M74.0192 65.8868V90.1132C74.0192 91.8996 74.9722 93.5502 76.5192 94.4434L97.5 106.557C99.047 107.45 100.953 107.45 102.5 106.557L123.481 94.4434C125.028 93.5502 125.981 91.8996 125.981 90.1132V65.8868C125.981 64.1004 125.028 62.4498 123.481 61.5566L102.5 49.4434C100.953 48.5502 99.047 48.5502 97.5 49.4434L76.5192 61.5566C74.9722 62.4498 74.0192 64.1004 74.0192 65.8868Z"
              strokeWidth="2"
              stroke="url(#paint1_linear_64746_3149)"
              mask="url(#stroke1_64746_3149)"
            />
            <image
              href={Badge01.src}
              x="85"
              y="55.5"
              width="30"
              height="45"
              preserveAspectRatio="xMidYMid meet"
            />

            {/* Badge 2: Red/White Ribbon Medal Hexagon */}
            <use xlinkHref="#stroke2_64746_3149" fill="#EBEFF6" />
            <mask id="stroke3_64746_3149" fill="white">
              <use xlinkHref="#stroke2_64746_3149" />
            </mask>
            <path
              d="M130.019 65.8868V90.1132C130.019 91.8996 130.972 93.5502 132.519 94.4434L153.5 106.557C155.047 107.45 156.953 107.45 158.5 106.557L179.481 94.4434C181.028 93.5502 181.981 91.8996 181.981 90.1132V65.8868C181.981 64.1004 181.028 62.4498 179.481 61.5566L158.5 49.4434C156.953 48.5502 155.047 48.5502 153.5 49.4434L132.519 61.5566C130.972 62.4498 130.019 64.1004 130.019 65.8868Z"
              strokeWidth="2"
              stroke="url(#paint2_linear_64746_3149)"
              mask="url(#stroke3_64746_3149)"
            />
            <image
              href={Badge02.src}
              x="141"
              y="55.5"
              width="30"
              height="45"
              preserveAspectRatio="xMidYMid meet"
            />

            {/* Badge 3: Blue/Red Ribbon Medal Hexagon */}
            <use xlinkHref="#stroke4_64746_3149" fill="#EBEFF6" />
            <mask id="stroke5_64746_3149" fill="white">
              <use xlinkHref="#stroke4_64746_3149" />
            </mask>
            <path
              d="M186.019 65.8868V90.1132C186.019 91.8996 186.972 93.5502 188.519 94.4434L209.5 106.557C211.047 107.45 212.953 107.45 214.5 106.557L235.481 94.4434C237.028 93.5502 237.981 91.8996 237.981 90.1132V65.8868C237.981 64.1004 237.028 62.4498 235.481 61.5566L214.5 49.4434C212.953 48.5502 211.047 48.5502 209.5 49.4434L188.519 61.5566C186.972 62.4498 186.019 64.1004 186.019 65.8868Z"
              strokeWidth="2"
              stroke="url(#paint3_linear_64746_3149)"
              mask="url(#stroke5_64746_3149)"
            />
            <image
              href={Badge03.src}
              x="197"
              y="55.5"
              width="30"
              height="45"
              preserveAspectRatio="xMidYMid meet"
            />

            {/* Badge 4: Star Award Statuette Hexagon */}
            <use xlinkHref="#stroke6_64746_3149" fill="#EBEFF6" />
            <mask id="stroke7_64746_3149" fill="white">
              <use xlinkHref="#stroke6_64746_3149" />
            </mask>
            <path
              d="M242.019 65.8868V90.1132C242.019 91.8996 242.972 93.5502 244.519 94.4434L265.5 106.557C267.047 107.45 268.953 107.45 270.5 106.557L291.481 94.4434C293.028 93.5502 293.981 91.8996 293.981 90.1132V65.8868C293.981 64.1004 293.028 62.4498 291.481 61.5566L270.5 49.4434C268.953 48.5502 267.047 48.5502 265.5 49.4434L244.519 61.5566C242.972 62.4498 242.019 64.1004 242.019 65.8868Z"
              strokeWidth="2"
              stroke="url(#paint4_linear_64746_3149)"
              mask="url(#stroke7_64746_3149)"
            />
            <image
              href={Badge04.src}
              x="253"
              y="55.5"
              width="30"
              height="45"
              preserveAspectRatio="xMidYMid meet"
            />

            {/* Dynamic Typography (count & label) */}
            <text
              x="306"
              y="74"
              fill="#092856"
              className="font-dm-sans font-bold text-[17px] tracking-tight"
              style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontWeight: 700 }}
            >
              {count}
            </text>
            <text
              x="306"
              y="94"
              fill="#092856"
              className="font-dm-sans font-bold text-[13.5px] tracking-tight"
              style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontWeight: 700 }}
            >
              {label}
            </text>
          </g>

          <defs>
            <filter
              id="filter0_d_64746_3149"
              x="0"
              y="0"
              width="424"
              height="196"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="30" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.145098 0 0 0 0 0.294118 0 0 0 0 0.580392 0 0 0 0.13 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_64746_3149"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_64746_3149"
                result="shape"
              />
            </filter>

            <linearGradient
              id="paint0_linear_64746_3149"
              x1="200.5"
              y1="46"
              x2="200.5"
              y2="116"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </linearGradient>

            <linearGradient
              id="paint1_linear_64746_3149"
              x1="100"
              y1="49"
              x2="110.932"
              y2="111.591"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7B0FE" stopOpacity="0" />
              <stop offset="1" stopColor="#305CD8" />
            </linearGradient>

            <linearGradient
              id="paint2_linear_64746_3149"
              x1="131"
              y1="71"
              x2="184.126"
              y2="71.7208"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7B0FE" stopOpacity="0" />
              <stop offset="1" stopColor="#305CD8" />
            </linearGradient>

            <linearGradient
              id="paint3_linear_64746_3149"
              x1="207.5"
              y1="104"
              x2="225.056"
              y2="49.9335"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7B0FE" stopOpacity="0" />
              <stop offset="1" stopColor="#305CD8" />
            </linearGradient>

            <linearGradient
              id="paint4_linear_64746_3149"
              x1="250"
              y1="46.5"
              x2="300.818"
              y2="94.1238"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#305CD8" />
              <stop offset="0.881288" stopColor="#C7B0FE" stopOpacity="0" />
            </linearGradient>

            <path
              id="stroke0_64746_3149"
              d="M97.5 49.4434C99.047 48.5502 100.953 48.5502 102.5 49.4434L123.481 61.5566C125.028 62.4498 125.981 64.1004 125.981 65.8868V90.1133C125.981 91.8996 125.028 93.5502 123.481 94.4434L102.5 106.557C100.953 107.45 99.047 107.45 97.5 106.557L76.5192 94.4434C74.9722 93.5502 74.0192 91.8996 74.0192 90.1133V65.8868C74.0192 64.1004 74.9722 62.4498 76.5192 61.5566L97.5 49.4434Z"
            />
            <path
              id="stroke2_64746_3149"
              d="M153.5 49.4434C155.047 48.5502 156.953 48.5502 158.5 49.4434L179.481 61.5566C181.028 62.4498 181.981 64.1004 181.981 65.8868V90.1133C181.981 91.8996 181.028 93.5502 179.481 94.4434L158.5 106.557C156.953 107.45 155.047 107.45 153.5 106.557L132.519 94.4434C130.972 93.5502 130.019 91.8996 130.019 90.1133V65.8868C130.019 64.1004 130.972 62.4498 132.519 61.5566L153.5 49.4434Z"
            />
            <path
              id="stroke4_64746_3149"
              d="M209.5 49.4434C211.047 48.5502 212.953 48.5502 214.5 49.4434L235.481 61.5566C237.028 62.4498 237.981 64.1004 237.981 65.8868V90.1133C237.981 91.8996 237.028 93.5502 235.481 94.4434L214.5 106.557C212.953 107.45 211.047 107.45 209.5 106.557L188.519 94.4434C186.972 93.5502 186.019 91.8996 186.019 90.1133V65.8868C186.019 64.1004 186.972 62.4498 188.519 61.5566L209.5 49.4434Z"
            />
            <path
              id="stroke6_64746_3149"
              d="M265.5 49.4434C267.047 48.5502 268.953 48.5502 270.5 49.4434L291.481 61.5566C293.028 62.4498 293.981 64.1004 293.981 65.8868V90.1133C293.981 91.8996 293.028 93.5502 291.481 94.4434L270.5 106.557C268.953 107.45 267.047 107.45 265.5 106.557L244.519 94.4434C242.972 93.5502 242.019 91.8996 242.019 90.1133V65.8868C242.019 64.1004 242.972 62.4498 244.519 61.5566L265.5 49.4434Z"
            />
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default HeroAwardsBadge;
