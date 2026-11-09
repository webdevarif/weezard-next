import React from "react";
import { COMPARISON_ROWS, ComparisonRowData } from "../../data";
import { WeezardCheckIcon, WeezardLogo } from "../ComparisonTableIcons";

export interface ComparisonWeezardCardProps {
  rows?: ComparisonRowData[];
}

/**
 * ComparisonWeezardCard Component
 * 
 * Mobile Card 4: Highlighted Weezard Featured Card
 * - Rich royal blue gradient background (matching desktop featured column)
 * - Centered official white Weezard logo with sparkles in header
 * - Comparison rows with glowing gold/yellow checkmarks and white text
 * - Clean borders and rounded corners
 */
export const ComparisonWeezardCard: React.FC<ComparisonWeezardCardProps> = ({
  rows = COMPARISON_ROWS,
}) => {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden shadow-lg border border-solid border-[#4B6FD9]/60"
      style={{
        background:
          "linear-gradient(180deg, #305CD8 0%, #254DBF 40%, #1A3894 100%)",
      }}
    >
      {/* Header with Weezard Logo */}
      <div className="w-full py-5 px-4 flex flex-col items-center justify-center border-b border-solid border-[#567BE6]/40">
        <WeezardLogo className="h-7 w-auto drop-shadow-sm" />
      </div>

      {/* Rows */}
      <div className="divide-y divide-solid divide-[#4468CE]/40">
        {rows.map((row, idx) => {
          const cell = row.weezard;
          return (
            <div
              key={row.feature}
              className={`py-3.5 px-5 flex items-center gap-2.5 min-h-[52px] ${
                idx === rows.length - 1 ? "rounded-b-2xl" : ""
              }`}
            >
              <div className="flex-shrink-0">
                <WeezardCheckIcon className="w-4 h-4 flex-shrink-0" />
              </div>
              <span className="text-white font-dm-sans font-medium text-xs sm:text-sm leading-snug">
                {cell.text || "Included"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
