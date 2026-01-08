import { staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import { Link } from '@/lib/i18n/routing';
import AuthorPic1 from './assets/author-pic-1.png';
import AuthorPic2 from './assets/author-pic-2.png';
import AuthorPic3 from './assets/author-pic-3.png';
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/[locale]/components/ui/carousel"
import { Button } from '@/app/[locale]/components/ui/button';

const TestimonialsSection = () => {
    const data = {
        caption: "Testimonials",
        title: "See Our Client Testimonials and Be the Judge",
        content: "We let our clients’ voices do the talking. With a focus on delivering white-label IT services, Weezard has built strong relationships with businesses across various industries. Our clients consistently see the value of our work, and that shows. Hear directly from those we’ve worked with and see how our solutions can make a real difference for your business.",
        list: [
            {
                authorPic: AuthorPic1,
                name: "Marley Schleifer",
                text: "Seamlessly evisculate B2B infrastructures for integrated solutions. Energistically deliver error-free methodologies whereas open-source testing procedures. Enthusiastically utilize technically sound interfaces whereas client-focused.",
                ratings: 2,
            },
            {
                authorPic: AuthorPic2,
                name: "Giana Schleifer",
                text: "Seamlessly evisculate B2B infrastructures for integrated solutions. Energistically deliver error-free methodologies whereas open-source testing procedures. Enthusiastically utilize technically sound interfaces whereas client-focused.",
                ratings: 5,
            },
            {
                authorPic: AuthorPic3,
                name: "Jaylon Levin",
                text: "Seamlessly evisculate B2B infrastructures for integrated solutions. Energistically deliver error-free methodologies whereas open-source testing procedures. Enthusiastically utilize technically sound interfaces whereas client-focused.",
                ratings: 4.5,
            },
            {
                authorPic: AuthorPic1,
                name: "Marley Schleifer",
                text: "Seamlessly evisculate B2B infrastructures for integrated solutions. Energistically deliver error-free methodologies whereas open-source testing procedures. Enthusiastically utilize technically sound interfaces whereas client-focused.",
                ratings: 4.5,
            },
            {
                authorPic: AuthorPic2,
                name: "Giana Schleifer",
                text: "Seamlessly evisculate B2B infrastructures for integrated solutions. Energistically deliver error-free methodologies whereas open-source testing procedures. Enthusiastically utilize technically sound interfaces whereas client-focused.",
                ratings: 4.5,
            },
            {
                authorPic: AuthorPic3,
                name: "Jaylon Levin",
                text: "Seamlessly evisculate B2B infrastructures for integrated solutions. Energistically deliver error-free methodologies whereas open-source testing procedures. Enthusiastically utilize technically sound interfaces whereas client-focused.",
                ratings: 4.5,
            },
        ]
    }
    return (
        <motion.section className='py-[60px] lg:py-[120px] space-y-[50px] bg-[#EEF2F9]'
            variants={staggerContainer}
            initial="hidden"
            animate="visible">
            <div className="container max-w-[1050px]">
                <div className="space-y-[10px] lg:text-center">
                    <span className='text-blue bg-blue/10 text-[14px] inline-flex leading-[1.7] uppercase py-[5px] px-[14px] font-semibold rounded-full'>Testimonials</span>
                    <h3 className="text-[32px] lg:text-[45px] leading-[1.2] font-dm-sans -tracking-[0.01em] text-navy font-bold">See Our Client Testimonials and Be the Judge</h3>
                    <p className="text-heading-2 font-normal text-secondary">We let our clients’ voices do the talking. With a focus on delivering white-label IT services, Weezard has built strong relationships with businesses across various industries. Our clients consistently see the value of our work, and that shows. Hear directly from those we’ve worked with and see how our solutions can make a real difference for your business.</p>
                </div>
            </div>

            <div className="container space-y-[30px]">
                {/* Mobile Slider */}
                <Carousel className="w-full">
                    <CarouselContent className="">
                        {data.list.map((card, index) => (
                            <CarouselItem key={index} className="basis-[80%] md:basis-1/2 lg:basis-1/3 ps-[ps-10px] pe-[5px] lg:ps-[25px] lg:pe-[10px]">
                                <TestimonialCard card={card} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='hidden lg:inline-flex w-[50px] h-[50px] border border-solid border-navy/20 hover:bg-navy hover:text-navy-foreground' />
                    <CarouselNext className='hidden lg:inline-flex w-[50px] h-[50px] border border-solid border-navy/20 hover:bg-navy hover:text-navy-foreground' />

                    <div className="flex justify-center items-center">
                        <Button variant={'outline'} className='rounded-full h-[52px] bg-transparent hover:bg-navy hover:text-navy-foreground border-solid border-navy/20 text-navy font-semibold text-[14px] px-[25px]' asChild>
                            <Link href={'/reviews'}>
                                See More Reviews
                            </Link>
                        </Button>         
                        <CarouselDots className='lg:hidden ml-auto [&_.carousel-bullet]:bg-[#D9D9D9] [&_.carousel-bullet-active]:!bg-[#305CD8]'/>
                    </div>
                </Carousel>
            </div>
        </motion.section>
    )
}
const TestimonialCard = ({ card }: { card: any }) => {
    const fullStars = Math.floor(card.ratings) 
    const decimal = card.ratings - fullStars 
    const hasHalfStar = decimal >= 0.25 && decimal < 0.75 
    const extraFull = decimal >= 0.75 ? 1 : 0 
    const totalFilled = fullStars + extraFull 
    const totalStars = 5;

    return (
        <div className="flex flex-col h-full text-center">
            {/* AUTHOR PIC */}
            <div className="mx-auto relative z-[1] -mb-[30px] lg:-mb-[50px] w-[90px] min-w-[90px] lg:w-[115px] lg:min-w-[115px] aspect-[1] relative rounded-full border-[2px] border-solid border-[#495162]">
                <Image src={card.authorPic} alt={''} fill objectFit='cover' objectPosition='center'/>
            </div>

            {/* CARD INFORMATION */}
            <div className="p-[16px] lg:p-[40px] mb-[24px] lg:mb-[40px] pt-[50px] lg:pt-[70px] rounded-[10px] lg:rounded-[20px] bg-white border border-solid border-[#DAE2ED] hover:border-navy/50 transition-all duration-100 hover:shadow-[0px_15px_40px_rgba(0,0,122,0.1)]">
                 {/* STAR RATINGS */}
                <div className="flex justify-center gap-[5px] mb-[6px]">
                    {[...Array(fullStars)].map((_, i) => (
                        <StarFull key={`full-${i}`} />
                    ))}
                    { hasHalfStar && <StarHalf />}
                    {[...Array( totalStars - totalFilled - ( hasHalfStar ? 1 : 0 ))].map(( _, i) => <StarEmpty key={`empty-${i}`} />)}
                </div>
                {/* NAME */}
                <h4 className="text-body-base lg:text-heading-2 font-semibold text-navy">{card.name}</h4>

                <hr className='border border-solid border-navy/10 my-[10px] lg:my-[15px]'/>

                {/* TEXT */}
                <p className="text-body-small lg:text-body-base text-[#495162]">{card.text}</p>

                <div className='mt-[24px] lg:mt-[40px] flex justify-center'>
                    <svg width="59" height="43" viewBox="0 0 59 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M58.6817 10.6875L58.6082 10.205L58.5317 10.2222C58.0091 7.83552 56.8051 5.64209 55.0591 3.89574C53.3131 2.14938 51.0965 0.921477 48.6657 0.354097C46.2348 -0.213283 43.6892 -0.096948 41.3232 0.689642C38.9573 1.47623 36.8678 2.90093 35.2964 4.79888C33.7251 6.69684 32.7362 8.99047 32.4441 11.4144C32.152 13.8384 32.5686 16.2935 33.6459 18.4959C34.7231 20.6982 36.4169 22.5576 38.5312 23.8591C40.6455 25.1605 43.094 25.8508 45.5933 25.85C46.2492 25.85 46.8786 25.7523 47.5051 25.6633C47.3021 26.3296 47.0933 27.0075 46.758 27.6164C46.4227 28.501 45.8992 29.2679 45.3786 30.0405C44.9433 30.8764 44.1756 31.4422 43.6109 32.1574C43.0197 32.8524 42.2138 33.3149 41.5756 33.8922C40.9491 34.4953 40.1285 34.7969 39.4756 35.222C38.7932 35.604 38.1991 36.0262 37.5638 36.2273L35.9785 36.8649L34.5843 37.4308L36.0079 43L37.7638 42.5864C38.3255 42.4485 39.0108 42.2877 39.7903 42.0952C40.5873 41.9516 41.4373 41.5581 42.3844 41.1991C43.3168 40.7884 44.4021 40.5155 45.408 39.8578C46.4198 39.2316 47.5874 38.7089 48.6168 37.8702C49.6139 37.0057 50.8169 36.256 51.7051 35.1588C52.6757 34.1306 53.6346 33.0506 54.3787 31.8213C55.2405 30.6494 55.8258 29.3627 56.4434 28.0903C57.0023 26.8179 57.4523 25.5168 57.8199 24.253C58.517 21.7197 58.8287 19.3128 58.9493 17.2534C59.0493 15.1912 58.9905 13.4765 58.867 12.2357C58.8256 11.7175 58.7638 11.201 58.6817 10.6875ZM26.3283 10.6875L26.2548 10.205L26.1783 10.2222C25.6557 7.83552 24.4517 5.64209 22.7058 3.89574C20.9598 2.14938 18.7431 0.921477 16.3123 0.354097C13.8815 -0.213283 11.3358 -0.096948 8.96989 0.689642C6.60394 1.47623 4.51442 2.90093 2.94308 4.79888C1.37174 6.69684 0.382808 8.99047 0.0907103 11.4144C-0.201387 13.8384 0.215287 16.2935 1.29252 18.4959C2.36976 20.6982 4.06353 22.5576 6.17785 23.8591C8.29217 25.1605 10.7406 25.8508 13.2399 25.85C13.8958 25.85 14.5252 25.7523 15.1517 25.6633C14.9488 26.3296 14.7399 27.0075 14.4046 27.6164C14.0693 28.501 13.5458 29.2679 13.0252 30.0405C12.5899 30.8764 11.8223 31.4422 11.2575 32.1574C10.6664 32.8524 9.86047 33.3149 9.22222 33.8922C8.59575 34.4953 7.77515 34.7969 7.1222 35.222C6.43984 35.604 5.84571 36.0262 5.21041 36.2273L3.62509 36.8649C2.73979 37.2182 2.2339 37.425 2.2339 37.425L3.65745 42.9942L5.41335 42.5806C5.97512 42.4428 6.66043 42.2819 7.43985 42.0895C8.23692 41.9459 9.08693 41.5524 10.034 41.1934C10.9664 40.7826 12.0517 40.5098 13.0576 39.852C14.0693 39.2259 15.237 38.7032 16.2664 37.8645C17.2635 36.9999 18.4665 36.2503 19.3547 35.1531C20.3253 34.1248 21.2841 33.0449 22.0283 31.8156C22.89 30.6437 23.4753 29.3569 24.093 28.0846C24.6518 26.8122 25.1018 25.511 25.4695 24.2473C26.1666 21.714 26.4783 19.3071 26.5989 17.2477C26.6989 15.1854 26.6401 13.4707 26.5166 12.2299C26.4726 11.7138 26.4099 11.1993 26.3283 10.6875Z" fill="#305CD8"/>
                    </svg>
                </div>
            </div>
        </div> 
        ) 
    }

const StarFull =()=>{
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.20366 1.38152L5.38977 5.05929L1.33144 5.65096C0.603659 5.75652 0.311992 6.65374 0.83977 7.16763L3.77588 10.0287L3.08144 14.0704C2.95644 14.801 3.72588 15.3482 4.37033 15.0065L8.00088 13.0982L11.6314 15.0065C12.2759 15.3454 13.0453 14.801 12.9203 14.0704L12.2259 10.0287L15.162 7.16763C15.6898 6.65374 15.3981 5.75652 14.6703 5.65096L10.612 5.05929L8.7981 1.38152C8.4731 0.72596 7.53144 0.717626 7.20366 1.38152Z" fill="#FF9900"/>
        </svg>
    )
}

const StarHalf =()=>{
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_62818_1740)">
            <path d="M15.1807 5.47908L10.8115 4.84296L8.85894 0.891017C8.68342 0.537882 8.34103 0.359375 7.99864 0.359375C7.65834 0.359375 7.31834 0.535494 7.14222 0.891017L5.18909 4.84266L0.819536 5.47818C0.0359538 5.59161 -0.278076 6.55549 0.289984 7.10773L3.45088 10.1824L2.70282 14.525C2.59655 15.1453 3.09177 15.643 3.6464 15.643C3.79357 15.643 3.94491 15.608 4.09028 15.531L7.99924 13.4809L11.9079 15.5316C12.053 15.6077 12.204 15.6424 12.3506 15.6424C12.9058 15.6424 13.4019 15.1465 13.2957 14.5259L12.5485 10.183L15.71 7.10893C16.2783 6.55669 15.9643 5.59251 15.1807 5.47908ZM11.5467 9.15669L11.0058 9.68266L11.1336 10.4253L11.7163 13.8119L8.66759 12.2122L7.99954 11.8618L8.00043 2.3934L9.52371 5.47669L9.85745 6.15221L10.604 6.26087L14.0139 6.75729L11.5467 9.15669Z" fill="#FF9900"/>
            </g>
            <defs>
            <clipPath id="clip0_62818_1740">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

const StarEmpty = () => {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.20366 1.38152L5.38977 5.05929L1.33144 5.65096C0.603659 5.75652 0.311992 6.65374 0.83977 7.16763L3.77588 10.0287L3.08144 14.0704C2.95644 14.801 3.72588 15.3482 4.37033 15.0065L8.00088 13.0982L11.6314 15.0065C12.2759 15.3454 13.0453 14.801 12.9203 14.0704L12.2259 10.0287L15.162 7.16763C15.6898 6.65374 15.3981 5.75652 14.6703 5.65096L10.612 5.05929L8.7981 1.38152C8.4731 0.72596 7.53144 0.717626 7.20366 1.38152Z"
          fill="#D1D5DB"
        />
      </svg>
    )
  }
  

export default TestimonialsSection;