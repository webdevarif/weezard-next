/**
 * Lead Generation CTA Form Section for Services / Web Design Page
 * Renders the dark navy (#092856) banner with left value proposition and right contact card.
 * Container width: 1320px (matching 1920px Figma design x=300 to x=1620).
 */

"use client";

import React from "react";
import CtaContent from "./components/CtaContent";
import LeadForm from "./components/LeadForm";

export const CtaFormSection: React.FC = () => {
  return (
    <section className="w-full bg-[#092856] py-16 sm:py-20 lg:py-[100px] relative overflow-hidden">
      {/* Subtle ambient lighting effects */}
      <div className="absolute w-[600px] h-[600px] -top-[200px] -left-[200px] rounded-full bg-[#305CD8]/15 blur-[140px] pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] -bottom-[150px] -right-[150px] rounded-full bg-[#305CD8]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14 xl:gap-[90px]">
          <CtaContent />
          <LeadForm />
        </div>
      </div>
    </section>
  );
};

export default CtaFormSection;
