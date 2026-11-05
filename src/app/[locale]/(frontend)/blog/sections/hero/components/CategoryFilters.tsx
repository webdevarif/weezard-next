/**
 * CategoryFilters Component for Blog Page
 * Renders the 8 category filter badges:
 * - Active: Royal Blue (#305CD8)
 * - Inactive: bg-white/20 with backdrop-blur-md
 * Supports category selection and interactive toggle.
 */

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "Latest Blog",
  "AI",
  "Branding",
  "Web Design",
  "Marketing",
  "Design Principle",
  "Development",
  "Design Trend",
] as const;

interface CategoryFiltersProps {
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  activeCategory: externalCategory,
  onSelectCategory,
}) => {
  const [internalCategory, setInternalCategory] = useState<string>("Latest Blog");
  const selected = externalCategory ?? internalCategory;

  const handleSelect = (category: string) => {
    setInternalCategory(category);
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 lg:gap-3 max-w-[1014px] mx-auto"
    >
      {CATEGORIES.map((cat) => {
        const isActive = selected === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => handleSelect(cat)}
            className={cn(
              "h-[44px] sm:h-[47px] px-4 sm:px-5 rounded-[8px] font-dm-sans font-medium text-[13.5px] sm:text-[14.5px] transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap",
              isActive
                ? "bg-[#305CD8] text-white shadow-sm border border-[#305CD8]"
                : "bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/10"
            )}
          >
            {cat}
          </button>
        );
      })}
    </motion.div>
  );
};

export default CategoryFilters;

