import React from "react";

export type IconType =
  | "find"
  | "blog"
  | "ads"
  | "email"
  | "ad"
  | "chart"
  | "funnel"
  | "shield"
  | "network"
  | "automation";

interface ProcessCardIconProps {
  iconType: IconType;
}

/**
 * ProcessCardIcon Component
 * 
 * Pixel-perfect golden yellow vector icon inside 80x80 frosted rounded box matching Figma:
 * - Box: 80px x 80px, rounded 8px, background rgba(255, 255, 255, 0.15)
 * - Vector Fill: #EAD53F
 * - 50px x 50px icon bounds
 */
export const ProcessCardIcon: React.FC<ProcessCardIconProps> = ({ iconType }) => {
  const renderSvgContent = () => {
    switch (iconType) {
      case "find":
        // Search & SEO Growth Icon
        return (
          <>
            <path
              d="M41.337 7.80141C38.6719 8.45473 35.9375 9.02114 33.5196 9.64223C31.9248 10.0426 31.7012 12.5885 33.0596 13.4987C33.3887 13.7125 33.7256 13.9235 34.0664 14.1334L26.5469 21.653C26.4419 21.7576 26.2997 21.8163 26.1514 21.8163C26.0032 21.8163 25.8609 21.7576 25.7559 21.653L21.9629 17.86C20.9781 16.877 19.6435 16.3249 18.252 16.3249C16.8605 16.3249 15.5259 16.877 14.5411 17.86L9.8184 22.5827C9.3781 23.0222 9.13043 23.6186 9.12988 24.2407C9.12961 24.5488 9.19002 24.8539 9.30765 25.1386C9.42528 25.4233 9.59784 25.682 9.81547 25.9C10.0331 26.1181 10.2915 26.2911 10.576 26.4092C10.8605 26.5273 11.1655 26.5883 11.4736 26.5886C12.0957 26.5891 12.6926 26.3425 13.1329 25.903L17.8555 21.1793C17.9075 21.1273 17.9692 21.086 18.0372 21.0578C18.1051 21.0296 18.1779 21.0151 18.2515 21.0151C18.3251 21.0151 18.3979 21.0296 18.4659 21.0578C18.5338 21.086 18.5955 21.1273 18.6475 21.1793L22.4405 24.9723C23.4252 25.9556 24.7599 26.5078 26.1514 26.5078C27.543 26.5078 28.8776 25.9556 29.8623 24.9723L37.3819 17.4528C37.5928 17.7936 37.8037 18.1305 38.0176 18.4596C38.9278 19.819 41.4727 19.5954 41.8731 18.0006C42.4942 15.5856 43.0606 12.8483 43.7139 10.1832C44.086 8.65883 42.8565 7.42934 41.337 7.80141Z"
              fill="#EAD53F"
            />
            <path
              d="M49.3789 41.9258L49.29 41.8057C47.458 39.6846 45.207 38.1309 43.0303 36.6299C42.1416 36.0166 40.5625 35.0283 39.4453 34.2334C42.038 30.5724 43.4268 26.1951 43.4189 21.709C43.4189 21.3594 43.4092 21.0108 43.3936 20.6641C43.1451 20.9152 42.8682 21.1365 42.5684 21.3233C41.7536 21.825 40.8142 22.0876 39.8574 22.0811C39.1335 22.0837 38.417 21.935 37.7539 21.6445V21.709C37.751 25.2829 36.5542 28.7534 34.3536 31.5694C32.1529 34.3854 29.0745 36.3854 25.6072 37.2519C22.1399 38.1184 18.4825 37.8017 15.2159 36.352C11.9492 34.9024 9.26043 32.4029 7.57663 29.2505C5.89282 26.0981 5.31048 22.4735 5.92207 18.9523C6.53366 15.4311 8.30412 12.2152 10.9523 9.81518C13.6005 7.41519 16.9746 5.96874 20.5388 5.70552C24.103 5.4423 27.653 6.3774 30.625 8.36232C31.2076 7.68975 31.9828 7.21248 32.8457 6.99513C34.0967 6.67385 35.3936 6.37502 36.7578 6.06349C32.7178 2.16699 27.3218 -0.00716912 21.709 1.7761e-05C9.71973 1.7761e-05 0 9.71974 0 21.709C0 33.6983 9.71973 43.419 21.709 43.419C26.1895 43.4261 30.5615 42.0402 34.2197 39.4531C35.0156 40.5703 36.0029 42.1465 36.6172 43.0352C38.1221 45.2149 39.6777 47.4609 41.7969 49.291L41.917 49.3789C42.5928 49.7921 43.371 50.0073 44.1631 50C45.3604 49.9963 46.5138 49.5489 47.4004 48.7442L48.7109 47.4356L48.7422 47.4043C50.1377 45.877 50.4053 43.5723 49.3789 41.9258Z"
              fill="#EAD53F"
            />
          </>
        );

      case "blog":
        // Content Creation & Pen Icon
        return (
          <>
            <path
              d="M37.1125 39.075L31.8094 40.9563C31.4484 41.0844 31.0469 40.9937 30.7766 40.7234C30.5063 40.4531 30.4156 40.0516 30.5438 39.6906L32.425 34.3875C32.4359 34.3578 32.4516 34.3313 32.475 34.3094L46.5047 20.2781C47.1969 19.5859 48.3203 19.5859 49.0125 20.2781L51.2219 22.4875C51.9141 23.1797 51.9141 24.3031 51.2219 24.9953L37.1906 39.025C37.1688 39.0484 37.1422 39.0641 37.1125 39.075Z"
              fill="#EAD53F"
            />
            <path
              d="M10 12C10 9.79086 11.7909 8 14 8H34C36.2091 8 38 9.79086 38 12V18H34V12H14V38H28V42H14C11.7909 42 10 40.2091 10 38V12Z"
              fill="#EAD53F"
            />
            <path
              d="M18 18H28V22H18V18ZM18 26H26V30H18V26Z"
              fill="#EAD53F"
            />
          </>
        );

      case "ads":
        // Megaphone & Social Engagement
        return (
          <>
            <path
              d="M7.084 8.6693C7.084 7.5187 8.0167 6.5859 9.1673 6.5859H40.834C41.9846 6.5859 42.9173 7.5187 42.9173 8.6693V32.0026C42.9173 33.1532 41.9846 34.0859 40.834 34.0859H32.084V40.3359C32.084 41.1443 31.6163 41.8797 30.8844 42.2226C30.1523 42.5655 29.2879 42.4539 28.6669 41.9364L19.2464 34.0859H9.1673C8.0167 34.0859 7.084 33.1532 7.084 32.0026V8.6693Z"
              fill="#EAD53F"
            />
            <circle cx="17" cy="20" r="3" fill="#305CD8" />
            <circle cx="25" cy="20" r="3" fill="#305CD8" />
            <circle cx="33" cy="20" r="3" fill="#305CD8" />
          </>
        );

      case "email":
        // Email & Retention Marketing
        return (
          <>
            <path
              d="M41.2769 8.2227H6.9082L24.045 19.6472L41.2769 8.2227Z"
              fill="#EAD53F"
            />
            <path
              d="M33.2675 28.337L43.1834 23.4191V10.4711L24.8524 22.6244C24.3624 22.9493 23.723 22.9507 23.2304 22.6223L5 10.4688V36.0519C5 36.8604 5.6562 37.5167 6.4648 37.5167H30V34H11V16.8L24 25.4L37 16.8V22H41V10.5L33.2675 28.337Z"
              fill="#EAD53F"
            />
          </>
        );

      case "ad":
        // Paid Advertising / Target Ads
        return (
          <>
            <rect x="8" y="10" width="34" height="26" rx="4" stroke="#EAD53F" strokeWidth="3" fill="none" />
            <path d="M15 23H23M19 19V27" stroke="#EAD53F" strokeWidth="3" strokeLinecap="round" />
            <path d="M28 20L35 27M35 20L28 27" stroke="#EAD53F" strokeWidth="2.5" strokeLinecap="round" />
          </>
        );

      case "chart":
        // Analytics & Growth Performance
        return (
          <>
            <path
              d="M25 4C13.4 4 4 13.4 4 25C4 36.6 13.4 46 25 46C36.6 46 46 36.6 46 25H25V4Z"
              fill="#EAD53F"
            />
            <path
              d="M29 4.3V21H45.7C44.8 11.8 38.2 5.2 29 4.3Z"
              fill="#EAD53F"
              opacity="0.8"
            />
          </>
        );

      case "funnel":
        // CRO Conversion Funnel
        return (
          <path
            d="M6 10H44L30 26V40L20 44V26L6 10Z"
            fill="#EAD53F"
          />
        );

      case "shield":
        // Brand Trust & Reviews
        return (
          <>
            <path
              d="M25 6L8 13V24C8 34.5 15.2 44.3 25 47C34.8 44.3 42 34.5 42 24V13L25 6Z"
              fill="#EAD53F"
            />
            <path
              d="M20 25L24 29L31 20"
              stroke="#305CD8"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case "network":
        // Influencer & Outreach
        return (
          <>
            <circle cx="25" cy="14" r="6" fill="#EAD53F" />
            <circle cx="12" cy="36" r="5" fill="#EAD53F" />
            <circle cx="38" cy="36" r="5" fill="#EAD53F" />
            <path d="M22 19L14 31M28 19L36 31" stroke="#EAD53F" strokeWidth="3" />
          </>
        );

      case "automation":
      default:
        // Automation & Continuous Growth
        return (
          <>
            <path
              d="M25 15C19.5 15 15 19.5 15 25C15 30.5 19.5 35 25 35C30.5 35 35 30.5 35 25"
              stroke="#EAD53F"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <polyline points="33,18 36,25 29,25" fill="#EAD53F" />
            <circle cx="25" cy="25" r="4" fill="#EAD53F" />
          </>
        );
    }
  };

  return (
    <div className="relative flex items-center justify-center w-[72px] sm:w-[80px] h-[72px] sm:h-[80px] rounded-[8px] bg-white/15 flex-shrink-0 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
      <svg
        width="46"
        height="46"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[42px] sm:w-[48px] h-[42px] sm:h-[48px] select-none"
      >
        {renderSvgContent()}
      </svg>
    </div>
  );
};

export default ProcessCardIcon;
