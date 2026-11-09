/**
 * PortfolioHeader Component
 * 
 * Renders the introductory header for the Portfolio section, including
 * a case study badge, primary heading, and informative description text
 * with mobile line-clamping and expandable "See More" functionality.
 */

import React from "react";
import { Badge } from "@/app/[locale]/components/ui/badge";
import { PortfolioHeaderProps } from "../types";
import { ExpandableParagraph } from "@/app/[locale]/components/ui/expandable-paragraph";

export const PortfolioHeader: React.FC<PortfolioHeaderProps> = ({
  badgeText = "CASE STUDY",
  title = "Our Portfolio",
  description = "Every project we touch on is built with purpose, precision, and achievable goals. These portfolios highlight the kind of work we stand behind. These reflect our craft, our care, and our commitment to helping brands grow. Take a scroll through the transformations we’ve crafted, and find out what Weezard can do for you.",
}) => {
  return (
    <div className="portfolio-header">
      {/* Category / Section Badge */}
      <Badge className="px-4 py-2 text-sm font-medium rounded-full bg-blue-50 text-blue-600 border-blue-200 mb-[10px]">
        {badgeText}
      </Badge>

      {/* Main Section Heading */}
      <h2 className="text-4xl font-dm-sans lg:text-title-2 font-bold text-navy leading-tight mb-[20px]">
        {title}
      </h2>

      {/* Descriptive Paragraph with Mobile Line Clamping & See More */}
      <div className="max-w-[540px] mb-[32px] lg:mb-[40px]">
        <ExpandableParagraph
          text={description}
          className="text-lg text-muted-foreground leading-relaxed"
          variant="blue"
          align="left"
        />
      </div>
    </div>
  );
};
