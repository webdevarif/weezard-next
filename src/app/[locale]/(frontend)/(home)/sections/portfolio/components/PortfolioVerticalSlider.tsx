/**
 * PortfolioVerticalSlider Component
 * 
 * Desktop 2-column continuous vertical scrolling ticker showcasing portfolio cards.
 * Left column smoothly scrolls UP, right column scrolls DOWN.
 * Pauses on hover for user inspection.
 */

import React from "react";
import Image from "next/image";
import { Card } from "@/app/[locale]/components/ui/card";
import { Badge } from "@/app/[locale]/components/ui/badge";
import { PortfolioVerticalSliderProps } from "../types";
import styles from "../portfolio.module.css";

export const PortfolioVerticalSlider: React.FC<PortfolioVerticalSliderProps> = ({ items }) => {
  // Separate into alternating left & right column streams matching Figma layout
  const leftCol = items.filter((_, idx) => idx % 2 === 0);
  const rightCol = items.filter((_, idx) => idx % 2 === 1);

  // If a column has too few items, duplicate to maintain smooth infinite scrolling
  const leftItems = leftCol.length > 0 ? (leftCol.length < 3 ? [...leftCol, ...leftCol, ...leftCol] : leftCol) : items;
  const rightItems = rightCol.length > 0 ? (rightCol.length < 3 ? [...rightCol, ...rightCol, ...rightCol] : rightCol) : items;

  return (
    <div className="hidden lg:block">
      <div className={`${styles.sliderContainer} group relative h-[650px] overflow-hidden`}>
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column - Continuous Scroll UP */}
          <div className={`${styles.sliderColUp} slider-col up`}>
            <div className="space-y-6">
              {[...leftItems, ...leftItems].map((item, index) => (
                <Card
                  key={`up-${item.id}-${index}`}
                  className="relative overflow-hidden rounded-[16px] h-[370px] border border-solid border-blue"
                >
                  <Badge className="absolute top-[16px] left-[18px] z-10 bg-black/75 rounded-[6px] text-white uppercase text-[14px] border-none px-[6px] py-[4px]">
                    {item.category}
                  </Badge>
                  <Image
                    src={item.image}
                    alt={item.category}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Continuous Scroll DOWN */}
          <div className={`${styles.sliderColDown} slider-col down`}>
            <div className="space-y-6">
              {[...rightItems, ...rightItems].map((item, index) => (
                <Card
                  key={`down-${item.id}-${index}`}
                  className="relative overflow-hidden rounded-[16px] h-[370px] border border-solid border-blue"
                >
                  <Badge className="absolute top-[16px] left-[18px] z-10 bg-black/75 rounded-[6px] text-white uppercase text-[14px] border-none px-[6px] py-[4px]">
                    {item.category}
                  </Badge>
                  <Image
                    src={item.image}
                    alt={item.category}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

