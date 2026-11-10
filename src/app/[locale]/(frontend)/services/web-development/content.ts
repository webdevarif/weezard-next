/**
 * Web Development Dynamic Page Content Data
 * 
 * 100% exact copy, typography, and structure directly extracted from Figma SVG
 * (Website Development.svg)
 */

export const webDevelopmentData = {
  // Section 1: Hero Section Data
  hero: {
    rating: {
      score: "4.5/5",
      text: "Trusted by 500+ Businesses",
      stars: 5
    },
    title: {
      primary: "Build a Website",
      accent: "That",
      highlight: "Performs"
    },
    description:
      "Your business deserves more than just a beautiful website, it needs a high-performing platform that drives results. We build custom websites that are fast, functional, secure, and scalable to support your growth.",
    cta: {
      label: "Audit Your Website for Free",
      href: "/contact-us"
    }
  },

  // Section 2: Why Choose Us (6 Features)
  features: {
    header: {
      title: "Why Choose Our Website Development Service?",
      subtitle:
        "Our development team focuses on creating websites that don't just look good but work seamlessly. Whether you're launching a new business or upgrading your current site, we ensure everything runs smoothly from front to back."
    },
    items: [
      {
        id: "custom-dev",
        title: "Custom Development",
        description: "We build tailored websites from the ground up — no templates, just clean, efficient code.",
        icon: "/services/web-development/features/icon-custom-code.webp",
        isHovered: true // Represents the Figma active/hover card in SVG
      },
      {
        id: "secure-reliable",
        title: "Secure & Reliable",
        description: "We follow best practices to protect your site from threats and ensure long-term stability.",
        icon: "/services/web-development/features/icon-fullstack.webp"
      },
      {
        id: "fast-performance",
        title: "Fast & Optimized Performance",
        description: "We use modern tech stacks and optimization techniques to ensure your site loads quickly and runs smoothly.",
        icon: "/services/web-development/features/icon-speed-seo.webp"
      },
      {
        id: "easy-backend",
        title: "Easy-to-Manage Backend",
        description: "With user-friendly CMS integration, you can manage your website without needing technical expertise.",
        icon: "/services/web-development/features/icon-responsive.webp"
      },
      {
        id: "device-compatibility",
        title: "Mobile & Device Compatibility",
        description: "Every website is fully responsive, offering great user experience across devices.",
        icon: "/services/web-development/features/icon-security.webp"
      },
      {
        id: "seo-friendly",
        title: "SEO-Friendly Design",
        description: "Our websites are built with SEO best practices in mind, helping you rank higher in search engine results.",
        icon: "/services/web-development/features/icon-support.webp"
      }
    ]
  },

  // Section 3: Step-by-Step Development Process
  process: {
    header: {
      title: "Our Development Process",
      subtitle: ""
    },
    steps: [
      {
        stepNumber: "STEP 1",
        title: "Discovery & Planning",
        description: "We understand your business goals and map out the website structure."
      },
      {
        stepNumber: "STEP 2",
        title: "Architecture & Tech Setup",
        description: "We build a strong foundation using the right technology suited to your project."
      },
      {
        stepNumber: "STEP 3",
        title: "Frontend & Backend Development",
        description: "Our developers bring the design to life and ensure robust functionality."
      },
      {
        stepNumber: "STEP 4",
        title: "Quality Testing",
        description: "We rigorously test on different devices and browsers to ensure a flawless experience."
      },
      {
        stepNumber: "STEP 5",
        title: "Launch & Post-launch Support",
        description: "We go live only when everything is perfect, and we stay with you after launch for support and updates."
      }
    ],
    cta: {
      label: "Start Your Development Project",
      href: "/contact-us"
    }
  },

  // Section 4: Transparent Pricing
  pricing: {
    header: {
      caption: "Web Development Pricing",
      title: "Explore Our Transparent and Affordable Pricing Tailored to Your Need",
      content:
        "It's universally understood that better service requires more effort, which often translates to higher costs. However, we are targeting our services for small businesses, startups, new ventures and SMEs, and we understand their budget and needs. That's why we offer IT service in packages only, no random solutions or hidden fees. Whether you're just starting out or scaling up, our pricing is built to give you a collective, and data driven result within your budget. With packages starting from just $99, you can access expert design, development, and marketing support tailored to your growth stage. Choose a plan that aligns with your goals, and let our team handle the rest."
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
            { text: "Full Month of Support" }
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
            { text: "Full month of priority support" }
          ]
        },
        actionButton: {
          label: "Get Started",
          href: "/contact-us"
        }
      },
      {
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
            { text: "Get 1 month of 24/7 premium support" }
          ]
        },
        actionButton: {
          label: "Claim This Package",
          href: "/contact-us"
        }
      }
    ],
    customQuote: {
      title: "Create a custom price quote with Weezard",
      actionButton: {
        label: "Get Your Custom Quote",
        href: "/contact-us"
      }
    }
  },

  // Section 5: Case Studies & Impact
  caseStudies: {
    header: {
      title: "Case Studies & Impact",
      subtitle: "See how our websites have improved load times, user experience, and conversions for businesses like yours.",
      cta: {
        label: "Explore More Case Studies",
        href: "/portfolio"
      }
    },
    items: [
      // Set 1: E-Commerce Platform
      {
        id: "cs-1",
        label: "Problem",
        title: "Slow, outdated website",
        image: "/services/web-development/projects/project-1-ecommerce.jpg",
        borderColor: "#E33545",
        gradientBg: "linear-gradient(103.39deg, rgba(227, 53, 69, 0) 46.31%, #E33545 189.63%), #FFFFFF"
      },
      {
        id: "cs-2",
        label: "Solution",
        title: "Rebuilt using modern tech stack and SEO best practices",
        image: "/services/web-development/projects/project-2-corporate.jpg",
        borderColor: "#17B239",
        gradientBg: "linear-gradient(103.39deg, rgba(23, 178, 57, 0) 46.31%, #17B239 189.63%), #FFFFFF"
      },
      {
        id: "cs-3",
        label: "Result",
        title: "+80% increase in user engagement within 3 months",
        image: "/services/web-development/projects/project-3-dashboard.jpg",
        borderColor: "#305CD8",
        gradientBg: "linear-gradient(103.39deg, rgba(48, 92, 216, 0) 46.31%, #305CD8 189.63%), #FFFFFF"
      },
      // Set 2: B2B SaaS Enterprise
      {
        id: "cs-4",
        label: "Problem",
        title: "High bounce rate and complicated checkout flow",
        image: "/services/web-development/projects/project-2-corporate.jpg",
        borderColor: "#E33545",
        gradientBg: "linear-gradient(103.39deg, rgba(227, 53, 69, 0) 46.31%, #E33545 189.63%), #FFFFFF"
      },
      {
        id: "cs-5",
        label: "Solution",
        title: "Streamlined single-page checkout & SSR architecture",
        image: "/services/web-development/projects/project-1-ecommerce.jpg",
        borderColor: "#17B239",
        gradientBg: "linear-gradient(103.39deg, rgba(23, 178, 57, 0) 46.31%, #17B239 189.63%), #FFFFFF"
      },
      {
        id: "cs-6",
        label: "Result",
        title: "2.4x higher conversion rate & sub-second page loads",
        image: "/services/web-development/projects/project-3-dashboard.jpg",
        borderColor: "#305CD8",
        gradientBg: "linear-gradient(103.39deg, rgba(48, 92, 216, 0) 46.31%, #305CD8 189.63%), #FFFFFF"
      },
      // Set 3: Healthcare Portal
      {
        id: "cs-7",
        label: "Problem",
        title: "Non-responsive UI failing mobile Core Web Vitals",
        image: "/services/web-development/projects/project-3-dashboard.jpg",
        borderColor: "#E33545",
        gradientBg: "linear-gradient(103.39deg, rgba(227, 53, 69, 0) 46.31%, #E33545 189.63%), #FFFFFF"
      },
      {
        id: "cs-8",
        label: "Solution",
        title: "Tailwind CSS mobile-first design with smart image caching",
        image: "/services/web-development/projects/project-2-corporate.jpg",
        borderColor: "#17B239",
        gradientBg: "linear-gradient(103.39deg, rgba(23, 178, 57, 0) 46.31%, #17B239 189.63%), #FFFFFF"
      },
      {
        id: "cs-9",
        label: "Result",
        title: "99/100 Lighthouse performance & +120% organic traffic",
        image: "/services/web-development/projects/project-1-ecommerce.jpg",
        borderColor: "#305CD8",
        gradientBg: "linear-gradient(103.39deg, rgba(48, 92, 216, 0) 46.31%, #305CD8 189.63%), #FFFFFF"
      }
    ]
  },

  // Section 6: Testimonials
  testimonials: {
    header: {
      title: "Listen Directly from Our Past Clients",
      subtitle: "Trusted by entrepreneurs and business owners.",
      cta: {
        label: "See More Reviews",
        href: "/reviews"
      }
    },
    items: [
      {
        id: "review-1",
        clientName: "Katie Sims",
        clientRole: "Owner, bakersdelight.com",
        quote: "They built our site from scratch and it’s been performing great ever since. Their team is responsive and professional.",
        rating: 5,
        image: "/images/testimonials/client_katie.png"
      },
      {
        id: "review-2",
        clientName: "Giana Schleifer",
        clientRole: "Founder, Apex Solutions",
        quote: "Working with Weezard transformed our web presence. Our conversion rate doubled within two months of launch, and their engineering team delivered ahead of schedule.",
        rating: 5,
        image: "/images/testimonials/client_giana.png"
      },
      {
        id: "review-3",
        clientName: "Marcus Vance",
        clientRole: "CTO, SaaSFlow Systems",
        quote: "The frontend architecture and performance optimization they implemented took our Core Web Vitals to 99/100. Outstanding attention to detail and scalability.",
        rating: 5,
        image: "/services/web-development/testimonials/testimonial-photo.jpg"
      }
    ]
  },

  // Section 7: Mid-page CTA Banner
  ctaBanner: {
    title: "Ready to Launch a Website That Works for Your Business?",
    subtitle: "See how our websites have improved load times, user experience, and conversions for businesses like yours.",
    primaryCta: {
      label: "Book a Free Consultation",
      href: "/contact-us"
    },
    secondaryCta: {
      label: "Request a Custom Quote",
      href: "/contact-us"
    }
  },

  // Section 8: FAQ & Conclusion
  faq: {
    header: {
      title: "Frequently Asked Questions",
      subtitle: ""
    },
    items: [
      // Left Column items (1-4)
      {
        id: "faq-1",
        question: "How long does it take to build a website?",
        answer: "Absolutely! All our websites are fully responsive, meaning they’ll look and work great on phones, tablets, and desktops.",
        isOpenDefault: true
      },
      {
        id: "faq-2",
        question: "Will my website work on mobile phones and tablets?",
        answer: "Yes, all our websites are built mobile-first and tested rigorously across diverse devices."
      },
      {
        id: "faq-3",
        question: "Can I update my website myself after it's built?",
        answer: "Yes, we integrate user-friendly CMS options so your team can easily modify content, images, and blogs."
      },
      {
        id: "faq-4",
        question: "Will my website be fast and SEO-friendly?",
        answer: "Yes, clean semantics, speed optimizations, and SEO best practices are standard across all our builds."
      },
      // Right Column items (5-8)
      {
        id: "faq-5",
        question: "Do you offer support after the website goes live?",
        answer: "Yes, we provide post-launch support and maintenance to ensure your site continues running smoothly."
      },
      {
        id: "faq-6",
        question: "Can you build an eCommerce website?",
        answer: "Yes, we build custom and CMS-based eCommerce platforms with secure payment gateways and inventory systems."
      },
      {
        id: "faq-7",
        question: "What if I already have a website and want to rebuild it?",
        answer: "We specialize in modern redesigns, migrating your old content while enhancing speed, SEO, and aesthetics."
      },
      {
        id: "faq-8",
        question: "Do I need to buy hosting or domain myself?",
        answer: "You can purchase your own or we can assist you with domain registration, cloud hosting setup, and SSL certificates."
      }
    ],
    conclusion: {
      text: "Whether you're starting from scratch or looking to improve your current website, we're here to make the process smooth, professional, and effective. We don't just build websites, we build tools that help your business grow online."
    }
  }
};

export type WebDevelopmentDataType = typeof webDevelopmentData;
export type HeroDataType = typeof webDevelopmentData.hero;
