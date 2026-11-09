import React from "react";

interface Props {
  title?: string;
  subtitle?: string;
}

/**
 * DigitalMarketingTestimonials Component
 * 
 * Section 8: Client Feedback & Reviews
 * Matches Y: 8000 - 9000 in Digital Marketing SVG
 */
export const DigitalMarketingTestimonials: React.FC<Props> = ({
  title = "What Our Marketing Clients Say",
  subtitle = "Don't just take our word for it. Hear directly from founders and growth leaders who trust Weezard with their marketing pipelines.",
}) => {
  return (
    <section className="py-20 md:py-28 bg-[#FBFDFF] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Section Header */}
        <div className="text-center max-w-[850px] mx-auto mb-14 md:mb-16">
          <span className="text-[#305CD8] font-dm-sans font-semibold text-sm uppercase tracking-wider mb-3 inline-block">
            Client Testimonials
          </span>
          <h2 className="text-[#092856] font-dm-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[52px] tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-[#495162] font-manrope text-base sm:text-lg leading-relaxed max-w-[760px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Placeholder / Layout Frame */}
        <div className="w-full min-h-[360px] rounded-2xl bg-white border border-dashed border-[#CAD6F4] flex flex-col items-center justify-center p-8 text-center shadow-sm">
          <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center font-bold text-2xl mb-4">
            ★
          </div>
          <h3 className="text-[#092856] font-dm-sans font-bold text-xl mb-2">
            Client Reviews & Ratings (4.9/5)
          </h3>
          <p className="text-[#495162] font-manrope text-sm sm:text-base max-w-md">
            Testimonial quotes and client rating cards ready for final SVG copy and avatars.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingTestimonials;
