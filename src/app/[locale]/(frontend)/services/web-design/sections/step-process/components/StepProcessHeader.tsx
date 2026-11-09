/**
 * StepProcessHeader Component
 * 
 * Top header of the Step-by-Step section:
 * - Headline: "Our Step-by-Step Process for Building a Professional Website"
 * - Description paragraph explaining the workflow
 * - Secondary pill action button: "Kickstart Your Project ↗"
 */

"use client";

import React from "react";
import { Link } from "@/lib/i18n/routing";

export const StepProcessHeader: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10 mb-10 sm:mb-14">
      {/* Left Column: Heading and Subtitle */}
      <div className="max-w-[700px]">
        <h2 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] font-bold font-dm-sans leading-[1.14] text-[#092856] -tracking-[0.02em]">
          Our Step-by-Step Process for Building a{" "}
          <span className="block sm:inline lg:block">Professional Website</span>
        </h2>
        <p className="mt-4 text-[15px] sm:text-[16px] text-[#495162] leading-[1.6] max-w-[620px]">
          We follow a clear, step-by-step process to turn your ideas into a professional website.
          From understanding your business to launching a polished website, we take care of everything.
        </p>
      </div>

      {/* Right Column: CTA Outline Button */}
      <div className="flex-shrink-0">
        <Link
          href="/contact-us"
          className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-[#092856] text-[#092856] text-[14px] sm:text-[15px] font-semibold transition-all duration-300 hover:bg-[#305CD8] hover:border-[#305CD8] hover:text-white shadow-sm hover:shadow-[0_8px_20px_rgba(48,92,216,0.25)]"
        >
          <span>Kickstart Your Project</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default StepProcessHeader;
