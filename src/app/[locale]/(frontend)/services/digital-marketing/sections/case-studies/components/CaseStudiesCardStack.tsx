import React from "react";
import Image from "next/image";

interface CaseStudiesCardStackProps {
  imageSrc: string;
  activeBorderColor?: string;
}

/**
 * CaseStudiesCardStack Component
 * 
 * Strict Figma Pixel-Perfect 3-Layer Card Stack (Frame 1686558382):
 * - Layer 3 (Bottom Purple - Rectangle 9012):
 *   - Width: 719px, Height: 430px, left: 601px, top: 80px
 *   - Background: linear-gradient(117.05deg, #DBB0FE 10.45%, #903DD1 77.87%, #4A1F6B 132.39%)
 *   - Border-radius: 16px
 * - Layer 2 (Middle Blue - Rectangle 9011):
 *   - Width: 703px, Height: 450px, left: 617px, top: 40px
 *   - Background: linear-gradient(116.55deg, #AAC1FF 0%, #305CD8 13.77%, #193172 149.21%)
 *   - Shadow: 0px 20px 60px rgba(37, 75, 148, 0.13)
 *   - Border-radius: 16px
 * - Layer 1 (Top Photo Card - Rectangle 9010):
 *   - Width: 686px, Height: 470px, left: 634px, top: 0px
 *   - Border: 1px solid #EE3838 (or dynamic active border)
 *   - Shadow: 0px 20px 60px rgba(37, 75, 148, 0.13)
 *   - Border-radius: 16px
 */
export const CaseStudiesCardStack: React.FC<CaseStudiesCardStackProps> = ({
  imageSrc,
  activeBorderColor = "#EE3838",
}) => {
  return (
    <div className="relative w-full lg:w-[719px] h-[320px] sm:h-[440px] lg:h-[510px] flex-shrink-0">
      {/* Layer 3: Bottom Purple Gradient Card (Rectangle 9012) */}
      <div
        style={{
          background:
            "linear-gradient(117.05deg, #DBB0FE 10.45%, #903DD1 77.87%, #4A1F6B 132.39%)",
        }}
        className="absolute left-0 top-[36px] sm:top-[60px] lg:top-[80px] w-[95%] lg:w-[719px] h-[270px] sm:h-[370px] lg:h-[430px] rounded-[16px]"
        aria-hidden="true"
      />

      {/* Layer 2: Middle Royal Blue Gradient Card (Rectangle 9011) */}
      <div
        style={{
          background:
            "linear-gradient(116.55deg, #AAC1FF 0%, #305CD8 13.77%, #193172 149.21%)",
        }}
        className="absolute left-[10px] sm:left-[16px] top-[18px] sm:top-[30px] lg:top-[40px] w-[95%] lg:w-[703px] h-[280px] sm:h-[385px] lg:h-[450px] rounded-[16px] shadow-[0px_20px_60px_rgba(37,75,148,0.13)]"
        aria-hidden="true"
      />

      {/* Layer 1: Top Hero Image Card (Rectangle 9010) */}
      <div
        style={{ borderColor: activeBorderColor }}
        className="absolute left-[20px] sm:left-[33px] top-0 w-[94%] lg:w-[686px] h-[290px] sm:h-[400px] lg:h-[470px] rounded-[16px] border overflow-hidden shadow-[0px_20px_60px_rgba(37,75,148,0.13)] bg-[#F7A8B8] transition-colors duration-300"
      >
        <Image
          src={imageSrc}
          alt="Real Business Growth Case Study"
          fill
          sizes="(max-width: 1024px) 100vw, 686px"
          className="object-cover object-center"
          priority={false}
        />
      </div>
    </div>
  );
};

export default CaseStudiesCardStack;
