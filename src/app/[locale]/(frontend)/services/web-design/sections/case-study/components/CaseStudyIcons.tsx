import React from "react";

/**
 * Case Study SVG Icons
 * 
 * Pixel-perfect SVG vector icons matching the Figma design:
 * - CalendarIcon: Calendar outline icon next to date
 * - ArrowLeftIcon: Previous navigation arrow
 * - ArrowRightIcon: Next navigation arrow
 * - ExternalArrowIcon: Exact 12x12 diagonal arrow from Figma (M1275 68L1287 56...)
 */

interface IconProps {
  className?: string;
  size?: number;
}

export const CalendarIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="578 202 22 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-hidden="true"
  >
    <path
      d="M598 212H580M593 204V208M585 204V208M584.8 224H593.2C594.88 224 595.72 224 596.362 223.673C596.926 223.385 597.385 222.926 597.673 222.362C598 221.72 598 220.88 598 219.2V210.8C598 209.12 598 208.28 597.673 207.638C597.385 207.074 596.926 206.615 596.362 206.327C595.72 206 594.88 206 593.2 206H584.8C583.12 206 582.28 206 581.638 206.327C581.074 206.615 580.615 207.074 580.327 207.638C580 208.28 580 209.12 580 210.8V219.2C580 220.88 580 221.72 580.327 222.362C580.615 222.926 581.074 223.385 581.638 223.673C582.28 224 583.12 224 584.8 224Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-hidden="true"
  >
    <path
      d="M19 12H5M12 19L5 12L12 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-hidden="true"
  >
    <path
      d="M5 12H19M12 5L19 12L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ExternalArrowIcon: React.FC<IconProps> = ({ className = "w-3.5 h-3.5", size }) => (
  <svg
    viewBox="1274 55 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-hidden="true"
  >
    <path
      d="M1275 68L1287 56M1287 64V56H1279"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
