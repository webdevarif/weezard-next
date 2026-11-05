/**
 * Services Page Content Orchestrator
 * 
 * Assembles all modular sections of the Services Page in accordance with Figma:
 * 1. HeroSection: "Designed to Grow Your Business" with circular 3D graphic
 * 2. CoreServices: "Our Core Services" with 3 distinct service cards
 * 3. Pricing: "Explore Our Transparent and Affordable Pricing Tailored to Your Need"
 * 4. WhyChooseUsSection: "Why Small Businesses Choose Us" with collage graphic
 * 5. PromoBanner: "Let’s Build Something Great Together"
 * 6. Faq: "FAQs — About Weezard"
 */

"use client";

import React from "react";
import HeroSection from "./sections/hero";
import CoreServices from "../../components/sections/core-services";
import Pricing from "../../components/sections/Pricing";
import WhyChooseUsSection from "./sections/why-choose-us";
import PromoBanner from "../../components/cards/promo-banner";
import Faq from "../../components/sections/Faq";

export function PageContent() {
  const data = {
    pricing: {
      header: {
        caption: "Pricing & Packages",
        title: "Explore Our Transparent and Affordable Pricing Tailored to Your Need",
        content:
          "It’s universally understood that better service requires more effort, which often translates to higher costs. However, we are targeting our services for small businesses, startups, new ventures and SMEs, and we understand their budget and needs. That’s why we offer IT service in packages only, no random solutions or hidden fees. Whether you're just starting out or scaling up, our pricing is built to give you a collective, and data driven result within your budget. With packages starting from just $99, you can access expert design, development, and marketing support tailored to your growth stage. Choose a plan that aligns with your goals, and let our team handle the rest.",
      },
      list: [
        {
          icon: "",
          title: "Starter",
          info: "Perfect for small businesses or those seeking to build their online presence",
          price: "$99",
          features: {
            checkColor: "#2196F3",
            secondaryColor: "#FAFAFA",
            items: [
              { text: "Professional Redesign (up to 5 pages)" },
              { text: "Mobile-Ready Responsiveness" },
              { text: "Basic SEO Fix" },
              { text: "Visitor Analysis" },
              { text: "One Full Revision" },
              { text: "Full Month of Support" },
            ],
          },
          actionButton: {
            label: "Talk to us",
            href: "/contact-us",
          },
        },
        {
          isFeatured: true,
          icon: "",
          title: "Growth",
          info: "Ideal for growing businesses looking to get recognized as a brand and gain unique presence",
          price: "$150",
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
            ],
          },
          actionButton: {
            label: "Get Started",
            href: "/contact-us",
          },
        },
        {
          icon: "",
          title: "Scale",
          info: "Designed for businesses that need a complete digital presence and ongoing IT support",
          price: "$300",
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
            ],
          },
          actionButton: {
            label: "Claim This Package",
            href: "/contact-us",
          },
        },
      ],
      footer: {
        title: `Create a custom price quote with <strong>Weezard</strong>`,
        button_label: "Get Your Custom Quote",
        button_url: "#",
      },
    },

    faqs: {
      title: "FAQs — About Weezard",
      info: "Got questions? You’re not alone. Here are a few common things small business owners ask us before they get started.",
      categories: [
        {
          name: "Website Design",
          slug: "website-design",
          items: [
            {
              title: "Why the name “Weezard”?",
              content:
                "Weezard stands for wisdom, simplicity, and skill. While we don’t do magic, our process-driven approach often feels like it—delivering smart digital solutions that just work.",
            },
            {
              title: "How do you keep things simple for non-tech clients?",
              content:
                "You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.",
            },
            {
              title: "What makes Weezard different from other agencies?",
              content:
                "You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.",
            },
            {
              title: "How do you manage projects remotely?",
              content:
                "You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.",
            },
            {
              title: "How experienced is your team?",
              content:
                "You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.",
            },
          ],
        },
      ],
      question: {
        title: "Still have a questions?",
        button_label: "Contact Us",
        button_url: "#",
      },
    },
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Core Services Section */}
      <CoreServices />

      {/* 3. Transparent Pricing Packages */}
      <Pricing data={data.pricing} />

      {/* 4. Why Small Businesses Choose Us */}
      <WhyChooseUsSection />

      {/* 5. CTA Promo Banner: Let's Build Something Great Together */}
      <section className="py-[40px] sm:py-[60px] lg:py-[80px]">
        <div className="container">
          <PromoBanner
            title="Let’s Build Something Great Together"
            description="Whether it's a new website, rebranding, or ongoing IT support, Weezard is here to help your business grow."
            primaryButton={{ label: "Get Started Now", href: "/contact" }}
            secondaryButton={{ label: "Book a Free Consultation", href: "/consultation" }}
            showBorder={true}
          />
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <Faq data={data.faqs} />
    </div>
  );
}

export default PageContent;
