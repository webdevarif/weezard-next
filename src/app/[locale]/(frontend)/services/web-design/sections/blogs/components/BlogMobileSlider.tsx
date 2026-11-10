"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Link } from "@/lib/i18n/routing";
import { BLOG_POSTS } from "../data";
import { BlogClockIcon, BlogCommentIcon } from "./BlogIcons";

/**
 * BlogMobileSlider Component
 * 
 * Mobile & Tablet (< lg) responsive view:
 * - Touch swipeable blog card slider matching Figma mobile screenshot
 * - 1 blog post card visible per slide:
 *   - Aspect-ratio image with rounded-[16px]
 *   - Overlapping floating white card (-mt-[50px])
 *   - Meta row: Date + Comments
 *   - Title in bold DM Sans
 * - Bottom pagination dots (#305CD8 active, #D9D9D9 inactive)
 * - Touch swipe gestures (left/right) with smooth slide transition
 */

export const BlogMobileSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalCount = BLOG_POSTS.length;
  const currentBlog = BLOG_POSTS[currentIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev < totalCount - 1 ? prev + 1 : 0));
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalCount - 1));
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full max-w-[420px] mx-auto select-none">
      {/* Slide Card Container */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full flex flex-col relative transition-all duration-300"
      >
        <Link href={`/blog/${currentBlog.slug}`} className="block focus:outline-none">
          {/* 1. Blog Image Container */}
          <div className="relative w-full h-[280px] sm:h-[300px] rounded-[16px] overflow-hidden bg-slate-100 shadow-sm">
            <Image
              src={currentBlog.image}
              alt={currentBlog.title}
              fill
              sizes="(max-width: 640px) 100vw, 420px"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* 2. Overlapping Floating White Info Card */}
          <div
            className="-mt-[50px] relative z-10 mx-3 sm:mx-4 px-5 sm:px-6 py-5 sm:py-6 rounded-[16px] bg-white text-[#092856] min-h-[140px] flex flex-col justify-between"
            style={{
              boxShadow: "0px 15px 80px 0px rgba(16, 85, 135, 0.12)",
            }}
          >
            {/* Metadata Row: Date & Comments */}
            <div className="flex items-center gap-5 text-xs sm:text-[13px] font-dm-sans text-[#495162]">
              <div className="flex items-center gap-1.5">
                <BlogClockIcon className="w-4 h-4 flex-shrink-0" />
                <span>{currentBlog.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BlogCommentIcon className="w-4 h-4 flex-shrink-0" />
                <span>{currentBlog.commentsCount} Comments</span>
              </div>
            </div>

            {/* Blog Title */}
            <h3 className="mt-4 font-manrope font-bold text-[18px] leading-[27px] tracking-[-0.01em] text-[#092856] max-w-[290px]">
              {currentBlog.title}
            </h3>
          </div>
        </Link>
      </div>

      {/* Bottom Pagination Dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {BLOG_POSTS.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to Blog ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === idx
                ? "w-2.5 h-2.5 bg-[#305CD8] scale-110"
                : "w-2.5 h-2.5 bg-[#D9D9D9] hover:bg-[#B0B8C8]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogMobileSlider;
