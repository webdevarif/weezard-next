/**
 * Package Breakdown Section for Services / Web Design Page
 */

"use client";

import React from "react";
import BreakdownContent from "./components/BreakdownContent";
import BreakdownVisual from "./components/BreakdownVisual";

export const PackageBreakdownSection: React.FC = () => {
  return (
    <section className="py-[60px] lg:py-[110px] bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <BreakdownContent />
          <BreakdownVisual />
        </div>
      </div>
    </section>
  );
};

export default PackageBreakdownSection;

