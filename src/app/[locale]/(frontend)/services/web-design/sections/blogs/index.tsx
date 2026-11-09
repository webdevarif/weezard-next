import React from "react";
import { BLOG_POSTS } from "./data";
import BlogHeader from "./components/BlogHeader";
import BlogCard from "./components/BlogCard";

/**
 * BlogSection Component for Services / Web Design Page
 * 
 * "Dive into Our Resources for Greater Insights"
 * Features:
 * - Two-column header with bold headline and contextual narrative
 * - 3-Card asymmetric layout matching Figma blog-section.txt
 * - Middle featured card styled with royal blue (#305CD8)
 * - Overlapping floating info cards with custom Figma drop shadows
 * - Full responsive support (mobile, tablet, desktop)
 */

export const BlogSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Section Header */}
        <BlogHeader />

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
          {BLOG_POSTS.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

