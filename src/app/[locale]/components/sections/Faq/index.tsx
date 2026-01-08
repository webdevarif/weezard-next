import React, { useState } from 'react'
import QuestionBanner from './assets/question-banner.svg';
import Image from 'next/image';
import { Button } from '../../ui/button';
import { GoArrowUpRight } from "react-icons/go";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/app/[locale]/components/ui/accordion";
import { cn } from '@/lib/utils';
import {
    FaqDataProps
} from './types';
import { Link } from '@/lib/i18n/routing';


const Faq = ({
    data,
    shapes
}: {
    shapes?: React.ReactNode
    data: FaqDataProps
}) => {
    // const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    // Track selected category 
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0) 
    const hasMultipleCategories = data.categories.length > 1;
    const activeCategory = data.categories[activeCategoryIndex]
    
  return (
    <section className='py-[60px] lg:py-[120px] relative space-y-[20px] lg:space-y-[50px] relative z-[1] overflow-hidden'>
        <div className={cn('container', data.variant == 'center' && 'max-w-[920px]')}>
            <div className={`${data.variant == 'center' || data.variant == 'double' ? 'space-y-[30px]' : 'grid grid-cols-1 gap-[20px] lg:grid-cols-[390px_1fr] lg:gap-[60px]'}`}>
                <div className="space-y-[16px]">
                    <div className={cn('', data.variant == 'center' || data.variant == 'double' ? 'text-center' : '')}>
                    { data.title && <h3 className='font-bold text-subtitle-2 lg:text-title-2 font-dm-sans tracking-[-0.02em] text-navy'>{data.title}</h3>}
                    {data.info && <p className='text-body-small lg:text-heading-2 font-normal text-secondary'>{data.info}</p>}
                    </div>

                    {hasMultipleCategories && (
                    <div className="space-y-[6px]">
                        {data.categories.map((category, index) => (
                        <button key={index} onClick={() => setActiveCategoryIndex(index)}
                            className={cn(
                            "w-full text-left rounded-[8px] py-[16px] px-[20px] border-b border-solid border-blue flex items-center gap-[10px] text-body-base lg:text-heading-2 font-semibold transition",
                            activeCategoryIndex === index
                                ? "bg-blue text-white"
                                : "bg-white text-navy"
                            )}
                        >
                            <span>{category.name}</span>
                            <div className="ms-auto">
                            <svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M0.599609 6.60156H25.5996M25.5996 6.60156L19.5996 0.601562M25.5996 6.60156L19.5996 12.6016" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </div>
                        </button>
                        ))}
                    </div>
                    )}
                </div>
                <div className="space-y-[50px]">
                    <div>
                    <Accordion type="single" collapsible className={cn('w-full space-y-[10px]', data.variant == 'double' && 'md:columns-2')} defaultValue="item-1">
                    {activeCategory.items.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index + 1}`}
                            className={cn('group overflow-hidden border border-solid p-[15px] lg:p-[24px] !rounded-[14px] bg-background first:rounded-t-[14px] last:rounded-b-[14px]', data.variant == 'center' || data.variant == 'double' ? 'data-[state=open]:bg-[linear-gradient(273.04deg,_#C7B0FE_-83.65%,_#305CD8_97.64%)] data-[state=open]:text-navy-foreground' : 'data-[state=open]:bg-navy data-[state=open]:text-navy-foreground')}
                            >
                            <AccordionTrigger className="hover:no-underline font-dm-sans text-[16px] lg:text-[20px] p-0 font-bold"
                            customIcon={ <> 
                            
                                {data.variant == 'center' || data.variant == 'double' ? 
                                    <>
                                        <svg className='group-data-[state=open]:hidden' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0003 4.16797V15.8346M4.16699 10.0013H15.8337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <svg className='hidden group-data-[state=open]:block' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.16699 10H15.8337" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </>
                                    :
                                    <>
                                        <svg className='h-[30px] lg:h-[35px] w-[30px] lg:w-[35px] min-w-[30px] lg:min-w-[35px] group-data-[state=open]:hidden' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="35" height="35" rx="17.5" fill="#305CD8"/>
                                            <path d="M17.5 10.5V24.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                            <path d="M10.5 17.5H24.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>

                                        <svg className="h-[30px] lg:h-[35px] w-[30px] lg:w-[35px] min-w-[30px] lg:min-w-[35px] hidden group-data-[state=open]:block" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="35" height="35" rx="17.5" fill="#EAD53F"/>
                                            <path d="M10.5 17.5H24.5" stroke="#092856" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </> 
                                    }
                             </> }
                            >
                                <div className="flex items-center gap-3">
                                {data.variant !== "center" && data.variant !== "double" && (
                                    <strong className="w-[30px] lg:w-[40px] min-w-[30px] lg:min-w-[40px] text-heading-1 font-bold text-secondary/50 group-data-[state=open]:text-white">
                                        {String(index + 1).padStart(2, "0")}.
                                    </strong>
                                )}
                                <span className="text-left">{item.title}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className={cn("pe-[45px] lg:pe-[50px] pt-[16px] pb-[10px]", data.variant !== "center" && data.variant !== "double" && "ps-[45px] lg:ps-[50px]")}>
                                <p className="text-body-base lg:text-heading-2 font-light font-dm-sans">{item.content}</p>
                            </AccordionContent>
                            </AccordionItem>
                        ))}
                        </Accordion>
                    </div>
                    {data.question && <div className='bg-[#EEF2F9] -mx-[15px] lg:mx-0 rounded-none lg:rounded-[16px] py-[60px] px-[20px] lg:p-[30px] text-center lg:text-left flex flex-col-reverse lg:flex-row justify-between items-center gap-[30px]'>
                        <div>
                            {data.question.title && <h4 className='text-heading-1 lg:text-subtitle-2 font-bold text-navy mb-[20px] lg:mb-[45px]'>{data.question.title}</h4>}
                            {data.question.button_url && <Button variant={'default'} className='bg-purple text-purple-foreground hover:bg-purple/90 hover:text-purple-foreground' asChild>
                                <Link href={data.question.button_url}>
                                    <span>{data.question.button_label}</span>
                                    <GoArrowUpRight className='!w-[24px] !h-[24px]'/>
                                </Link>
                            </Button>}
                        </div>
                        <div>
                            <Image className='max-w-[220px] lg:max-w-full h-auto' src={QuestionBanner.src} width={QuestionBanner.width} height={QuestionBanner.height} alt="Question Banner" />
                        </div>
                    </div>}
                </div>
            </div>
        </div>

        {data.description &&
            <div className="container">
                <div className="relative pt-[30px] border-t-[2px] border-dashed border-[#BEC8E5]">
                    <div className="p-[20px] lg:p-[50px] !pt-0 rounded-[16px] bg-white border-b border-b-purple border-solid text-secondary text-heading-2 lg:text-heading-1 font-dm-sans">{data.description}</div>
                </div>
            </div> }
        { shapes && shapes }
    </section>
  )
}

export default Faq;
