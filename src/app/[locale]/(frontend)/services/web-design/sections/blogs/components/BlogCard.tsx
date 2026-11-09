"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/lib/i18n/routing";
import { BlogItem } from "../data";
import { BlogClockIcon, BlogCommentIcon } from "./BlogIcons";

/**
 * BlogCard Component
 * 
 * Individual resource card matching Figma blog-section.txt pixel-for-pixel:
 * - 415px / full-width image container (height: 300px, rx: 15px / rounded-[15px])
 * - Floating white info card (width: 370px / centered with 22.5px margins, height: 161px, rx: 16px / rounded-[16px])
 * - Overlaps photo by 50px (-mt-[50px]), extends 111px below photo
 * - Exact Figma drop shadow: 0px 15px 80px rgba(16, 85, 135, 0.10)
 * - Meta row: Clock icon (16x16) + date, Comment icon (18x17) + comments
 * - Title: DM Sans Bold 22px, leading-[1.3], max-w-[280px] for exact 2-line wrap
 * - Hover state: Smooth transition to royal blue (#305CD8) and white text
 */

interface BlogCardProps {
  blog: BlogItem;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const [isHovered, setIsHovered] = useState(false);

  // All cards are normal by default; turns royal blue on hover
  const isActive = isHovered;

  return (
    <div
      className="group flex flex-col relative w-full max-w-[420px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/blog/${blog.slug}`} className="block focus:outline-none">
        {/* 1. Blog Image Card (Figma: 415x300, rx=15) */}
        <div className="relative w-full h-[280px] sm:h-[300px] rounded-[15px] overflow-hidden bg-slate-100 shadow-sm">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            priority={blog.isHighlighted}
          />
        </div>

        {/* 2. Overlapping Floating Info Card (Figma: 370x161, rx=16, 50px overlap) */}
        <div
          className={`-mt-[50px] relative z-10 mx-[18px] sm:mx-[22px] px-6 sm:px-[30px] pt-[28px] sm:pt-[32px] pb-[28px] sm:pb-[32px] rounded-[16px] min-h-[161px] flex flex-col justify-between transition-all duration-300 ${
            isActive ? "bg-[#305CD8] text-white -translate-y-1" : "bg-white text-[#092856]"
          }`}
          style={{
            boxShadow: isActive
              ? "0px 20px 50px 0px rgba(48, 92, 216, 0.32)"
              : "0px 15px 80px 0px rgba(16, 85, 135, 0.10)",
          }}
        >
          {/* Metadata Row: Date & Comments */}
          <div
            className={`flex items-center gap-6 text-[13px] sm:text-[14px] font-dm-sans transition-colors duration-200 ${
              isActive ? "text-white/85" : "text-[#495162]"
            }`}
          >
            {/* Date */}
            <div className="flex items-center gap-2">
              <BlogClockIcon className="w-4 h-4 flex-shrink-0" />
              <span>{blog.date}</span>
            </div>

            {/* Comments */}
            <div className="flex items-center gap-2">
              <BlogCommentIcon className="w-4 h-4 flex-shrink-0" />
              <span>{blog.commentsCount} Comments</span>
            </div>
          </div>

          {/* Blog Title (Figma: max-w-[280px], 2-line wrap) */}
          <h3
            className={`mt-4 max-w-[280px] font-dm-sans font-bold text-lg sm:text-[22px] leading-[1.3] tracking-[-0.01em] transition-colors duration-200 ${
              isActive ? "text-white" : "text-[#092856] group-hover:text-[#305CD8]"
            }`}
          >
            {blog.title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
