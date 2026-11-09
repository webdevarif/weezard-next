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
        <h1 className="text-[52px] font-bold text-white font-dm-sans leading-[1.18] max-w-[950px] mt-6 mb-8 sm:mb-9">
          {title}
        </h1>

        {/* Metadata Container: Clean on mobile, frosted 20% white box (774px x 115px) on desktop with 60px solid white dividers */}
        <div className="w-full max-w-[774px] sm:h-[115px] rounded-[16px] bg-transparent sm:bg-white/20 sm:backdrop-blur-[54px] py-2 sm:py-0 px-1 sm:px-8 flex items-center justify-center">
          <div className="w-full flex items-center justify-between">
            {/* Publish Date */}
            <div className="flex-1 text-left">
              <span className="block text-[12px] sm:text-[14px] text-white/90 font-manrope mb-1">
                Publish Date
              </span>
              <span className="block text-[13px] sm:text-[18px] font-bold text-white font-dm-sans whitespace-nowrap">
                {date}
              </span>
            </div>

            {/* Desktop Divider 1 (Exact SVG M229 31V91: 60px solid white line) */}
            <div className="hidden sm:block w-[1px] h-[60px] bg-white mx-6 shrink-0" />

            {/* Author (Allocated more space) */}
            <div className="flex-[1.4] sm:flex-[1.5] px-2 sm:px-0 text-left">
              <span className="block text-[12px] sm:text-[14px] text-white/90 font-manrope mb-1">
                by
              </span>
              <span className="block text-[13px] sm:text-[18px] font-bold text-white font-dm-sans whitespace-normal sm:whitespace-nowrap">
                {author}
              </span>
            </div>

            {/* Desktop Divider 2 (Exact SVG M545 31V91: 60px solid white line) */}
            <div className="hidden sm:block w-[1px] h-[60px] bg-white mx-6 shrink-0" />

            {/* Comments */}
            <div className="flex-1 text-left">
              <span className="block text-[12px] sm:text-[14px] text-white/90 font-manrope mb-1">
                Comments
              </span>
              <span className="block text-[13px] sm:text-[18px] font-bold text-white font-dm-sans whitespace-nowrap">
                {commentsCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

