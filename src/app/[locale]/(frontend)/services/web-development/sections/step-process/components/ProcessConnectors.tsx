/**
 * Process Connectors Component
 *
 * Exact curved dashed gradient trajectory vectors extracted directly from Figma Process.svg:
 * - Coordinates calibrated precisely to match the 1319px x 373px timeline frame.
 * - Arrow 1 (Step 1 -> Step 2): Downwards-right curve under Step 1 entering Step 2.
 * - Arrow 2 (Step 2 -> Step 3): Upwards-right curve above Step 2 entering Step 3.
 * - Arrow 3 (Step 3 -> Step 4): Downwards-right curve under Step 3 entering Step 4.
 * - Arrow 4 (Step 4 -> Step 5): Upwards-right curve above Step 4 entering Step 5.
 */

"use client";

import React from "react";

export const ProcessConnectors: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="hidden lg:block absolute inset-0 pointer-events-none select-none z-0"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/services/web-development/process/all-connectors.svg"
        alt="Process timeline connectors"
        className="w-full h-full object-fill pointer-events-none"
      />
    </div>
  );
};
