"use client";

import { useTranslations } from "next-intl";
import { staggerContainer, fadeInUp } from '@/lib/animations';
import React from 'react';
import Pricing from "../../components/sections/Pricing";
import Faq from "../../components/sections/Faq";
import HeroBanner from "./sections/hero-banner";
import CoreServices from "../../components/sections/core-services";
import WorkProcess from "./sections/work-process";
import BlogSection from "./sections/blogs";
import TestimonialsSection from "./sections/testimonials";
import ResultsNumber from "./sections/results-number";
import CtaVision from "./sections/cta-vision";
import Portfolio from "./sections/portfolio";

/**
 * Home Page Content
 */
export function PageContent() {
  const data = {
    
    pricing: {
      header: {
        caption: "Pricing & Packages",
        title: "Explore Our Transparent and Affordable Pricing Tailored to Your Need",
        content: "It’s universally understood that better service requires more effort, which often translates to higher costs. However, we are targeting our services for small businesses, startups, new ventures and SMEs, and we understand their budget and needs. That’s why we offer IT service in packages only, no random solutions or hidden fees. Whether you're just starting out or scaling up, our pricing is built to give you a collective, and data driven result within your budget. With packages starting from just $99, you can access expert design, development, and marketing support tailored to your growth stage. Choose a plan that aligns with your goals, and let our team handle the rest."
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
                    {
                        text: "Professional Redesign (up to 5 pages)",
                    },
                    {
                        text: "Mobile-Ready Responsiveness",
                    },
                    {
                        text: "Basic SEO Fix",
                    },
                    {
                        text: "Visitor Analysis",
                    },
                    {
                        text: "One Full Revision",
                    },
                    {
                        text: "Full Month of Support",
                    },
                ]
            },
            actionButton: {
                label: "Talk to us",
                href: "/contact-us"
            }
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
                    {
                        text: "Everything That Starter Pack Has",
                    },
                    {
                        text: "Custom Website (Up to 5 pages) + Basic eCommerce Setup",
                    },
                    {
                        text: "Mobile-Ready Responsiveness",
                    },
                    {
                        text: "Advanced SEO setup",
                    },
                    {
                        text: "Blog/News/Article Guidance for SEO",
                    },
                    {
                        text: "Social Media Integration",
                    },
                    {
                        text: "Up to 3 revision rounds",
                    },
                    {
                        text: "Full month of priority support",
                    },
                ]
            },
            actionButton: {
                label: "Get Started",
                href: "/contact-us"
            }
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
                    {
                        text: "Everything That Growth Pack Has",
                    },
                    {
                        text: "Custom website (Up to 8 pages) + Advanced eCommerce Setup",
                    },
                    {
                        text: "Advanced SEO Setup & strategy",
                    },
                    {
                        text: "Ongoing digital marketing support (ads, email, content, campaign)",
                    },
                    {
                        text: "Monthly performance reports",
                    },
                    {
                        text: "Unlimited revision rounds",
                    },
                    {
                        text: "Get 1 month of 24/7 premium support",
                    },
                ]
            },
            actionButton: {
                label: "Claim This Package",
                href: "/contact-us"
            }
        },
      ],
      footer: {
        title: `Create a custom price quote with <strong>Weezard</strong>`,
        button_label: "Get Your Custom Quote",
        button_url: "#"
      }
    },
    

    faqs: {
        title: "Need Help? We’ve Got You Covered!",
        info: "Got questions? You’re not alone. Here are a few common things small business owners ask us before they get started.",
        categories: [
            {
                name: "Website Design",
                slug: "website-design",
                items: [
                    {
                        title: 'What is included in your website design package?',
                        content: `Our website design packages include custom UI/UX design tailored to your brand, responsive desktop and mobile layouts, interactive prototypes, high-converting call-to-actions, and design asset delivery ready for development.`
                    },
                    {
                        title: 'How long does a website design project take?',
                        content: `Typically, a standard 5-to-10 page website design project takes between 2 to 4 weeks depending on the complexity of the requirements, feedback rounds, and asset availability.`
                    },
                    {
                        title: 'Will my website design be mobile and tablet friendly?',
                        content: `Yes, absolutely! Every layout is crafted with a mobile-first philosophy, ensuring seamless responsiveness, fast touch targets, and visual consistency across all screen resolutions.`
                    },
                    {
                        title: 'Can I request revisions during the design phase?',
                        content: `Yes, we provide structured feedback milestones and multiple revision rounds at both the wireframe and high-fidelity design stages to ensure the final product exceeds your expectations.`
                    },
                    {
                        title: 'Will I receive the original Figma source files and assets?',
                        content: `Yes, upon project completion and sign-off, you receive 100% full ownership of all Figma source files, exported SVG graphics, typography guidelines, and design system components.`
                    },
                ]
            },
            {
                name: "Web Development",
                slug: "web-development",
                items: [
                    {
                        title: 'Which modern tech stack and frameworks do you use?',
                        content: `We specialize in Next.js 15, React 19, TypeScript, Tailwind CSS, and scalable headless CMS architectures, delivering clean, high-performance, and future-proof codebases.`
                    },
                    {
                        title: 'Will my website load fast and pass Core Web Vitals?',
                        content: `Speed is a core priority. We optimize images (Next.js Image), bundle sizes, server-side rendering (SSR), and critical CSS to consistently achieve 90+ Google PageSpeed and green Core Web Vitals scores.`
                    },
                    {
                        title: 'Can I manage and update content without coding knowledge?',
                        content: `Yes! We integrate user-friendly headless CMS solutions (e.g., Sanity, Strapi, WordPress, or custom dashboards) so your team can effortlessly publish blogs, update text, and manage media.`
                    },
                    {
                        title: 'Is ongoing maintenance and security support provided?',
                        content: `We offer dedicated post-launch maintenance packages covering security updates, framework upgrades, backup monitoring, and SLA-backed troubleshooting to keep your site running smoothly 24/7.`
                    },
                    {
                        title: 'How do you ensure zero downtime during website launch?',
                        content: `We execute zero-downtime deployment pipelines using Vercel or cloud environments, conducting comprehensive pre-launch DNS checks, SSL setup, and staging verifications before going live.`
                    },
                ]
            },
            {
                name: "Digital Marketing",
                slug: "digital-marketing",
                items: [
                    {
                        title: 'What digital marketing channels and services do you offer?',
                        content: `We offer end-to-end digital growth strategies including Meta/Facebook Ads, Google Search & Display Ads, LinkedIn B2B campaigns, email marketing automation, and content marketing.`
                    },
                    {
                        title: 'How do you measure and report marketing ROI?',
                        content: `We establish clear KPIs from day one—such as Cost Per Acquisition (CPA), Return On Ad Spend (ROAS), and conversion rates—and provide transparent monthly analytics dashboards.`
                    },
                    {
                        title: 'Do you manage ad creative design and copywriting?',
                        content: `Yes, our in-house creative team designs high-converting ad visuals, video banners, and writes persuasive ad copy tailored specifically to your target audience personas.`
                    },
                    {
                        title: 'Is there a long-term contract requirement for marketing?',
                        content: `No long-term lock-ins. We offer month-to-month marketing packages and milestone-based campaigns because we believe our measurable results should earn your continued partnership.`
                    },
                    {
                        title: 'How quickly can we launch our first advertising campaign?',
                        content: `Once we complete the initial strategy briefing and asset approval (typically 3–5 business days), we can launch your campaigns and start driving targeted traffic immediately.`
                    },
                ]
            },
            {
                name: "SEO",
                slug: "seo",
                items: [
                    {
                        title: 'How soon will my website start ranking on Google?',
                        content: `SEO is a compounding strategy. While technical fixes and on-page optimizations show indexing improvements within 2 to 4 weeks, significant keyword rank growth and organic traffic gains typically materialize within 3 to 6 months.`
                    },
                    {
                        title: 'What is included in your Technical and On-Page SEO audit?',
                        content: `We audit site architecture, crawlability, XML sitemaps, structured schema markup, canonical tags, heading hierarchies, meta titles, internal linking, and mobile Core Web Vitals.`
                    },
                    {
                        title: 'How do you research and select target keywords?',
                        content: `We analyze search intent, competitor keyword gaps, monthly search volume, and ranking difficulty to identify high-intent commercial keywords that drive actual customer inquiries, not just empty clicks.`
                    },
                    {
                        title: 'Do you help with Local SEO and Google Business Profile?',
                        content: `Yes! We optimize your Google Business Profile (GBP), manage local NAP consistency, local directory citations, and localized on-page signals to dominate local search results in your target service areas.`
                    },
                    {
                        title: 'How do you track and share organic performance progress?',
                        content: `You receive comprehensive monthly reporting covering Google Search Console impressions, keyword ranking movements, organic landing page conversions, and strategic next-step recommendations.`
                    },
                ]
            },
            {
                name: "Design Branding",
                slug: "design-branding",
                items: [
                    {
                        title: 'What does a complete brand identity package include?',
                        content: `Our branding package includes primary and secondary logos, icon marks, custom color palettes, typography pairings, brand iconography, social media kit templates, and comprehensive brand guideline documentation.`
                    },
                    {
                        title: 'How many unique logo concepts and revisions do you provide?',
                        content: `We typically present 3 distinct visual directions based on in-depth market research. Once you select your favorite concept, we provide multiple refinement rounds to perfect every detail.`
                    },
                    {
                        title: 'Do you provide brand style guidelines for our internal team?',
                        content: `Yes, we deliver a comprehensive Brand Style Guide (PDF and Figma) outlining logo usage rules, spacing, do's and don'ts, color codes (HEX, RGB, CMYK, Pantone), and typography hierarchies.`
                    },
                    {
                        title: 'In which file formats will our final brand assets be delivered?',
                        content: `You will receive all vector master files (AI, EPS, SVG, PDF) alongside high-resolution raster exports (PNG with transparent backgrounds, JPG, WebP) formatted for both print and digital use.`
                    },
                    {
                        title: 'Can you modernize or refresh our existing brand without losing recognition?',
                        content: `Absolutely! We specialize in brand evolutions—refining typography, modernizing color palettes, and updating logo marks while preserving the core brand equity your existing customers know and trust.`
                    },
                ]
            },
        ],
        description: "Choosing the right web design service can make all the difference in how your business is perceived online. At Weezard, we combine thoughtful design, reliable development, and marketing strategy to give small businesses a powerful digital presence. With our transparent pricing, dedicated support, and scalable solutions, we’re here to help you grow. No guesswork, no hidden fees. Whether you're starting from scratch or looking to upgrade, our website packages and affordable SEO packages for small businesses are designed to give you results without breaking the bank."
    },

  }

  return (
    <>
        <HeroBanner />
        <CoreServices />
        <ResultsNumber />
        <Portfolio />
        <Pricing data={data.pricing}/>
        <TestimonialsSection />
        <WorkProcess />
        <BlogSection />
        <CtaVision primaryButton={{ label: "Book a Free Consultation", href: "#" }}/>
        <Faq data={data.faqs}/>
    </>
  );
}
