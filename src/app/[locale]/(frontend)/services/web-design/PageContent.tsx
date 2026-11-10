/**
 * Services / Web Design Page Content
 * 
 * Modular composition assembling:
 * 1. HeroSection (All-In-One Web Design Packages)
 * 2. WhyChooseUsSection (4 Colored Feature Cards)
 * 3. ProcessSection (Step-by-Step Building Process)
 * 4. Portfolio (Recent Web Design Projects)
 * 5. Pricing (Starter, Growth Featured, Scale)
 * 6. ComparisonTableSection (Desktop Matrix & Mobile Tabs)
 * 7. CaseStudySection (Real Results That Created Impact)
 * 8. TestimonialsSection (Client Feedback & 4.9 Rating)
 * 9. BlogSection (Resources & Insights)
 * 10. CtaFormSection (Lead Generation Contact Form)
 * 11. Faq (Frequently Asked Questions Accordion)
 * 12. ConclusionSection (Summary Card with Gradient Border)
 */

"use client";

import React from "react";
import HeroSection from "./sections/hero";
import WhyChooseUsSection from "./sections/why-choose-us";
import whyChooseBannerImg from "./assets/why_choose_us/why-choose-banner.png";
import StepProcessSection from "./sections/step-process";
import RecentProjectsSection from "./sections/recent-projects";
import Pricing from "@/app/[locale]/components/sections/Pricing";
import ComparisonTableSection from "./sections/comparison-table";
import CaseStudySection from "./sections/case-study";
import TestimonialsSection from "./sections/testimonials";
import BlogSection from "./sections/blogs";
import CtaFormSection from "./sections/cta-form";
import Faq from "@/app/[locale]/components/sections/Faq";
import ConclusionSection from "./sections/conclusion";

export function PageContent() {
  const data = {
    pricing: {
      header: {
        caption: "Web Design Pricing",
        title: "Explore Our Transparent and Affordable Pricing Tailored to Your Need",
        content: "It’s universally understood that better service requires more effort, which often translates to higher costs. However, we are targeting our services for small businesses, startups, new ventures and SMEs, and we understand their budget and needs. That’s why we offer IT service in packages only, no random solutions or hidden fees. Whether you're just starting out or scaling up, our pricing is built to give you a collective, and data driven result within your budget. With packages starting from just $99, you can access expert design, development, and marketing support tailored to your growth stage. Choose a plan that aligns with your goals, and let our team handle the rest."
      },
      list: [
        {
          title: "Starter",
          info: "Perfect for small businesses or those seeking to build their online presence",
          price: "$99",
          features: {
            checkColor: "#1AADFE",
            secondaryColor: "#FAFAFA",
            items: [
              { text: "Professional Redesign (up to 5 pages)" },
              { text: "Mobile-Ready Responsiveness" },
              { text: "Basic SEO Fix" },
              { text: "Visitor Analysis" },
              { text: "One Full Revision" },
              { text: "Full Month of Support" },
            ]
          },
          actionButton: {
            label: "Talk to us",
            href: "/contact-us"
          }
        },
        {
          isFeatured: true,
          title: "Growth",
          info: "Ideal for growing businesses looking to get recognized as a brand and gain unique presence",
          price: "$150+",
          features: {
            checkColor: "#EAD53F",
            secondaryColor: "#092856",
            items: [
              { text: "Everything That Starter Pack Has" },
              { text: "Custom Website (Up to 5 pages) + Basic eCommerce Setup" },
              { text: "Mobile-Ready Responsiveness" },
              { text: "Advanced SEO setup" },
              { text: "Blog/News/Article Guidance for SEO" },
              { text: "Social Media Integration" },
              { text: "Up to 3 revision rounds" },
              { text: "Full month of priority support" },
            ]
          },
          actionButton: {
            label: "Get Growth Package",
            href: "/contact-us"
          }
        },
        {
          title: "Scale",
          info: "Designed for businesses that need a complete digital presence and ongoing IT support",
          price: "$300+",
          features: {
            checkColor: "#A93CFF",
            secondaryColor: "#FAFAFA",
            items: [
              { text: "Everything That Growth Pack Has" },
              { text: "Custom website (Up to 8 pages) + Advanced eCommerce Setup" },
              { text: "Advanced SEO Setup & strategy" },
              { text: "Ongoing digital marketing support (ads, email, content, campaign)" },
              { text: "Monthly performance reports" },
              { text: "Unlimited revision rounds" },
              { text: "Get 1 month of 24/7 premium support" },
            ]
          },
          actionButton: {
            label: "Claim This Package",
            href: "/contact-us"
          }
        }
      ],
      footer: {
        title: "Create a custom price quote with <strong>Weezard</strong>",
        button_label: "Get Your Custom Quote",
        button_url: "/contact-us"
      }
    },

    faqs: {
      variant: "center",
      defaultOpenIndex: 2,
      title: "Need Help? We’ve Got You Covered!",
      categories: [
        {
          name: "Web Design Packages",
          slug: "web-design-packages",
          items: [
            {
              title: "How long does a web design project take?",
              content: "A typical web design project takes 2 to 4 weeks depending on the complexity of the design, scope of features, and turnaround time for feedback."
            },
            {
              title: "Will my site be mobile-friendly?",
              content: "Absolutely! All our websites are fully responsive, meaning they’ll look and work great on phones, tablets, and desktops."
            },
            {
              title: "Do you provide website maintenance?",
              content: "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, updated, and running at peak performance."
            },
            {
              title: "Can I update my site myself?",
              content: "Yes! We build with clean, user-friendly CMS architecture and provide documentation so you can easily update text, images, and new content whenever you need."
            },
            {
              title: "Can I see the design before it goes live?",
              content: "Definitely. We share interactive Figma prototypes and a live staging preview for your review and approval before launch."
            },
            {
              title: "Do you design eCommerce websites?",
              content: "Yes! Our Growth and Scale packages include comprehensive eCommerce capabilities, secure payment gateways, inventory management, and high-converting checkout flows."
            }
          ]
        }
      ],
      question: {
        title: "Still have a questions?",
        button_label: "Contact Us",
        button_url: "/contact-us"
      }
    }
  };

  return (
    <main className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Why Choose Our Web Design Packages? */}
      <WhyChooseUsSection bannerImage={whyChooseBannerImg} />

      {/* 3. Our Step-by-Step Process for Building a Professional Website */}
      <StepProcessSection />

      {/* 4. Our Recent Web Design Projects */}
      <RecentProjectsSection />

      {/* 5. Transparent & Affordable Pricing */}
      <div id="pricing">
        <Pricing data={data.pricing} />
      </div>

      {/* 6. Feature Comparison Table Matrix */}
      <ComparisonTableSection />

      {/* 7. Real Results That Created Impact (Case Studies) */}
      <CaseStudySection />

      {/* 8. Client Testimonials & 4.9 Rating */}
      <TestimonialsSection />

      {/* 9. Resources & Blog Section */}
      <BlogSection />

      {/* 10. Lead Generation CTA Form */}
      <CtaFormSection />

      {/* 11. FAQ Accordion */}
      <Faq data={data.faqs} className="pb-0 lg:pb-[100px]" />

      {/* 12. Conclusion Section */}
      <ConclusionSection />
    </main>
  );
}

export default PageContent;
