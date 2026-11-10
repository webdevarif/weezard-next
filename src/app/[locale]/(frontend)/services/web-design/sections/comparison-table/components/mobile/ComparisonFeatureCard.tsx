import React from "react";
import { LightningIcon } from "../ComparisonTableIcons";
import { COMPARISON_ROWS, ComparisonRowData } from "../../data";

export interface ComparisonFeatureCardProps {
  rows?: ComparisonRowData[];
}

/**
 * ComparisonFeatureCard Component
 * 
 * Mobile Card 1: Feature / Provider List
 * - Header pill with gradient background and Lightning icon
 * - Feature name rows with light ice blue background (#EEF2F9)
 * - Exact responsive typography and border separators
 */
export const ComparisonFeatureCard: React.FC<ComparisonFeatureCardProps> = ({
  rows = COMPARISON_ROWS,
}) => {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-solid border-[#D0DCF2]">
      {/* Header Badge */}
      <div
        className="w-full py-3.5 px-4 flex items-center justify-center gap-2 rounded-t-2xl"
        style={{
          background: "linear-gradient(90deg, #4F70F4 0%, #6E88F8 100%)",
        }}
      >
        <LightningIcon className="w-5 h-5 flex-shrink-0" />
        <span className="text-white font-dm-sans font-bold text-sm tracking-wide">
          Feature / Provider
        </span>
      </div>

      {/* Feature Rows */}
      <div className="bg-[#EEF2F9] divide-y divide-solid divide-[#D9E2F2]">
        {rows.map((row, idx) => (
          <div
            key={row.feature}
            className={`py-3.5 px-5 flex items-center min-h-[52px] ${
              idx === rows.length - 1 ? "rounded-b-2xl" : ""
            }`}
          >
            <span className="text-[#092856] font-dm-sans font-medium text-sm leading-snug">
              {row.feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
