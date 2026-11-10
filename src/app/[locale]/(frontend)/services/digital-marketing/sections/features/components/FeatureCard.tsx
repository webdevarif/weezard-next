import React from "react";
import { FeatureCardIcon } from "./FeatureCardIcon";

export interface FeatureCardData {
  id: string;
  title: string;
  highlightText?: string;
  description: string;
  variant?: "white" | "featured";
  iconPath?: string;
}

interface FeatureCardProps {
  card: FeatureCardData;
}

/**
 * FeatureCard Component
 * 
 * Individual feature card (315px x 310px in Figma):
 * - Rounded corners: 12px
 * - Normal State: Clean White card (`bg-white text-[#092856]`)
 * - Hover State: Interactive Royal Blue (#305CD8) on ALL cards with white text
 * - Highlight Text: Purple #903DD1 by default, switches to crisp white on hover
 * - Composable 3D icon with independent circular backdrop that shifts on hover
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({ card }) => {
  return (
    <div
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[12px] min-h-[310px] bg-white text-[#092856] shadow-[0px_20px_40px_rgba(37,75,148,0.1)] transition-all duration-300 hover:bg-[#305CD8] hover:text-white hover:shadow-[0px_20px_40px_rgba(37,75,148,0.22)] hover:-translate-y-2 cursor-pointer"
    >
      {/* Top: Composable 3D Icon Container */}
      <div className="mb-6">
        <FeatureCardIcon
          iconSrc={card.iconPath}
          variant="white"
        />
      </div>

      {/* Body: Title & Description */}
      <div className="flex flex-col gap-2 flex-grow">
        <h3 className="font-dm-sans font-bold text-xl sm:text-2xl leading-[32px] text-[#092856] transition-colors duration-300 group-hover:text-white">
          {card.title}
        </h3>

        <p className="font-manrope text-base sm:text-lg leading-[27px] text-[#495162] transition-colors duration-300 group-hover:text-white/95 font-normal">
          {card.highlightText ? (
            <>
              <span className="font-bold text-[#903DD1] transition-colors duration-300 group-hover:text-white">
                {card.highlightText}{" "}
              </span>
              {card.description}
            </>
          ) : (
            card.description
          )}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
