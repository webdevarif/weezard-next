"use client";

import React, { useRef, useState, useEffect } from "react";
import { ProcessCard, ProcessItemData } from "./ProcessCard";
import { ProcessScrollBar } from "./ProcessScrollBar";

interface ProcessScrollListProps {
  items: ProcessItemData[];
}

/**
 * ProcessScrollList Component
 * 
 * Strict Figma Pixel-Perfect Implementation:
 * - Group 1413375658: width 672px, height 649px, overflow-y: scroll
 * - Custom wheel scroll interception:
 *   - While scrolling inside the list, prevents outer page scrolling (e.preventDefault).
 *   - When at the very top (first card) and scrolling UP, outer page scrolls naturally.
 *   - When at the very bottom (last card reached) and scrolling DOWN, outer page scrolls naturally.
 * - Clicking or hovering on any card activates it smoothly
 * - Interactive custom yellow scrollbar (#EAD53F) on track (#3967AA)
 * - Bottom gradient fade overlay
 */
export const ProcessScrollList: React.FC<ProcessScrollListProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateProgress = () => {
    const el = containerRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const maxScroll = scrollHeight - clientHeight;
    const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
    setScrollProgress(progress);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      updateProgress();
    };

    // Strict non-passive wheel handler on the container to prevent main page scrolling while scrolling cards
    const handleWheelEvent = (e: WheelEvent) => {
      const maxScroll = el.scrollHeight - el.clientHeight;
      if (maxScroll <= 0) return;

      const isScrollingUp = e.deltaY < 0;
      const isScrollingDown = e.deltaY > 0;
      const isAtTop = el.scrollTop <= 1;
      const isAtBottom = el.scrollTop >= maxScroll - 1;

      // When at the very top and scrolling UP, or at the very bottom and scrolling DOWN, let window scroll resume!
      if ((isScrollingUp && isAtTop) || (isScrollingDown && isAtBottom)) {
        return;
      }

      // Otherwise, completely stop the outer window scroll and smoothly scroll the list
      e.preventDefault();
      e.stopPropagation();
      el.scrollTop += e.deltaY;
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    el.addEventListener("wheel", handleWheelEvent, { passive: false });

    return () => {
      el.removeEventListener("scroll", handleScroll);
      el.removeEventListener("wheel", handleWheelEvent);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ overscrollBehavior: "contain" }}
      className="relative flex items-start justify-between gap-4 sm:gap-6 w-full lg:w-[708px] h-[649px]"
    >
      {/* Scrollable Cards Container (Frame 1686558339: 672px width, 649px height, gap 24px) */}
      <div
        ref={containerRef}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          overscrollBehavior: "contain",
        }}
        className="relative flex flex-col gap-6 w-full lg:w-[672px] flex-shrink-0 h-[649px] overflow-y-auto overflow-x-hidden pr-2 pb-[320px] select-none"
      >
        {items.map((item, idx) => (
          <ProcessCard
            key={item.id}
            item={item}
            isActive={idx === activeIndex}
            onActivate={() => setActiveIndex(idx)}
          />
        ))}
      </div>

      {/* Figma Custom Scrollbar Indicator (Rectangle 8997 & Rectangle 8998) */}
      <div className="h-[649px] py-1 hidden sm:block flex-shrink-0">
        <ProcessScrollBar scrollProgress={scrollProgress} />
      </div>

      {/* Bottom Gradient Fade Overlay (Rectangle 8995: 308px height, pointer-events-none) */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-7 sm:right-9 h-[220px] sm:h-[280px] bg-gradient-to-b from-transparent via-[#092856]/75 to-[#092856]"
        aria-hidden="true"
      />
    </div>
  );
};

export default ProcessScrollList;
