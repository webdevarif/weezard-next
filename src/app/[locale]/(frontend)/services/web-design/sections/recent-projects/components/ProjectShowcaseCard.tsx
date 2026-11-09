/**
 * ProjectShowcaseCard Component
 * 
 * Reusable image card wrapper for portfolio projects:
 * - Next.js Image with optimized responsive sizes
 * - Smooth hover zoom micro-interaction
 * - Polished rounded corners and elevation shadows
 * - Supports full-height filling (isFullHeight) to prevent white gaps
 */

"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectShowcaseCardProps {
  imageSrc: StaticImageData;
  title: string;
  className?: string;
  aspectClass?: string;
  isFullHeight?: boolean;
  sizes?: string;
}

export const ProjectShowcaseCard: React.FC<ProjectShowcaseCardProps> = ({
  imageSrc,
  title,
  className = "",
  aspectClass = "aspect-[16/10]",
  isFullHeight = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px",
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-[16px] sm:rounded-[20px] bg-[#111827] border border-[#E2E8F0]/60 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_22px_48px_rgba(15,23,42,0.13)] transition-all duration-400 ease-out hover:-translate-y-1 ${className}`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          isFullHeight ? "h-full min-h-[480px] sm:min-h-[580px] lg:min-h-full" : aspectClass
        }`}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          sizes={sizes}
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
};

export default ProjectShowcaseCard;
