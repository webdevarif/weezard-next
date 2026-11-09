"use client";

import React from "react";
import { ComparisonRowData } from "./data";
import { ComparisonTableHeader } from "./components/ComparisonTableHeader";
import { ComparisonTableDesktop } from "./components/ComparisonTableDesktop";
import { ComparisonTableMobile } from "./components/ComparisonTableMobile";

export interface ComparisonTableSectionProps {
  header?: {
    title?: string;
    subtitle?: string;
  };
  rows?: ComparisonRowData[];
}

/**
 * ComparisonTableSection Component
 * 
 * Reusable & Dynamic Comparison Matrix:
 * - Desktop 4-column matrix
 * - Mobile responsive 4-card sequence
 * - Supports custom header and rows while maintaining 100% Figma fidelity
 */
export const ComparisonTableSection: React.FC<ComparisonTableSectionProps> = ({
  header,
  rows,
}) => {
  return (
    <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden bg-[#FBFDFF]">
      {/* Background Ambient Glows matching Figma canvas */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-blue-100/60 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-purple-100/50 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-1/3 w-[500px] h-64 rounded-full bg-amber-50/40 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 max-w-[1400px]">
        {/* Section Heading & Subtitle */}
        <ComparisonTableHeader
          title={header?.title}
          subtitle={header?.subtitle}
        />

        {/* Desktop 4-Column Table */}
        <ComparisonTableDesktop rows={rows} />

        {/* Mobile Segmented Cards */}
        <ComparisonTableMobile rows={rows} />
      </div>
    </section>
  );
};

export default ComparisonTableSection;
