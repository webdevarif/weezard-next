"use client";

/**
 * SingleBlogPageContent Component
 * 
 * Orchestrates the full Single Blog Post page layout:
 * 1. SingleBlogHero: Ambient dark hero with category tag, title, and frosted glass metadata box
 * 2. 2-Column Content Grid:
 *    - Left: Sticky sidebar with Table of Contents ("5 Minute Read") + Contact Us widget
 *    - Right: Main Article body with featured 3D banner, 2-column team section, tags, and CommentForm
 * 3. FAQ Section: Exact 2-column accordion + question card matching the main blog page
 */

import React from "react";
import SingleBlogHero from "./sections/hero/SingleBlogHero";
import TableOfContents from "./sections/sidebar/TableOfContents";
import SidebarContactForm from "./sections/sidebar/SidebarContactForm";
import ArticleContent from "./sections/article/ArticleContent";
import CommentForm from "./sections/article/CommentForm";
import Faq from "@/app/[locale]/components/sections/Faq";
import { blogFaqData } from "@/app/[locale]/(frontend)/blog/PageContent";

interface SingleBlogPageContentProps {
  slug?: string;
}

export function SingleBlogPageContent({ slug }: SingleBlogPageContentProps) {
  // Can format dynamic title if slug provided, or use standard full design title
  const displayTitle = "What Does PPC Stand For In Marketing? How To Do PPC?";

  return (
    <div className="w-full bg-[#FCFDFF] min-h-screen">
      {/* 1. Hero Section */}
      <SingleBlogHero
        category="Design Branding"
        title={displayTitle}
        date="Jul 27, 2025"
        author="Nahian Mussarat Isha"
        commentsCount="3 Comments"
      />

      {/* 2. Main 2-Column Reading Section */}
      <section className="container mx-auto px-4 max-w-[1240px] py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* Left Column: Sticky Sidebar (330px) - Hidden on mobile/tablet, shown on desktop */}
          <aside className="hidden lg:block w-full lg:w-[330px] flex-shrink-0 space-y-8 lg:sticky lg:top-28">
            <TableOfContents />
            <SidebarContactForm />
          </aside>

          {/* Right Column: Article Body & Comment Form */}
          <main className="w-full lg:flex-1 min-w-0">
            <ArticleContent />
            <CommentForm />
          </main>
        </div>
      </section>

      {/* 3. FAQ Section (0 padding and margin on mobile so the SVG/banner seamlessly touches footer) */}
      <section className="border-t border-[#EEF2F6] bg-white pb-0 mb-0">
        <Faq data={blogFaqData} className="!pb-0 !mb-0 lg:!pb-[100px]" />
      </section>
    </div>
  );
}

