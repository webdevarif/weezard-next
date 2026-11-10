import React from "react";

export interface CardFrameProps {
  stepIndex: number; // 1 to 5
}

/**
 * Inline SVG Card Frame for Step 1 - Step 5
 * Renders base card background, 1.5px border, and tapered purple gradients synchronously with 0ms delay.
 */
export const CardFrame: React.FC<CardFrameProps> = ({ stepIndex }) => {
  const idPrefix = `cf_${stepIndex}`;

  return (
    <svg
      width="255"
      height="234"
      viewBox="0 0 255 234"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-fill pointer-events-none"
    >
      <defs>
        {/* Card White Gradient Base */}
        <linearGradient
          id={`${idPrefix}_bg`}
          x1="127.5"
          y1="0"
          x2="127.5"
          y2="234"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.95" />
        </linearGradient>

        {/* Top-Right Purple Border Accent Gradient */}
        <linearGradient
          id={`${idPrefix}_purple`}
          x1="207.34"
          y1="33.8"
          x2="254.29"
          y2="-12.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#903DD1" stopOpacity="0" />
          <stop offset="1" stopColor="#903DD1" />
        </linearGradient>

        {/* Left Vertical Purple Accent Gradient */}
        <linearGradient
          id={`${idPrefix}_left`}
          x1="0"
          y1="20"
          x2="0"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#903DD1" stopOpacity="0" />
          <stop offset="0.5" stopColor="#903DD1" stopOpacity="0.9" />
          <stop offset="1" stopColor="#903DD1" stopOpacity="0" />
        </linearGradient>

        {/* Clip Path for Card Inner Elements */}
        <clipPath id={`${idPrefix}_clip`}>
          <rect width="255" height="234" rx="12" fill="white" />
        </clipPath>
      </defs>

      {/* 1. Base Frosted Card Background */}
      <rect width="255" height="234" rx="12" fill={`url(#${idPrefix}_bg)`} />

      {/* 2. Inside Masked Details */}
      <g clipPath={`url(#${idPrefix}_clip)`}>
        {/* Left Edge Curved Purple Accent Sliver */}
        <path
          d="M0 35C1.8 70 2.5 105 2.5 125C2.5 145 1.8 175 0 205C0.8 175 1.2 145 1.2 125C1.2 105 0.8 70 0 35Z"
          fill={`url(#${idPrefix}_left)`}
        />
      </g>

      {/* 3. Base Card Border (1.5px #DFDFDF) */}
      <rect
        x="0.75"
        y="0.75"
        width="253.5"
        height="232.5"
        rx="11.25"
        stroke="#DFDFDF"
        strokeWidth="1.5"
      />

      {/* 4. Top-Right Corner Purple Gradient Accent Stroke */}
      <rect
        x="0.75"
        y="0.75"
        width="253.5"
        height="232.5"
        rx="11.25"
        stroke={`url(#${idPrefix}_purple)`}
        strokeWidth="2"
      />

      {/* 5. Left Vertical Purple Gradient Accent Line (exact tapered highlight) */}
      <path
        d="M1 30Q3.5 117 1 200"
        stroke={`url(#${idPrefix}_left)`}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
