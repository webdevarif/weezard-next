/**
 * BlogPagination Component
 * Renders the centered pagination controls matching Figma & user screenshot:
 * - Prev arrow (<)
 * - Page numbers with solid Royal Blue (#305CD8) circle for the active page
 * - Next arrow (>)
 */

"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const BlogPagination: React.FC<BlogPaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const handlePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);

    // Smooth scroll back to feed top for user convenience
    if (typeof window !== "undefined") {
      const feedSection = document.getElementById("blog-feed-container");
      if (feedSection) {
        feedSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Blog pagination"
      /* Pagination container: centered with compact mt-10 on mobile and mt-16 sm:mt-20 on desktop */
      className="mt-10 sm:mt-16 lg:mt-20 flex items-center justify-center gap-3 sm:gap-5"
    >
      {/* Prev Button */}
      <button
        type="button"
        onClick={() => handlePage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className={cn(
          "w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-200 cursor-pointer",
          currentPage === 1
            ? "text-[#CAD6F4] cursor-not-allowed"
            : "text-[#305CD8] hover:scale-110 active:scale-95"
        )}
      >
        <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
      </button>

      {/* Numbered Page Buttons */}
      <div className="flex items-center gap-2 sm:gap-3">
        {pages.map((p) => {
          const isActive = currentPage === p;
          return (
            <button
              key={p}
              type="button"
              onClick={() => handlePage(p)}
              className={cn(
                "w-9 h-9 sm:w-10 sm:h-10 rounded-full font-dm-sans text-[14px] sm:text-[15px] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95",
                isActive
                  ? "bg-[#305CD8] text-white font-bold shadow-[0_4px_16px_rgba(48,92,216,0.35)]"
                  : "text-[#495162] hover:text-[#305CD8] font-normal"
              )}
            >
              {p}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={() => handlePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className={cn(
          "w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-200 cursor-pointer",
          currentPage === totalPages
            ? "text-[#CAD6F4] cursor-not-allowed"
            : "text-[#305CD8] hover:scale-110 active:scale-95"
        )}
      >
        <ChevronRight className="w-5 h-5 stroke-[2.2]" />
      </button>
    </nav>
  );
};

export default BlogPagination;
