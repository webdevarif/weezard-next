"use client";

import React from "react";
import { ComparisonRowData } from "../data";
import { ComparisonFeatureCard } from "./mobile/ComparisonFeatureCard";
import { ComparisonProviderCard } from "./mobile/ComparisonProviderCard";
import { ComparisonWeezardCard } from "./mobile/ComparisonWeezardCard";

export interface ComparisonTableMobileProps {
  rows?: ComparisonRowData[];
}

/**
 * ComparisonTableMobile Component
 * 
 * Mobile & Tablet (< lg) responsive view:
 * - 4 distinct stacked vertical cards matching Figma mobile design:
 *   1. Feature / Provider Card
 *   2. Freelancers Card
 *   3. Other Agencies Card
 *   4. Weezard Featured Gradient Card
 * - Pixel-perfect spacing, borders, typography, and SVG icons
 */

export const ComparisonTableMobile: React.FC<ComparisonTableMobileProps> = ({
  rows,
}) => {
  return (
    <div className="block lg:hidden w-full px-4 max-w-[430px] mx-auto space-y-6 sm:space-y-8">
      {/* 1. Feature / Provider Card */}
      <ComparisonFeatureCard rows={rows} />

      {/* 2. Freelancers Card */}
      <ComparisonProviderCard
        title="Freelancers"
        providerKey="freelancers"
        rows={rows}
      />

      {/* 3. Other Agencies Card */}
      <ComparisonProviderCard
        title="Other Agencies"
        providerKey="otherAgencies"
        rows={rows}
      />

      {/* 4. Weezard Highlighted Card */}
      <ComparisonWeezardCard rows={rows} />
    </div>
  );
};
