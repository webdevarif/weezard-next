/**
 * BlogFeedSection Component
 * Main article feed section for the Blog page:
 * - Dynamic category filtering ("Latest Blog" or individual category)
 * - Search query filtering
 * - Top Featured article card on Page 1
 * - 3x3 responsive grid (9 articles per page)
 * - Interactive pagination dynamically calculated based on filtered count
 */

"use client";

import React, { useMemo } from "react";
import { featuredBlog, allBlogArticles, BlogArticle } from "./data";
import FeaturedBlogCard from "./components/FeaturedBlogCard";
import BlogGrid from "./components/BlogGrid";
import BlogPagination from "./components/BlogPagination";

const POSTS_PER_PAGE = 9;

interface BlogFeedSectionProps {
  activeCategory: string;
  searchQuery: string;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const BlogFeedSection: React.FC<BlogFeedSectionProps> = ({
  activeCategory,
  searchQuery,
  currentPage,
  onPageChange,
}) => {
  // Filter articles based on active category and search text
  const filteredArticles = useMemo(() => {
    return allBlogArticles.filter((article) => {
      const matchesCategory =
        activeCategory === "Latest Blog" ||
        article.category.toLowerCase() === activeCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        article.title.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Calculate dynamic pagination
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  // Paginated slice
  const paginatedArticles = useMemo(() => {
    const startIndex = (safePage - 1) * POSTS_PER_PAGE;
    return filteredArticles.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredArticles, safePage]);

  // Show featured article when on first page with all blogs or when relevant
  const showFeatured =
    safePage === 1 &&
    searchQuery.trim() === "" &&
    (activeCategory === "Latest Blog" || activeCategory === "Marketing");

  return (
    <section id="blog-feed-container" className="w-full bg-[#FAFCFF] py-10 sm:py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Featured Top Showcase Card (on Page 1) */}
        {showFeatured && (
          <>
            <FeaturedBlogCard article={featuredBlog} />
            <div className="h-[1px] bg-[#CAD6F4] my-10 sm:my-14 lg:my-16" />
          </>
        )}

        {/* 2. Blog Cards Grid or Empty State */}
        {paginatedArticles.length > 0 ? (
          <BlogGrid articles={paginatedArticles} />
        ) : (
          <div className="text-center py-16 bg-white rounded-[20px] border border-[#E2E8F4] max-w-[600px] mx-auto p-8 shadow-sm">
            <h3 className="text-[20px] font-bold text-navy font-dm-sans mb-2">No articles found</h3>
            <p className="text-secondary text-[15px] font-dm-sans">
              No matching articles found for category &ldquo;{activeCategory}&rdquo;
              {searchQuery ? ` and query "${searchQuery}"` : ""}.
            </p>
          </div>
        )}

        {/* 3. Pagination Controls */}
        <BlogPagination
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
};

export default BlogFeedSection;
