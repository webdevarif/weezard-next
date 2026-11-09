import React from "react";
import Image from "next/image";
import caseStudyPhoto from "../../../assets/case_study/case_study_photo_0.jpg";

/**
 * CaseStudyImage Component
 * 
 * Right card displaying the high-resolution case study showcase photo:
 * - Extracted directly from the Figma design asset
 * - Rounded-2xl corners with subtle border
 * - Brand blue vignette overlay matching Figma paint1_linear (#305CD8)
 */

interface CaseStudyImageProps {
  imageAlt: string;
}

export const CaseStudyImage: React.FC<CaseStudyImageProps> = ({ imageAlt }) => {
  return (
    <div
      className="flex-1 w-full lg:max-w-[548px] min-h-[420px] lg:min-h-[620px] rounded-2xl overflow-hidden relative shadow-sm bg-slate-100"
      style={{ border: "1.5px solid #CAD6F4" }}
    >
      {/* High-Resolution Stock Photo */}
      <Image
        src={caseStudyPhoto}
        alt={imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 548px"
        className="object-cover object-center transition-transform duration-700 hover:scale-105"
        priority
      />

      {/* Figma Blue Vignette Overlay (paint1_linear_64730_9498) */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#305CD8]/45 via-[#305CD8]/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Crisp Border Overlay to guarantee 100% visibility over image */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10"
        style={{ border: "1.5px solid #CAD6F4" }}
        aria-hidden="true"
      />
    </div>
  );
};

