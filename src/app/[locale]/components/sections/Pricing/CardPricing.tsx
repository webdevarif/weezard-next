import { CheckIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import React from 'react';
import { Link } from '@/lib/i18n/routing';
import { Button } from '../../ui/button';
import { PricingCardDataProps } from './types';

/**
 * CardPricing Component
 * Renders individual pricing tier cards (Starter, Growth, Scale)
 * Matches exact Figma mobile (430px) and desktop specifications
 */
const CardPricing = ({ data } : { data: PricingCardDataProps }) => {
  const isGrowth = Boolean(data.isFeatured || data.title?.toLowerCase() === 'growth');
  const isScale = data.title?.toLowerCase() === 'scale';
  const buttonLabel = data.actionButton?.label || (isGrowth ? 'Get Growth Package' : isScale ? 'Claim This Package' : 'Talk to us');

  return (
    <div className={cn(
      `rounded-[16px] h-full p-[20px] sm:p-[28px] lg:p-[30px] relative z-[1] border border-solid gap-y-[20px] sm:gap-y-[24px] lg:gap-y-[32px] flex flex-col transition-all duration-300`,
      isGrowth 
        ? 'bg-[#305CD8] border-[#4C75F2] shadow-[0px_20px_50px_rgba(48,92,216,0.35)]' 
        : 'bg-[#092856] bg-[linear-gradient(180deg,_#305CD8_-71.64%,_rgba(48,92,216,0)_37.88%)] border-[#305CD8] shadow-[0px_20px_60px_rgba(37,75,148,0.13)]'
    )}>
        {/* Top Glow for Featured Growth Card */}
        {isGrowth && (
          <span className='absolute w-full max-w-[420px] h-[70px] bg-[#265CF4] start-2/4 -top-5 -translate-x-2/4 rounded-[50%] z-[-1] blur-[36px] sm:blur-[42px] pointer-events-none'></span>
        )}

        {/* CARD HEADER */}
        <div className='flex items-center gap-[16px] sm:gap-[20px]'>
            <span className='shrink-0 w-[54px] h-[54px] flex items-center justify-center'>
                {data.title?.toLowerCase() === 'starter' ? (
                    /* Starter Card: 4-Point Star Icon */
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
                ) : (
                    /* Growth & Scale Cards: 4-Petal Clover/Flower Icon */
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.888455" y="0.888455" width="51.5556" height="51.5556" rx="25.7778" stroke="#0F9BFB" strokeOpacity="0.1" strokeWidth="1.77778"/>
                        <rect x="1.77734" y="1.77734" width="49.7778" height="49.7778" rx="24.8889" fill="url(#paint0_radial_62818_1805)"/>
                        <g transform="translate(7.11 10.6675)">
                            <g filter="url(#filter0_d_62818_1855)">
                                <path d="M29.2725 11.873C31.7612 11.8732 33.779 13.7203 33.7793 15.999C33.7793 18.278 31.7614 20.1258 29.2725 20.126C28.9361 20.126 28.6083 20.0913 28.293 20.0273C24.7072 19.6147 20.4094 16.6669 19.6406 16.1221C20.1564 16.8465 22.8101 20.6934 23.46 24.127C23.6341 24.6236 23.7304 25.1626 23.7305 25.7256C23.7305 28.2082 21.8778 30.2207 19.5928 30.2207C17.3082 30.2202 15.4561 28.2078 15.4561 25.7256C15.4561 25.3907 15.4907 25.064 15.5547 24.75C15.9672 21.1835 18.9068 16.9102 19.4648 16.126C18.6772 16.6837 14.3938 19.6177 10.8184 20.0283C10.5038 20.092 10.1763 20.126 9.84082 20.126C7.35201 20.1258 5.33405 18.2779 5.33398 15.999C5.33438 13.7204 7.35221 11.8732 9.84082 11.873C10.4044 11.8731 10.9441 11.9686 11.4414 12.1416C15.0387 12.8175 19.0919 15.6751 19.5508 16.0049C19.553 16.0018 19.5551 15.9998 19.5557 15.999C19.5557 15.999 19.5574 16.0016 19.5605 16.0059C20.0121 15.6812 24.0707 12.8182 27.6719 12.1416C28.1693 11.9685 28.7088 11.873 29.2725 11.873ZM19.5195 1.77734C21.8044 1.77734 23.657 3.7901 23.6572 6.27246C23.6572 6.61225 23.6215 6.9435 23.5557 7.26172C23.0951 11.1855 19.587 15.9578 19.5566 15.999C19.5152 15.9426 16.3654 11.6509 15.6514 7.86621C15.4784 7.37093 15.3829 6.8336 15.3828 6.27246C15.3831 3.79037 17.235 1.77778 19.5195 1.77734Z" fill="url(#paint0_radial_62818_1855)"/>
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_62818_1855" x="0.000650883" y="-0.00043416" width="39.112" height="39.112" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="3.55556"/>
                                <feGaussianBlur stdDeviation="2.66667"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62818_1855"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62818_1855" result="shape"/>
                            </filter>
                            <radialGradient id="paint0_radial_62818_1805" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.6662 40.444) rotate(90) scale(29.3333)">
                                <stop stopColor="#305CD8"/>
                                <stop offset="1" stopColor="#1AADFE"/>
                            </radialGradient>
                            <radialGradient id="paint0_radial_62818_1855" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.5566 15.999) rotate(90) scale(47.6973 47.7006)">
                                <stop stopColor="white"/>
                                <stop offset="1" stopColor="white"/>
                            </radialGradient>
                        </defs>
                    </svg>
                )}
            </span>
            <div className='space-y-[6px] min-w-0'>
                {data.title && (
                  <h5 className='text-[18px] lg:text-[20px] leading-[27px] tracking-[0.01em] font-bold text-white font-dm-sans'>
                    {data.title}
                  </h5>
                )}
                {data.info && (
                  <p className={cn("text-[13px] sm:text-[14px] leading-[1.5]", isGrowth ? "text-white/85" : "text-navy-foreground/80")}>
                    {data.info}
                  </p>
                )}
            </div>
        </div>
        
        {/* CARD PRICE */}
        <div className={cn(
          'rounded-[16px] py-[16px] px-[20px] sm:py-[20px] flex items-center gap-[8px]',
          isGrowth ? 'bg-yellow text-navy shadow-sm' : 'bg-[#092856]'
        )}>
            <span className={cn('text-[13px] sm:text-[14px] font-medium shrink-0', isGrowth ? 'text-navy/90' : 'text-white/80')}>
              Starts at/
            </span>
            {data.price && (
              <strong className={cn(
                'text-[30px] sm:text-[36px] lg:text-[44px] font-dm-sans leading-[1] font-bold tracking-tight',
                isGrowth ? 'text-navy' : 'text-white'
              )}>
                {data.price}
              </strong>
            )}
        </div>

        {/* CARD FEATURES */}
        {data.features && (
          <div className='space-y-[14px] sm:space-y-[18px] lg:space-y-[20px]'>
            {data.features && data.features?.items && data.features.items.map((item, x) => (
                <div key={x} className='flex gap-[12px] items-start'>
                    <CheckIcon className='w-[20px] h-[20px] shrink-0 mt-[2px]' color={data.features.checkColor} secondaryColor={data.features.secondaryColor}/>
                    <span className={cn(
                      'text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.5]',
                      isGrowth ? 'text-white font-normal' : 'text-[#BACEEA]'
                    )}>
                      {item.text}
                    </span>
                </div>
            ))}
          </div>
        )}

        {/* CARD ACTION */}
        <div className="mt-auto pt-[4px]">
            <Button 
              asChild
              variant={'default'} 
              className={cn(
                'w-full max-w-[360px] mx-auto h-[48px] rounded-full py-[12px] px-[24px] items-center justify-center gap-[5px] transition-all duration-200 font-manrope text-[14px] leading-[20px] font-bold tracking-[-0.01em]',
                isGrowth 
                  ? 'bg-yellow hover:bg-yellow/90 text-navy shadow-md' 
                  : isScale
                    ? 'bg-[rgba(15,64,151,0.6)] hover:bg-[rgba(15,64,151,0.8)] text-white shadow-[0px_9px_45px_rgba(0,95,200,0.17)] border-0'
                    : 'bg-[#0F4097] hover:bg-[#2196F3] text-white'
              )}
            >
                <Link href={data.actionButton?.href || "/contact-us"}>
                  <span>{buttonLabel}</span>
                  <svg 
                    className={cn(isScale ? 'w-[24px] h-[24px]' : 'w-[20px] h-[20px]', 'shrink-0')} 
                    width={isScale ? "24" : "20"} 
                    height={isScale ? "24" : "20"} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                      <path 
                        d="M6 18L18 6M18 6H10M18 6V14" 
                        stroke={isGrowth ? "#092856" : "#ffffff"} 
                        strokeWidth={isScale ? "1.5" : "2"} 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                  </svg>
                </Link>
            </Button>
        </div>
    </div>
  );
};

export default CardPricing;
