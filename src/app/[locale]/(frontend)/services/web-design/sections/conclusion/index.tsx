/**
 * Conclusion Section for Services / Web Design Page
 * Renders the concluding summary card below the FAQ section.
 * Designed with a dashed divider line on top, clean white card, and a bottom dual-tone gradient border (Royal Blue #305CD8 to Purple #903DD1).
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";

export const ConclusionSection: React.FC = () => {
  return (
    <section className="w-full pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top dashed divider line matching Figma Path 0 */}
        <div className="border-t-2 border-dashed border-[#BEC8E5] pt-8 lg:pt-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="relative rounded-[16px] bg-white p-6 sm:p-9 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100/80 overflow-hidden"
          >
            {/* Bottom linear gradient accent line (#305CD8 to #903DD1) matching paint0_linear_64709_4825 */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#305CD8] to-[#903DD1]" />

            <p className="text-secondary text-[16px] sm:text-[18px] lg:text-[19px] font-dm-sans leading-[1.75] font-normal">
              Your website is more than just a digital address, it’s the face of your business online. Whether you’re starting fresh or upgrading an outdated site, we’re here to make the process simple, smart, and tailored to your goals. With user-friendly design, reliable support, and a strategy-first approach, our web design packages will help your small business to grow and convert visitors into loyal customers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;

