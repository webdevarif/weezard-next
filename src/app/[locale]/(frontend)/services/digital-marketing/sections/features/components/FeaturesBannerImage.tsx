import React from "react";
import Image from "next/image";

interface FeaturesBannerImageProps {
  src: string;
  alt: string;
}

/**
 * FeaturesBannerImage Component
 * 
 * Bottom composition banner:
 * - Dimensions: 1320px x 600px (Figma frame)
 * - Rounded corners: 16px
 * - Subtle hover zoom on the image inside overflow-hidden container
 */
export const FeaturesBannerImage: React.FC<FeaturesBannerImageProps> = ({
  src,
  alt,
}) => {
  return (
    <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[600px] rounded-[16px] overflow-hidden shadow-sm group">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1440px) 1320px, 1320px"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        priority={false}
      />
    </div>
  );
};

export default FeaturesBannerImage;
