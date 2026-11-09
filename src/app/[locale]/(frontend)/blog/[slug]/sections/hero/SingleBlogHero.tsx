/**
 * SingleBlogHero Component
 * 
 * Renders the top hero banner for the single blog post:
 * - High-resolution dark ambient background matching Figma specifications
 * - Category badge pill ("Design Branding")
 * - High-impact title: "What Does PPC Stand For In Marketing? How To Do PPC?"
 * - Frosted glass metadata container with Publish Date, Author, and Comments
 */

import React from "react";
import Image from "next/image";
import heroBg from "@/app/[locale]/(frontend)/blog/sections/hero/assets/hero-bg.webp";

interface SingleBlogHeroProps {
  category?: string;
  title?: string;
  date?: string;
  author?: string;
  commentsCount?: string;
}

export default function SingleBlogHero({
  category = "Design Branding",
  title = "What Does PPC Stand For In Marketing? How To Do PPC?",
  date = "Jul 27, 2025",
  author = "Nahian Mussarat Isha",
  commentsCount = "3 Comments",
}: SingleBlogHeroProps) {
  return (
    <section className="relative w-full pt-[140px] pb-[80px] lg:pt-[170px] lg:pb-[110px] bg-[#0A122A] overflow-hidden">
      {/* Background ambient image & gradient overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={heroBg}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center opacity-45 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070D1F]/80 via-[#0A122A]/75 to-[#0A122A]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#305CD8]/25 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-[1240px] flex flex-col items-center text-center">
        {/* Category Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-[6px] bg-[#305CD8] text-white text-[13px] font-semibold tracking-wide shadow-[0_4px_14px_rgba(48,92,216,0.4)]">
          {category}
        </div>

        {/* Title */}
        <h1 className="text-[28px] sm:text-[38px] md:text-[46px] lg:text-[52px] font-bold text-white font-dm-sans leading-[1.2] max-w-[950px] mt-6 mb-9">
          {title}
        </h1>

        {/* Frosted Glass Meta Box */}
        <div className="w-full max-w-[580px] rounded-[16px] bg-white/[0.08] backdrop-blur-md border border-white/20 py-4 px-3 sm:px-6 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
          <div className="grid grid-cols-3 divide-x divide-white/20 items-center">
            {/* Publish Date */}
            <div className="px-2 sm:px-4 text-center">
              <span className="block text-[11px] sm:text-[12px] text-white/70 font-manrope uppercase tracking-wider mb-0.5">
                Publish Date
              </span>
              <span className="block text-[13px] sm:text-[15px] font-semibold text-white font-manrope">
                {date}
              </span>
            </div>

            {/* Author */}
            <div className="px-2 sm:px-4 text-center">
              <span className="block text-[11px] sm:text-[12px] text-white/70 font-manrope uppercase tracking-wider mb-0.5">
                by
              </span>
              <span className="block text-[13px] sm:text-[15px] font-semibold text-white font-manrope truncate">
                {author}
              </span>
            </div>

            {/* Comments */}
            <div className="px-2 sm:px-4 text-center">
              <span className="block text-[11px] sm:text-[12px] text-white/70 font-manrope uppercase tracking-wider mb-0.5">
                Comments
              </span>
              <span className="block text-[13px] sm:text-[15px] font-semibold text-white font-manrope">
                {commentsCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

