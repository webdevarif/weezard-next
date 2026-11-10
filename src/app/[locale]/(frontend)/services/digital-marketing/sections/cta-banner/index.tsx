"use client";

import React from "react";
import { Link } from "@/lib/i18n/routing";

interface CtaProps {
  data: {
    title: string;
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
}

/**
 * DigitalMarketingCtaBanner Component
 * 
 * High-Impact mid/bottom page CTA banner:
 * - Royal Blue #305CD8 background
 * - White and yellow ambient glow orbs
 * - Yellow primary button and white bordered secondary button
 */
export const DigitalMarketingCtaBanner: React.FC<CtaProps> = ({ data }) => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="relative rounded-3xl bg-[#305CD8] overflow-hidden py-16 md:py-20 px-6 sm:px-12 text-center text-white shadow-xl">
          {/* Ambient Glow Orbs */}
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/40 blur-[130px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#EAD53F] opacity-70 blur-[140px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[850px] mx-auto flex flex-col items-center">
            <h2 className="font-dm-sans font-bold text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-[56px] tracking-tight mb-5">
              {data.title}
            </h2>
            <p className="font-manrope text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-[700px] mb-10">
              {data.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href={data.primaryCta.href}
                className="w-full sm:w-[280px] h-[60px] px-8 rounded-full bg-[#EAD53F] hover:bg-[#dfca37] text-[#092856] font-dm-sans font-semibold text-base flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>{data.primaryCta.label}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>

              <Link
                href={data.secondaryCta.href}
                className="w-full sm:w-[280px] h-[60px] px-8 rounded-full bg-transparent hover:bg-white/10 text-white border border-solid border-white font-dm-sans font-semibold text-base flex items-center justify-center gap-2 transition-all"
              >
                <span>{data.secondaryCta.label}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingCtaBanner;
