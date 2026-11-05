"use client";

import React, { useState } from "react";
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
 * ComparisonTableMobile Component
 * 
 * Mobile & Tablet (< lg) responsive view:
 * - Segmented tab selector (Weezard, Freelancers, Other Agencies)
 * - Beautiful card presentation of all 10 features for the active selection
 * - Highlights Weezard as the recommended choice with blue gradient
 * - Crisp, visible borders matching the desktop clone
 */

type ProviderTab = "weezard" | "freelancers" | "otherAgencies";

export const ComparisonTableMobile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProviderTab>("weezard");

  const renderCellBadge = (cell: CellValue, isWeezard: boolean = false) => {
    if (isWeezard) {
      return (
        <div className="flex items-start gap-2.5">
          <WeezardCheckIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span className="text-white font-dm-sans font-medium text-[14px] leading-snug">
            {cell.text || "Included"}
          </span>
        </div>
      );
    }

    return (
      <div className="flex items-start gap-2">
        {cell.type === "cross" && (
          <CrossIcon className="w-[18px] h-[18px] flex-shrink-0 mt-0.5" />
        )}
        {cell.type === "check" && (
          <CheckIcon className="w-[18px] h-[18px] flex-shrink-0 mt-0.5" />
        )}
        {cell.type === "warning" && (
          <WarningIcon className="w-[18px] h-[18px] flex-shrink-0 mt-0.5" />
        )}
        <span className="text-[#092856] font-dm-sans text-[14px] leading-snug">
          {cell.text || (cell.type === "check" ? "Included" : "Limited")}
        </span>
      </div>
    );
  };

  return (
    <div className="block lg:hidden w-full px-4">
      {/* Mobile Tab Switcher */}
      <div
        className="flex items-center justify-center p-1.5 bg-[#EEF2F9] rounded-2xl max-w-[420px] mx-auto mb-6"
        style={{ border: "1px solid #CAD6F4" }}
      >
        <button
          type="button"
          onClick={() => setActiveTab("weezard")}
          className={`flex-1 py-2.5 px-3 rounded-xl font-dm-sans font-bold text-xs sm:text-sm transition-all duration-200 ${
            activeTab === "weezard"
              ? "bg-[#305CD8] text-white shadow-md"
              : "text-[#092856] hover:text-[#305CD8]"
          }`}
        >
          Weezard ★
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("freelancers")}
          className={`flex-1 py-2.5 px-3 rounded-xl font-dm-sans font-semibold text-xs sm:text-sm transition-all duration-200 ${
            activeTab === "freelancers"
              ? "bg-white text-[#092856] shadow-sm"
              : "text-[#495162] hover:text-[#092856]"
          }`}
        >
          Freelancers
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("otherAgencies")}
          className={`flex-1 py-2.5 px-3 rounded-xl font-dm-sans font-semibold text-xs sm:text-sm transition-all duration-200 ${
            activeTab === "otherAgencies"
              ? "bg-white text-[#092856] shadow-sm"
              : "text-[#495162] hover:text-[#092856]"
          }`}
        >
          Other Agencies
        </button>
      </div>

      {/* Active Provider Card Container */}
      {activeTab === "weezard" ? (
        // Weezard Highlighted Card
        <div
          className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#305CD8] via-[#2B54D4] to-[#1E3FA8] p-6 shadow-xl"
          style={{ border: "1px solid rgba(255, 255, 255, 0.3)" }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between pb-5 mb-5"
            style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.25)" }}
          >
            <div className="max-w-[140px]">
              <WeezardLogo className="h-8 w-auto object-contain drop-shadow-sm" />
            </div>
            <span className="px-3 py-1 rounded-full bg-white/20 text-white font-dm-sans text-xs font-semibold uppercase tracking-wider">
              Recommended
            </span>
          </div>

          {/* List of features */}
          <div className="space-y-4">
            {COMPARISON_ROWS.map((row, index) => (
              <div
                key={index}
                className="p-3.5 rounded-xl bg-white/10"
                style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
              >
                <div className="text-white/80 font-dm-sans text-xs font-semibold uppercase tracking-wide mb-1.5">
                  {row.feature}
                </div>
                {renderCellBadge(row.weezard, true)}
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Standard Provider Card (Freelancers or Other Agencies)
        <div
          className="rounded-2xl bg-[#EEF2F9] p-6 shadow-sm"
          style={{ border: "1px solid #CAD6F4" }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-2 pb-5 mb-5"
            style={{ borderBottom: "1px solid #CAD6F4" }}
          >
            <LightningIcon className="w-5 h-5 flex-shrink-0" />
            <h3 className="text-[#092856] font-dm-sans font-bold text-lg">
              {activeTab === "freelancers" ? "Freelancers" : "Other Agencies"}
            </h3>
          </div>

          {/* List of features */}
          <div className="space-y-4">
            {COMPARISON_ROWS.map((row, index) => {
              const cellData =
                activeTab === "freelancers"
                  ? row.freelancers
                  : row.otherAgencies;
              return (
                <div
                  key={index}
                  className="p-3.5 rounded-xl bg-white"
                  style={{ border: "1px solid #CAD6F4" }}
                >
                  <div className="text-[#495162] font-dm-sans text-xs font-semibold uppercase tracking-wide mb-1.5">
                    {row.feature}
                  </div>
                  {renderCellBadge(cellData, false)}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
