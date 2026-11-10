import React from "react";
import Link from "next/link";
import { ExternalArrowIcon } from "./TestimonialIcons";

/**
 * TestimonialsBottomCta Component
 * 
 * Mobile & Tablet (< lg) full-width pill button:
 * - Full width matching container
 * - 1.5px solid #092856 border
 * - Font: DM Sans, bold
 * - Smooth hover transition
 */

export const TestimonialsBottomCta: React.FC = () => {
  return (
    <div className="w-full mt-6 sm:mt-8 block lg:hidden">
      <Link
        href="#reviews"
        className="w-full flex items-center justify-center gap-2.5 h-[52px] sm:h-[56px] px-6 rounded-full text-[#092856] font-dm-sans font-bold text-[15px] sm:text-[16px] transition-all duration-300 hover:bg-[#092856] hover:text-white group border-[1.5px] border-solid border-[#092856]"
      >
        <span>See More Reviews</span>
        <ExternalArrowIcon className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  );
};

export default TestimonialsBottomCta;
