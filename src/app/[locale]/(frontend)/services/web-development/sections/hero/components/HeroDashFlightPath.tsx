"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * HeroDashFlightPath Component
 *
 * Implements:
 * 1. Paper airplane flying smoothly ONCE from left to right directly along the SVG trajectory path.
 * 2. Trajectory dashed line reveals strictly behind the airplane using an identical pathLength SVG mask.
 *    The dashes are preserved and flow continuously once revealed.
 * 3. Once arrived at destination (1420, 250), the plane settles and hovers naturally.
 */
export const HeroDashFlightPath: React.FC = () => {
  // Cubic Bezier curve fitting Vector 79's exact segments (viewBox 0 0 1920 800)
  // Terminating at (1420, 250) for a comfortable gap from right illustrations
  const trajectoryCurve =
    "M 70 480 C 360 210, 680 75, 946 75 C 1170 75, 1330 150, 1420 250";

  // State to switch from single entrance flight to infinite gentle hovering at endpoint
  const [hasLanded, setHasLanded] = useState(false);

  // Common duration and easing to keep airplane and mask trail in 100% lockstep
  const flightDuration = 2.4;
  const flightEase = "easeInOut";

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 hidden md:block select-none">
      <svg
        viewBox="0 0 1920 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover select-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient
            id="flightDashGrad"
            x1="-99.85"
            y1="231.87"
            x2="1368.44"
            y2="286.27"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#903DD1" stopOpacity="0.35" />
            <stop offset="0.6" stopColor="#305CD8" stopOpacity="0.85" />
            <stop offset="1" stopColor="#0067FF" stopOpacity="1" />
          </linearGradient>

          {/* Paper airplane gradients */}
          <linearGradient
            id="planeGrad0"
            x1="14.2521"
            y1="29.1164"
            x2="28.2636"
            y2="40.0341"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E7ECFF" />
            <stop offset="1" stopColor="#C2D5FF" />
          </linearGradient>
          <linearGradient
            id="planeGrad1"
            x1="107.772"
            y1="65.8306"
            x2="29.5986"
            y2="39.3118"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C7B0FE" />
            <stop offset="1" stopColor="#305CD8" />
          </linearGradient>
          <linearGradient
            id="planeGrad2"
            x1="74.6509"
            y1="51.1939"
            x2="-12.0329"
            y2="14.526"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C7B0FE" />
            <stop offset="1" stopColor="#305CD8" />
          </linearGradient>

          {/* SVG Mask: Solid white stroke animating pathLength exactly behind the plane */}
          <mask id="trajectoryTrailMask" maskUnits="userSpaceOnUse">
            <motion.path
              d={trajectoryCurve}
              stroke="#FFFFFF"
              strokeWidth="30"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: flightDuration,
                ease: flightEase,
              }}
            />
          </mask>
        </defs>

        {/* Dashed trajectory: masked so it only reveals strictly behind the airplane */}
        <g mask="url(#trajectoryTrailMask)">
          <motion.path
            d={trajectoryCurve}
            stroke="url(#flightDashGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="10 12"
            fill="none"
            initial={{ strokeDashoffset: 0 }}
            animate={{
              strokeDashoffset: [0, -220],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </g>

        {/* Paper Airplane: flies along the exact curve in lockstep with the mask */}
        <motion.g
          initial={{
            x: 70,
            y: 480,
            rotate: -42,
            scale: 0.65,
            opacity: 0,
          }}
          animate={
            hasLanded
              ? {
                  x: 1420,
                  y: [250, 242, 253, 250],
                  rotate: [18, 21, 16, 18],
                  scale: 0.95,
                  opacity: 1,
                }
              : {
                  x: [70, 360, 680, 946, 1170, 1420],
                  y: [480, 210, 100, 75, 115, 250],
                  rotate: [-42, -32, -12, 0, 12, 18],
                  scale: [0.65, 0.78, 0.88, 0.95, 0.95, 0.95],
                  opacity: [0, 1, 1, 1, 1, 1],
                }
          }
          transition={
            hasLanded
              ? {
                  y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                }
              : {
                  duration: flightDuration,
                  ease: flightEase,
                  times: [0, 0.22, 0.45, 0.65, 0.85, 1],
                }
          }
          onAnimationComplete={() => {
            if (!hasLanded) setHasLanded(true);
          }}
        >
          {/* Centering the 92x96 airplane icon at its anchor point */}
          <g transform="translate(-46, -48)">
            <path
              d="M26.1929 42.5261C26.1043 42.6716 25.9289 42.7332 25.7715 42.6706L9.25184 36.0702C9.22211 36.064 9.19533 36.0444 9.16889 36.0218C9.07922 35.9513 9.0308 35.8366 9.0451 35.7181C9.05996 35.5662 9.17937 35.4454 9.32614 35.4232L31.7119 32.0621C31.8443 32.046 31.972 32.1023 32.0441 32.2089C32.1162 32.3154 32.1233 32.4605 32.0552 32.5702L26.1929 42.5261Z"
              fill="url(#planeGrad0)"
            />
            <path
              d="M34.2796 6.9885L35.6613 25.1123L17.4304 56.0747L17.7057 56.5801L91.2453 60.865C91.3858 60.8726 91.5161 60.7924 91.5724 60.6647C91.6324 60.5314 91.5988 60.3773 91.4954 60.2795L34.848 6.72003L34.2796 6.9885Z"
              fill="url(#planeGrad1)"
            />
            <path
              d="M74.7145 50.6242C74.632 50.784 74.4476 50.8446 74.2845 50.7784L31.7205 32.7443L9.43015 36.0945C9.33474 36.1054 9.24488 36.079 9.1706 36.0208C9.1174 35.9786 9.07081 35.9174 9.05155 35.8423C9.00696 35.678 9.09252 35.5048 9.25284 35.4416L35.8846 24.8803C35.9862 24.8396 36.1034 24.8522 36.196 24.9093L74.6007 50.1864C74.7538 50.288 74.7958 50.4764 74.7129 50.6255L74.7145 50.6242Z"
              fill="url(#planeGrad2)"
            />
          </g>
        </motion.g>
      </svg>
    </div>
  );
};
