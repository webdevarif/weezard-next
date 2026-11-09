import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqAccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * Single Accordion Item matching Figma CSS:
 * 
 * Active (Expanded):
 * - Background: linear-gradient(273.04deg, #C7B0FE -83.65%, #305CD8 97.64%)
 * - Rounded: 12px
 * - Padding: 24px 30px
 * - Question: DM Sans 600 (Semibold), 18px/27px, #FFFFFF
 * - Answer: Manrope 400 (Regular), 18px/27px, #FFFFFF
 * - Icon: Minus (−) 20px x 20px, stroke 2px #FFFFFF
 * 
 * Inactive (Collapsed):
 * - Background: #FFFFFF (or transparent)
 * - Border: 1px solid #D5D5D5
 * - Rounded: 12px
 * - Height: 75px (min-h-[75px])
 * - Padding: 24px 30px
 * - Question: DM Sans 600 (Semibold), 18px/27px, #092856
 * - Icon: Plus (+) 20px x 20px, stroke 2px #305CD8
 */
export const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      onClick={onToggle}
      className={`w-full rounded-[12px] transition-all duration-300 cursor-pointer select-none overflow-hidden ${
        isOpen
          ? "shadow-md"
          : "border border-solid border-[#D5D5D5] bg-white hover:border-[#305CD8]/60 transition-colors"
      }`}
      style={
        isOpen
          ? {
              background:
                "linear-gradient(273.04deg, #C7B0FE -83.65%, #305CD8 97.64%)",
            }
          : undefined
      }
    >
      <div className="w-full px-6 sm:px-[30px] py-[22px] sm:py-[24px]">
        {/* Header row: Question and Plus/Minus icon */}
        <div className="flex items-center justify-between gap-4">
          <h3
            className={`font-dm-sans font-semibold text-[17px] sm:text-[18px] leading-[27px] flex-1 ${
              isOpen ? "text-white" : "text-[#092856]"
            }`}
          >
            {question}
          </h3>

          {/* Icon (Minus when open, Plus when closed) */}
          <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
            {isOpen ? (
              // Minus Icon: 20px x 20px with stroke 2px #FFFFFF
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16667 10H15.8333"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              // Plus Icon: 20px x 20px with stroke 2px #305CD8
              <svg
                className="w-5 h-5 text-[#305CD8]"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4.16667V15.8333M4.16667 10H15.8333"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Answer section (animated collapse/expand) */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="mt-2 pt-1 font-manrope font-normal text-[16px] sm:text-[18px] leading-[27px] text-white">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
