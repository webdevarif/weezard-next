/**
 * HeroSearchBar Component for Blog Page
 * Renders the centered 600px white search input bar with search icon.
 */

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";
import { Search } from "lucide-react";

interface HeroSearchBarProps {
  onSearch?: (query: string) => void;
}

export const HeroSearchBar: React.FC<HeroSearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <motion.form
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="w-full max-w-[600px] mx-auto mt-7 sm:mt-9"
    >
      <div className="relative flex items-center h-[56px] sm:h-[60px] w-full rounded-[8px] bg-white px-4 sm:px-5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all focus-within:ring-2 focus-within:ring-[#305CD8]/30">
        <Search className="w-5 h-5 text-[#64748B] shrink-0 stroke-[2]" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (onSearch) onSearch(e.target.value);
          }}
          placeholder="Search blog"
          className="w-full pl-3 pr-2 bg-transparent text-[#092856] font-dm-sans text-[15px] sm:text-[16px] placeholder:text-[#94A3B8] focus:outline-none"
        />
      </div>
    </motion.form>
  );
};

export default HeroSearchBar;

