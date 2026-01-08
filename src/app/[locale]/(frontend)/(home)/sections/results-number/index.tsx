import React from 'react';
import Image from 'next/image';
import ResultsNumberBanner from './assets/banner.png';

const ResultsNumber = () => {
  return (
    <section className='py-[60px] lg:py-[120px] bg-navy text-navy-foreground'>
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-center">
                <div className="grid__item">
                    <div className="max-w-[560px] text-center lg:text-start">
                        <span className="text-yellow bg-white/10 text-[14px] inline-flex leading-[1.7] uppercase py-[5px] px-[14px] font-semibold rounded-full mb-[10px]">Results That Speak</span>
                        <h2 className='text-subtitle-2 sm:text-title-2 font-bold mb-[16px]'>Our Results in Number</h2>
                        <p className="text-heading-2 !leading-[1.5]">At Weezard, every project leaves a trail of measurable impact. Whether it’s the quantity of our happy clients, or the data of our impacts, each number tells a story of consistent delivery and real growth.</p>

                        <div className="relative mt-[30px] inline-flex before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[linear-gradient(180deg,rgba(48,92,216,0)0%,#305CD8_133.67%)] rounded-[12px] lg:rounded-[16px] overflow-hidden">
                            <Image src={ResultsNumberBanner} alt="Results Number Banner" className="w-full h-auto max-w-full object-cover" />
                        </div>
                    </div>
                </div>
                <div className="grid__item max-w-[530px]">
                    <div className="grid grid-cols-2 gap-[20px] lg:gap-[30px] z-[1] relative before:content-[''] before:w-[73px] before:h-[117px] before:absolute before:top-[199px] before:left-[-19px] before:bg-blue before:opacity-30 before:blur-[42px] before:z-[-1] before:rounded-full after:content-[''] after:w-[73px] after:h-[117px] after:absolute after:top-[199px] after:end-[-19px] after:bg-blue after:opacity-30 after:blur-[42px] after:z-[-1] after:rounded-full">
                        <div className="grid__item aspect-[280/250] bg-navy border-t border-solid border-blue rounded-[54px_13px_13px_13px] lg:rounded-[70px_16px_16px_16px] flex flex-col justify-center p-[30px_25px] lg:p-[50px_35px] gap-[10px] bg-[linear-gradient(316.44deg,_#407BFF_-90.34%,rgba(64,123,255,0)_67.37%)]">
                            <div className="text-subtitle-1 lg:text-[40px] leading-[1] font-bold text-yellow font-dm-sans">250%</div>
                            <div className="text-body-small lg:text-heading-2 font-medium">Avg Client Growth</div>
                        </div>
                        <div className="grid__item aspect-[280/250] bg-navy border-t border-solid border-blue rounded-[16px_54px_16px_16px] lg:rounded-[16px_70px_16px_16px] flex flex-col justify-center p-[30px_25px] lg:p-[50px_35px] gap-[10px] bg-[linear-gradient(32.66deg,_#407BFF_-73.56%,rgba(64,123,255,0)_52.81%)]">
                            <div className="text-subtitle-1 lg:text-[40px] leading-[1] font-bold text-yellow font-dm-sans">2 Weeks</div>
                            <div className="text-body-small lg:text-heading-2 font-medium">Avg Turnaround</div>
                        </div>
                        <div className="grid__item aspect-[280/250] bg-navy border-b border-solid border-blue rounded-[16px_16px_16px_54px] lg:rounded-[16px_16px_16px_70px] flex flex-col justify-center p-[30px_25px] lg:p-[50px_35px] gap-[10px] bg-[linear-gradient(230.11deg,_#407BFF_-98.94%,rgba(64,123,255,0)_50%)]">
                            <div className="text-subtitle-1 lg:text-[40px] leading-[1] font-bold text-yellow font-dm-sans">10+</div>
                            <div className="text-body-small lg:text-heading-2 font-medium">Countries Served</div>
                        </div>
                        <div className="grid__item aspect-[280/250] bg-navy border-b border-solid border-blue rounded-[16px_16px_54px_16px] lg:rounded-[16px_16px_70px_16px] flex flex-col justify-center p-[30px_25px] lg:p-[50px_35px] gap-[10px] bg-[linear-gradient(137.79deg,_#407BFF_-49.79%,rgba(64,123,255,0)_66.44%)]">
                            <div className="text-subtitle-1 lg:text-[40px] leading-[1] font-bold text-yellow font-dm-sans">300+</div>
                            <div className="text-body-small lg:text-heading-2 font-medium">Projects Completed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ResultsNumber




// /* Ellipse 107 */

// position: absolute;
// width: 73px;
// height: 117px;
// left: 539px;
// top: 209px;

// background: #265CF4;
// opacity: 0.3;
// filter: blur(42px);

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
// z-index: 1;

