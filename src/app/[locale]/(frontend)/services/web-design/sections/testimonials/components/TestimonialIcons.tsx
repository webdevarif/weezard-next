import React from "react";

/**
 * Testimonial SVG Icons
 * 
 * Vector assets extracted from Figma Testmonial.txt:
 * - StarIcon: Filled or outlined golden star (#FF9900)
 * - QuoteIcon: Double quotation mark badge icon (#305CD8)
 * - ArrowLeftIcon: Previous slider arrow
 * - ArrowRightIcon: Next slider arrow
 * - ExternalArrowIcon: Diagonal arrow in "See More Reviews ↗" button
 */

interface IconProps {
  className?: string;
  size?: number;
}

export const StarIcon: React.FC<{ filled?: boolean; className?: string }> = ({
  filled = true,
  className = "w-5 h-5",
}) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill={filled ? "#FF9900" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 1L12.93 6.94L19.48 7.89L14.74 12.51L15.86 19.03L10 15.95L4.14 19.03L5.26 12.51L0.52 7.89L7.07 6.94L10 1Z"
        stroke="#FF9900"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const QuoteBadgeIcon: React.FC<{ className?: string }> = ({
  className = "w-14 h-14 flex-shrink-0",
}) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="56" height="56" rx="28" fill="#E1E9F8" />
      <path
        d="M42.8327 21.7166L42.7941 21.4585L42.7539 21.4677C42.4793 20.1911 41.8467 19.0179 40.9294 18.0838C40.012 17.1497 38.8473 16.4929 37.5701 16.1894C36.2929 15.8859 34.9553 15.9481 33.7122 16.3689C32.4691 16.7896 31.3712 17.5517 30.5456 18.5668C29.72 19.582 29.2004 20.8089 29.0469 22.1054C28.8934 23.4019 29.1123 24.7151 29.6783 25.8931C30.2443 27.0711 31.1343 28.0657 32.2452 28.7618C33.3561 29.458 34.6426 29.8272 35.9558 29.8267C36.3004 29.8267 36.6311 29.7745 36.9603 29.7269C36.8537 30.0833 36.7439 30.4459 36.5678 30.7716C36.3916 31.2447 36.1165 31.6549 35.843 32.0682C35.6143 32.5153 35.2109 32.8179 34.9142 33.2005C34.6036 33.5722 34.1801 33.8196 33.8448 34.1284C33.5156 34.451 33.0845 34.6123 32.7414 34.8397C32.3829 35.044 32.0707 35.2699 31.7369 35.3774L30.9039 35.7185L30.1714 36.0211L30.9194 39L31.842 38.7788C32.1371 38.705 32.4972 38.619 32.9067 38.5161C33.3255 38.4392 33.7722 38.2288 34.2698 38.0367C34.7597 37.817 35.3299 37.6711 35.8584 37.3193C36.39 36.9844 37.0036 36.7048 37.5444 36.2562C38.0683 35.7937 38.7004 35.3928 39.1671 34.8059C39.6771 34.2559 40.1809 33.6782 40.5719 33.0207C41.0246 32.3939 41.3322 31.7056 41.6567 31.025C41.9503 30.3445 42.1868 29.6485 42.3799 28.9725C42.7462 27.6175 42.91 26.3301 42.9734 25.2286C43.0259 24.1255 42.995 23.2083 42.9301 22.5447C42.9084 22.2675 42.8759 21.9913 42.8327 21.7166V21.7166ZM25.8335 21.7166L25.7949 21.4585L25.7547 21.4677C25.4801 20.1911 24.8475 19.0179 23.9301 18.0838C23.0128 17.1497 21.8481 16.4929 20.5709 16.1894C19.2937 15.8859 17.9561 15.9481 16.713 16.3689C15.4699 16.7896 14.372 17.5517 13.5464 18.5668C12.7207 19.582 12.2011 20.8089 12.0477 22.1054C11.8942 23.4019 12.1131 24.7151 12.6791 25.8931C13.2451 27.0711 14.1351 28.0657 15.246 28.7618C16.3569 29.458 17.6434 29.8272 18.9566 29.8267C19.3012 29.8267 19.6319 29.7745 19.9611 29.7269C19.8544 30.0833 19.7447 30.4459 19.5685 30.7716C19.3924 31.2447 19.1173 31.6549 18.8438 32.0682C18.615 32.5153 18.2117 32.8179 17.915 33.2005C17.6044 33.5722 17.1809 33.8196 16.8456 34.1284C16.5164 34.451 16.0852 34.6123 15.7422 34.8397C15.3836 35.044 15.0715 35.2699 14.7377 35.3774L13.9047 35.7185C13.4395 35.9074 13.1737 36.018 13.1737 36.018L13.9217 38.9969L14.8443 38.7757C15.1395 38.702 15.4995 38.6159 15.9091 38.513C16.3279 38.4362 16.7745 38.2257 17.2721 38.0337C17.762 37.814 18.3322 37.668 18.8608 37.3162C19.3924 36.9813 20.0059 36.7017 20.5468 36.2531C21.0707 35.7907 21.7027 35.3897 22.1694 34.8028C22.6794 34.2528 23.1832 33.6752 23.5742 33.0176C24.027 32.3908 24.3345 31.7026 24.659 31.022C24.9527 30.3414 25.1891 29.6454 25.3823 28.9695C25.7485 27.6145 25.9123 26.327 25.9757 25.2255C26.0282 24.1224 25.9973 23.2053 25.9324 22.5416C25.9094 22.2655 25.8764 21.9903 25.8335 21.7166V21.7166Z"
        fill="#305CD8"
      />
    </svg>
  );
};

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

export const ExternalArrowIcon: React.FC<IconProps> = ({ className = "w-3.5 h-3.5" }) => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M1 13L13 1M13 9V1H5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

