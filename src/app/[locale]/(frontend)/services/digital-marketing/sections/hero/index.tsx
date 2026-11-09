import React from "react";
import { Link } from "@/lib/i18n/routing";

interface HeroProps {
  data: {
    badge: string;
    rating: {
      score: string;
      text: string;
      stars: number;
    };
    title: {
      primary: string;
      highlight: string;
    };
    description: string;
    cta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
    stats: Array<{ label: string; value: string }>;
  };
}

/**
 * DigitalMarketingHero Component
 * 
 * Top hero banner for Digital Marketing service page:
 * - High-converting heading with royal blue gradient accents
 * - Trust badge & rating
 * - Action buttons with Figma styling
 * - Ambient background glow effects
 */
export const DigitalMarketingHero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#F5F8FF] via-white to-white">
      {/* Background ambient orbs */}
      <div
        className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-[#305CD8]/10 blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-10 w-[450px] h-[450px] rounded-full bg-[#EAD53F]/15 blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="flex flex-col items-center text-center max-w-[960px] mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#305CD8] font-dm-sans font-semibold text-xs sm:text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#305CD8] animate-pulse" />
            <span>{data.badge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-[#092856] font-dm-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight lg:leading-[66px] tracking-tight mb-6">
            {data.title.primary}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#305CD8] via-[#4872E8] to-[#1E3FA8]">
              {data.title.highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#495162] font-manrope text-base sm:text-lg md:text-xl leading-relaxed max-w-[800px] mb-10">
            {data.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
            <Link
              href={data.cta.href}
              className="w-full sm:w-auto min-w-[240px] h-[56px] px-8 rounded-full bg-[#305CD8] hover:bg-[#254DBF] text-white font-dm-sans font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-[#305CD8]/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>{data.cta.label}</span>
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

            <a
              href={data.secondaryCta.href}
              className="w-full sm:w-auto min-w-[220px] h-[56px] px-8 rounded-full bg-white hover:bg-slate-50 text-[#092856] border border-solid border-[#092856] font-dm-sans font-semibold text-base flex items-center justify-center gap-2 transition-all"
            >
              <span>{data.secondaryCta.label}</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 w-full pt-8 border-t border-slate-200/80">
            {data.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-[#092856] font-dm-sans font-bold text-3xl sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-[#495162] font-manrope text-sm sm:text-base mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingHero;
