import { CheckIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import React from 'react'
import { Button } from '../../ui/button';
import { PricingCardDataProps } from './types';

const CardPricing = ({ data } : { data: PricingCardDataProps }) => {
  return (
    <div className={cn(`rounded-[16px] h-full p-[30px] relative z-[1] shadow-[0px_20px_60px_rgba(37,75,148,0.13)] border border-solid bg-[linear-gradient(180deg,_#305CD8_-71.64%,_rgba(48,92,216,0)_37.88%)] gap-y-[24px] lg:gap-y-[36px] flex flex-col`, 
        data.isFeatured && data.isFeatured ? 'border-yellow' : 'border-blue'
    )}>
        {data.isFeatured && <span className='absolute w-full h-[70px] bg-[#265CF4] start-2/4 -top-5 -translate-x-2/4 rounded-[50%] z-[-1] blur-[42px]'></span>}

        {/* CARD HEADER */}
        <div className='grid grid-cols-[50px_1fr] gap-[20px] items-center'>
            <span>
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.888455" y="0.888455" width="51.5556" height="51.5556" rx="25.7778" stroke="#0F9BFB" strokeOpacity="0.1" strokeWidth="1.77778"/>
                    <rect x="1.77734" y="1.77734" width="49.7778" height="49.7778" rx="24.8889" fill="url(#paint0_radial_62818_1805)"/>
                    <g filter="url(#filter0_d_62818_1805)">
                    <path d="M26.6656 12.4453C26.88 20.2095 33.1236 26.4532 40.8878 26.6675C33.1236 26.8819 26.88 33.1256 26.6656 40.8898C26.4512 33.1256 20.2075 26.8819 12.4434 26.6675C20.2075 26.4532 26.4512 20.2095 26.6656 12.4453Z" fill="url(#paint1_radial_62818_1805)"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_62818_1805" x="7.11003" y="10.6675" width="39.112" height="39.112" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3.55556"/>
                    <feGaussianBlur stdDeviation="2.66667"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0038961 0 0 0 0 0.576623 0 0 0 0 0.896104 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62818_1805"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62818_1805" result="shape"/>
                    </filter>
                    <radialGradient id="paint0_radial_62818_1805" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.6662 40.444) rotate(90) scale(29.3333)">
                    <stop stopColor="#305CD8"/>
                    <stop offset="1" stopColor="#1AADFE"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial_62818_1805" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.6656 26.6675) rotate(90) scale(47.6991)">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#A5D6FD"/>
                    </radialGradient>
                    </defs>
                </svg>
            </span>
            <div className='space-y-[8px]'>
                {data.title && <h5 className='text-[18px] leading-[27px] tracking-[0.01em] font-semibold'>{data.title}</h5>}
                {data.info && <p className="text-body-small">{data.info}</p>}
            </div>
        </div>
        
        {/* CARD PRICE */}
        <div className={cn('rounded-[16px] p-[20px] flex items-center gap-[6px]', data.isFeatured && data.isFeatured ? 'bg-yellow text-navy' : 'bg-[#092856]')}>
            <span>Starts at/</span>
            {data.price && <strong className='text-title-2 md:text-title-1 font-dm-sans leading-[1]'>{data.price}</strong>}
        </div>

        {/* CARD FEATURES */}
        {data.features && <div className='space-y-[20px]'>
            {data.features && data.features?.items && data.features.items.map((item, x) =>(
                <div key={x} className='flex gap-[10px]'>
                { <CheckIcon className='min-w-[20px] mt-[3px]' color={data.features.checkColor} secondaryColor={data.features.secondaryColor}/>}
                    <span>{item.text}</span>
                </div>
            ))}
        </div>}

        {/* CARD ACTION */}
        <div className="mt-auto">
            <Button variant={'default'} className={cn('text-body-small font-bold w-full py-[14px] px-[10px] items-center gap-[5px] h-[48px] rounded-full transition-all duration-20px', data.isFeatured && data.isFeatured ? 'bg-yellow hover:bg-yellow/90 text-navy' : 'bg-[#0F4097] hover:bg-[#2196F3]')}>
                <span>Talk to us</span>
                <svg className='min-w-[24px] !h-auto' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M18 6H10M18 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
        </div>
    </div>
  )
}

export default CardPricing;
