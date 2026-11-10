import React from "react";
import { COMPARISON_ROWS, ComparisonRowData, CellValue } from "../../data";
import {
  CrossIcon,
  CheckIcon,
  WarningIcon,
} from "../ComparisonTableIcons";

/**
 * ComparisonProviderCard Component
 * 
 * Reusable Mobile Card for standard competitors:
 * - Card 2: Freelancers
 * - Card 3: Other Agencies
 * 
 * Features:
 * - Gradient header badge matching Figma
 * - Dynamic rows with icons (Cross, Check, Warning) + accompanying text
 * - Clean borders and ice blue background
 */

interface ComparisonProviderCardProps {
  title: "Freelancers" | "Other Agencies" | string;
  providerKey: "freelancers" | "otherAgencies";
  rows?: ComparisonRowData[];
}

export const ComparisonProviderCard: React.FC<ComparisonProviderCardProps> = ({
  title,
  providerKey,
  rows = COMPARISON_ROWS,
}) => {
  const renderIcon = (cell: CellValue) => {
    switch (cell.type) {
      case "cross":
        return <CrossIcon className="w-4 h-4 flex-shrink-0" />;
      case "check":
        return <CheckIcon className="w-4 h-4 flex-shrink-0" />;
      case "warning":
        return <WarningIcon className="w-4 h-4 flex-shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-solid border-[#D0DCF2]">
      {/* Header Badge */}
      <div
        className="w-full py-3.5 px-4 flex items-center justify-center gap-2 rounded-t-2xl"
        style={{
          background: "linear-gradient(90deg, #4F70F4 0%, #6E88F8 100%)",
        }}
      >
        <span className="text-white font-dm-sans font-bold text-sm tracking-wide">
          {title}
        </span>
      </div>

      {/* Rows */}
      <div className="bg-[#EEF2F9] divide-y divide-solid divide-[#D9E2F2]">
        {rows.map((row, idx) => {
          const cell = row[providerKey];
          return (
            <div
              key={row.feature}
              className={`py-3.5 px-5 flex items-center gap-2.5 min-h-[52px] ${
                idx === rows.length - 1 ? "rounded-b-2xl" : ""
              }`}
            >
              <div className="flex-shrink-0">{renderIcon(cell)}</div>
              {cell.text ? (
                <span className="text-[#092856] font-dm-sans text-xs sm:text-sm leading-snug">
                  {cell.text}
                </span>
              ) : (
                <span className="sr-only">Included</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
