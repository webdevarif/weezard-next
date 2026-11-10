"use client";

import React, { useState } from "react";
import { CaseStudyTabItem } from "../data/caseStudiesData";
import { CaseStudiesTabs } from "./CaseStudiesTabs";
import { CaseStudiesWires } from "./CaseStudiesWires";
import { CaseStudiesCardStack } from "./CaseStudiesCardStack";

interface CaseStudiesShowcaseProps {
  tabs: CaseStudyTabItem[];
  imageSrc: string;
}

/**
 * CaseStudiesShowcase Component
 * 
 * Combines the 3 elements of Frame 1686558382 (1320px x 510px):
 * - Left: 3 Interactive Tab Pills (Problem, What We Did, Result)
 * - Middle/Underlay: 3 Connecting Circuit Wires (Vector 103, 104, 105)
 * - Right: 3-Layer Stacked Card Deck (Purple, Blue, and Top Hero Image)
 */
export const CaseStudiesShowcase: React.FC<CaseStudiesShowcaseProps> = ({
  tabs,
  imageSrc,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    tabs[0]?.id || "problem"
  );

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <div className="relative w-full lg:w-[1320px] lg:h-[510px] flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0">
      {/* Background Connecting Wires (Desktop Only) */}
      <CaseStudiesWires />

      {/* Left: Interactive Tab Pills */}
      <CaseStudiesTabs
        tabs={tabs}
        activeTabId={activeTabId}
        onSelectTab={setActiveTabId}
      />

      {/* Right: 3-Layer Stacked Image & Gradient Cards */}
      <div className="relative z-10 w-full lg:w-[719px] flex justify-end">
        <CaseStudiesCardStack
          imageSrc={imageSrc}
          activeBorderColor={activeTab?.borderColor || "#EE3838"}
        />
      </div>
    </div>
  );
};

export default CaseStudiesShowcase;
