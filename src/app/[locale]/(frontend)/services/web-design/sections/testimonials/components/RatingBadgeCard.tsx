import React from "react";
import Image from "next/image";
import { RATING_STAT } from "../data";

/**
 * RatingBadgeCard Component
 * 
 * The royal blue card on the left side of the testimonials carousel:
 * - Solid royal blue fill: #305CD8
 * - 3D Golden Stars Speech Bubble image
 * - Prominent "4.9" score in bold DM Sans
 * - "Trusted by 500+ Businesses" tagline
 */

export const RatingBadgeCard: React.FC = () => {
  return (
    <div className="w-full lg:w-[290px] xl:w-[300px] min-h-[332px] bg-[#305CD8] rounded-2xl p-7 sm:p-8 flex flex-col justify-between text-white shadow-sm flex-shrink-0 relative overflow-hidden">
      {/* 3D Gold Stars Bubble Graphic */}
      <div className="relative w-[118px] h-[114px]">
        <Image
          src={RATING_STAT.image}
          alt="4.9 Star Rating Badge"
          fill
          sizes="120px"
          className="object-contain object-left"
          priority
        />
      </div>

      {/* Score & Caption */}
      <div className="mt-8">
        <div className="text-5xl sm:text-6xl font-dm-sans font-bold leading-none tracking-tight">
          {RATING_STAT.score}
        </div>
        <p className="mt-3 text-white/95 text-base sm:text-[17px] font-dm-sans font-medium leading-snug max-w-[170px]">
          {RATING_STAT.label}
        </p>
      </div>
    </div>
  );
};

export default RatingBadgeCard;

