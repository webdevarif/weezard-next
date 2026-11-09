import React from "react";
import Link from "next/link";

export interface TestimonialsHeaderProps {
  title: string;
  subtitle?: string;
  cta?: {
    label: string;
    href: string;
  };
}

/**
 * Header component matching Figma Frame 1686558268:
 * - Title: DM Sans 700, 45px/54px, letter-spacing -0.02em, #092856
 * - Subtitle: Manrope 400, 18px/27px, #495162
 * - CTA Button: 219px x 60px rounded-full, 1px solid #092856, DM Sans 600 16px/20px
 */
export const TestimonialsHeader: React.FC<TestimonialsHeaderProps> = ({
  title,
  subtitle,
  cta,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 lg:mb-14 gap-6">
      <div className="max-w-[727px]">
        <h2 className="text-3xl sm:text-4xl lg:text-[45px] lg:leading-[54px] font-bold text-[#092856] font-dm-sans tracking-[-0.02em]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3.5 text-base sm:text-[18px] sm:leading-[27px] text-[#495162] font-manrope">
            {subtitle}
          </p>
        )}
      </div>

      {cta && (
        <div className="flex-shrink-0">
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center gap-2.5 w-[219px] h-[60px] rounded-full border border-solid border-[#092856] text-[#092856] font-dm-sans font-semibold text-[16px] leading-[20px] tracking-[-0.01em] transition-all duration-300 hover:bg-[#092856] hover:text-white group flex-shrink-0"
          >
            <span>{cta.label}</span>
            <svg
              className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};
