"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations/framer";
import Pricing from "@/app/[locale]/components/sections/Pricing";
import Faq from "@/app/[locale]/components/sections/Faq";

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
        variant: 'center',
        title: "Need Help? We’ve Got You Covered!",
        categories: [
            {
                name: "Website Design",
                slug: "website-design",
                items: [
                    {
                        title: 'How long does a web design project take?',
                        content: `Weezard stands for wisdom, simplicity, and skill. While we don’t do magic, our process-driven approach often feels like it—delivering smart digital solutions that just work.`
                    },
                    {
                        title: 'Will my site be mobile-friendly?',
                        content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                    },
                    {
                        title: 'Do you provide website maintenance?',
                        content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                    },
                    {
                        title: 'Can I update my site myself?',
                        content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                    },
                    {
                        title: 'Can I see the design before it goes live?',
                        content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                    },
                    {
                        title: 'Do you design eCommerce websites?',
                        content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                    },
                ]
            },
        ],
        question: {
            title: "Still have a questions?",
            button_label: "Contact Us",
            button_url: "#"
        },
        description: "Your website is more than just a digital address, it’s the face of your business online. Whether you're starting fresh or upgrading an outdated site, we’re here to make the process simple, smart, and tailored to your goals. With user-friendly design, reliable support, and a strategy-first approach, our web design packages will help your small business to grow and convert visitors into loyal customers."
    },
  }
  return (
    <>
      <Pricing data={data.pricing}/>
      
      <Faq data={data.faqs}/>
    </>
  );
}