/**
 * PortfolioMobileCarousel Component
 * 
 * Mobile & tablet (< 1024px) carousel for portfolio project cards.
 * Enables touch swipe gestures with active bullet indicators.
 */

import React from "react";
import Image from "next/image";
import { Card } from "@/app/[locale]/components/ui/card";
import { Badge } from "@/app/[locale]/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/app/[locale]/components/ui/carousel";
import { PortfolioMobileCarouselProps } from "../types";

export const PortfolioMobileCarousel: React.FC<PortfolioMobileCarouselProps> = ({ items }) => {
  return (
    <div className="lg:hidden w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {items.map((item, index) => (
            <CarouselItem key={`${item.id}-${index}`} className="basis-[90%] sm:basis-[60%] pl-4">
              <Card className="relative overflow-hidden rounded-[16px] h-[320px] sm:h-[370px] border border-solid border-blue">
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="mt-6 [&_.carousel-bullet]:bg-[#D9D9D9] [&_.carousel-bullet-active]:!bg-[#305CD8]" />
      </Carousel>
    </div>
  );
};

