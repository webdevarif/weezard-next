/**
 * Web Development Services Page Content
 * 
 * Modular composition assembling the Web Development service journey.
 * Each section is isolated in its own dedicated sub-folder under ./sections/.
 * All section data is sourced dynamically from content.ts (single source of truth).
 */

"use client";

import React from "react";
import WebDevelopmentHero from "./sections/hero";
import FeaturesSection from "./sections/features";
import StepProcessSection from "./sections/step-process";
import Pricing from "@/app/[locale]/components/sections/Pricing";
import CaseStudiesSection from "./sections/case-studies";
import TestimonialsSection from "./sections/testimonials";
import CtaBannerSection from "./sections/cta-banner";
import WebDevFaqSection from "./sections/faq";
import { webDevelopmentData } from "./content";

export function PageContent() {
  // Centralized dynamic data source from content.ts
  const data = webDevelopmentData;

  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Hero Section with dynamic data from content.ts and multi-layer animations */}
      <WebDevelopmentHero data={data.hero} />

      {/* 2. Features / Why Choose Us Section (6 Horizontal Cards with 3D Icons) */}
      <FeaturesSection data={data.features} />

      {/* 3. Our Step-by-Step Development Process (5-Step Staggered Timeline) */}
      <StepProcessSection data={data.process} />

      {/* 4. Web Development Transparent Pricing (Starter, Growth [Featured], Scale + Custom Quote Banner) */}
      <Pricing data={data.pricing} />

      {/* 5. Case Studies & Impact Section (Problem, Solution, Result 3-Card Grid) */}
      <CaseStudiesSection data={data.caseStudies} />

      {/* 6. Client Feedback & Testimonials Carousel */}
      <TestimonialsSection data={data.testimonials} />

      {/* 7. Mid-Page High-Impact CTA Banner */}
      <CtaBannerSection data={data.ctaBanner} />

      {/* 8. Frequently Asked Questions & Conclusion Summary Box */}
      <WebDevFaqSection data={data.faq} />
    </main>
  );
}

export default PageContent;
