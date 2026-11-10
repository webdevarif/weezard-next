import React from "react";
import Image from "next/image";
import { TestimonialItem } from "../data/testimonialsData";

interface TestimonialCardProps {
  item: TestimonialItem;
}

/**
 * StarRating Component
 * 
 * 5 Stars with #FE724C color matching Figma specs
 */
const StarRating: React.FC<{ rating: number }> = ({ rating = 5 }) => (
  <div className="flex items-center gap-[2px]">
    {Array.from({ length: rating }).map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-[#FE724C] fill-current flex-shrink-0"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

/**
 * TestimonialCard Component
 * 
 * Strict Figma Pixel-Perfect Card Specs:
 * - Width: 410px, border-radius: 10px, background: #FFFFFF
 * - Normal Cards: border: 1px solid #E1E1E1
 * - Featured Center Card (isFeatured): border: none, shadow: 0px 10px 80px rgba(30, 96, 221, 0.1)
 * - Padding: 30px 35px
 * - Stars: 5x 20px #FE724C
 * - Tagline / Content: 18px Manrope Regular, line-height 27px, color #495162
 * - Profile: 50x50 Avatar circle, Name: 16px Manrope Bold #092856, Role: 14px Manrope Regular #495162
 */
export const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  return (
    <div
      className={`w-full max-w-[410px] rounded-[10px] bg-white p-7 sm:p-[30px_35px] flex flex-col justify-between transition-all duration-300 ${
        item.isFeatured
          ? "shadow-[0px_10px_80px_rgba(30,96,221,0.12)] border border-transparent"
          : "border border-solid border-[#E1E1E1] shadow-none hover:shadow-sm"
      }`}
    >
      <div className="flex flex-col gap-5 sm:gap-[25px]">
        {/* Star Rating */}
        <StarRating rating={item.rating || 5} />

        {/* Testimonial Quote */}
        <p className="font-manrope font-normal text-[16px] sm:text-[18px] leading-[25px] sm:leading-[27px] text-[#495162] break-words">
          {item.content}
        </p>
      </div>

      {/* Author Profile */}
      <div className="flex items-center gap-3 sm:gap-[12px] pt-6 sm:pt-8 mt-auto">
        <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0 bg-[#E8EDF5]">
          <Image
            src={item.author.avatar}
            alt={item.author.name}
            fill
            sizes="50px"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="font-manrope font-bold text-[16px] leading-[24px] text-[#092856] truncate">
            {item.author.name}
          </span>
          <span className="font-manrope font-normal text-[14px] leading-[22px] text-[#495162] truncate">
            {item.author.role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
