"use client";

/**
 * TableOfContents Component
 * 
 * Renders the reading guide / table of contents card on the single blog post sidebar:
 * - "5 Minute Read" badge/heading
 * - Interactive anchor list with active highlighted state (#305CD8)
 */

import React, { useState } from "react";

interface TocItem {
  id: string;
  label: string;
}

const tocItems: TocItem[] = [
  { id: "intro", label: "What Does PPC Stand For?" },
  { id: "what-does-ppc-stand-for", label: "What Does PPC Stand For?" },
  { id: "types-of-ppc-ads", label: "Types of PPC Ads" },
  { id: "search-ads", label: "Search Ads" },
  { id: "display-ads", label: "Display Ads" },
  { id: "social-media-ads", label: "Social Media Ads" },
  { id: "shopping-ads", label: "Shopping Ads" },
];

export default function TableOfContents() {
  const [activeId, setActiveId] = useState("what-does-ppc-stand-for");

  const handleScrollTo = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white rounded-[20px] p-6 border border-[#EEF2F6] shadow-[0_10px_30px_rgba(20,40,90,0.03)]">
      {/* Header */}
      <h3 className="text-[18px] font-bold text-navy font-dm-sans mb-4">
        5 Minute Read
      </h3>

      {/* Item list */}
      <nav className="flex flex-col space-y-1.5" aria-label="Table of contents">
        {tocItems.map((item, index) => {
          // When index === 1, it matches the active pill state in the Figma design
          const isActive = activeId === item.id || (activeId === "what-does-ppc-stand-for" && index === 1);

          return (
            <button
              key={`${item.id}-${index}`}
              type="button"
              onClick={() => handleScrollTo(item.id)}
              className={`w-full text-left text-[14px] font-medium font-manrope transition-all duration-200 rounded-[10px] py-2.5 px-4 ${
                isActive
                  ? "bg-[#305CD8] text-white font-semibold shadow-[0_4px_14px_rgba(48,92,216,0.3)]"
                  : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#305CD8]"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}

