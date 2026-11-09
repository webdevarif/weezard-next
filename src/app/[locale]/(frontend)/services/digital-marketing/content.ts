import { ComparisonRowData } from "../web-design/sections/comparison-table/data";

/**
 * Digital Marketing Dynamic Page Content Data
 * 
 * Sourced for Weezard's Digital Marketing service page.
 * Single source of truth driving Hero, Features, Step Process, Pricing,
 * Dynamic Comparison Table, CTA, and FAQ sections.
 */

export const digitalMarketingData = {
  // Section 1: Hero Section Data
  hero: {
    badge: "Digital Marketing That Delivers Real Growth",
    rating: {
      score: "4.9/5",
      text: "Trusted by 500+ Businesses",
      stars: 5,
    },
    title: {
      primary: "Drive More Leads, Sales & Revenue with",
      highlight: "Data-Driven Marketing",
    },
    description:
      "Stop wasting ad spend on vanity metrics. We build tailored marketing campaigns across SEO, Google Ads, Meta Ads, and Content Marketing that turn clicks into loyal paying customers.",
    cta: {
      label: "Get a Free Marketing Audit",
      href: "/contact-us",
    },
    secondaryCta: {
      label: "Explore Our Packages",
      href: "#pricing",
    },
    stats: [
      { label: "Average ROI Increase", value: "3.8x" },
      { label: "Leads Generated", value: "120K+" },
      { label: "Client Retention Rate", value: "96%" },
    ],
  },

  // Section 2: Why Choose Us / Marketing Features
  features: {
    header: {
      tag: "Why Choose Weezard",
      title: "Marketing Built on Science, Strategy, and Real Returns",
      subtitle:
        "Every dollar you invest in marketing should have a clear purpose. We blend creative storytelling with granular analytics to ensure continuous, measurable pipeline growth.",
    },
    items: [
      {
        id: "targeted-seo",
        title: "High-Intent SEO & Rankings",
        description:
          "Dominate Google search results for commercial keywords that your highest-value customers are actually searching for.",
        iconBg: "bg-blue-50 text-blue-600",
      },
      {
        id: "paid-ads",
        title: "High-ROI Paid Advertising",
        description:
          "Precision targeted campaigns on Google, Meta, and LinkedIn with continuous A/B testing to lower customer acquisition cost.",
        iconBg: "bg-amber-50 text-amber-600",
      },
      {
        id: "funnel-optimization",
        title: "Conversion Funnel Optimization",
        description:
          "We refine your landing pages, offers, and user journeys to ensure you convert the maximum percentage of incoming visitors.",
        iconBg: "bg-emerald-50 text-emerald-600",
      },
      {
        id: "content-strategy",
        title: "Authoritative Content Strategy",
        description:
          "Engaging copy, blog articles, and video scripts that establish your brand authority and educate buyers before they buy.",
        iconBg: "bg-purple-50 text-purple-600",
      },
      {
        id: "transparent-reporting",
        title: "100% Transparent Live Analytics",
        description:
          "No smoke and mirrors. Access real-time custom dashboards tracking cost-per-lead, revenue generated, and key milestones.",
        iconBg: "bg-rose-50 text-rose-600",
      },
      {
        id: "dedicated-team",
        title: "Dedicated Growth Specialists",
        description:
          "Work directly with senior strategists, copywriters, and media buyers who know your industry and communicate weekly.",
        iconBg: "bg-indigo-50 text-indigo-600",
      },
    ],
  },

  // Section 3: Step Process Section
  process: {
    header: {
      tag: "Our 4-Step Growth Framework",
      title: "How We Turn Your Marketing into a Predictable Growth Engine",
      subtitle:
        "A clear, repeatable roadmap engineered to eliminate guesswork and rapidly scale your customer base.",
    },
    steps: [
      {
        stepNumber: "01",
        title: "Deep Audit & Market Research",
        description:
          "We analyze your competitors, current traffic channels, customer personas, and past performance to identify immediate quick wins and long-term levers.",
      },
      {
        stepNumber: "02",
        title: "Custom Growth Strategy & Setup",
        description:
          "We build your conversion tracking, landing pages, creative assets, and audience targeting before launching a single paid or organic campaign.",
      },
      {
        stepNumber: "03",
        title: "Campaign Execution & A/B Testing",
        description:
          "We deploy multi-channel ads and SEO tactics, testing hundreds of creative hooks, audiences, and headlines to find the winning high-margin combinations.",
      },
      {
        stepNumber: "04",
        title: "Scale, Optimize & Compound",
        description:
          "Once winning campaigns are identified, we scale budget efficiently while continuously monitoring ROAS and expanding into new channels.",
      },
    ],
  },

  // Section 4: Transparent Pricing
  pricing: {
    header: {
      caption: "Digital Marketing Packages",
      title: "Explore Transparent and Predictable Marketing Packages",
      content:
        "No long-term lock-in traps or hidden markups. Choose a package tailored to your current stage, and upgrade seamlessly as your customer base scales.",
    },
    list: [
      {
        title: "Starter Growth",
        info: "Ideal for small businesses or local brands looking to gain steady organic traffic and initial leads.",
        price: "$199",
        features: {
          checkColor: "#1AADFE",
          secondaryColor: "#FAFAFA",
          items: [
            { text: "Full Website SEO Audit & On-Page Fixes" },
            { text: "Google Business Profile Optimization" },
            { text: "Up to 10 Target Commercial Keywords" },
            { text: "2 SEO Blog Articles per Month" },
            { text: "Basic Conversion Tracking Setup" },
            { text: "Monthly Performance Report" },
            { text: "Email Support with 48h SLA" },
          ],
        },
        actionButton: {
          label: "Start with Starter",
          href: "/contact-us",
        },
      },
      {
        isFeatured: true,
        title: "Growth Acceleration",
        info: "Designed for businesses ready to dominate their market with combined organic SEO and high-ROI paid ads.",
        price: "$499+",
        features: {
          checkColor: "#EAD53F",
          secondaryColor: "#092856",
          items: [
            { text: "Everything in Starter Growth" },
            { text: "Meta & Google Ads Campaign Management" },
            { text: "Up to 30 Target High-Intent Keywords" },
            { text: "4 SEO Optimized Articles + Visual Creatives" },
            { text: "Full Funnel Conversion Tracking (GA4 & Pixel)" },
            { text: "A/B Testing for Ad Creatives & Copy" },
            { text: "Bi-Weekly Strategy & Performance Calls" },
            { text: "Dedicated Account Manager & Slack Channel" },
          ],
        },
        actionButton: {
          label: "Get Growth Package",
          href: "/contact-us",
        },
      },
      {
        title: "Scale Enterprise",
        info: "A full outsourced growth team for businesses needing aggressive multi-channel market expansion.",
        price: "$899+",
        features: {
          checkColor: "#A93CFF",
          secondaryColor: "#FAFAFA",
          items: [
            { text: "Everything in Growth Acceleration" },
            { text: "Omnichannel Ads (Google, Meta, TikTok, LinkedIn)" },
            { text: "Unlimited Commercial Keyword Tracking" },
            { text: "Weekly Content Production & Social Syndication" },
            { text: "Landing Page CRO & Funnel Redesign" },
            { text: "Live Real-Time ROI Dashboard" },
            { text: "Weekly Strategy Alignment Calls" },
            { text: "24/7 Priority Support & Senior Strategist" },
          ],
        },
        actionButton: {
          label: "Claim Scale Package",
          href: "/contact-us",
        },
      },
    ],
    footer: {
      title: "Need a custom omnichannel marketing scope?",
      button_label: "Request a Custom Growth Plan",
      button_url: "/contact-us",
    },
  },

  // Section 5: Comparison Table Data (Freelancers vs Other Agencies vs Weezard)
  comparisonTable: {
    header: {
      title: "What You Get with Weezard's Digital Marketing Services",
      subtitle:
        "Compare what typical freelancers, traditional agencies, and Weezard bring to the table. We prioritize measurable ROI, full transparency, and zero fluff.",
    },
    rows: [
      {
        feature: "Full-Funnel Strategy",
        freelancers: { type: "cross", text: "Single channel only" },
        otherAgencies: { type: "check", text: "Often rigid templates" },
        weezard: { type: "check", text: "Tailored multi-channel roadmap" },
      },
      {
        feature: "Ad Spend Transparency",
        freelancers: { type: "cross", text: "Unclear markup" },
        otherAgencies: { type: "warning", text: "15-25% hidden fee" },
        weezard: { type: "check", text: "100% direct in your account" },
      },
      {
        feature: "Conversion Tracking Setup",
        freelancers: { type: "cross", text: "Often incomplete" },
        otherAgencies: { type: "check", text: "Charged as an extra" },
        weezard: { type: "check", text: "GA4, Pixel & API included" },
      },
      {
        feature: "Creative & Copywriting",
        freelancers: { type: "warning", text: "Basic AI copy" },
        otherAgencies: { type: "check", text: "Separate creative team bill" },
        weezard: { type: "check", text: "High-converting creatives included" },
      },
      {
        feature: "A/B Testing & Optimization",
        freelancers: { type: "cross", text: "Rarely done" },
        otherAgencies: { type: "check", text: "Monthly only" },
        weezard: { type: "check", text: "Weekly iterative testing" },
      },
      {
        feature: "Live Dashboard & Reporting",
        freelancers: { type: "cross", text: "Screenshot pdfs" },
        otherAgencies: { type: "warning", text: "Generic end-of-month report" },
        weezard: { type: "check", text: "Real-time 24/7 client dashboard" },
      },
      {
        feature: "Dedicated Growth Manager",
        freelancers: { type: "warning", text: "Varies with workload" },
        otherAgencies: { type: "cross", text: "Passed to junior intern" },
        weezard: { type: "check", text: "Senior dedicated strategist" },
      },
      {
        feature: "Contract Flexibility",
        freelancers: { type: "check", text: "No lock-in" },
        otherAgencies: { type: "cross", text: "6 to 12 month lock-in" },
        weezard: { type: "check", text: "Month-to-month, cancel anytime" },
      },
      {
        feature: "Fast Turnaround on Requests",
        freelancers: { type: "warning", text: "Unpredictable" },
        otherAgencies: { type: "cross", text: "Slow ticket system" },
        weezard: { type: "check", text: "Direct Slack & 24h response" },
      },
      {
        feature: "Ownership of Accounts & Assets",
        freelancers: { type: "cross", text: "Often locked" },
        otherAgencies: { type: "cross", text: "Retain ownership of data" },
        weezard: { type: "check", text: "You own 100% of accounts & assets" },
      },
    ] as ComparisonRowData[],
  },

  // Section 6: High-Impact CTA Banner
  ctaBanner: {
    title: "Ready to Turn Your Traffic into Predictable Revenue?",
    description:
      "Join 500+ businesses who scaled their customer acquisition with our data-backed digital marketing strategies. Book your free strategy audit today.",
    primaryCta: {
      label: "Book a Free Consultation",
      href: "/contact-us",
    },
    secondaryCta: {
      label: "Request a Custom Quote",
      href: "/contact-us",
    },
  },

  // Section 7: FAQs (Shared Global Faq Component format)
  faq: {
    title: "Need Help? We’ve Got You Covered!",
    info: "Got questions? You’re not alone. Here are a few common things small business owners ask us before they get started.",
    categories: [
      {
        name: "Digital Marketing",
        slug: "digital-marketing",
        items: [
          {
            title: "What kind of results can I expect from digital marketing?",
            content:
              "You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this includes more qualified inquiries, higher conversion rates, and a lower cost per acquisition.",
          },
          {
            title: "How soon will I see results?",
            content:
              "Paid campaigns (Google & Meta Ads) begin driving targeted visitors and leads within the first 7 to 14 days. For organic SEO and content strategies, noticeable ranking improvements and compounding gains typically appear within 60 to 90 days.",
          },
          {
            title: "Do I have to sign a long-term contract?",
            content:
              "No. We believe in earning your trust month over month. All our standard marketing packages run month-to-month, allowing you to scale up or pause anytime with zero lock-in penalties.",
          },
          {
            title: "Can I change or upgrade my plan later?",
            content:
              "Yes! You can seamlessly upgrade or customize your marketing package as your business expands, adding channels like paid advertising, CRO, or omnichannel scaling whenever you are ready.",
          },
          {
            title: "Will I own all the accounts, content and data?",
            content:
              "Absolutely. You retain 100% ownership of your ad accounts, pixel data, creative assets, and analytics. We believe in complete transparency with zero hostage holding.",
          },
        ],
      },
    ],
    question: {
      title: "Still have questions?",
      button_label: "Contact Us",
      button_url: "/contact-us",
    },
    description:
      "Choosing the right digital marketing partner can make all the difference in how your business grows online. At Weezard, we combine thoughtful strategy, reliable data tracking, and creative execution to give small businesses a powerful digital presence. With our transparent pricing, dedicated support, and scalable solutions, we’re here to help you grow. No guesswork, no hidden fees.",
  },
};

export default digitalMarketingData;
