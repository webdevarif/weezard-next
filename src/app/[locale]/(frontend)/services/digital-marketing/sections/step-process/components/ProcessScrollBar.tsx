import React from "react";

interface ProcessScrollBarProps {
  /**
   * Scroll percentage from 0 to 1
   */
  scrollProgress: number;
}

/**
 * ProcessScrollBar Component
 * 
 * Custom scrollbar matching Figma Rectangle 8997 & Rectangle 8998:
 * - Track: 12px width, rounded 99px, background #3967AA
 * - Thumb: 12px width, 120px height, rounded 99px, background #EAD53F
 * - Position translates smoothly according to scrollProgress
 */
export const ProcessScrollBar: React.FC<ProcessScrollBarProps> = ({
  scrollProgress,
}) => {
  // Container track height is approx 649px, thumb height is approx 120px
  // Max travel distance = 649px - 120px = 529px
  const maxTravel = 520;
  const thumbOffset = Math.min(Math.max(scrollProgress * maxTravel, 0), maxTravel);

  return (
    <div className="relative w-3 h-full max-h-[649px] rounded-full bg-[#3967AA] overflow-hidden flex-shrink-0 select-none">
      <div
        className="w-full h-[120px] rounded-full bg-[#EAD53F] shadow-sm transition-transform duration-150 ease-out"
        style={{
          transform: `translateY(${thumbOffset}px)`,
        }}
      />
    </div>
  );
};

export default ProcessScrollBar;
