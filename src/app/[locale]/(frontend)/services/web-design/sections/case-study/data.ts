/**
 * Case Study Data
 * 
 * Defines 3 static client case studies showing tangible impact:
 * - Case Study 1: Local Retail & E-Commerce
 * - Case Study 2: B2B SaaS & Tech Platform
 * - Case Study 3: Professional Healthcare & Consulting
 */

export interface CaseStudyItem {
  id: string;
  badgeTitle: string;
  date: string;
  problem: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
  result: {
    title: string;
    description: string;
  };
  image: string;
  imageAlt: string;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "case-study-1",
    badgeTitle: "Case Study-1",
    date: "22 Jun, 2025",
    problem: {
      title: "Problem",
      description:
        "A local retail business had an outdated website that wasn't mobile-friendly and had poor visibility on Google.",
    },
    solution: {
      title: "Solution",
      description:
        "We redesigned the site with a clean layout, optimized for search, and made it fully mobile responsive.",
    },
    result: {
      title: "Result",
      description:
        "2× increase in page views, 40% lower bounce rate, and improved sales inquiries within weeks.",
    },
    image: "/images/case-study-photo.jpg",
    imageAlt: "Retail Business Analytics and Performance Charts",
  },
  {
    id: "case-study-2",
    badgeTitle: "Case Study-2",
    date: "14 Jul, 2025",
    problem: {
      title: "Problem",
      description:
        "An emerging B2B SaaS platform struggled with high drop-offs on their self-serve signup flow and low product engagement.",
    },
    solution: {
      title: "Solution",
      description:
        "Crafted a conversion-optimized UI/UX journey with streamlined onboarding, interactive feature demos, and clear value props.",
    },
    result: {
      title: "Result",
      description:
        "+65% demo requests, 3× higher user retention, and halved the customer acquisition cost within 60 days.",
    },
    image: "/images/case-study-photo.jpg",
    imageAlt: "B2B SaaS Growth Metrics and Conversion Funnel",
  },
  {
    id: "case-study-3",
    badgeTitle: "Case Study-3",
    date: "08 Aug, 2025",
    problem: {
      title: "Problem",
      description:
        "A healthcare and consulting firm lacked credibility online due to cluttered navigation and an unclear appointment booking system.",
    },
    solution: {
      title: "Solution",
      description:
        "Built a modern, patient-first web experience with one-click appointment scheduling, structured packages, and trust badges.",
    },
    result: {
      title: "Result",
      description:
        "120% growth in qualified appointment bookings and top 3 Google ranking for target competitive keywords.",
    },
    image: "/images/case-study-photo.jpg",
    imageAlt: "Healthcare Consulting Booking Growth and Patient Engagement",
  },
];

