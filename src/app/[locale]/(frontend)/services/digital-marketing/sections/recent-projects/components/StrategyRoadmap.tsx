import React from "react";
import Image from "next/image";
import { StrategyCard } from "./StrategyCard";
import { StepNode } from "./StepNode";
import { StrategyStepItem } from "../data/strategySteps";

interface StrategyRoadmapProps {
  steps: StrategyStepItem[];
}

/**
 * StrategyRoadmap Component
 * 
 * Strict Figma Pixel-Perfect Implementation of Frame 1686558377:
 * - Desktop Canvas: Exactly 1320px width x 368px height
 * - Uses clean, semantic SVG names:
 *   - connector-step-1-to-2.svg, connector-step-2-to-3.svg, connector-step-3-to-4.svg, connector-step-4-to-5.svg
 *   - stem-down-connector.svg, stem-up-connector.svg
 * - All step titles & labels dynamically passed from content.ts
 * - Fully responsive on mobile & tablet
 */
export const StrategyRoadmap: React.FC<StrategyRoadmapProps> = ({ steps }) => {
  if (!steps || steps.length < 5) return null;

  return (
    <div className="w-full">
      {/* ============================================================== */}
      {/* 1. DESKTOP VIEW (Pixel-Perfect 1320px Canvas Layout >= 1024px) */}
      {/* ============================================================== */}
      <div className="hidden lg:block relative w-[1320px] h-[368px] mx-auto select-none">
        {/* Horizontal Dashed Arrow Connectors between Nodes */}
        {/* Connector 1 -> 2 (X: 88px, Y: 177px, width: 179px) */}
        <div className="absolute left-[88px] top-[177px] w-[179px] h-[15px] pointer-events-none">
          <Image
            src="/services/digital-marketing/recent-projects/connector-step-1-to-2.svg"
            alt="Connector 1-2"
            width={180}
            height={15}
            className="w-full h-auto"
          />
        </div>

        {/* Connector 2 -> 3 (X: 355px, Y: 177px, width: 179px) */}
        <div className="absolute left-[355px] top-[177px] w-[179px] h-[15px] pointer-events-none">
          <Image
            src="/services/digital-marketing/recent-projects/connector-step-2-to-3.svg"
            alt="Connector 2-3"
            width={180}
            height={15}
            className="w-full h-auto"
          />
        </div>

        {/* Connector 3 -> 4 (X: 622px, Y: 177px, width: 179px) */}
        <div className="absolute left-[622px] top-[177px] w-[179px] h-[15px] pointer-events-none">
          <Image
            src="/services/digital-marketing/recent-projects/connector-step-3-to-4.svg"
            alt="Connector 3-4"
            width={180}
            height={15}
            className="w-full h-auto"
          />
        </div>

        {/* Connector 4 -> 5 (X: 889px, Y: 177px, width: 179px) */}
        <div className="absolute left-[889px] top-[177px] w-[179px] h-[15px] pointer-events-none">
          <Image
            src="/services/digital-marketing/recent-projects/connector-step-4-to-5.svg"
            alt="Connector 4-5"
            width={180}
            height={15}
            className="w-full h-auto"
          />
        </div>

        {/* --- STEP 1: Discovery & Audit (Bottom Card) --- */}
        <div className="absolute left-[30px] top-[128px]">
          <StepNode
            stepNumber={steps[0].stepNumber}
            stepLabel={steps[0].stepLabel}
            position="bottom"
          />
        </div>
        <div className="absolute left-[56px] top-[213px] w-[7px] h-[40px] pointer-events-none">
          <Image
            src="/services/digital-marketing/recent-projects/stem-down-connector.svg"
            alt="Stem 1"
            width={7}
            height={44}
            className="w-full h-full"
          />
        </div>
        <div className="absolute left-[0px] top-[248px]">
          <StrategyCard
            stepNumber={steps[0].stepNumber}
            title={steps[0].title}
            bgColor={steps[0].bgColor}
            waveColor={steps[0].waveColor}
          />
        </div>

        {/* --- STEP 2: Strategy Planning (Top Card) --- */}
        <div className="absolute left-[267px] top-[0px]">
          <StrategyCard
            stepNumber={steps[1].stepNumber}
            title={steps[1].title}
            bgColor={steps[1].bgColor}
            waveColor={steps[1].waveColor}
          />
        </div>
        <div className="absolute left-[325px] top-[115px] w-[7px] h-[40px] pointer-events-none">
          <Image
            src="/services/digital-marketing/recent-projects/stem-up-connector.svg"
            alt="Stem 2"
            width={7}
            height={44}
            className="w-full h-full"
          />
        </div>
        <div className="absolute left-[299px] top-[155px]">
          <StepNode
            stepNumber={steps[1].stepNumber}
            stepLabel={steps[1].stepLabel}
            position="top"
          />
        </div>

        {/* --- STEP 3: Content & Campaign Creation (Bottom Card) --- */}
        <div className="absolute left-[564px] top-[128px]">
          <StepNode
            stepNumber={steps[2].stepNumber}
            stepLabel={steps[2].stepLabel}
            position="bottom"
          />
        </div>
        <div className="absolute left-[590px] top-[213px] w-[7px] h-[40px] pointer-events-none">
          <Image
            src="/services/digital-marketing/recent-projects/stem-down-connector.svg"
            alt="Stem 3"
            width={7}
            height={44}
            className="w-full h-full"
          />
        </div>
        <div className="absolute left-[534px] top-[248px]">
          <StrategyCard
            stepNumber={steps[2].stepNumber}
            title={steps[2].title}
            bgColor={steps[2].bgColor}
            waveColor={steps[2].waveColor}
          />
        </div>

        {/* --- STEP 4: Execution & Monitoring (Top Card) --- */}
        <div className="absolute left-[801px] top-[0px]">
          <StrategyCard
            stepNumber={steps[3].stepNumber}
            title={steps[3].title}
            bgColor={steps[3].bgColor}
            waveColor={steps[3].waveColor}
          />
        </div>
        <div className="absolute left-[860px] top-[115px] w-[7px] h-[40px] pointer-events-none">
          <Image
            src="/services/digital-marketing/recent-projects/stem-up-connector.svg"
            alt="Stem 4"
            width={7}
            height={44}
            className="w-full h-full"
          />
        </div>
        <div className="absolute left-[834px] top-[155px]">
          <StepNode
            stepNumber={steps[3].stepNumber}
            stepLabel={steps[3].stepLabel}
            position="top"
          />
        </div>

        {/* --- STEP 5: Reporting & Optimization (Bottom Card) --- */}
        <div className="absolute left-[1099px] top-[128px]">
          <StepNode
            stepNumber={steps[4].stepNumber}
            stepLabel={steps[4].stepLabel}
            position="bottom"
          />
        </div>
        <div className="absolute left-[1125px] top-[213px] w-[7px] h-[40px] pointer-events-none">
          <Image
            src="/services/digital-marketing/recent-projects/stem-down-connector.svg"
            alt="Stem 5"
            width={7}
            height={44}
            className="w-full h-full"
          />
        </div>
        <div className="absolute left-[1068px] top-[248px]">
          <StrategyCard
            stepNumber={steps[4].stepNumber}
            title={steps[4].title}
            bgColor={steps[4].bgColor}
            waveColor={steps[4].waveColor}
          />
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. MOBILE & TABLET RESPONSIVE VIEW (< 1024px)                  */}
      {/* ============================================================== */}
      <div className="lg:hidden flex flex-col gap-6 sm:gap-8 w-full max-w-[500px] mx-auto pt-4">
        {steps.map((step, idx) => (
          <div key={step.id} className="flex flex-col items-center gap-3">
            {/* Step Node */}
            <div className="flex items-center gap-3">
              <span className="font-dm-sans font-semibold text-[13px] text-[#305CD8] px-3 py-1 rounded-full bg-[#D9E3FD] uppercase">
                {step.stepLabel}
              </span>
              <StepNode
                stepNumber={step.stepNumber}
                stepLabel={step.stepLabel}
                position="bottom"
              />
            </div>

            {/* Step Card */}
            <StrategyCard
              stepNumber={step.stepNumber}
              title={step.title}
              bgColor={step.bgColor}
              waveColor={step.waveColor}
            />

            {/* Connecting line between steps on mobile */}
            {idx < steps.length - 1 && (
              <div className="w-[2px] h-[32px] border-l-2 border-dashed border-[#305CD8]/40 my-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyRoadmap;
