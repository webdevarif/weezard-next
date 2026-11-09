import React from "react";
import { COMPARISON_ROWS, CellValue } from "../data";
import {
  LightningIcon,
  CrossIcon,
  CheckIcon,
  WarningIcon,
  WeezardCheckIcon,
  WeezardLogo,
} from "./ComparisonTableIcons";

/**
 * ComparisonTableDesktop Component
 * 
 * Desktop (lg and up) view of the Compare Table:
 * - 1320px wide container matching Figma canvas
 * - Rounded base table with royal blue header (#386BF6 / #305CD8)
 * - Distinct, visible horizontal and vertical interior grid lines (#CAD6F4)
 * - 10 precisely aligned rows (92px height each)
 * - Elevated Weezard card column (-top-[27px]) with glassmorphism,
 *   brand gradient, golden checkmarks (#EAD53F), and official logo.
 */

export const ComparisonTableDesktop: React.FC = () => {
  // Render status icon and text for Freelancers & Other Agencies
  const renderCellContent = (cell: CellValue) => {
    return (
      <div className="flex items-center gap-2.5">
        {cell.type === "cross" && (
          <CrossIcon className="w-[18px] h-[18px] flex-shrink-0" />
        )}
        {cell.type === "check" && (
          <CheckIcon className="w-[18px] h-[18px] flex-shrink-0" />
        )}
        {cell.type === "warning" && (
          <WarningIcon className="w-[18px] h-[18px] flex-shrink-0" />
        )}
        {cell.text && (
          <span className="text-[#092856] font-dm-sans font-normal text-[14px] xl:text-[15px] leading-snug">
            {cell.text}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="hidden lg:block relative w-full max-w-[1320px] mx-auto pt-7 pb-4">
      {/* Base Table Container with clear visible border */}
      <div
        className="relative bg-[#EEF2F9] rounded-2xl overflow-hidden shadow-sm"
        style={{ border: "1px solid #CAD6F4" }}
      >
        {/* Base Table Header Row (Height: 80px) with vertical column dividers */}
        <div
          className="grid grid-cols-[28%_22.5%_22.5%_27%] h-[80px] bg-gradient-to-r from-[#305CD8] to-[#4B77FA] items-stretch text-white font-dm-sans font-bold text-[18px]"
          style={{ borderBottom: "1px solid #CAD6F4" }}
        >
          {/* Col 1: Feature / Provider */}
          <div
            className="flex items-center gap-2 pl-8 pr-4"
            style={{ borderRight: "1px solid rgba(255, 255, 255, 0.25)" }}
          >
            <LightningIcon className="w-6 h-6 flex-shrink-0" />
            <span>Feature / Provider</span>
          </div>

          {/* Col 2: Freelancers */}
          <div
            className="flex items-center pl-6 pr-4"
            style={{ borderRight: "1px solid rgba(255, 255, 255, 0.25)" }}
          >
            <span>Freelancers</span>
          </div>

          {/* Col 3: Other Agencies */}
          <div
            className="flex items-center pl-6 pr-4"
            style={{ borderRight: "1px solid rgba(255, 255, 255, 0.25)" }}
          >
            <span>Other Agencies</span>
          </div>

          {/* Col 4: Spacer for elevated Weezard column */}
          <div aria-hidden="true" />
        </div>

        {/* Base Table 10 Data Rows with distinct vertical and horizontal divider lines */}
        <div>
          {COMPARISON_ROWS.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-[28%_22.5%_22.5%_27%] h-[92px] items-stretch transition-colors hover:bg-[#E4EDFB]"
              style={{
                borderBottom:
                  index < COMPARISON_ROWS.length - 1
                    ? "1px solid #CAD6F4"
                    : "none",
              }}
            >
              {/* Col 1: Feature Name */}
              <div
                className="flex items-center pl-8 pr-4"
                style={{ borderRight: "1px solid #CAD6F4" }}
              >
                <span className="text-[#092856] font-dm-sans font-medium text-[15px] xl:text-[16px]">
                  {row.feature}
                </span>
              </div>

              {/* Col 2: Freelancers */}
              <div
                className="flex items-center pl-6 pr-4"
                style={{ borderRight: "1px solid #CAD6F4" }}
              >
                {renderCellContent(row.freelancers)}
              </div>

              {/* Col 3: Other Agencies */}
              <div
                className="flex items-center pl-6 pr-4"
                style={{ borderRight: "1px solid #CAD6F4" }}
              >
                {renderCellContent(row.otherAgencies)}
              </div>

              {/* Col 4: Spacer occupied by Weezard column overlay */}
              <div aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

      {/* Elevated Weezard Column Card */}
      <div
        className="absolute right-0 top-0 bottom-4 w-[27%] rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(48,92,216,0.3)] bg-gradient-to-b from-[#305CD8] via-[#2B54D4] to-[#1E3FA8] backdrop-blur-[11px] z-10 flex flex-col pointer-events-auto"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow:
            "0 20px 40px -15px rgba(48, 92, 216, 0.45), 0 0 25px rgba(255, 255, 255, 0.12) inset",
        }}
      >
        {/* Ambient Glows */}
        <div
          className="absolute -top-16 -right-16 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#EAD53F]/25 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Weezard Header (Height: 80px base + 28px elevation = 108px) */}
        <div
          className="relative h-[108px] flex items-center justify-center px-4 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.25)" }}
        >
          <div className="flex items-center justify-center max-w-[170px] w-full">
            <WeezardLogo className="h-9 w-auto object-contain drop-shadow-sm" />
          </div>
        </div>

        {/* Weezard 10 Data Rows (Height: 92px each) with visible divider lines */}
        <div className="flex-1 flex flex-col">
          {COMPARISON_ROWS.map((row, index) => (
            <div
              key={index}
              className="h-[92px] flex items-center gap-3 px-6 xl:px-8 transition-colors hover:bg-white/10"
              style={{
                borderBottom:
                  index < COMPARISON_ROWS.length - 1
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "none",
              }}
            >
              <WeezardCheckIcon className="w-5 h-5 flex-shrink-0" />
              <span className="text-white font-dm-sans font-medium text-[14px] xl:text-[15px] leading-snug">
                {row.weezard.text || "Included"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
