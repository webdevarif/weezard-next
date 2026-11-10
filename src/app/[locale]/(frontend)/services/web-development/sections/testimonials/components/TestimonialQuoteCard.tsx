import React from "react";

export interface TestimonialQuoteCardProps {
  quote: string;
  clientName: string;
  clientRole: string;
  rating?: number;
}

/**
 * Right Blue Quote Card matching Figma Frame 1686558264:
 * - Dimensions: 700px width x 414px height, border-radius 12px, bg-[#305CD8]
 * - Internal padding: 112px 69px (desktop), adjusted responsively on smaller screens
 * - 5 Golden Stars (Frame 1171276689): #FE9B0E
 * - Quote: DM Sans 400, 24px/32px, #FFFFFF
 * - Yellow horizontal divider (Vector 88): border 1px solid #EAD53F
 * - Name: DM Sans 600, 18px/27px, #FFFFFF
 * - Role: Manrope 400, 14px/22px, #FFFFFF
 */
export const TestimonialQuoteCard: React.FC<TestimonialQuoteCardProps> = ({
  quote,
  clientName,
  clientRole,
  rating = 5,
}) => {
  return (
    <div className="w-full lg:w-[700px] min-h-[360px] sm:min-h-[380px] lg:h-[414px] bg-[#305CD8] rounded-[12px] p-6 sm:p-10 lg:px-[69px] lg:py-[52px] flex flex-col justify-between shadow-lg text-white">
      {/* Top Section: Stars & Quote */}
      <div className="flex flex-col gap-4 sm:gap-5">
        {/* 5-Star Row (Frame 1171276689) */}
        <div className="flex items-center gap-1.5" aria-label={`${rating} out of 5 stars`}>
          {[...Array(5)].map((_, idx) => (
            <svg
              key={idx}
              className={`w-5 h-5 sm:w-6 sm:h-6 ${
                idx < rating ? "text-[#FE9B0E] fill-current" : "text-[#FE9B0E]/30 fill-none stroke-current"
              }`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          ))}
        </div>

        {/* Quote text */}
        <p className="font-dm-sans font-normal text-[18px] sm:text-[21px] lg:text-[24px] leading-[28px] sm:leading-[30px] lg:leading-[32px] text-white">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Bottom Section: Divider line & Client Details */}
      <div className="flex flex-col gap-3 sm:gap-3.5 pt-4">
        {/* Divider Vector 88: #EAD53F */}
        <div className="w-full border-t border-[#EAD53F]" />

        {/* Client Identity */}
        <div>
          <h4 className="font-dm-sans font-semibold text-[17px] sm:text-[18px] leading-[27px] text-white">
            {clientName}
          </h4>
          <p className="font-manrope font-normal text-[13px] sm:text-[14px] leading-[22px] text-white/90">
            {clientRole}
          </p>
        </div>
      </div>
    </div>
  );
};
