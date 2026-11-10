import React from "react";
import { CaseStudyTabItem } from "../data/caseStudiesData";

interface CaseStudiesTabsProps {
  tabs: CaseStudyTabItem[];
  activeTabId: string;
  onSelectTab: (id: string) => void;
}

/**
 * CaseStudiesTabs Component
 * 
 * Strict Figma Pixel-Perfect Tabs:
 * - Problem (Frame 1686558379): width 480px, height 96px, top 0px, bg #EE3838, border-radius 8px, padding 30px
 * - What We Did (Frame 1686558380): width 480px, height 96px, top 113px (gap 17px), bg #305CD8, border-radius 8px, padding 30px
 * - Result (Frame 1686558381): width 480px, height 105px, top 226px (gap 17px), bg #903DD1, border-radius 8px, padding 30px
 * - Typography: 32px DM Sans Bold, line-height 45px, color #FFFFFF
 */
export const CaseStudiesTabs: React.FC<CaseStudiesTabsProps> = ({
  tabs,
  activeTabId,
  onSelectTab,
}) => {
  return (
    <div className="relative z-10 flex flex-col gap-[17px] w-full lg:w-[480px] flex-shrink-0">
      {tabs.map((tab, idx) => {
        const isActive = tab.id === activeTabId;
        const heightClass = idx === 2 ? "h-[85px] sm:h-[105px]" : "h-[80px] sm:h-[96px]";

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectTab(tab.id)}
            style={{ backgroundColor: tab.bgColor }}
            className={`group relative flex items-center w-full lg:w-[480px] ${heightClass} px-6 sm:px-[30px] rounded-[8px] text-left transition-all duration-300 cursor-pointer select-none ${
              isActive
                ? "shadow-[0px_14px_34px_rgba(9,40,86,0.18)] scale-[1.01]"
                : "opacity-95 hover:opacity-100 hover:scale-[1.005]"
            }`}
          >
            <span className="font-dm-sans font-bold text-[24px] sm:text-[32px] leading-[34px] sm:leading-[45px] text-white tracking-normal">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CaseStudiesTabs;
