import React from "react";
import { TestimonialItem } from "../data/testimonialsData";
import { TestimonialCard } from "./TestimonialCard";

interface TestimonialsGridProps {
  currentItems: TestimonialItem[];
}

/**
 * TestimonialsGrid Component
 * 
 * Strict Figma Pixel-Perfect 3-Column Masonry Layout:
 * - Total width: 1320px, gap between columns: 45px
 * - Column 1 (410px width, gap 45px): Cards 0 & 1
 * - Column 2 (410px width, gap 45px): Cards 2 (Featured) & 3
 * - Column 3 (410px width, gap 45px): Cards 4 & 5
 */
export const TestimonialsGrid: React.FC<TestimonialsGridProps> = ({
  currentItems,
}) => {
  // Split into 3 columns
  const col1 = [currentItems[0], currentItems[1]].filter(Boolean);
  const col2 = [currentItems[2], currentItems[3]].filter(Boolean);
  const col3 = [currentItems[4], currentItems[5]].filter(Boolean);

  return (
    <div className="w-full max-w-[1320px] mx-auto">
      {/* Desktop 3-Column Grid */}
      <div className="hidden lg:grid grid-cols-3 gap-[45px] w-full">
        {/* Column 1 */}
        <div className="flex flex-col gap-[45px] w-full max-w-[410px]">
          {col1.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        {/* Column 2 (Middle with Featured card) */}
        <div className="flex flex-col gap-[45px] w-full max-w-[410px]">
          {col2.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-[45px] w-full max-w-[410px]">
          {col3.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Mobile & Tablet Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6 sm:gap-8 w-full">
        {currentItems.map((item) => (
          <div key={item.id} className="flex justify-center w-full">
            <TestimonialCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsGrid;
