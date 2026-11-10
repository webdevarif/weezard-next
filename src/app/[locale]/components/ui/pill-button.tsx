import React from "react";
import { Link } from "@/lib/i18n/routing";

export interface PillButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * If provided, renders an accessible internal Next.js <Link> with i18n routing.
   * If omitted, renders a native HTML <button>.
   */
  href?: string;
  /**
   * Text label for the button. Can also be passed via children.
   */
  label?: string;
  /**
   * Optional custom icon. Defaults to standard diagonal up-right arrow (↗).
   */
  icon?: React.ReactNode;
  /**
   * Icon position relative to the label: "right" (default) or "left" or "none".
   */
  iconPosition?: "right" | "left" | "none";
  /**
   * Visual style variant:
   * - "outline": transparent bg with #092856 border (default)
   * - "solid-blue": #305CD8 filled button with subtle shadow
   * - "solid-purple": #903DD1 filled button with subtle shadow
   * - "solid-dark": #092856 filled button
   */
  variant?: "outline" | "solid-blue" | "solid-purple" | "solid-dark";
  /**
   * Hover fill color behavior for outline buttons:
   * - "dark": fills with #092856 and white text (default)
   * - "blue": fills with #305CD8 and white text
   */
  hoverVariant?: "dark" | "blue";
  /**
   * Size presets:
   * - "lg": h-[60px] (Figma standard for service headers & primary actions)
   * - "default": h-[54px]
   * - "sm": h-[46px]
   */
  size?: "lg" | "default" | "sm";
  /**
   * Additional custom classes to apply to container.
   */
  className?: string;
  children?: React.ReactNode;
}

/**
 * Default diagonal up-right arrow icon (↗) matching Figma specs
 */
const DefaultArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
      className || ""
    }`}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * PillButton Component
 * 
 * Global, reusable, pixel-perfect pill button for Weezard Next.js:
 * - Rounded full (9999px)
 * - Exact typography: font-dm-sans, font-semibold (16px / line-height 20px / tracking -0.01em)
 * - Dynamic label, href, icon, and hover styles
 * - Reused across Web Development, Web Design, and Digital Marketing pages
 */
export const PillButton: React.FC<PillButtonProps> = ({
  href,
  label,
  icon,
  iconPosition = "right",
  variant = "outline",
  hoverVariant = "dark",
  size = "lg",
  className = "",
  children,
  onClick,
  disabled,
  type = "button",
  ...props
}) => {
  // Size classes
  const sizeClasses = {
    lg: "min-h-[60px] px-7 sm:px-8 text-base",
    default: "min-h-[54px] px-6 sm:px-7 text-[15px] sm:text-base",
    sm: "min-h-[46px] px-5 sm:px-6 text-sm",
  }[size];

  // Variant classes
  let variantClasses = "";
  if (variant === "outline") {
    const hoverBgClass =
      hoverVariant === "blue"
        ? "hover:bg-[#305CD8] hover:border-[#305CD8] hover:shadow-[0_8px_20px_rgba(48,92,216,0.25)]"
        : "hover:bg-[#092856] hover:border-[#092856] hover:shadow-lg";

    variantClasses = `bg-transparent border border-solid border-[#092856] text-[#092856] hover:text-white ${hoverBgClass}`;
  } else if (variant === "solid-blue") {
    variantClasses =
      "bg-[#305CD8] border border-solid border-[#305CD8] text-white shadow-[0px_9px_45px_rgba(0,95,200,0.17)] hover:bg-[#254ab8] hover:border-[#254ab8]";
  } else if (variant === "solid-purple") {
    variantClasses =
      "bg-[#903DD1] border border-solid border-[#903DD1] text-white shadow-[0px_9px_45px_rgba(0,95,200,0.17)] hover:bg-[#7e2ebc] hover:border-[#7e2ebc]";
  } else if (variant === "solid-dark") {
    variantClasses =
      "bg-[#092856] border border-solid border-[#092856] text-white hover:bg-[#061c3d] hover:border-[#061c3d]";
  }

  const baseClasses = `group inline-flex items-center justify-center gap-2.5 rounded-full font-dm-sans font-semibold leading-[20px] tracking-[-0.01em] transition-all duration-300 select-none flex-shrink-0 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ${sizeClasses} ${variantClasses} ${className}`;

  const renderContent = () => (
    <>
      {iconPosition === "left" && (icon || <DefaultArrowIcon />)}
      <span>{label || children}</span>
      {iconPosition === "right" && (icon || <DefaultArrowIcon />)}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default PillButton;
