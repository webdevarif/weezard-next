/**
 * MobileCardFrame Component
 *
 * Exact 100% Figma SVG background & border frame for the mobile Step Process card
 * extracted directly from Figma mobile export (viewBox="20 203.648 390 357.883"):
 * - Dimensions: 390px x 357.883px, rx = 18.3529px
 * - Vertical gradient fill: #FFFFFF (top) -> rgba(255, 255, 255, 0) (bottom)
 * - Inner border stroke (1.53px): #DFDFDF base + #903DD1 top-right corner accent gradient
 * - Masked left wave accent: #305CD8 -> #903DD1 -> #EAD53F at 0.5 opacity
 */

"use client";

import React from "react";

interface MobileCardFrameProps {
  stepIndex: number;
}

export const MobileCardFrame: React.FC<MobileCardFrameProps> = ({ stepIndex }) => {
  const uid = `mobile_step_${stepIndex}`;

  return (
    <svg
      viewBox="20 203.648 390 357.883"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full h-full pointer-events-none select-none block"
      aria-hidden="true"
    >
      {/* 1. Card Vertical Gradient Fill (White to Transparent) */}
      <use
         href={`#stroke0_${uid}`}
        fill={`url(#paint0_linear_${uid})`}
        shapeRendering="crispEdges"
      />

      {/* 2. Masked Inner Border: #DFDFDF Base + Purple Top-Right Corner Gradient */}
      <mask id={`stroke1_${uid}`} fill="white">
        <use href={`#stroke0_${uid}`} />
      </mask>
      <path
        d="M38.3529 561.531H391.647C401.783 561.531 410 553.314 410 543.178V222.001C410 211.865 401.783 203.648 391.647 203.648H38.3529C28.2169 203.648 20 211.865 20 222.001V543.178C20 553.314 28.2169 561.531 38.3529 561.531Z"
        strokeWidth="3.05882"
        stroke="#DFDFDF"
        shapeRendering="crispEdges"
        mask={`url(#stroke1_${uid})`}
      />
      <path
        d="M38.3529 561.531H391.647C401.783 561.531 410 553.314 410 543.178V222.001C410 211.865 401.783 203.648 391.647 203.648H38.3529C28.2169 203.648 20 211.865 20 222.001V543.178C20 553.314 28.2169 561.531 38.3529 561.531Z"
        strokeWidth="3.05882"
        stroke={`url(#paint1_linear_${uid})`}
        shapeRendering="crispEdges"
        mask={`url(#stroke1_${uid})`}
      />

      {/* 3. Masked Left Wave Blob Accent */}
      <mask
        id={`mask0_${uid}`}
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="20"
        y="203"
        width="390"
        height="359"
      >
        <path
          d="M20 222.001C20 211.865 28.2169 203.648 38.3529 203.648H391.647C401.783 203.648 410 211.865 410 222.001V543.178C410 553.314 401.783 561.531 391.647 561.531H38.3529C28.2169 561.531 20 553.314 20 543.178V222.001Z"
          fill="#092856"
        />
      </mask>
      <g mask={`url(#mask0_${uid})`}>
        <path
          opacity="0.5"
          d="M-443.216 88.1928C-411.855 44.7527 -340.813 59.2464 -287.652 60.8849C-234.175 62.4689 -198.407 52.196 -150.839 57.3681C-103.272 62.5402 -43.9049 83.1572 -10.4453 139.079C22.6973 195.055 30.2495 286.28 30.3925 381.866C30.2184 477.507 23.2692 577.399 -13.1254 642.782C-49.2029 708.11 -114.092 738.819 -170.686 711.556C-227.05 683.74 -274.889 597.397 -321.76 524.252C-368.315 451.052 -413.815 391.551 -440.366 311.308C-466.917 231.065 -474.663 131.134 -443.216 88.1928Z"
          fill={`url(#paint2_linear_${uid})`}
        />
      </g>

      <defs>
        <linearGradient
          id={`paint0_linear_${uid}`}
          x1="215"
          y1="203.648"
          x2="207.353"
          y2="561.531"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={`paint1_linear_${uid}`}
          x1="337.107"
          y1="255.395"
          x2="408.914"
          y2="184.67"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#903DD1" stopOpacity="0" />
          <stop offset="1" stopColor="#903DD1" />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_${uid}`}
          x1="35.2946"
          y1="715.237"
          x2="204.445"
          y2="51.4517"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#305CD8" />
          <stop offset="0.524038" stopColor="#903DD1" />
          <stop offset="1" stopColor="#EAD53F" />
        </linearGradient>
        <path
          id={`stroke0_${uid}`}
          d="M20 222.001C20 211.865 28.2169 203.648 38.3529 203.648H391.647C401.783 203.648 410 211.865 410 222.001V543.178C410 553.314 401.783 561.531 391.647 561.531H38.3529C28.2169 561.531 20 553.314 20 543.178V222.001Z"
        />
      </defs>
    </svg>
  );
};

export default MobileCardFrame;
