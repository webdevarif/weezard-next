import { staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';
import React from 'react';
import WebDesignIcon from './assets/web-design.png'
import DigitalMarkertingIcon from './assets/digital-marketing.png'
import WebDevelopmentIcon from './assets/web-development.png'
import Image from 'next/image';
import { Link } from '@/lib/i18n/routing';
import { GoArrowUpRight } from 'react-icons/go';
import { GrCheckmark } from "react-icons/gr";
import { cn } from '@/lib/utils';

const CoreServices = () => {
    const data ={

        list: [
            {
                icon: WebDesignIcon,
                title: "Web Design",
                info: "Creative, responsive, and user-focused designs.",
                headerBg: "bg-[linear-gradient(273.04deg,#C7B0FE_-83.65%,#305CD8_97.64%)]",
                headerText: "text-white",
                textColor: "#092856",
                contentBg: "bg-[#F3F8FF]",
                items: [
                    { text: "Custom-made UI/UX to reflect your brand’s identity."},
                    { text: "Responsive layouts that work on every screen."},
                    { text: "Conversion-driven design principles to increase engagement."},
                    { text: "Figma to live prototype support."},
                    { text: "Fast delivery with pixel-perfect precision"},
                    { text: "White-label delivery under your brand"},
                ],
                button_label: "Design Your Website",
                button_url: "#",
            },
            {
                icon: WebDevelopmentIcon,
                title: "Web Development",
                info: "Custom-coded, fast, and scalable websites",
                headerBg: "bg-purple",
                headerText: "text-white",
                textColor: "#903DD1",
                contentBg: "bg-[#F7F4FE]",
                items: [
                    { text: "Built for speed, scalability, and security"},
                    { text: "Expert in WordPress, Shopify, Webflow, and custom stacks"},
                    { text: "Frontend & backend dev with clean, maintainable code"},
                    { text: "E-commerce, landing pages, and full-site builds"},
                    { text: "Ongoing support and maintenance options"},
                    { text: "Delivered fully managed and on-brand"},
                ],
                button_label: "Build Your Website",
                button_url: "#",
            },
            {
                icon: DigitalMarkertingIcon,
                title: "Digital Marketing",
                info: "SEO, Keyword Research, and Social Media Marketing that deliver ROI",
                headerBg: "bg-[linear-gradient(90deg,#092856_0%,#1457BC_100%)]",
                headerText: "text-white",
                textColor: "#092856",
                contentBg: "bg-[#F3F8FF]",
                items: [
                    { text: "Targeted SEO to rank higher and reach the right audience"},
                    { text: "Keyword research and crawling strategies for organic visibility"},
                    { text: "Social media management & content strategy"},
                    { text: "Monthly reporting with real results"},
                    { text: "Email marketing & automation setup"},
                    { text: "Google Search Console & Analytics setup + optimization"},
                ],
                button_label: "Grow with Marketing",
                button_url: "#",
            }
        ]
    }
  return (
    <motion.section className='py-[60px] lg:py-[120px] space-y-[50px]'
        variants={staggerContainer}
        initial="hidden"
        animate="visible">
        <div className="container">
            <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-[5fr_7fr] text-center lg:text-start">
                <div className="grid_item space-y-[10px]">
                    <span className='text-blue bg-blue/10 text-[14px] inline-flex leading-[1.7] uppercase py-[5px] px-[14px] font-semibold rounded-full'>What We Do</span>
                    <h3 className="text-[32px] lg:text-[45px] leading-[1.2] font-dm-sans -tracking-[0.01em] text-navy font-bold">Our Core Services</h3>
                </div>
                <div className="grid_item">
                    <div className="lg:ps-[20px] relative before:content-[unset] lg:before:content-[''] before:w-[3px] before:h-full before:absolute before:start-0 before:top-0 before:bg-[linear-gradient(347.21deg,rgba(199,176,254,0.3)_-9.25%,_#903DD1_72.89%)]">
                        <p className="text-heading-2 font-normal">Weezard offers fully managed IT services that provide all aspects of your digital needs. Our services include (but are not limited to) designing custom websites, providing scalable web development services, implementing digital marketing strategies, and more. We manage every detail with precision and expertise. Our goal is to empower your small businesses by taking the tech load off your shoulders. The sole purpose is to produce seamless, scalable solutions under your own brand. No matter where you're based, Basildon, London, anywhere in the UK or across the globe, Weezard is here to help turn your business into a brand.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                {data.list && data.list.map((card, index) => (
                   <div key={index} className="grid__item flex flex-col h-full" style={{ '--card-color': card.textColor } as React.CSSProperties}>
                    {/* HEADER */}
                    <div className={cn('mb-[20px] rounded-[20px] p-[30px] grid items-center grid-cols-[70px_1fr] gap-[16px]', card.headerBg, card.headerText)}>
                        <div>
                            <Image src={card.icon} alt='Web Development' />
                        </div>
                        <div className='space-y-[5px]'>
                            {card.title && <h5 className='text-heading-1 font-semibold'>{card.title}</h5>}
                            {card.info && <p className="text-body-small font-medium">{card.info}</p>}
                        </div>
                    </div>
                    <div className={cn('rounded-[20px] flex-grow flex flex-col', card.contentBg)}>
                        <div className="p-[24px]">
                            {card.items && <ul className="text-[16px] font-normal space-y-[16px]">
                                {card.items.map((item, x) =>(
                                    <li key={x} className="grid grid-cols-[16px_1fr] gap-[7px]">
                                        <svg width="14" height="29" viewBox="0 0 14 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.6747 9.3252C13.2415 8.89146 12.5381 8.89174 12.1044 9.3252L5.03702 16.3929L1.89587 13.2517C1.46213 12.818 0.759044 12.818 0.325305 13.2517C-0.108435 13.6855 -0.108435 14.3886 0.325305 14.8223L4.25157 18.7486C4.46831 18.9653 4.7525 19.0739 5.03672 19.0739C5.32094 19.0739 5.6054 18.9656 5.82213 18.7486L13.6747 10.8957C14.1084 10.4623 14.1084 9.75891 13.6747 9.3252Z" fill={card.textColor}/>
                                        </svg>
                                        { item.text && <div>{item.text}</div>}
                                    </li>
                                ))}
                            </ul>}
                        </div>
                        <div className="border-t-[2px] border-solid border-[#C9CCD0]/50 mt-auto px-[24px] py-[20px] group/card-footer">
                            <Link className={cn('flex no-underline justify-between gap-[10px] items-center font-semibold text-[var(--card-color)]')} href={card.button_url}
                            style={{ color: `${card.textColor}`}}>
                                {card.button_label && <div className='underline underline-offset-2'>{card.button_label}</div>}
                                <span className={cn('w-[50px] min-w-[50px] aspect-square inline-flex justify-center items-center border border-[var(--card-color)] border-solid rounded-full group-hover/card-footer:bg-[var(--card-color)] group-hover/card-footer:text-white transition-all duration-100')}>
                                    <GoArrowUpRight className='!w-[24px] !h-[24px]'/>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div> 
                ))}
            </div>
        </div>
    </motion.section>
  )
}

export default CoreServices;