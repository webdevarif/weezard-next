"use client";

import React, { useState } from "react";
import BlogHeroSection from "./sections/hero";
import BlogFeedSection from "./sections/blog-feed";
import Faq from "@/app/[locale]/components/sections/Faq";
import { FaqDataProps } from "@/app/[locale]/components/sections/Faq/types";

export const blogFaqData: FaqDataProps = {
  title: "FAQs — About Weezard",
  info: "Got questions? You’re not alone. Here are a few common things small business owners ask us before they get started.",
  categories: [
    {
      name: "About Weezard",
      slug: "about-weezard",
      items: [
        {
          title: 'Why the name “Weezard”?',
          content:
            "Weezard stands for wisdom, simplicity, and skill. While we don’t do magic, our process-driven approach often feels like it—delivering smart digital solutions that just work.",
        },
        {
          title: "How do you keep things simple for non-tech clients?",
          content:
            "We speak in plain language without confusing tech jargon, providing clear video walkthroughs, intuitive dashboards, and dedicated support at every step.",
        },
        {
          title: "What makes Weezard different from other agencies?",
          content:
            "No bloated teams, no hourly billing surprises, and no generic templates. We offer fixed transparent pricing, senior-level attention, and guaranteed rapid turnaround.",
        },
        {
          title: "How do you manage projects remotely?",
          content:
            "Through structured sprints, live Figma collaborative boards, dedicated Slack/WhatsApp channels, and weekly video check-ins to keep everything aligned.",
        },
        {
          title: "How experienced is your team?",
          content:
            "Our core team brings 8+ years of expertise across UI/UX design systems, full-stack Next.js web development, and digital brand strategy.",
        },
      ],
    },
  ],
  question: {
    title: "Still have a questions?",
    button_label: "Contact Us",
    button_url: "/contact-us",
  },
};

/**
 * Blog Index Page Content
 * Modular composition assembling:
 * 1. BlogHeroSection (1920x800 background, search bar & category filter pills)
 * 2. BlogFeedSection (Featured article, 38 categorized posts, 9 cards/page & pagination)
 * 3. Faq (FAQs — About Weezard 2-column layout with yellow circular minus & blue plus)
 */
export function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState("Latest Blog");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to page 1 on category change
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to page 1 on search input
  };

  return (
    <main className="flex flex-col w-full">
      {/* 1. Hero Section with Search & Category Pills */}
      <BlogHeroSection
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onSearch={handleSearch}
      />

      {/* 2. Blog Cards Feed Section with Dynamic Pagination */}
      <BlogFeedSection
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      {/* 3. FAQs — About Weezard Section */}
      <Faq data={blogFaqData} />
    </main>
  );
}

export default BlogPageContent;
