import React from "react";
import { Link } from "@/lib/i18n/routing";
import { ProcessCardIcon, IconType } from "./ProcessCardIcon";

export interface ProcessItemData {
  id: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  href?: string;
  iconType: IconType;
}

interface ProcessCardProps {
  item: ProcessItemData;
  isActive: boolean;
  onActivate: () => void;
}

/**
 * ProcessCard Component
 * 
 * Strict Figma Pixel-Perfect Sizing:
 * - Inactive Card (Frame 1686558334 / Frame 1686558335):
 *   - Height: 140px fixed
 *   - Background: #305CD8 with opacity: 0.5
 *   - Title: font-family: 'DM Sans'; font-weight: 700; font-size: 24px; line-height: 32px;
 *   - Subtitle: font-family: 'Manrope'; font-weight: 400; font-size: 18px; line-height: 27px;
 * - Active Card (Frame 1686558240):
 *   - Height: 210px fixed
 *   - Background: #305CD8 with opacity: 1.0
 *   - Title: font-family: 'DM Sans'; font-weight: 600; font-size: 32px; line-height: 45px;
 *   - Subtitle: font-family: 'Manrope'; font-weight: 400; font-size: 24px; line-height: 36px;
 * - Learn More Button (Frame 1686558335):
 *   - Width: 133px; Height: 43px; border-radius: 999px;
 *   - Background: rgba(255, 255, 255, 0.1);
 *   - Font: font-family: 'Manrope'; font-size: 18px; line-height: 27px; color: #FFFFFF;
 */
export const ProcessCard: React.FC<ProcessCardProps> = ({
  item,
  isActive,
  onActivate,
}) => {
  return (
    <div
      onClick={onActivate}
      className={`group relative flex flex-col justify-center rounded-[12px] bg-[#305CD8] transition-all duration-300 cursor-pointer w-full max-w-[672px] lg:w-[672px] flex-shrink-0 select-none ${
        isActive
          ? "opacity-100 min-h-[170px] sm:min-h-[210px] h-auto px-5 sm:px-[30px] py-6 sm:py-[32px] shadow-[0px_20px_40px_rgba(0,0,0,0.2)]"
          : "opacity-50 hover:opacity-85 min-h-[120px] sm:min-h-[140px] h-auto px-5 sm:px-[30px] py-4 sm:py-[24px]"
      }`}
    >
      <div className="flex flex-row items-center justify-between gap-4 sm:gap-6 w-full">
        {/* Left: 80x80 Icon Box + Multiline Typography */}
        <div className="flex flex-row items-center gap-4 sm:gap-[26px] flex-grow min-w-0">
          <div className="flex-shrink-0 self-center">
            <ProcessCardIcon iconType={item.iconType} />
          </div>

          <div className="flex flex-col justify-center gap-1 sm:gap-2 flex-grow min-w-0">
            {/* Title: Active -> 32px / 45px / 600 (semibold); Normal -> 24px / 32px / 700 (bold) */}
            <h3
              className={`font-dm-sans text-white tracking-normal break-words transition-all duration-300 ${
                isActive
                  ? "text-[22px] sm:text-[32px] leading-[30px] sm:leading-[45px] font-semibold"
                  : "text-[18px] sm:text-[24px] leading-[26px] sm:leading-[32px] font-bold"
              }`}
            >
              {item.title}
            </h3>

            {/* Subtitle: Active -> 24px / 36px / 400 (regular); Normal -> 18px / 27px / 400 (regular) */}
            <p
              className={`font-manrope text-white font-normal break-words transition-all duration-300 ${
                isActive
                  ? "text-[16px] sm:text-[24px] leading-[24px] sm:leading-[36px]"
                  : "text-[14px] sm:text-[18px] leading-[20px] sm:leading-[27px]"
              }`}
            >
              {item.subtitle}
            </p>
          </div>
        </div>

        {/* Right: Learn More Pill Button (133px x 43px) */}
        <div className="flex-shrink-0 self-center">
          <Link
            href={item.href || "/contact-us"}
            className="inline-flex items-center justify-center w-[110px] sm:w-[133px] h-[38px] sm:h-[43px] rounded-full bg-white/10 hover:bg-white text-white hover:text-[#092856] font-manrope font-normal text-sm sm:text-[18px] leading-[27px] transition-all duration-300 shadow-sm"
          >
            <span>{item.ctaText || "Learn More"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
