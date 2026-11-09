/**
 * FAQ & Conclusion Section for Web Development
 * 
 * Pixel-Perfect match to Figma CSS & Frame 1686558275:
 * - 2-Column Accordion Layout (1322px width, 22px gap, 20px vertical gap)
 * - Single item expanded at a time (Item #1 open by default)
 * - Active state: linear-gradient(273.04deg, #C7B0FE -83.65%, #305CD8 97.64%) with white text & minus icon
 * - Inactive state: 1px solid #D5D5D5 with #092856 text & #305CD8 plus icon
 */

"use client";

import React, { useState } from "react";
import { FaqHeader } from "./components/FaqHeader";
import { FaqAccordionItem } from "./components/FaqAccordionItem";
import { FaqConclusion } from "./components/FaqConclusion";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  isOpenDefault?: boolean;
}

export interface FaqSectionProps {
  data: {
    header: {
      title: string;
      subtitle?: string;
    };
    items: FaqItem[];
    conclusion?: {
      text: string;
    };
  };
}

export const WebDevFaqSection: React.FC<FaqSectionProps> = ({ data }) => {
  // By default, the first item ("faq-1") is open. Only 1 item can be open at a time.
  const [activeId, setActiveId] = useState<string | null>("faq-1");

  const handleToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  // Split into Left Column (items 1-4) and Right Column (items 5-8) matching Figma Frame 1686558273 and Frame 1686558274
  const mid = Math.ceil(data.items.length / 2);
  const leftCol = data.items.slice(0, mid);
  const rightCol = data.items.slice(mid);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white select-none">
      <div className="max-w-[1360px] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Title: 45px DM Sans Bold (#092856) */}
        <FaqHeader title={data.header.title} />

        {/* 2-Column Accordion Grid matching Figma Frame 1686558275 (1322px width, 22px gap) */}
        <div className="max-w-[1322px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[22px] items-start">
          {/* Left Column (Frame 1686558273: 650px, gap 20px) */}
          <div className="flex flex-col gap-4 sm:gap-5 w-full">
            {leftCol.map((item) => (
              <FaqAccordionItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={activeId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>

          {/* Right Column (Frame 1686558274: 650px, gap 22px / 20px) */}
          <div className="flex flex-col gap-4 sm:gap-5 w-full">
            {rightCol.map((item) => (
              <FaqAccordionItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={activeId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Conclusion Section matching Figma Frame 1686557869 */}
        {data.conclusion && data.conclusion.text && (
          <FaqConclusion text={data.conclusion.text} />
        )}
      </div>
    </section>
  );
};

export default WebDevFaqSection;
