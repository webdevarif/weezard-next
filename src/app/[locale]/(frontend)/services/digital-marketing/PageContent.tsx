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
            title: "Need Help? We’ve Got You Covered!",
            info: "Got questions? You’re not alone. Here are a few common things small business owners ask us before they get started.",
            categories: [
                {
                    name: "Website Design",
                    slug: "website-design",
                    items: [
                        {
                            title: 'What kind of results can I expect?',
                            content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                        },
                        {
                            title: 'How soon will I see results?',
                            content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                        },
                        {
                            title: 'Do I have to sign a long-term contract?',
                            content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                        },
                        {
                            title: 'Can I change or cancel my plan later?',
                            content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                        },
                        {
                            title: 'Will I own the content and data?',
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
            description: "Choosing the right web design service can make all the difference in how your business is perceived online. At Weezard, we combine thoughtful design, reliable development, and marketing strategy to give small businesses a powerful digital presence. With our transparent pricing, dedicated support, and scalable solutions, we’re here to help you grow. No guesswork, no hidden fees. Whether you're starting from scratch or looking to upgrade, our website packages and affordable SEO packages for small businesses are designed to give you results without breaking the bank."
        },
    }

  return (
    <>
      <Pricing data={data.pricing}/>
      <Faq data={data.faqs}
        shapes={
            <>
                <span className="hidden lg:inline-block bg-[#86DDF1] w-[565px] aspect-[6/10] rounded-[50%] opacity-20 blur-[300px] absolute top-0 start-0 -z-[1]"></span>
                <span className="hidden lg:inline-block bg-[#EAD53F] opacity-10 w-[565px] aspect-[6/10] rounded-[50%] blur-[250px] absolute bottom-[10%] start-[20%] -z-[1]"></span>
                <span className="inline-block bg-purple inline-block h-[230px] w-[230px] lg:h-[450px] lg:max-h-[45vw] lg:max-w-[30vw] lg:w-[365px] rounded-[50%] blur-[200px] absolute bottom-[20%] start-0 lg:start-auto lg:bottom-0 lg:end-0 -z-[1] opacity-15"></span>
            </>
        }
      />
    </>
  );
}

