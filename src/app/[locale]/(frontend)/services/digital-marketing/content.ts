import { ComparisonRowData } from "../web-design/sections/comparison-table/data";

/**
 * Digital Marketing Dynamic Page Content Data
 * 
 * Sourced for Weezard's Digital Marketing service page.
 * Single source of truth driving Hero, Features, Step Process, Pricing,
 * Dynamic Comparison Table, CTA, and FAQ sections.
 */

export const digitalMarketingData = {
  // Section 1: Hero Section Data (Directly matching Figma CSS & Design)
  hero: {
    title: {
      prefix: "Leading",
      accent: "Digital Marketing Agency",
      suffix: "for Small Business",
    },
    description:
      "If you are looking for a digital marketing agency for small businesses, Weezard got you covered! We help small businesses get found, get noticed, and get customers. Our tailored digital marketing strategies combine SEO, content, social media, and more, so you can focus on your business while we grow your online presence.",
    cta: {
      label: "Audit Your Website for Free",
      href: "/contact-us",
    },
  },

  // Section 2: Why Digital Marketing / Why Choose Us Features
  features: {
    header: {
      title: "Why Digital Marketing Is a Game-Changer for Small Businesses.",
      subtitle:
        "Today's customers are searching, scrolling, and deciding online. Without a strong digital presence, even great businesses get overlooked. We help you show up in searches, stay top-of-mind on social media, and turn visitors into customers—all within your budget.",
      cta: {
        label: "Explore More Case Studies",
        href: "/case-studies",
      },
    },
    items: [
      {
        id: "local-customers",
        title: "Get Found by Local Customers",
        highlightText: "46%",
        description:
          "of all Google searches are for local businesses. If you're not visible, you're missing out on your customer base",
        variant: "white" as const,
        iconPath: "/services/digital-marketing/why-choose-us/icon_3d.png",
      },
      {
        id: "stay-on-feed",
        title: "Stay on Their Feed, Stay on Their Mind",
        description:
          "Consistent social media presence builds brand trust. Which turns casual scrollers into loyal customers.",
        variant: "featured" as const,
        iconPath: "/services/digital-marketing/why-choose-us/icon_3d.png",
      },
      {
        id: "convert-clicks",
        title: "Convert Clicks Into Clients",
        description:
          "A well-planned digital journey, from ad to landing page, makes all the difference in turning interest into action.",
        variant: "white" as const,
        iconPath: "/services/digital-marketing/why-choose-us/icon_3d.png",
      },
      {
        id: "ideal-audience",
        title: "Speak Directly to Your Ideal Audience",
        description:
          "Targeted campaigns let you reach the right people with the right message, saving time and marketing budget.",
        variant: "white" as const,
        iconPath: "/services/digital-marketing/why-choose-us/icon_3d.png",
      },
    ],
    banner: {
      src: "/services/digital-marketing/why-choose-us/why_choose_us_banner.png",
      alt: "Digital Marketing Strategy - Team analyzing SEM and organic growth analytics",
    },
  },

  // Section 3: Step-by-Step Growth Process / Marketing Services
  process: {
    header: {
      title: "What’s Included in Our Marketing Services",
      subtitle:
        "Our digital marketing service is designed to cover all key areas of your online growth. We don't just do one thing—we build a full system that works together to attract, engage, and convert your audience.",
      cta: {
        label: "Talk to a Marketing Expert",
        href: "/contact-us",
      },
    },
    steps: [
      {
        id: "seo",
        title: "Search Engine Optimization (SEO)",
        subtitle: "Be found on Google",
        ctaText: "Learn More",
        href: "/services/digital-marketing/seo",
        iconType: "find" as const,
      },
      {
        id: "content-creation",
        title: "Content Creation",
        subtitle: "Blogs, visuals & copywriting",
        ctaText: "Learn More",
        href: "/services/digital-marketing/content",
        iconType: "blog" as const,
      },
      {
        id: "social-media",
        title: "Social Media Marketing",
        subtitle: "Posts, strategy, and engagement",
        ctaText: "Learn More",
        href: "/services/digital-marketing/social-media",
        iconType: "ads" as const,
      },
      {
        id: "email-marketing",
        title: "Email Marketing",
        subtitle: "Campaigns that build loyalty",
        ctaText: "Learn More",
        href: "/services/digital-marketing/email",
        iconType: "email" as const,
      },
      {
        id: "paid-ads",
        title: "Paid Ads (Google & Meta)",
        subtitle: "Get instant visibility",
        ctaText: "Learn More",
        href: "/services/digital-marketing/paid-ads",
        iconType: "ad" as const,
      },
      {
        id: "analytics",
        title: "Analytics & Reporting",
        subtitle: "Know what’s working",
        ctaText: "Learn More",
        href: "/services/digital-marketing/analytics",
        iconType: "chart" as const,
      },
      {
        id: "cro",
        title: "Conversion Rate Optimization (CRO)",
        subtitle: "Turn more visitors into customers",
        ctaText: "Learn More",
        href: "/services/digital-marketing/cro",
        iconType: "funnel" as const,
      },
      {
        id: "brand-reputation",
        title: "Brand Reputation & Reviews",
        subtitle: "Build trust that sells for you",
        ctaText: "Learn More",
        href: "/services/digital-marketing/reputation",
        iconType: "shield" as const,
      },
      {
        id: "influencer-outreach",
        title: "Influencer & Outreach",
        subtitle: "Amplify your message at scale",
        ctaText: "Learn More",
        href: "/services/digital-marketing/influencers",
        iconType: "network" as const,
      },
      {
        id: "automation",
        title: "Marketing Automation & CRM",
        subtitle: "Scale your revenue on autopilot",
        ctaText: "Learn More",
        href: "/services/digital-marketing/automation",
        iconType: "automation" as const,
      },
    ],
  },

  // Section 4: How We Craft Your Marketing Strategy (Recent Projects / Strategic Steps)
  strategy: {
    header: {
      title: "How We Craft Your Marketing Strategy",
      subtitle:
        "We follow a strategic process that balances creativity with data. We listen, research, plan, and execute campaigns that make sense for your industry and budget.",
      cta: {
        label: "Start With a Free Strategy Call",
        href: "/contact-us",
      },
    },
    steps: [
      {
        id: "discovery-audit",
        stepNumber: 1,
        stepLabel: "STEP 1",
        title: "Discovery & Audit",
        position: "bottom" as const,
        bgColor: "#F6EBFE",
        waveColor: "#C7B0FE",
      },
      {
        id: "strategy-planning",
        stepNumber: 2,
        stepLabel: "STEP 2",
        title: "Strategy Planning",
        position: "top" as const,
        bgColor: "#ECEDF9",
        waveColor: "#B5B8E8",
      },
      {
        id: "content-creation",
        stepNumber: 3,
        stepLabel: "STEP 3",
        title: "Content & Campaign Creation",
        position: "bottom" as const,
        bgColor: "#F3F0D7",
        waveColor: "#DED69C",
      },
      {
        id: "execution-monitoring",
        stepNumber: 4,
        stepLabel: "STEP 4",
        title: "Execution & Monitoring",
        position: "top" as const,
        bgColor: "#F6EBFE",
        waveColor: "#C7B0FE",
      },
      {
        id: "reporting-optimization",
        stepNumber: 5,
        stepLabel: "STEP 5",
        title: "Reporting & Optimization",
        position: "bottom" as const,
        bgColor: "#D7ECFE",
        waveColor: "#A9D5FD",
      },
    ],
  },

  // Section 5: Transparent Pricing
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

  // Section 7: Case Studies & Real Impact
  caseStudies: {
    header: {
      title: "Real Businesses. Real Growth.",
      subtitle:
        "From local shops to service-based startups, we’ve helped clients grow their leads, traffic, and brand awareness. See how our marketing made the difference.",
      cta: {
        label: "Explore More Case Studies",
        href: "/case-studies",
      },
    },
    tabs: [
      {
        id: "problem",
        label: "Problem",
        bgColor: "#EE3838",
        borderColor: "#EE3838",
      },
      {
        id: "what-we-did",
        label: "What We Did",
        bgColor: "#305CD8",
        borderColor: "#305CD8",
      },
      {
        id: "result",
        label: "Result",
        bgColor: "#903DD1",
        borderColor: "#903DD1",
      },
    ],
    image: "/services/digital-marketing/case-studies/case-study-hero.png",
  },

  // Section 8: Client Testimonials & Feedback (24 Comprehensive Client Reviews)
  testimonials: {
    header: {
      title: "Listen Directly from Our Past Clients",
      subtitle:
        "We take pride in building trust through results and transparency. Hear directly from the small business owners who’ve seen their brand grow with Weezard.",
    },
    items: [
      // Batch 1 (Cards 1 to 6)
      {
        id: "testimonial-1",
        rating: 5,
        content:
          "Compellingly implement high-payoff metrics without cooperative scenarios. Collaboratively embrace economically sound.",
        author: {
          name: "Aurelia Stokes",
          role: "Software Developer",
          avatar: "/services/digital-marketing/testimonials/avatar-1.png",
        },
      },
      {
        id: "testimonial-2",
        rating: 5,
        content:
          "Progressively myocardinate global catalysts for change before parallel portals.",
        author: {
          name: "Marcus Vance",
          role: "E-commerce Founder",
          avatar: "/services/digital-marketing/testimonials/avatar-2.png",
        },
      },
      {
        id: "testimonial-3",
        rating: 5,
        isFeatured: true,
        content:
          "Interactively myocardinate seamless processes with collaborative markets. Dramatically reinvent performance based communities for principle-centered products. Proactively build unique content after proactive e-services.",
        author: {
          name: "Sophia Martinez",
          role: "Growth Director",
          avatar: "/services/digital-marketing/testimonials/avatar-3.png",
        },
      },
      {
        id: "testimonial-4",
        rating: 5,
        content:
          "This platform has transformed the way I learn. The courses are engaging and the instructors are top-notch.",
        author: {
          name: "David Kim",
          role: "Startup Founder",
          avatar: "/services/digital-marketing/testimonials/avatar-4.png",
        },
      },
      {
        id: "testimonial-5",
        rating: 5,
        content:
          "This platform has transformed the way I learn.",
        author: {
          name: "Elena Rostova",
          role: "Product Manager",
          avatar: "/services/digital-marketing/testimonials/avatar-5.png",
        },
      },
      {
        id: "testimonial-6",
        rating: 5,
        content:
          "Holisticly pursue accurate relationships rather than open-source methods of empowerment. Compellingly implement high-payoff metrics without cooperative scenarios. Collaboratively embrace economically sound.",
        author: {
          name: "Julian Henderson",
          role: "Marketing Strategist",
          avatar: "/services/digital-marketing/testimonials/avatar-6.png",
        },
      },

      // Batch 2 (Cards 7 to 12)
      {
        id: "testimonial-7",
        rating: 5,
        content:
          "Weezard transformed our Google Ads ROI in under 45 days. The transparent dashboard gives us total confidence.",
        author: {
          name: "Chloe Bennett",
          role: "Retail Store Owner",
          avatar: "/services/digital-marketing/testimonials/avatar-1.png",
        },
      },
      {
        id: "testimonial-8",
        rating: 5,
        content:
          "Their SEO roadmap put our boutique law practice on the first page of local searches. Inquiries tripled within 2 months.",
        author: {
          name: "Liam O'Connor",
          role: "Managing Partner",
          avatar: "/services/digital-marketing/testimonials/avatar-2.png",
        },
      },
      {
        id: "testimonial-9",
        rating: 5,
        isFeatured: true,
        content:
          "Working with Weezard was like hiring an entire enterprise growth team for a fraction of the cost. Their creative copywriting and automated email funnels generated over $80,000 in additional revenue during our peak season.",
        author: {
          name: "Hannah Nguyen",
          role: "CMO, SaaS Brand",
          avatar: "/services/digital-marketing/testimonials/avatar-3.png",
        },
      },
      {
        id: "testimonial-10",
        rating: 5,
        content:
          "Professional, communicative, and truly data-driven. The weekly reporting calls kept our whole team aligned.",
        author: {
          name: "Alexander Reed",
          role: "Operations Head",
          avatar: "/services/digital-marketing/testimonials/avatar-4.png",
        },
      },
      {
        id: "testimonial-11",
        rating: 5,
        content:
          "Our social media engagement grew by 400% after they took over our content schedule.",
        author: {
          name: "Amara Patel",
          role: "Boutique Brand Director",
          avatar: "/services/digital-marketing/testimonials/avatar-5.png",
        },
      },
      {
        id: "testimonial-12",
        rating: 5,
        content:
          "Before Weezard, we spent thousands on random marketing tactics with no return. Their strategic growth process finally gave us predictable, repeatable sales pipeline results.",
        author: {
          name: "Thomas Wright",
          role: "Co-Founder, Tech Logistics",
          avatar: "/services/digital-marketing/testimonials/avatar-6.png",
        },
      },

      // Batch 3 (Cards 13 to 18)
      {
        id: "testimonial-13",
        rating: 5,
        content:
          "Their conversion rate optimization audit uncovered five major checkout bottlenecks we completely missed.",
        author: {
          name: "Victoria Bell",
          role: "Apparel Brand Founder",
          avatar: "/services/digital-marketing/testimonials/avatar-1.png",
        },
      },
      {
        id: "testimonial-14",
        rating: 5,
        content:
          "They don't just run ads; they build a full customer acquisition engine tailored to your business.",
        author: {
          name: "Ryan Gallagher",
          role: "Direct-to-Consumer CEO",
          avatar: "/services/digital-marketing/testimonials/avatar-2.png",
        },
      },
      {
        id: "testimonial-15",
        rating: 5,
        isFeatured: true,
        content:
          "Weezard's multi-channel approach unified our Google search campaigns, Meta retargeting, and lifecycle marketing into one smooth machine. Our customer acquisition cost dropped by 34% in the very first quarter.",
        author: {
          name: "Sarah Jenkins",
          role: "VP of Marketing, FinTech",
          avatar: "/services/digital-marketing/testimonials/avatar-3.png",
        },
      },
      {
        id: "testimonial-16",
        rating: 5,
        content:
          "Best agency experience we have ever had. No long-term lock-ins, just pure results month after month.",
        author: {
          name: "Brandon Cole",
          role: "Dental Clinic Director",
          avatar: "/services/digital-marketing/testimonials/avatar-4.png",
        },
      },
      {
        id: "testimonial-17",
        rating: 5,
        content:
          "High quality creative assets delivered on time, every single week without exception.",
        author: {
          name: "Mia Larson",
          role: "Creative Director",
          avatar: "/services/digital-marketing/testimonials/avatar-5.png",
        },
      },
      {
        id: "testimonial-18",
        rating: 5,
        content:
          "Weezard's technical SEO fixes solved indexing issues that our previous two agencies couldn't crack for years. Organic traffic has been climbing consistently ever since.",
        author: {
          name: "Jason Brooks",
          role: "Head of Digital, Media Corp",
          avatar: "/services/digital-marketing/testimonials/avatar-6.png",
        },
      },

      // Batch 4 (Cards 19 to 24)
      {
        id: "testimonial-19",
        rating: 5,
        content:
          "The speed of communication via our dedicated Slack channel is unparalleled. They respond in minutes.",
        author: {
          name: "Emily Watson",
          role: "Real Estate Broker",
          avatar: "/services/digital-marketing/testimonials/avatar-1.png",
        },
      },
      {
        id: "testimonial-20",
        rating: 5,
        content:
          "Our lead volume doubled within 60 days of launching the new landing pages and targeted search ads.",
        author: {
          name: "Lucas Meyer",
          role: "B2B Sales Leader",
          avatar: "/services/digital-marketing/testimonials/avatar-2.png",
        },
      },
      {
        id: "testimonial-21",
        rating: 5,
        isFeatured: true,
        content:
          "From day one, Weezard demonstrated true mastery of digital growth. They rebuilt our brand tracking, launched high-converting visual ads, and optimized our Google presence so well that our team struggled to keep up with incoming leads!",
        author: {
          name: "Isabella Cruz",
          role: "Managing Director, Wellness Co.",
          avatar: "/services/digital-marketing/testimonials/avatar-3.png",
        },
      },
      {
        id: "testimonial-22",
        rating: 5,
        content:
          "Transparent pricing with zero hidden fees. Everything promised in the proposal was delivered and exceeded.",
        author: {
          name: "Nathaniel Ward",
          role: "Hospitality Executive",
          avatar: "/services/digital-marketing/testimonials/avatar-4.png",
        },
      },
      {
        id: "testimonial-23",
        rating: 5,
        content:
          "Exceptional ROI on Meta ads and high-converting creative video hooks that captivate our buyers.",
        author: {
          name: "Zoe Campbell",
          role: "E-commerce Founder",
          avatar: "/services/digital-marketing/testimonials/avatar-5.png",
        },
      },
      {
        id: "testimonial-24",
        rating: 5,
        content:
          "If you are a growing business looking for a trustworthy marketing partner that genuinely cares about your bottom line, Weezard is the ultimate team to choose.",
        author: {
          name: "Oliver Hughes",
          role: "Founder, Modern Consulting",
          avatar: "/services/digital-marketing/testimonials/avatar-6.png",
        },
      },
    ],
  },

  // Section 10: High-Impact CTA Banner
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
