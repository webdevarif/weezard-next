import React from "react";
import Image from "next/image";

interface FeatureCardIconProps {
  /**
   * Optional custom 3D icon path.
   * Defaults to "/services/digital-marketing/why-choose-us/icon_3d.png"
   */
  iconSrc?: string;
  /**
   * Card color variant: "white" or "featured"
   */
  variant?: "white" | "featured";
}

/**
 * FeatureCardIcon Component
 * 
 * Modular icon container:
 * - Separates the circular radial-gradient background from the 3D icon layer.
 * - Allows individual 3D icon swapping or background tweaking without affecting card layouts.
 * - Exact Figma geometry: 60px x 60px circle with inset shadow `inset 0px -3px 13px rgba(61, 96, 209, 0.4)`.
 * - Responsive to card hover: shifts gracefully to frosted white background on hover.
 */
export const FeatureCardIcon: React.FC<FeatureCardIconProps> = ({
  iconSrc = "/services/digital-marketing/why-choose-us/icon_3d.png",
  variant = "white",
}) => {
  const isFeatured = variant === "featured";

  return (
    <div
      className={`relative flex items-center justify-center w-[60px] h-[60px] rounded-[30px] flex-shrink-0 transition-all duration-300 group-hover:scale-105 ${
        isFeatured
          ? "bg-[rgba(255,255,255,0.7)] shadow-[inset_0px_-3px_13px_rgba(61,96,209,0.4)]"
          : "bg-[radial-gradient(40.2%_40.2%_at_52.5%_50%,rgba(255,255,255,0.075)_71.63%,rgba(71,61,209,0.175)_100%)] group-hover:bg-[rgba(255,255,255,0.7)] shadow-[inset_0px_-3px_13px_rgba(61,96,209,0.4)]"
      }`}
    >
      {/* 3D Icon Layer */}
      <div className="relative w-[33px] h-[35px] flex items-center justify-center">
        <Image
          src={iconSrc}
          alt="Feature icon"
          width={33}
          height={35}
          className="w-[33px] h-[35px] object-contain drop-shadow-sm select-none"
        />
      </div>
    </div>
  );
};

export default FeatureCardIcon;
