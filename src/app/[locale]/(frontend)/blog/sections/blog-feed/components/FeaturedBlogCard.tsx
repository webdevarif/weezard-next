/**
 * FeaturedBlogCard Component
 * Renders the top horizontal showcase card matching Figma coordinates:
 * - 645px × 422px image with bottom-right "3 MIN READ" badge
 * - Right metadata with royal blue "DESIGN BRANDING" badge, title, excerpt, and "Read More" link
 */

"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/lib/i18n/routing";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";
import { Clock, MessageSquare } from "lucide-react";
import { BlogArticle } from "../data";

interface FeaturedBlogCardProps {
  article: BlogArticle;
}

export const FeaturedBlogCard: React.FC<FeaturedBlogCardProps> = ({ article }) => {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="w-full bg-white rounded-[20px] p-4 sm:p-6 lg:p-7 border border-[#E2E8F4] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_50px_rgba(20,40,90,0.06)] transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row items-center gap-7 lg:gap-10 xl:gap-12">
        {/* Left Column: Cover Image with 3 MIN READ floating badge */}
        <div className="w-full lg:w-[50%] xl:w-[52%] aspect-[645/422] relative rounded-[16px] overflow-hidden group">
          <Link href={`/blog/${article.slug}`} className="block w-full h-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 645px"
            />
          </Link>

          {/* Floating Read Time pill at bottom right */}
          <div className="absolute bottom-4 right-4 pointer-events-none">
            <span className="bg-black/90 text-white font-dm-sans font-bold text-[11px] sm:text-[12px] uppercase tracking-wider px-3 py-1.5 rounded-[6px] backdrop-blur-sm shadow-md">
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Right Column: Article Details */}
        <div className="w-full lg:w-[50%] xl:w-[48%] flex flex-col justify-center space-y-3.5 sm:space-y-4 lg:space-y-5">
          {/* Top category & meta row: wraps cleanly on mobile so category + date sit on row 1 and comments on row 2 per screenshot */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-4">
            <span className="bg-[#305CD8] text-white text-[11px] sm:text-[12px] font-dm-sans font-semibold tracking-wide uppercase px-3 py-1 rounded-[6px]">
              {article.category}
            </span>

            <div className="flex items-center gap-1.5 text-secondary text-[13px] sm:text-[14px] font-dm-sans">
              <Clock className="w-3.5 h-3.5 text-secondary/70 stroke-[2]" />
              <span>{article.date}</span>
            </div>

            <div className="flex items-center gap-1.5 text-secondary text-[13px] sm:text-[14px] font-dm-sans">
              <MessageSquare className="w-3.5 h-3.5 text-secondary/70 stroke-[2]" />
              <span>{article.comments}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-bold font-dm-sans text-navy leading-[1.3] sm:leading-[1.25] tracking-tight hover:text-[#305CD8] transition-colors">
            <Link href={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </h2>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-secondary text-[14px] sm:text-[15px] lg:text-[16px] font-dm-sans leading-[1.65]">
              {article.excerpt}
            </p>
          )}

          {/* Read More Link (underlined per Figma mobile screenshot) */}
          <div className="pt-1">
            <Link
              href={`/blog/${article.slug}`}
              className="inline-flex items-center text-[#305CD8] font-dm-sans font-semibold text-[14px] sm:text-[15px] underline underline-offset-4 hover:text-[#2045b5]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedBlogCard;

