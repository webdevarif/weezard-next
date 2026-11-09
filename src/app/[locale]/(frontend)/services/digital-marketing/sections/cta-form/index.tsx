import React from "react";
import { Link } from "@/lib/i18n/routing";

interface Props {
  title?: string;
  subtitle?: string;
}

/**
 * DigitalMarketingCtaForm Component
 * 
 * Section 10: Lead Generation Contact Form
 * Matches Y: 10000 - 10800 in Digital Marketing SVG
 */
export const DigitalMarketingCtaForm: React.FC<Props> = ({
  title = "Get Your Free Marketing Audit & Proposal",
  subtitle = "Tell us about your business goals and current ad spend. We'll show you exactly where you're leaving revenue on the table.",
}) => {
  return (
    <section className="py-20 md:py-28 bg-[#F5F8FF] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Section Header */}
        <div className="text-center max-w-[850px] mx-auto mb-14 md:mb-16">
          <span className="text-[#305CD8] font-dm-sans font-semibold text-sm uppercase tracking-wider mb-3 inline-block">
            Start Your Growth
          </span>
          <h2 className="text-[#092856] font-dm-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[52px] tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-[#495162] font-manrope text-base sm:text-lg leading-relaxed max-w-[760px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-[720px] mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-solid border-[#D9E2F2] shadow-sm">
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#092856] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#305CD8] text-sm"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#092856] mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#305CD8] text-sm"
                  readOnly
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#092856] mb-2">
                Website URL
              </label>
              <input
                type="text"
                placeholder="https://yourwebsite.com"
                className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#305CD8] text-sm"
                readOnly
              />
            </div>

            <div className="pt-2">
              <Link
                href="/contact-us"
                className="w-full h-[54px] rounded-full bg-[#305CD8] hover:bg-[#254DBF] text-white font-dm-sans font-bold text-base flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Request Free Audit</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingCtaForm;
