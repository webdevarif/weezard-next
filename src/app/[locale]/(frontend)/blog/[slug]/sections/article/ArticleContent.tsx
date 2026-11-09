/**
 * ArticleContent Component
 * 
 * Renders the main reading article body for the single blog post:
 * - High-resolution PPC hand featured banner (image.png)
 * - Rich typography formatted matching the Figma design
 * - 2-column subsection with developer team photo (team-work.jpeg)
 * - Subheadings: "What Does PPC Stand For?", "Shopping Ads"
 * - Tags row ("alumni", "news", "school", "university")
 * - Social media share buttons (Twitter, Facebook, LinkedIn, Instagram)
 */

import React from "react";
import Image from "next/image";
import ppcBanner from "../../assets/ppc-banner.png";
import teamWorkImg from "../../assets/team-work.jpeg";

// Icons for social share
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function ArticleContent() {
  const tags = ["alumni", "news", "school", "university"];

  return (
    <article className="w-full">
      {/* Featured Header Banner */}
      <div className="relative w-full aspect-[950/460] rounded-[20px] overflow-hidden shadow-[0_12px_40px_rgba(20,40,90,0.06)] border border-[#EEF2F6] mb-8 bg-[#0B1536]">
        <Image
          src={ppcBanner}
          alt="What does PPC stand for in marketing"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Intro Text Section */}
      <div id="intro" className="space-y-5 text-[#475569] text-[15px] sm:text-[16px] leading-[1.8] font-manrope">
        <p>
          Digital marketing is based on pay-per-click (PPC) advertising. It is a way of making sure that companies can get to their target audience and send them to their websites. However, what does PPC stand for in marketing?
        </p>
        <p>
          Pay-per-click, also known as PPC, is a marketing term in which advertisers pay for each click on their adverts. This affordable method enables businesses to attract relevant traffic to their sites, thus serving as an imperative way of maximizing online presence with defined promotional goals.
        </p>
        <p>
          In this blog post, we will discuss the basic tenets of PPC advertising, beginning with its definition and relevance in today&apos;s digital world.
        </p>
      </div>

      {/* 2-Column Section: Team Image + What Does PPC Stand For? */}
      <div id="what-does-ppc-stand-for" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start my-10 pt-4">
        {/* Left: Team Photo */}
        <div className="relative w-full h-[280px] sm:h-[340px] rounded-[18px] overflow-hidden border border-[#EEF2F6] shadow-[0_8px_24px_rgba(20,40,90,0.04)]">
          <Image
            src={teamWorkImg}
            alt="Team collaborating on marketing campaign code"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right: Explanatory Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[22px] sm:text-[26px] font-bold text-navy font-dm-sans mb-4 leading-snug">
            What Does PPC Stand For?
          </h2>
          <div className="space-y-4 text-[#475569] text-[14px] sm:text-[15px] leading-[1.75] font-manrope">
            <p>
              One of the most common uses of PPC, which stands for Pay-Per-Click, is in marketing. It is a type of internet advertising where advertisers pay an amount every time their ads are clicked. Instead of acquiring visits organically, firms purchase traffic to their sites. For new companies that have limited funds for marketing purposes, this method works best because it offers the fastest means to drive a targeted audience to the website.
            </p>
            <p>
              In addition, it helps businesses who want to focus on a specific location or use keywords to do so effectively. However, PPC can be expensive and needs consistent checking, thus ensuring a nice ROI only. By being vigilant, campaign performance may be enhanced while spending can be properly controlled.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Sub-sections */}
      <div id="types-of-ppc-ads" className="my-8 space-y-5">
        <h2 className="text-[22px] sm:text-[26px] font-bold text-navy font-dm-sans leading-snug">
          What Does PPC Stand For?
        </h2>
        <div className="space-y-4 text-[#475569] text-[15px] sm:text-[16px] leading-[1.8] font-manrope">
          <p>
            One of the most common uses of PPC, which stands for Pay-Per-Click, is in marketing. It is a type of internet advertising where advertisers pay an amount every time their ads are clicked. Instead of acquiring visits organically, firms purchase traffic to their sites. For new companies that have limited funds for marketing purposes, this method works best because it offers the fastest means to drive a targeted audience to the website.
          </p>
          <p>
            Social media advertising involves PPC adverts shown on platforms such as Facebook, Instagram, Twitter, LinkedIn, and Pinterest. These ads can come in various formats, including image ads, video ads, carousel ads, which combine multiple images or videos into a single ad, and sponsored posts.
          </p>
          <p>
            One key advantage of social media advertising is that it allows for highly targeted ads. Advertisers can choose specific audiences using demographic data, interests, behaviors, and more. It allows advertisers to reach out to people who are most likely interested in their products or services, thus resulting in higher engagement and conversion rates.
          </p>
        </div>
      </div>

      {/* Shopping Ads Section */}
      <div id="shopping-ads" className="my-8 space-y-5">
        <h2 className="text-[22px] sm:text-[26px] font-bold text-navy font-dm-sans leading-snug">
          Shopping Ads
        </h2>
        <div className="space-y-4 text-[#475569] text-[15px] sm:text-[16px] leading-[1.8] font-manrope">
          <p>
            Shopping Ads (also known as Product Listing Ads/PLAs) are specifically made for e-commerce businesses. These types of ads appear on search engine results pages with a product image, title, price, and sometimes a short description or customer reviews. If someone types &ldquo;blue jeans,&rdquo; for example, different blue jeans from various sellers will be displayed, and they will come with photos, including the prices.
          </p>
          <p>
            These Shopping advertisements are quite effective in driving online sales because they provide complete product details at one glance. Users can easily compare products and prices and make logical purchase decisions quickly. Shopping ads are especially useful for businesses holding large inventory or when they want to promote specific items only.
          </p>
        </div>
      </div>

      {/* Horizontal Divider */}
      <div className="border-t border-[#EEF2F6] my-8" />

      {/* Tags and Social Share Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-2">
        {/* Left: Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[14px] font-bold text-navy font-dm-sans mr-1">
            Tags:
          </span>
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-[6px] bg-[#F1F5F9] text-[#64748B] text-[13px] font-medium font-manrope hover:bg-[#E2E8F0] transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Right: Share Icons */}
        <div className="flex items-center gap-3">
          <span className="text-[14px] font-bold text-navy font-dm-sans">
            Share:
          </span>
          <div className="flex items-center gap-2.5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#305CD8] hover:bg-[#305CD8] hover:text-white transition-all duration-200"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#305CD8] hover:bg-[#305CD8] hover:text-white transition-all duration-200"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#305CD8] hover:bg-[#305CD8] hover:text-white transition-all duration-200"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Instagram"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#305CD8] hover:bg-[#305CD8] hover:text-white transition-all duration-200"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

