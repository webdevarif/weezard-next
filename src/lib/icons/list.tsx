"use client";

import { IconProps } from "./types";

/**
 * Helper function to get size props
 */
const getSizeProps = (size?: number | string) => {
  if (size === undefined) return { width: 20, height: 20 };
  const sizeValue = typeof size === "number" ? size : size;
  return { width: sizeValue, height: sizeValue };
};

/**
 * Facebook Icon
 */
export const CheckIcon = ({
  size,
  color = "currentColor",
  secondaryColor = "#fff",
  className = "",
  ...props
}: IconProps) => {
  const sizeProps = getSizeProps(size);
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...sizeProps}
      {...props}
    >
      <g clipPath="url(#clip0_62818_1818)">
      <path d="M10 0C4.48578 0 0 4.48578 0 10C0 15.5142 4.48578 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48578 15.5142 0 10 0Z" fill={color}/>
      <path d="M15.0673 7.87976L9.65054 13.2963C9.48804 13.4588 9.27472 13.5406 9.0614 13.5406C8.84808 13.5406 8.63477 13.4588 8.47226 13.2963L5.76398 10.588C5.43805 10.2623 5.43805 9.73553 5.76398 9.40976C6.08975 9.08383 6.61633 9.08383 6.94226 9.40976L9.0614 11.5289L13.889 6.70148C14.2148 6.37555 14.7413 6.37555 15.0673 6.70148C15.393 7.02725 15.393 7.55383 15.0673 7.87976Z" fill={secondaryColor}/>
      </g>
      <defs>
      <clipPath id="clip0_62818_1818">
      <rect width="20" height="20" fill={secondaryColor}/>
      </clipPath>
      </defs>
    </svg>
  );
};

/**
 * Facebook Icon
 */
export const ListStarShapeIcon = ({
  size,
  color = "currentColor",
  className = "",
  ...props
}: IconProps) => {
  const sizeProps = getSizeProps(size);
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...sizeProps}
      {...props}
    >
        <mask id="mask0_68297_36933" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
        <path fillRule="evenodd" clipRule="evenodd" d="M10.8 0L7.2 0L7.2 4.65441L3.90884 1.36325L1.36325 3.90883L4.65442 7.2L0 7.2L0 10.8H4.65441L1.36325 14.0911L3.90884 16.6368L7.2 13.3456L7.2 18H10.8L10.8 13.3456L14.0912 16.6368L16.6368 14.0912L13.3456 10.8L18 10.8V7.2L13.3456 7.2L16.6368 3.90883L14.0912 1.36324L10.8 4.65441V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_68297_36933)">
        <g clipPath="url(#clip0_68297_36933)">
        <path d="M18 0H0V18H18V0Z" fill="white"/>
        <path d="M18 0H0V18H18V0Z" fill="url(#paint0_linear_68297_36933)"/>
        <g filter="url(#filter0_f_68297_36933)">
        <path d="M20.7905 10.2617L0.810547 10.2617L0.810547 20.7017H20.7905V10.2617Z" fill="#8F5BFF"/>
        <ellipse cx="4.77148" cy="0.0205794" rx="10.0741" ry="6.91838" transform="rotate(-15 4.77148 0.0205794)" fill="#00F0FF"/>
        </g>
        </g>
        </g>
        <defs>
        <filter id="filter0_f_68297_36933" x="-65.125" y="-67.1562" width="145.916" height="147.859" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_68297_36933"/>
        </filter>
        <linearGradient id="paint0_linear_68297_36933" x1="33.9494" y1="16.2342" x2="-0.317639" y2="14.4156" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C7B0FE"/>
        <stop offset="1" stopColor="#305CD8"/>
        </linearGradient>
        <clipPath id="clip0_68297_36933">
        <rect width="18" height="18" fill="white"/>
        </clipPath>
        </defs>
    </svg>
  );
};
