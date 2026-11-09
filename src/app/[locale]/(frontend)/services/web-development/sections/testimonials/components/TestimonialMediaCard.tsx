import React from "react";
import Image from "next/image";

export interface TestimonialMediaCardProps {
  image: string;
  clientName: string;
}

/**
 * Left Media Card matching Figma Frame 1686558267:
 * - Dimensions: 590px width x 414px height, border-radius 16px
 * - Gradient overlay: linear-gradient(153.47deg, rgba(48, 92, 216, 0) 16.65%, #305CD8 125.09%)
 * - Quotation badge (Frame 1171276690): 56px x 56px, bg-[#E1E9F8], rounded-[28px], icon color #305CD8
 */
export const TestimonialMediaCard: React.FC<TestimonialMediaCardProps> = ({
  image,
  clientName,
}) => {
  return (
    <div className="relative w-full lg:w-[590px] h-[320px] sm:h-[380px] lg:h-[414px] rounded-[16px] overflow-hidden flex-shrink-0 shadow-md bg-[#092856]">
      {/* Client Portrait Photo */}
      <Image
        src={image}
        alt={clientName}
        fill
        className="object-cover object-center transition-all duration-500"
        sizes="(max-width: 1024px) 100vw, 590px"
        priority
      />

      {/* Figma Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(153.47deg, rgba(48, 92, 216, 0) 16.65%, #305CD8 125.09%)",
        }}
      />

      {/* Quotation Badge (Frame 1171276690) */}
      <div className="absolute right-5 bottom-5 sm:right-6 sm:bottom-6 w-14 h-14 rounded-full bg-[#E1E9F8] flex items-center justify-center shadow-lg pointer-events-none">
        <svg
          className="w-[28px] h-[22px] text-[#305CD8]"
          viewBox="0 0 31 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.26667 22.4C5.78667 22.4 3.73333 21.5733 2.10667 19.92C0.48 18.2667 -0.253333 16.1467 0.08 13.56C0.426667 10.9733 1.54667 8.36 3.44 5.72C5.33333 3.08 7.64 1.17333 10.36 0L13.12 3.68C11.36 4.96 9.88 6.42667 8.68 8.08C7.48 9.73333 6.88 11.24 6.88 12.6C7.2 12.44 7.6 12.3333 8.08 12.28C8.56 12.2267 9.06667 12.2 9.6 12.2C11.52 12.2 13.0667 12.84 14.24 14.12C15.4133 15.4 16 16.9867 16 18.88C16 19.9467 15.6533 20.84 14.96 21.56C14.2667 22.28 13.2533 22.64 11.92 22.64C11.12 22.64 10.4267 22.48 9.84 22.16C9.25333 21.84 8.72 21.92 8.26667 22.4ZM23.2667 22.4C20.7867 22.4 18.7333 21.5733 17.1067 19.92C15.48 18.2667 14.7467 16.1467 15.08 13.56C15.4267 10.9733 16.5467 8.36 18.44 5.72C20.3333 3.08 22.64 1.17333 25.36 0L28.12 3.68C26.36 4.96 24.88 6.42667 23.68 8.08C22.48 9.73333 21.88 11.24 21.88 12.6C22.2 12.44 22.6 12.3333 23.08 12.28C23.56 12.2267 24.0667 12.2 24.6 12.2C26.52 12.2 28.0667 12.84 29.24 14.12C30.4133 15.4 31 16.9867 31 18.88C31 19.9467 30.6533 20.84 29.96 21.56C29.2667 22.28 28.2533 22.64 26.92 22.64C26.12 22.64 25.4267 22.48 24.84 22.16C24.2533 21.84 23.72 21.92 23.2667 22.4Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};
