import React from "react";
import { BLOG_POSTS } from "./data";
import BlogHeader from "./components/BlogHeader";
import BlogCard from "./components/BlogCard";
import BlogMobileSlider from "./components/BlogMobileSlider";

/**
 * BlogSection Component for Services / Web Design Page
 * 
 * "Dive into Our Resources for Greater Insights"
 * Features:
 * - Header with bold headline and contextual narrative
 * - Desktop: 3-Card asymmetric layout matching Figma
 * - Mobile: Interactive touch-enabled card slider with dots
 */

export const BlogSection: React.FC = () => {
  return (
    <section className="py-14 md:py-24 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Section Header */}
        <BlogHeader />

        {/* Desktop 3-Card Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
          {BLOG_POSTS.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Mobile Responsive Touch Slider */}
        <div className="block lg:hidden">
          <BlogMobileSlider />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

