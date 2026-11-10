/**
 * FeatureMobileCard Component
 *
 * Renders an atomic mobile-sized feature card matching Figma tokens 100%:
 * - Frame 1686558297: width 320px, height 250px, border-radius 8px, padding 16px, gap 10px
 * - Border: 1px linear-gradient (#305CD8 to #903DD1) matching the Figma image
 * - Frame 1686558298: flex-col, items-start, gap 12px, width 288px
 * - 3D Icon: height 60px
 * - Frame 1686557958: flex-col, gap 6px, width 288px
 * - Title: Manrope Bold, font-size 18px, line-height 27px, letter-spacing -0.01em, #092856
 * - Description: Manrope Regular, font-size 16px, line-height 27px, #495162
 */

"use client";

import React from "react";
import Image from "next/image";

export interface FeatureMobileCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const FeatureMobileCard: React.FC<FeatureMobileCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="w-[320px] h-[250px] flex-shrink-0 snap-start rounded-[8px] p-[1px] bg-gradient-to-r from-[#305CD8] to-[#903DD1] select-none box-border">
      {/* Inner Card Frame 1686558297 */}
      <div className="w-full h-full bg-white rounded-[7px] p-[16px] flex flex-col items-start gap-[10px] box-border">
        {/* Frame 1686558298: Icon + Content with 12px gap */}
        <div className="w-[288px] flex flex-col items-start gap-[12px]">
          {/* 3D Icon: exact 60px height */}
          <div className="relative h-[60px] w-auto flex-none">
            <Image
              src={icon}
              alt={title}
              width={74}
              height={60}
              className="h-[60px] w-auto object-contain"
              priority={false}
            />
          </div>

          {/* Frame 1686557958: Title + Description with 6px gap */}
          <div className="w-[288px] flex flex-col items-start gap-[6px]">
            <h3 className="w-[288px] font-manrope font-bold text-[18px] leading-[27px] tracking-[-0.01em] text-[#092856]">
              {title}
            </h3>
            <p className="w-[288px] font-manrope font-normal text-[16px] leading-[27px] text-[#495162]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureMobileCard;
