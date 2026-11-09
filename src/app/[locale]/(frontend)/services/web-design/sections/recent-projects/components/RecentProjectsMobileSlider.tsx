/**
 * RecentProjectsMobileSlider Component
 * 
 * Mobile & tablet (< 1024px) touch-enabled carousel for Recent Web Design Projects.
 * - Displays high-fidelity project preview cards with smooth swipe support
 * - Peek-ahead next slide view (basis-[86%] sm:basis-[75%])
 * - Pagination dot indicators with royal blue active bullet
 */

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/app/[locale]/components/ui/carousel";

// Project Showcase Static Assets
import CarShowcaseImg from "../../../assets/recent_projects/project-car-showcase.png";
import VrWorldImg from "../../../assets/recent_projects/project-vr-world.png";
import PixelPhoneImg from "../../../assets/recent_projects/project-pixel-phone.png";
import IPadProImg from "../../../assets/recent_projects/project-ipad-pro.png";

const MOBILE_PROJECTS = [
  {
    id: "car-showcase",
    title: "Automotive Luxury Car Web Design",
    image: CarShowcaseImg,
  },
  {
    id: "vr-world",
    title: "VR World Interactive Digital Platform",
    image: VrWorldImg,
  },
  {
    id: "pixel-phone",
    title: "Google Pixel 5 Showcase Website",
    image: PixelPhoneImg,
  },
  {
    id: "ipad-pro",
    title: "Apple iPad Pro Performance Web Design",
    image: IPadProImg,
  },
];

export const RecentProjectsMobileSlider: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  const scrollTo = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="lg:hidden w-full relative z-20">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-3 sm:-ml-4">
          {MOBILE_PROJECTS.map((project) => (
            <CarouselItem
              key={project.id}
              className="basis-[86%] sm:basis-[72%] pl-3 sm:pl-4"
            >
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-[20px] overflow-hidden bg-[#111827] border border-solid border-[#E2E8F0]/80 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 86vw, 500px"
                  priority={project.id === "car-showcase"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Exact Dots matching Figma reference */}
        <div className="flex justify-center items-center gap-2.5 mt-6 py-2">
          {MOBILE_PROJECTS.map((_, index) => {
            const isActive = selectedIndex === index;
            return (
              <button
                key={index}
                type="button"
                aria-label={`Go to project slide ${index + 1}`}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer p-0 border-0 outline-none ${
                  isActive
                    ? "w-3 h-3 bg-[#305CD8] shadow-[0_2px_8px_rgba(48,92,216,0.35)]"
                    : "w-2.5 h-2.5 bg-[#D9D9D9] hover:bg-[#B0B7C3]"
                }`}
              />
            );
          })}
        </div>
      </Carousel>
    </div>
  );
};

export default RecentProjectsMobileSlider;
