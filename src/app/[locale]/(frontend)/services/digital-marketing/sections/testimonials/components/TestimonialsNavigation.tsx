import React from "react";
import { SliderArrowButton } from "@/app/[locale]/components/ui/slider-arrow-button";

interface TestimonialsNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  canPrev?: boolean;
  canNext?: boolean;
  currentPage?: number;
  totalPages?: number;
}

/**
 * TestimonialsNavigation Component
 * 
 * Strict Figma Pixel-Perfect Navigation Buttons:
 * - Centered at the bottom with gap 12px
 * - Reuses existing SliderArrowButton component (@/app/[locale]/components/ui/slider-arrow-button)
 * - 50x50px circular buttons
 * - Normal: thin border (#495162, 50% opacity)
 * - Hover / Active: Solid #092856 with white arrow
 */
export const TestimonialsNavigation: React.FC<TestimonialsNavigationProps> = ({
  onPrev,
  onNext,
  canPrev = true,
  canNext = true,
  currentPage,
  totalPages,
}) => {
  return (
    <div className="flex items-center justify-center gap-3 select-none">
      <SliderArrowButton
        direction="left"
        size="md"
        onClick={onPrev}
        disabled={!canPrev}
        aria-label="Previous testimonials"
      />

      {totalPages && totalPages > 1 && (
        <span className="font-dm-sans font-medium text-xs text-[#495162] px-2">
          {currentPage} / {totalPages}
        </span>
      )}

      <SliderArrowButton
        direction="right"
        size="md"
        onClick={onNext}
        disabled={!canNext}
        aria-label="Next testimonials"
      />
    </div>
  );
};

export default TestimonialsNavigation;
