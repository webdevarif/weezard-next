import React from 'react';
import { Button } from '../../ui/button';
import Link from 'next/link';
import CardPricing from './CardPricing';
import { PricingSectionDataProps } from './types';

const Pricing = ({
    data
}: {
    data: PricingSectionDataProps
}) => {
  return (
    <section className='bg-navy text-navy-foreground py-[60px] lg:py-[120px] space-y-[50px]'>
        {data && data.header && <div className="container">
            <div className="grid md:grid-cols-[5fr_6fr] gap-[10px] lg:gap-[60px]">
                <div>
                    {data?.header.caption && <span className='lg:text-semibold text-body-small !leading-[1.7] inline-block mb-[10px] px-[14px] py-[5px] bg-white/10 rounded-full uppercase'>{data?.header.caption}</span>}
                    {data.header.title && <h2 className='text-subtitle-2 sm:text-title-2 font-bold'>{data.header.title}</h2>}
                </div>
                {data.header.content && <div className='text-heading-2'><p>{data.header.content}</p></div>}
            </div>
        </div>}
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                {data && data?.list && data.list.map((card, index) =><div key={index} className="grid__item"><CardPricing data={card}/></div>)}
            </div>
        </div>
        {data.footer && 
        <div className="container">
            <div className="bg-[linear-gradient(273.04deg,_#C7B0FE_-83.65%,_#305CD8_97.64%)] rounded-[16px] pt-[40px] pb-[25px] px-[30px] lg:py-[55px] lg:px-[65px] grid gap-[35px] text-center sm:text-start grid-cols-1 sm:grid-cols-[1fr_auto] items-center relative z-[1] overflow-hidden">
                <div>
                    {data.footer.title && <h2 className='text-subtitle-2 sm:text-title-2 font-bold max-w-[500px] [&>strong]:text-yellow' dangerouslySetInnerHTML={{ __html : data.footer.title }} />}
                </div>
                <div>
                    <Button variant={'yellow'} size={'lg'} className='rounded-full font-semibold' asChild>
                        <Link href={data.footer.button_url}>
                        <span>{data.footer.button_label}</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 18L18 6M18 6H10M18 6V14" stroke="#092856" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </Button>
                </div>

                {/* SHAPE 1 */}
                <span className="absolute w-[110px] h-[125px] start-[40px] -top-[70px] inline-block border-[5px] border-solid border-white/5 rounded-[18px] -z-[1]"></span>
                <span className="absolute w-[110px] h-[125px] -start-[20px] -bottom-[80px] sm:-bottom-[90px] inline-block border-[5px] border-solid border-white/5 rounded-[18px] -z-[1]"></span>
                <span className="absolute hidden w-[110px] h-[125px] start-2/4 -bottom-[60px] sm:inline-block border-[5px] border-solid border-white/5 rounded-[18px] -z-[1]"></span>
                <span className="absolute w-[110px] h-[125px] start-[83%] -top-[70px] inline-block border-[5px] border-solid border-white/5 rounded-[18px] -z-[1]"></span>
                <span className="absolute w-[110px] h-[125px] start-[80%] sm:start-[94%] -bottom-[50px] inline-block border-[5px] border-solid border-white/5 rounded-[18px] -z-[1]"></span>
            </div>
        </div>}
    </section>
  )
}

export default Pricing;
