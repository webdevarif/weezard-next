import React from 'react';
import { Button } from '../../ui/button';
import Link from 'next/link';
import CardPricing from './CardPricing';
import { ExpandableParagraph } from '@/app/[locale]/components/ui/expandable-paragraph';
import { PricingSectionDataProps } from './types';

/**
 * Pricing Section Component
 * Renders the responsive pricing tiers and bottom custom quote CTA banner
 */
const Pricing = ({
    data
}: {
    data: PricingSectionDataProps
}) => {
  return (
    <section className='bg-navy text-navy-foreground py-[50px] sm:py-[60px] lg:py-[120px] space-y-[36px] sm:space-y-[50px]'>
        {data && data.header && (
          <div className="container">
            <div className="grid md:grid-cols-[5fr_6fr] gap-[16px] md:gap-[40px] lg:gap-[60px]">
                <div>
                    {data?.header.caption && (
                      <span className='lg:text-semibold text-body-small !leading-[1.7] inline-block mb-[10px] px-[14px] py-[5px] bg-white/10 rounded-full uppercase'>
                        {data?.header.caption}
                      </span>
                    )}
                    {data.header.title && (
                      <h2 className='text-subtitle-2 sm:text-title-2 font-bold'>
                        {data.header.title}
                      </h2>
                    )}
                </div>
                {data.header.content && (
                    <div className='text-heading-2'>
                        <ExpandableParagraph 
                            text={data.header.content}
                            variant="yellow"
                            align="left"
                        />
                    </div>
                )}
            </div>
          </div>
        )}
        
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[30px]">
                {data && data?.list && data.list.map((card, index) => (
                  <div key={index} className="grid__item h-full">
                    <CardPricing data={card}/>
                  </div>
                ))}
            </div>
        </div>

        {data.footer && (
          <div className="container">
            <div className="bg-[linear-gradient(273.04deg,_#C7B0FE_-83.65%,_#305CD8_97.64%)] rounded-[16px] pt-[32px] pb-[25px] px-[20px] sm:px-[30px] lg:py-[55px] lg:px-[65px] grid gap-[24px] sm:gap-[35px] text-center sm:text-start grid-cols-1 sm:grid-cols-[1fr_auto] items-center relative z-[1] overflow-hidden">
                <div>
                    {data.footer.title && (
                      <h2 
                        className='text-subtitle-2 sm:text-title-2 font-bold max-w-[500px] text-center sm:text-start mx-auto sm:mx-0 [&>strong]:text-yellow' 
                        dangerouslySetInnerHTML={{ __html : data.footer.title }} 
                      />
                    )}
                </div>
                <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                    <Button 
                      variant={'yellow'} 
                      size={'lg'} 
                      className='w-full sm:w-auto h-[48px] sm:h-[52px] rounded-full font-semibold justify-center shadow-md' 
                      asChild
                    >
                        <Link href={data.footer.button_url}>
                          <span>{data.footer.button_label}</span>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 18L18 6M18 6H10M18 6V14" stroke="#092856" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                    </Button>
                </div>

                {/* Decorative Geometric Shapes */}
                <span className="absolute w-[110px] h-[125px] start-[40px] -top-[70px] inline-block border-[4px] border-solid border-white/10 rounded-[18px] -z-[1] pointer-events-none"></span>
                <span className="absolute w-[110px] h-[125px] -start-[20px] -bottom-[80px] sm:-bottom-[90px] inline-block border-[4px] border-solid border-white/10 rounded-[18px] -z-[1] pointer-events-none"></span>
                <span className="absolute hidden w-[110px] h-[125px] start-2/4 -bottom-[60px] sm:inline-block border-[4px] border-solid border-white/10 rounded-[18px] -z-[1] pointer-events-none"></span>
                <span className="absolute w-[110px] h-[125px] start-[83%] -top-[70px] inline-block border-[4px] border-solid border-white/10 rounded-[18px] -z-[1] pointer-events-none"></span>
                <span className="absolute w-[110px] h-[125px] start-[80%] sm:start-[94%] -bottom-[50px] inline-block border-[4px] border-solid border-white/10 rounded-[18px] -z-[1] pointer-events-none"></span>
            </div>
          </div>
        )}
    </section>
  );
};

export default Pricing;
