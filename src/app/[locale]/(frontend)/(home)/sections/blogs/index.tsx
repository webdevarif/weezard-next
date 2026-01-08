import { staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import { Link } from '@/lib/i18n/routing';
import BlogBanner1 from './assets/blog-banner-1.png';
import BlogBanner2 from './assets/blog-banner-2.png';
import BlogBanner3 from './assets/blog-banner-3.png';
import { Carousel, CarouselContent, CarouselItem } from "@/app/[locale]/components/ui/carousel"

const BlogSection = () => {
    const data = {
        list: [
            {
                banner: BlogBanner1,
                title: "Top 10 Emerging Technologies in 2025.",
                date: "Jul 27 2025",
                comments: "3",
                slug: "/",
            },
            {
                banner: BlogBanner2,
                title: "How to Secure Your IT Infrastructure.",
                date: "Jul 27 2025",
                comments: "3",
                slug: "/",
            },
            {
                banner: BlogBanner3,
                title: "The Future of Cloud Computing",
                date: "Jul 27 2025",
                comments: "3",
                slug: "/",
            },
        ]
    }
    return (
        <motion.section className='py-[60px] lg:py-[120px] space-y-[50px] bg-[#EEF2F9]'
            variants={staggerContainer}
            initial="hidden"
            animate="visible">
            <div className="container">
                <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-[6fr_5fr] text-center lg:text-start">
                    <div className="grid_item space-y-[10px]">
                        <span className='text-blue bg-blue/10 text-[14px] inline-flex leading-[1.7] uppercase py-[5px] px-[14px] font-semibold rounded-full'>Blog</span>
                        <h3 className="text-[32px] lg:text-[45px] leading-[1.2] font-dm-sans -tracking-[0.01em] text-navy font-bold">Dive into Our Resources for Greater Insights</h3>
                    </div>
                    <div className="grid_item">
                        <p className="text-heading-2 font-normal">At Weezard, we believe in empowering our partners with the tools and insights they need to succeed. We offer a range of tools, including expert blog posts and downloadable guides, to help you navigate the world of design, development, and digital marketing. Unlock your next big idea with the magic of Weezard.</p>
                    </div>
                </div>
            </div>

            <div className="container space-y-[30px]">
                {/* Mobile Slider */}
                <div className="block lg:hidden">
                    <Carousel className="w-full">
                        <CarouselContent className="gap-[30px]">
                            {data.list.map((card, index) => (
                                <CarouselItem key={index} className="basis-[100%]">
                                    <BlogCard card={card} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-3 gap-[30px]">
                    {data.list.map((card, index) => (
                        <BlogCard key={index} card={card} />
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
const BlogCard = ({ card }: { card: any }) => (
    
    <div className="grid__item flex flex-col h-full">
        {/* BANNER */}
        <div className="w-full aspect-[5/4] relative rounded-[15px] overflow-hidden">
            <Image src={card.banner} alt={card.title} fill objectFit='cover' objectPosition='center'/>
        </div>

        {/* CARD INFORMATION */}
        <div className="px-[25px]">
            <Link href={card.slug} className="-mt-[60px] z-[1] hover:bg-blue hover:text-white transition-all duration-300 relative flex flex-col space-y-[10px] bg-white rounded-[16px] p-[30px] shadow-[0px_15px_80px_rgba(16,85,135,0.1)] group/blog-info-card">
                {/* INFO */}
                <div className="flex gap-[10px]">
                    <div className="flex items-center gap-[5px]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 1.88235C4.62132 1.88235 1.88235 4.62132 1.88235 8C1.88235 11.3787 4.62132 14.1176 8 14.1176C11.3787 14.1176 14.1176 11.3787 14.1176 8C14.1176 4.62132 11.3787 1.88235 8 1.88235ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="currentColor"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.99977 2.82422C8.51957 2.82422 8.94095 3.2456 8.94095 3.7654V8.1219C8.94095 8.12183 8.94095 8.12197 8.94095 8.1219C8.94103 8.24662 8.99062 8.36642 9.07883 8.45461L10.7829 10.1587C11.1505 10.5263 11.1505 11.1222 10.7829 11.4897C10.4154 11.8573 9.81946 11.8573 9.45191 11.4897L7.74801 9.78583C7.74797 9.7858 7.74804 9.78587 7.74801 9.78583C7.30678 9.34468 7.05873 8.74624 7.05859 8.1223V3.7654C7.05859 3.2456 7.47997 2.82422 7.99977 2.82422Z" fill="currentColor"/>
                        </svg>
                        <span>Jul 27 2025</span>
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.85821 6.35156C9.41077 6.35156 9.06406 6.69827 9.06406 7.12634C9.06406 7.5544 9.41077 7.90112 9.85821 7.90112C10.2669 7.90112 10.6136 7.5544 10.6136 7.12634C10.6136 6.69827 10.2669 6.35156 9.85821 6.35156ZM4.43477 6.35156C3.98734 6.35156 3.64062 6.69827 3.64062 7.12634C3.64062 7.5544 3.98734 7.90112 4.43477 7.90112C4.84347 7.90112 5.19018 7.5544 5.19018 7.12634C5.19018 6.69827 4.84347 6.35156 4.43477 6.35156Z" fill="currentColor"/>
                            <path d="M16.0764 4.88196C15.1447 3.60358 13.8431 2.74939 12.4155 2.36393V2.36587C12.0843 1.99785 11.7105 1.65889 11.2921 1.35673C8.12134 -0.948235 3.67024 -0.245125 1.3556 2.92565C-0.509674 5.50178 -0.430259 8.96697 1.47182 11.4288L1.48731 13.9972C1.48731 14.0592 1.497 14.1212 1.51637 14.1793C1.61902 14.5066 1.96767 14.6868 2.29308 14.5841L4.74525 13.8113C5.39412 14.0418 6.0643 14.1735 6.73061 14.2103L6.72093 14.218C8.44674 15.4751 10.7091 15.8528 12.7836 15.1671L15.2454 15.969C15.3074 15.9884 15.3713 16 15.4372 16C15.78 16 16.057 15.723 16.057 15.3802V12.7847C17.7634 10.4681 17.808 7.26633 16.0764 4.88196ZM5.01642 12.436L4.78399 12.3392L2.86641 12.9396L2.84704 10.9252L2.69209 10.7509C1.05344 8.75197 0.944969 5.87173 2.47903 3.75853C4.34624 1.1979 7.9257 0.632309 10.4786 2.48015C13.0392 4.34155 13.6068 7.91521 11.757 10.4603C10.2055 12.589 7.42791 13.3754 5.01642 12.436ZM14.798 12.1067L14.643 12.3004L14.6624 14.3149L12.7642 13.6757L12.5317 13.7725C11.4471 14.1754 10.2907 14.2083 9.21958 13.9081L9.21571 13.9062C10.6471 13.4665 11.9449 12.5755 12.8804 11.2932C14.3602 9.25363 14.6004 6.69106 13.7404 4.50619L13.752 4.51394C14.1975 4.83353 14.6062 5.23254 14.9529 5.71484C16.3591 7.64404 16.2797 10.2705 14.798 12.1067Z" fill="currentColor"/>
                            <path d="M7.14766 6.35156C6.70023 6.35156 6.35352 6.69827 6.35352 7.12634C6.35352 7.5544 6.70023 7.90112 7.14766 7.90112C7.55636 7.90112 7.90307 7.5544 7.90307 7.12634C7.90307 6.69827 7.55636 6.35156 7.14766 6.35156Z" fill="currentColor"/>
                        </svg>
                        <span>3 Comments</span>
                    </div>
                </div>
                { card.title && <h3 className="text-navy group-hover/blog-info-card:text-white transition-all duration-300 font-bold text-[24px] leading-[1.2]">{card.title}</h3>}
            </Link>
        </div>
    </div> 
)


export default BlogSection;