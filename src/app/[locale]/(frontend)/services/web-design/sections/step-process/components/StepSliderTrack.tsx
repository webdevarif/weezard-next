/**
 * StepSliderTrack Component
 * 
 * Bottom interactive progress indicator track matching Figma specifications:
 * - Base track: height 10px, rounded-full, fill #DBDBDB
 * - Active progress indicator: gradient from #305CD8 to #903DD1
 * - Clickable track allows jumping directly to any step along the timeline
 */

"use client";

import React from "react";

interface StepSliderTrackProps {
  progressPercentage: number;
  onSeek?: (percentage: number) => void;
}

export const StepSliderTrack: React.FC<StepSliderTrackProps> = ({
  progressPercentage,
  onSeek,
}) => {
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onSeek) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newPercentage = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    onSeek(newPercentage);
  };

  return (
    <div className="w-full mt-12 sm:mt-14 max-w-[1320px] mx-auto select-none">
      <div
        onClick={handleTrackClick}
        className="relative w-full h-[10px] rounded-full bg-[#DBDBDB] cursor-pointer overflow-hidden transition-all duration-200 hover:h-[12px]"
        role="progressbar"
        aria-valuenow={Math.round(progressPercentage)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* Active Gradient Indicator (#305CD8 to #903DD1) */}
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#305CD8] via-[#5B4AE0] to-[#903DD1] transition-all duration-150 ease-out shadow-sm"
          style={{ width: `${Math.max(12, progressPercentage)}%` }}
        />
      </div>
    </div>
  );
};

export default StepSliderTrack;

