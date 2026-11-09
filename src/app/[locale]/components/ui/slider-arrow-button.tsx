import * as React from "react";
import { cn } from "@/lib/utils";

export interface SliderArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Direction the arrow points */
  direction: "left" | "right";
  /** Button sizing preset */
  size?: "sm" | "md" | "lg";
}

/**
 * Global reusable slider navigation button.
 * Matches Figma specifications:
 * - Normal: Light circular button with thin slate border (#495162, opacity ~50%) and dark navy arrow.
 * - Hover: Solid dark navy (#092856) background with crisp white (#FFFFFF) arrow icon.
 */
export const SliderArrowButton = React.forwardRef<
  HTMLButtonElement,
  SliderArrowButtonProps
>(({ direction, size = "md", className, disabled, ...props }, ref) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-[50px] h-[50px]",
    lg: "w-14 h-14",
  }[size];

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }[size];

  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      aria-label={props["aria-label"] || (direction === "left" ? "Previous" : "Next")}
      className={cn(
        // Base structure & flex alignment
        "relative inline-flex items-center justify-center rounded-full flex-shrink-0 cursor-pointer select-none",
        // Default / Normal state matching Figma CSS (transparent background, opacity: 0.5, border: 1px solid #495162, arrow icon: 2px solid #092856)
        "bg-transparent border border-solid border-[#495162] opacity-50 text-[#092856]",
        // Hover state (Solid #092856 background, full opacity, border: 1px solid #092856, white icon)
        "hover:bg-[#092856] hover:border-[#092856] hover:opacity-100 hover:text-white hover:shadow-md",
        // Focus state
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#092856] focus-visible:ring-offset-2",
        // Active click & transition
        "active:scale-95 transition-all duration-300 ease-in-out",
        // Disabled state
        "disabled:opacity-20 disabled:pointer-events-none disabled:shadow-none",
        sizeClasses,
        className
      )}
      {...props}
    >
      <svg
        className={cn(iconSizes, "flex-shrink-0 transition-transform duration-200")}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "left" ? (
          <path
            d="M19 12H5M12 19L5 12L12 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M5 12H19M12 5L19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
});

SliderArrowButton.displayName = "SliderArrowButton";
