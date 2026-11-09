/**
 * BlogCard Component
 * Individual 3-column blog card matching Figma specifications:
 * - 420px × 250px thumbnail with floating top-left "Design Branding" black badge
 * - Meta row: [Calendar] Jul 27 2025 | [MessageSquare] 3 Comments | [Clock] 3 MIN READ
 * - Subtle divider line and bold DM Sans headline
 */

"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/lib/i18n/routing";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";
import { Calendar, MessageSquare, Clock } from "lucide-react";
import { BlogArticle } from "../data";

interface BlogCardProps {
  article: BlogArticle;
  index: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({ article, index }) => {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group bg-white rounded-[16px] border border-[#E2E8F4] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_45px_rgba(20,40,90,0.08)] hover:border-[#305CD8]/35 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Thumbnail Image with Floating Category Pill */}
        <div className="relative w-full aspect-[420/250] overflow-hidden">
          <Link href={`/blog/${article.slug}`} className="block w-full h-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
            />
          </Link>

          {/* Floating Category Pill at Top Left */}
          <div className="absolute top-4 left-4 pointer-events-none">
            <span className="bg-black/90 text-white font-dm-sans font-semibold text-[11px] sm:text-[12px] px-3 py-1 rounded-[6px] backdrop-blur-sm shadow-md">
              {article.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          {/* Meta Info Row */}
          <div className="flex items-center justify-between text-[12px] sm:text-[12.5px] text-secondary font-dm-sans">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-secondary/70 stroke-[2]" />
              <span>{article.date}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-secondary/70 stroke-[2]" />
              <span>{article.comments}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-secondary/70 stroke-[2]" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Inner Divider - Royal Blue line */}
          <div className="h-[1px] bg-[#305CD8] my-3.5 sm:my-4" />

          {/* Title */}
          <h3 className="font-bold font-dm-sans text-navy text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.38] group-hover:text-[#305CD8] transition-colors line-clamp-3">
            <Link href={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </h3>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;

