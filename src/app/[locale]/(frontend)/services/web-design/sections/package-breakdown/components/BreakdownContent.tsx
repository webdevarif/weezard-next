/**
 * BreakdownContent Component for Package Value Breakdown Section
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations/framer";
import { CheckCircle2, ShieldAlert, Sparkles, Layers, Rocket } from "lucide-react";
import { Button } from "@/app/[locale]/components/ui/button";
import { Link } from "@/lib/i18n/routing";

export const BreakdownContent: React.FC = () => {
  const points = [
    {
      title: "Research & Custom Strategy Architecture",
      desc: "Competitor analysis, user journey mapping, and conversion funnel planning before drawing a single wireframe.",
    },
    {
      title: "Bespoke UI/UX with 100% Figma Source Ownership",
      desc: "Pixel-perfect desktop and mobile screens, custom interactive design systems, and exportable vector assets.",
    },
    {
      title: "Clean Next.js 15 & Tailwind Engineering",
      desc: "Lightning-fast page loads, Core Web Vitals optimization, semantic HTML, and accessibility compliance.",
    },
    {
      title: "Technical SEO & Schema Integration",
      desc: "Structured metadata, OpenGraph social cards, sitemap generation, and search console indexing readiness.",
    },
    {
      title: "Full Month of Post-Launch Warranty Support",
      desc: "Direct guidance, content updates, and zero-headache technical assistance after going live.",
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="space-y-8 max-w-[620px]"
    >
      <div className="space-y-3">
        <motion.span
          variants={fadeInUp}
          className="text-blue bg-blue/10 text-[13px] inline-flex uppercase py-[5px] px-[16px] font-semibold rounded-full"
        >
          Value Breakdown
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="text-[32px] sm:text-[44px] lg:text-[48px] font-bold font-dm-sans text-navy leading-[1.18] -tracking-[0.015em]"
        >
          Get More In One Simple Package
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-secondary text-[16px] lg:text-[18px] leading-[1.65]"
        >
          We bundle everything required to launch an authoritative, client-converting digital presence without nickel-and-diming for basic features.
        </motion.p>
      </div>

      {/* Point Checklist */}
      <div className="space-y-5">
        {points.map((pt, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="flex items-start gap-4 p-4 rounded-[16px] bg-[#F7F9FD] border border-[#E9EFF9] hover:bg-white hover:shadow-sm transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-blue/10 text-blue flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[16px] sm:text-[17px] font-bold text-navy font-dm-sans">
                {pt.title}
              </h4>
              <p className="text-secondary text-[14px] leading-[1.55] mt-1">
                {pt.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action CTA */}
      <motion.div variants={fadeInUp} className="pt-2">
        <Button
          size="lg"
          className="rounded-full bg-blue hover:bg-blue/90 text-white font-semibold px-8 h-[50px] shadow-md"
          asChild
        >
          <Link href="/contact-us">
            Claim Your Web Package Today
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default BreakdownContent;

