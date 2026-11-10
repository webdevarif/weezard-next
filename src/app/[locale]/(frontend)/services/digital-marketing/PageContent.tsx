"use client";

import React from "react";
import DigitalMarketingHero from "./sections/hero";
import DigitalMarketingFeatures from "./sections/features";
import DigitalMarketingProcess from "./sections/step-process";
import DigitalMarketingRecentProjects from "./sections/recent-projects";
import Pricing from "@/app/[locale]/components/sections/Pricing";
import DigitalMarketingComparisonTable from "./sections/comparison-table";
import DigitalMarketingCaseStudies from "./sections/case-studies";
import DigitalMarketingTestimonials from "./sections/testimonials";
import Faq from "@/app/[locale]/components/sections/Faq";
import { digitalMarketingData } from "./content";

/**
 * Digital Marketing Services Page Content
 * 
 * Complete 12-Section Architecture Extracted from Digital Marketing SVG:
 * 1.  HeroSection: sections/hero/index.tsx
 * 2.  FeaturesSection (Why Choose Us): sections/features/index.tsx
 * 3.  StepProcessSection: sections/step-process/index.tsx
 * 4.  RecentProjectsSection: sections/recent-projects/index.tsx
 * 5.  PricingSection: @/app/[locale]/components/sections/Pricing
 * 6.  ComparisonTableSection: sections/comparison-table/index.tsx
 * 7.  CaseStudiesSection: sections/case-studies/index.tsx
 * 8.  TestimonialsSection: sections/testimonials/index.tsx
 * 9.  BlogsSection: sections/blogs/index.tsx
 * 10. CtaBannerSection: sections/cta-banner/index.tsx
 * 11. CtaFormSection: sections/cta-form/index.tsx
 * 12. FaqSection: @/app/[locale]/components/sections/Faq
 * 
 * Single Source of Truth: content.ts
 */
export function PageContent() {
  const data = digitalMarketingData;

  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Hero Section */}
      <DigitalMarketingHero data={data.hero} />

      {/* 2. Why Choose Us / Features */}
      <DigitalMarketingFeatures data={data.features} />

      {/* 3. Step-by-Step Growth Process */}
      <DigitalMarketingProcess data={data.process} />

      {/* 4. Recent Marketing Projects & Campaigns (Strategy Roadmap) */}
      <DigitalMarketingRecentProjects data={data.strategy} />

      {/* 5. Pricing (Starter, Growth, Scale) */}
      <Pricing data={data.pricing} />

      {/* 6. Dynamic Comparison Table */}
      <DigitalMarketingComparisonTable data={data.comparisonTable} />

      {/* 7. Real Case Studies & Impact */}
      <DigitalMarketingCaseStudies data={data.caseStudies} />

      {/* 8. Client Testimonials & Feedback */}
      <DigitalMarketingTestimonials data={data.testimonials} />

      {/* 9. Global FAQ Section with Ambient Shapes */}
      <Faq
        data={data.faq}
        shapes={
          <>
            <span className="hidden lg:inline-block bg-[#86DDF1] w-[565px] aspect-[6/10] rounded-[50%] opacity-20 blur-[300px] absolute top-0 start-0 -z-[1]"></span>
            <span className="hidden lg:inline-block bg-[#EAD53F] opacity-10 w-[565px] aspect-[6/10] rounded-[50%] blur-[250px] absolute bottom-[10%] start-[20%] -z-[1]"></span>
            <span className="inline-block bg-purple h-[230px] w-[230px] lg:h-[450px] lg:max-h-[45vw] lg:max-w-[30vw] lg:w-[365px] rounded-[50%] blur-[200px] absolute bottom-[20%] start-0 lg:start-auto lg:bottom-0 lg:end-0 -z-[1] opacity-15"></span>
          </>
        }
      />
    </main>
  );
}

export default PageContent;
