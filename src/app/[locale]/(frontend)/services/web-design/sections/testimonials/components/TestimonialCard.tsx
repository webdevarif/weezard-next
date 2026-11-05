import React from "react";
import Image from "next/image";
import { TestimonialItem } from "../data";
import { StarIcon, QuoteBadgeIcon } from "./TestimonialIcons";

/**
 * TestimonialCard Component
 * 
 * Individual review card:
 * - Pure white background (#FFFFFF) with rounded-2xl & 1.5px solid #CAD6F4 border
 * - 5-star rating (filled & outlined stars in #FF9900)
 * - Review quote text in DM Sans
 * - Author row with circular avatar, name, role/URL
 * - Pastel blue double-quote badge (#E1E9F8 with #305CD8 quote icon)
 */

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  const maxRating = testimonial.maxRating ?? 5;

  return (
    <div
      className="w-full min-h-[332px] bg-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm relative transition-all duration-300"
      style={{ border: "1.5px solid #CAD6F4" }}
    >
      <div>
        {/* Star Rating Row */}
        <div className="flex items-center gap-1">
          {Array.from({ length: maxRating }).map((_, index) => (
            <StarIcon
              key={index}
              filled={index < testimonial.rating}
              className="w-5 h-5 flex-shrink-0"
            />
          ))}
        </div>

        {/* Review Quote */}
        <p className="mt-5 text-[#495162] font-dm-sans text-base sm:text-[17px] leading-relaxed">
          {testimonial.quote}
        </p>
      </div>

      {/* Author & Quote Badge Footer */}
      <div className="mt-8 pt-4 flex items-center justify-between gap-4 border-t border-[#E2E8F0]/40">
        <div className="flex items-center gap-3.5">
          {/* Avatar */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-[#E2E8F0]">
            <Image
              src={testimonial.avatar}
              alt={testimonial.author}
              fill
              sizes="56px"
              className="object-cover object-center"
            />
          </div>

          {/* Name & Role */}
          <div>
            <h4 className="text-[#092856] font-dm-sans font-bold text-base sm:text-[17px] leading-snug">
              {testimonial.author}
            </h4>
            <p className="text-[#495162] font-dm-sans text-xs sm:text-sm mt-0.5">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Quote Badge SVG (Exact Figma vector: #E1E9F8 bg with #305CD8 quote) */}
        <QuoteBadgeIcon className="w-14 h-14 flex-shrink-0" />
      </div>
    </div>
  );
};

export default TestimonialCard;

