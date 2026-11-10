/**
 * ProcessMobileSlider Component
 *
 * 100% Figma Pixel-Perfect Mobile Step Slider (Group 1413375641 in 430x753 frame):
 * - Single card visible per slide (w-full max-w-[390px] h-[357.88px], rx = 18.35px)
 * - Uses MobileCardFrame (exact Figma SVG fill, #DFDFDF + #903DD1 border, left wave blob)
 * - Top Floating Pill Badge: 128.94px x 60.35px, #D9E3FD, DM Sans 600, 27.53px, #305CD8
 * - Title Pill: 328.82px x 56.47px, DM Sans Bold 24px / 32px, #092856
 * - Description: DM Sans Regular 24px / 32px, #495162
 * - Exact Figma Curved Dashed Arrow (starting at x=106, y=562 -> x=229.4, y=608.5)
 *   pointing directly at the circular pagination dots (cx=252, 274, 296, 318 at y=609)
 */

"use client";

import React, { useRef, useState } from "react";
import { StepItemData } from "./ProcessStepCard";
import { MobileCardFrame } from "./MobileCardFrame";

interface ProcessMobileSliderProps {
  steps: StepItemData[];
}

export const ProcessMobileSlider: React.FC<ProcessMobileSliderProps> = ({ steps }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Sync scroll position with active dot (1 full viewport slide per step)
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    if (clientWidth <= 0) return;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveSlide(Math.min(Math.max(0, index), steps.length - 1));
  };

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const { clientWidth } = scrollContainerRef.current;
    scrollContainerRef.current.scrollTo({
      left: index * clientWidth,
      behavior: "smooth",
    });
    setActiveSlide(index);
  };

  const isLastSlide = activeSlide === steps.length - 1;

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* 1. Horizontal Full-Slide Snap-Scroll Cards Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="w-full flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pt-[34px]"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {steps.map((step, idx) => {
          const stepIdx = idx + 1;
          return (
            <div
              key={step.stepNumber}
              className="w-full flex-shrink-0 snap-center px-[20px] flex justify-center"
            >
              {/* Card Wrapper (390px x 357.88px at x=20, y=203.65 in 430px frame) */}
              <div
                className="step-mobile-card relative w-full max-w-[390px] h-[357.88px] rounded-[18.35px] select-none"
                style={{
                  filter: "drop-shadow(0px 30.5882px 61.1765px rgba(37, 75, 148, 0.1))",
                }}
              >
                {/* Top Floating Pill Badge (x=151, y=170 -> 33.65px above card top y=203.65) */}
                <div className="absolute -top-[33.65px] left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                  <div className="w-[128.94px] h-[60.35px] bg-[#D9E3FD] rounded-full flex items-center justify-center">
                    <span className="font-dm-sans font-semibold text-[27.53px] leading-[41px] text-[#305CD8] uppercase tracking-normal">
                      STEP {stepIdx}
                    </span>
                  </div>
                </div>

                {/* Exact Figma Mobile SVG Card Background, Border & Left Wave */}
                <div className="absolute inset-0 z-0 pointer-events-none rounded-[18.35px] overflow-hidden">
                  <MobileCardFrame stepIndex={stepIdx} />
                </div>

                {/* Inner Card Content (Frame 1686557958: x=51 -> 31px from card left, y=260.24 -> 56.59px from card top) */}
                <div className="relative z-10 pt-[56.59px] px-[24px] sm:px-[30.59px] flex flex-col items-center h-full pointer-events-auto">
                  {/* Title Box: Frame 1686558287 (328.82px x 56.47px, rx=12.2353px) */}
                  <div
                    className="w-full max-w-[328.82px] min-h-[56.47px] rounded-[12.24px] flex flex-row items-center justify-center p-[12.24px]"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(48, 92, 216, 0) 0%, rgba(48, 92, 216, 0.18) 48.56%, rgba(48, 92, 216, 0) 100%)",
                    }}
                  >
                    <h3 className="w-full font-dm-sans font-bold text-[22px] min-[390px]:text-[24px] leading-[32px] text-[#092856] tracking-[-0.01em]">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description (gap=12.24px, width=328.82px, DM Sans Regular 24px / 32px, #495162) */}
                  <p className="mt-[12.24px] w-full max-w-[328.82px] font-dm-sans font-normal text-[21px] min-[390px]:text-[24px] leading-[30px] min-[390px]:leading-[32px] text-[#495162]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Exact Figma Curved Dashed Arrow + Pagination Dots Row (y=561.53 to y=624) */}
      <div className="w-full px-[20px] flex justify-center">
        <div className="relative w-full max-w-[390px] h-[63px]">
          {/* Exact Mobile Curved Dashed Arrow from Figma SVG (x=104..230 -> left 84px inside 390px card frame) */}
          <div
            className={`absolute left-[18%] min-[390px]:left-[84px] top-0 w-[126px] h-[63px] pointer-events-none select-none transition-opacity duration-300 ${
              isLastSlide ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <svg
              width="126"
              height="64"
              viewBox="104 560 127 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
            >
              <path
                d="M108 562V560H104V562H106H108ZM104 562.375C104 563.48 104.895 564.375 106 564.375C107.105 564.375 108 563.48 108 562.375H106H104ZM108 563.125C108 562.02 107.105 561.125 106 561.125C104.895 561.125 104 562.02 104 563.125H106H108ZM104.223 568.106C104.33 569.206 105.308 570.01 106.407 569.903C107.507 569.796 108.311 568.818 108.204 567.719L106.214 567.912L104.223 568.106ZM109.841 575.987C109.52 574.93 108.404 574.333 107.347 574.653C106.29 574.973 105.692 576.09 106.013 577.147L107.927 576.567L109.841 575.987ZM109.543 585.661C110.064 586.635 111.276 587.001 112.25 586.48C113.224 585.958 113.59 584.746 113.069 583.772L111.306 584.717L109.543 585.661ZM117.759 590.778C117.057 589.925 115.797 589.802 114.944 590.503C114.09 591.204 113.967 592.464 114.668 593.318L116.213 592.048L117.759 590.778ZM121.182 599.832C122.036 600.533 123.296 600.41 123.997 599.556C124.698 598.703 124.575 597.443 123.722 596.741L122.452 598.287L121.182 599.832ZM130.728 601.431C129.754 600.91 128.542 601.276 128.02 602.25C127.499 603.224 127.865 604.436 128.839 604.957L129.783 603.194L130.728 601.431ZM137.353 608.487C138.41 608.808 139.527 608.21 139.847 607.153C140.167 606.096 139.57 604.98 138.513 604.659L137.933 606.573L137.353 608.487ZM146.781 606.296C145.682 606.189 144.704 606.993 144.597 608.093C144.49 609.192 145.294 610.17 146.394 610.277L146.588 608.286L146.781 606.296ZM154.85 610.5C155.955 610.5 156.85 609.605 156.85 608.5C156.85 607.395 155.955 606.5 154.85 606.5V608.5V610.5ZM162.55 606.5C161.445 606.5 160.55 607.395 160.55 608.5C160.55 609.605 161.445 610.5 162.55 610.5V608.5V606.5ZM170.25 610.5C171.355 610.5 172.25 609.605 172.25 608.5C172.25 607.395 171.355 606.5 170.25 606.5V608.5V610.5ZM177.95 606.5C176.845 606.5 175.95 607.395 175.95 608.5C175.95 609.605 176.845 610.5 177.95 610.5V608.5V606.5ZM185.65 610.5C186.755 610.5 187.65 609.605 187.65 608.5C187.65 607.395 186.755 606.5 185.65 606.5V608.5V610.5ZM193.35 606.5C192.245 606.5 191.35 607.395 191.35 608.5C191.35 609.605 192.245 610.5 193.35 610.5V608.5V606.5ZM201.05 610.5C202.155 610.5 203.05 609.605 203.05 608.5C203.05 607.395 202.155 606.5 201.05 606.5V608.5V610.5ZM208.75 606.5C207.645 606.5 206.75 607.395 206.75 608.5C206.75 609.605 207.645 610.5 208.75 610.5V608.5V606.5ZM216.45 610.5C217.555 610.5 218.45 609.605 218.45 608.5C218.45 607.395 217.555 606.5 216.45 606.5V608.5V610.5ZM224.15 606.5C223.045 606.5 222.15 607.395 222.15 608.5C222.15 609.605 223.045 610.5 224.15 610.5V608.5V606.5ZM106 562H104V562.375H106H108V562H106ZM106 563.125H104V563.5H106H108V563.125H106ZM106 563.5H104C104 565.054 104.075 566.59 104.223 568.106L106.214 567.912L108.204 567.719C108.069 566.331 108 564.924 108 563.5H106ZM107.927 576.567L106.013 577.147C106.913 580.121 108.101 582.969 109.543 585.661L111.306 584.717L113.069 583.772C111.75 581.31 110.664 578.706 109.841 575.987L107.927 576.567ZM116.213 592.048L114.668 593.318C116.622 595.696 118.804 597.878 121.182 599.832L122.452 598.287L123.722 596.741C121.545 594.953 119.547 592.955 117.759 590.778L116.213 592.048ZM129.783 603.194L128.839 604.957C131.531 606.399 134.379 607.587 137.353 608.487L137.933 606.573L138.513 604.659C135.794 603.836 133.19 602.75 130.728 601.431L129.783 603.194ZM146.588 608.286L146.394 610.277C147.91 610.425 149.446 610.5 151 610.5V608.5V606.5C149.576 606.5 148.169 606.431 146.781 606.296L146.588 608.286ZM151 608.5V610.5H154.85V608.5V606.5H151V608.5ZM162.55 608.5V610.5H170.25V608.5V606.5H162.55V608.5ZM177.95 608.5V610.5H185.65V608.5V606.5H177.95V608.5ZM193.35 608.5V610.5H201.05V608.5V606.5H193.35V608.5ZM208.75 608.5V610.5H216.45V608.5V606.5H208.75V608.5ZM224.15 608.5V610.5H228V608.5V606.5H224.15V608.5ZM229.414 609.914C230.195 609.133 230.195 607.867 229.414 607.086L216.686 594.358C215.905 593.577 214.639 593.577 213.858 594.358C213.077 595.139 213.077 596.405 213.858 597.186L225.172 608.5L213.858 619.814C213.077 620.595 213.077 621.861 213.858 622.642C214.639 623.423 215.905 623.423 216.686 622.642L229.414 609.914Z"
                fill="url(#paint4_linear_mobile_arrow)"
              />
              <defs>
                <linearGradient
                  id="paint4_linear_mobile_arrow"
                  x1="244.5"
                  y1="632.5"
                  x2="78.8045"
                  y2="523.169"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#305CD8" />
                  <stop offset="1" stopColor="#E7DDFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Circular Pagination Dots (y=609 -> top 41.5px from card bottom y=561.5, left=226px inside 390px card frame) */}
          <div
            className="absolute left-[56%] min-[390px]:left-[226px] top-[41.5px] flex items-center gap-[10px] h-[12px] z-10"
            role="tablist"
            aria-label="Process steps pagination"
          >
            {steps.map((_, i) => {
              const isActive = i === activeSlide;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToSlide(i)}
                  aria-label={`Go to step ${i + 1}`}
                  aria-selected={isActive}
                  role="tab"
                  className={`w-[12px] h-[12px] rounded-full transition-colors duration-200 cursor-pointer ${
                    isActive ? "bg-[#305CD8]" : "bg-[#D9D9D9] hover:bg-[#c0c0c0]"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessMobileSlider;
