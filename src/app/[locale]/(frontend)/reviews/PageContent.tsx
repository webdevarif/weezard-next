"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations/framer";
import Faq from "../../components/sections/Faq";
import PromoBanner from "../../components/cards/promo-banner";

/**
 * About Us Page Content
 */
export function PageContent() {
  const data={
    faqs: {
      title: "FAQs — About Weezard",
      info: "Got questions? You’re not alone. Here are a few common things small business owners ask us before they get started.",
      categories: [
          {
              name: "Website Design",
              slug: "website-design",
              items: [
                  {
                      title: 'Why the name “Weezard”?',
                      content: `Weezard stands for wisdom, simplicity, and skill. While we don’t do magic, our process-driven approach often feels like it—delivering smart digital solutions that just work.`
                  },
                  {
                      title: 'How do you keep things simple for non-tech clients?',
                      content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                  },
                  {
                      title: 'What makes Weezard different from other agencies?',
                      content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                  },
                  {
                      title: 'How do you manage projects remotely?',
                      content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                  },
                  {
                      title: 'How experienced is your team?',
                      content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                  },
              ]
          },
      ],
      question: {
        title: "Still have a questions?",
        button_label: "Contact Us",
        button_url: "#"
      }
    },
  }
  return (
    <>
    
      {/* WHY SMALL BUSINESS CHOOSE US */}
      <section className="">
        <div className="container">
          <PromoBanner
            title="Ready to Launch a Website That Works?"
            description="See how our websites improve load times, UX, and conversions for businesses like yours."
            primaryButton={{ label: "Book a Free Consultation", href: "/contact" }}
            secondaryButton={{ label: "Request a Custom Quote", href: "/quote" }}
            showBorder={true}
          />
        </div>
      </section>

      <Faq data={data.faqs} />
    </>
  );
}
