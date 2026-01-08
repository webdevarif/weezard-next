"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations/framer";
import Pricing from "@/app/[locale]/components/sections/Pricing";
import Faq from "@/app/[locale]/components/sections/Faq";
import PromoBanner from "@/app/[locale]/components/cards/promo-banner";

/**
 * Services Page Content
 */
export function PageContent() {

  const data = {
    
    pricing: {
      header: {
        title: "Explore Our Transparent and Affordable Pricing Tailored to Your Need",
        content: "It’s universally understood that better service requires more effort, which often translates to higher costs. However, we are targeting our services for small businesses, startups, new ventures and SMEs, and we understand their budget and needs. That’s why we offer IT service in packages only, no random solutions or hidden fees. Whether you're just starting out or scaling up, our pricing is built to give you a collective, and data driven result within your budget. With packages starting from just $99, you can access expert design, development, and marketing support tailored to your growth stage. Choose a plan that aligns with your goals, and let our team handle the rest."
      },
      list: [
        {
            icon: "",
            title: "Starter",
            info: "Perfect for small businesses or those seeking to build their online presence",
            price: "$99",
            features: {
                checkColor: "#2196F3",
                secondaryColor: "#FAFAFA",
                items: [
                    {
                        text: "Professional Redesign (up to 5 pages)",
                    },
                    {
                        text: "Mobile-Ready Responsiveness",
                    },
                    {
                        text: "Basic SEO Fix",
                    },
                    {
                        text: "Visitor Analysis",
                    },
                    {
                        text: "One Full Revision",
                    },
                    {
                        text: "Full Month of Support",
                    },
                ]
            },
            actionButton: {
                label: "Talk to us",
                href: "#"
            }
        },
        {
            isFeatured: true,
            icon: "",
            title: "Growth",
            info: "Ideal for growing businesses looking to get recognized as a brand and gain unique presence",
            price: "$150",
            features: {
                checkColor: "#EAD53F",
                secondaryColor: "#092856",
                items: [
                    {
                        text: "Everything That Starter Pack Has",
                    },
                    {
                        text: "Custom Website (Up to 5 pages) + Basic eCommerce Setup",
                    },
                    {
                        text: "Mobile-Ready Responsiveness",
                    },
                    {
                        text: "Advanced SEO setup",
                    },
                    {
                        text: "Blog/News/Article Guidance for SEO",
                    },
                    {
                        text: "Social Media Integration",
                    },
                    {
                        text: "Up to 3 revision rounds",
                    },
                    {
                        text: "Full month of priority support",
                    },
                ]
            },
            actionButton: {
                label: "Talk to us",
                href: "#"
            }
        },
        {
            icon: "",
            title: "Scale",
            info: "Designed for businesses that need a complete digital presence and ongoing IT support",
            price: "$300",
            features: {
                checkColor: "#A93CFF",
                secondaryColor: "#FAFAFA",
                items: [
                    {
                        text: "Everything That Growth Pack Has",
                    },
                    {
                        text: "Custom website (Up to 8 pages) + Advanced eCommerce Setup",
                    },
                    {
                        text: "Advanced SEO Setup & strategy",
                    },
                    {
                        text: "Ongoing digital marketing support (ads, email, content, campaign)",
                    },
                    {
                        text: "Monthly performance reports",
                    },
                    {
                        text: "Unlimited revision rounds",
                    },
                    {
                        text: "Get 1 month of 24/7 premium support",
                    },
                ]
            },
            actionButton: {
                label: "Talk to us",
                href: "#"
            }
        },
      ],
      footer: {
        title: `Create a custom price quote with <strong>Weezard</strong>`,
        button_label: "Get Your Custom Quote",
        button_url: "#"
      }
    },

    faqs: {
        title: "Frequently Asked Questions",
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
      <Pricing data={data.pricing}/>
      
        {/* Ready to Launch a Website That Works for Your Business? */}
        <section className="pt-[60px] lg:pt-[120px]">
        <div className="container">
            <PromoBanner
                variant="center"
                title="Ready to Launch a Website That Works for Your Business?"
                description="See how our websites have improved load times, user experience, and conversions for businesses like yours."
                primaryButton={{ label: "Book a Free Consultation", href: "/contact" }}
                secondaryButton={{ label: "Request a Custom Quote", href: "/quote" }}
                showBorder={false}
            />
        </div>
        </section>
      <Faq data={data.faqs}/>
    </>
  );
}

