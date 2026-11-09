/**
 * BlogGrid Component
 * Renders the 3x3 responsive grid for the 9 blog cards with 30px gap.
 */

"use client";

import React from "react";
import { BlogArticle } from "../data";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  articles: BlogArticle[];
}

export const BlogGrid: React.FC<BlogGridProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px]">
      {articles.map((article, index) => (
        <BlogCard key={article.id} article={article} index={index} />
      ))}
    </div>
  );
};

export default BlogGrid;

