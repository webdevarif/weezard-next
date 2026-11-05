import React from "react";
import Link from "next/link";
import { ExternalArrowIcon } from "./TestimonialIcons";

/**
 * TestimonialsHeader Component
 * 
 * Section header:
 * - Title: "Listen Directly from Our Past Clients"
 * - Pill CTA: "See More Reviews ↗" with 1.5px solid #092856 border & DM Sans 16px font
 */

export const TestimonialsHeader: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
      {/* Title */}
      <div className="max-w-[620px]">
        <h2 className="text-[#092856] font-dm-sans font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[52px] tracking-tight">
          Listen Directly from
          <br className="hidden sm:inline" /> Our Past Clients
        </h2>
      </div>

      {/* "See More Reviews ↗" CTA Button */}
      <div className="flex-shrink-0">
        <Link
          href="#reviews"
          className="inline-flex items-center justify-center gap-2.5 h-[56px] px-8 rounded-full text-[#092856] font-dm-sans font-bold text-[16px] transition-all duration-300 hover:bg-[#092856] hover:text-white group flex-shrink-0"
          style={{ border: "1.5px solid #092856" }}
        >
          <span>See More Reviews</span>
          <ExternalArrowIcon className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default TestimonialsHeader;

