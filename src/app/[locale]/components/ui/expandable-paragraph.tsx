/**
 * ExpandableParagraph Component
 * 
 * An atomic, responsive text component that clamps text to a specified
 * number of lines on mobile devices (< lg) with a toggleable "See More" / "See Less" button,
 * while displaying the full text unconditionally on desktop (>= lg).
 * 
 * Variants:
 * - "blue": For light backgrounds (Royal Blue `#305CD8` button)
 * - "yellow": For dark navy backgrounds (Yellow/Gold button)
 */

"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface ExpandableParagraphProps {
  /** The full text content to display */
  text: string;
  /** Number of lines to clamp on mobile when collapsed (default: 3) */
  lines?: number;
  /** Visual theme for the "See More" button ('blue' for light bg, 'yellow' for dark bg) */
  variant?: "blue" | "yellow";
  /** Custom classes for the paragraph element */
  className?: string;
  /** Custom classes for the "See More / See Less" button */
  buttonClassName?: string;
  /** Mobile button text alignment ('left', 'center', or 'auto' to inherit) */
  align?: "left" | "center" | "auto";
}

export const ExpandableParagraph: React.FC<ExpandableParagraphProps> = ({
  text,
  lines = 3,
  variant = "blue",
  className,
  buttonClassName,
  align = "auto",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Dynamic line clamp classes (default 3 lines on mobile, always un-clamped on desktop)
  const lineClampClass = !isExpanded
    ? lines === 3
      ? "line-clamp-3 lg:line-clamp-none"
      : lines === 2
      ? "line-clamp-2 lg:line-clamp-none"
      : lines === 4
      ? "line-clamp-4 lg:line-clamp-none"
      : "line-clamp-3 lg:line-clamp-none"
    : "line-clamp-none";

  // Alignment classes for mobile button wrapper
  const alignClass =
    align === "center"
      ? "text-center lg:text-start"
      : align === "left"
      ? "text-start"
      : "";

  return (
    <div className="w-full">
      <p className={cn(lineClampClass, className)}>
        {text}
      </p>

      {/* Mobile-only toggle button */}
      <div className={cn("mt-[8px] lg:hidden", alignClass)}>
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className={cn(
            "inline-block font-medium underline underline-offset-[3px] text-[15px] sm:text-[16px] transition-colors cursor-pointer select-none",
            variant === "yellow"
              ? "text-yellow hover:text-yellow/80 decoration-yellow"
              : "text-blue hover:text-blue/80 decoration-blue",
            buttonClassName
          )}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default ExpandableParagraph;

