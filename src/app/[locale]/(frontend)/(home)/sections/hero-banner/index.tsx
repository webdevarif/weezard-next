import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import { fadeInDown, fadeInLeft, fadeInRight, fadeInUp, revealFromLeft, staggerContainer } from "@/lib/animations/framer";
import ManLaptop from './assets/man-with-laptop.png';
import Shape1 from './assets/shape-1.png';
import YearsExperienceIcon from './assets/years-experience.png';
import GrowthIcon from './assets/growth.svg';
import GrowUpIcon from './assets/grow-up.svg';
import { Button } from '@/app/[locale]/components/ui/button';
import { Link } from '@/lib/i18n/routing';
import { GoArrowUpRight } from 'react-icons/go';
import AwardsBanner from './assets/awards.svg';
import Stars from './assets/stars.svg';
import BGoalMIcon from './assets/business-goal-mobile-icon.png';
import SuccessProjectMIcon from './assets/succuss-project-mobile-icon.png';
import YearsExperienceMIcon from './assets/years-experience-mobile-icon.png';
import ProfessionalTeamMIcon from './assets/professional-team-mobile-icon.png';
import GYourBusinessMIcon from './assets/growth-your-business-mobile-icon.png';
import CoolShape from './assets/cool-shape.svg';

const HeroBanner = () => {
  return (
    <motion.section className='py-[60px] lg:py-[100px] overflow-hidden relative z-0 bg-[#f5f7fa]'
        variants={staggerContainer}
        initial="hidden"
        animate="visible">            
        <motion.div className='hidden md:block bg-[linear-gradient(272.91deg,#C7B0FE_17.7%,#305CD8_88.86%)] absolute w-[85vw] h-[40px] inline-block -top-3 start-2/4 -translate-x-2/4 rounded-[50%] blur-[60.5px] -z-[1]'>
        </motion.div>

        <motion.div variants={fadeInLeft} className="hidden md:block w-[145px] aspect-square absolute z-[-1] top-[10px] -start-[50px]" 
            animate={{ rotate: 360 }} transition={{ repeat: Infinity, repeatType: "loop", duration: 20,  delay: 0, ease: "linear", }}
        >
            <Image src={CoolShape} alt='Cool Shape' fill objectFit='contain' objectPosition='center'/>
        </motion.div>
        <div className="container">
            <div className="grid lg:grid-cols-[6fr_7fr] gap-x-[20px] items-center">
                <div className="grid__item">
                    <motion.div variants={fadeInUp} className='flex gap-[10px] mb-[15px] items-center font-medium text-body-small-medium text-secondary'>
                        <Image src={Stars} className='max-w-full' alt='Stars' />
                        <span>(4,5/5) Trusted by 500+ Businesses</span>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-[48px] lg:text-[72px] leading-[1.2] mb-[24px] text-navy font-bold font-dm-sans -tracking-[0.03em]">
                        Easy <span className="text-blue">IT Services</span> for Small Businesses
                    </motion.h1>
                    <motion.div variants={fadeInUp} className="text-heading-2 font-normal text-secondary mb-[35px]">
                        <p>Looking for white label or fully managed IT services for small businesses? Welcome to Weezard! We make it easy to scale your offerings with expert design, web development, digital marketing, and more. Grow your business and transform it to a brand</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="flex gap-[20px] flex-wrap items-center">
                        <Button variant={'default'} className='w-full md:w-auto bg-blue hover:bg-blue rounded-full' size={'lg'} asChild>
                            <Link href={'#'}>
                                <span>Audit Your Website for Free</span>
                                <GoArrowUpRight className="!h-[20px] !w-[20px]" />
                            </Link>
                        </Button>
                        <Button variant={'outline'} size={'lg'} className='w-full md:w-auto rounded-full border border-solid border-navy text-navy hover:border-navy hover:bg-navy hover:text-navy-foreground' asChild>
                            <Link href={'#'}>
                                <span>Book a Free Consultation</span>
                                <GoArrowUpRight className="!h-[20px] !w-[20px]" />
                            </Link>
                        </Button>
                    </motion.div>



                    {/* MOBILE */}
                    <div className="relative flex md:hidden justify-center pt-[50px]">
                        {/* ITEM 1 */}
                        <motion.div variants={fadeInUp} className='font-semibold text-[8px] leading-[1.3] text-secondary uppercase bg-white bg-[linear-gradient(301.37deg,#305CD8_-71.49%,rgba(48,92,216,0)_42.23%)] text-body-base z-[1] rounded-[8px] grid grid-cols-[30px_1fr] gap-[7px] py-[10px] px-[8px] w-[170px] items-center absolute top-[18%] end-[calc(50%+30px)]'>
                            <Image src={YearsExperienceIcon} alt='Years of Experience'/>
                            <div>
                                <div className="text-[18px] leading-[1.5] text-left font-bold text-navy font-dm-sans">95%</div>
                                <div>Client Satisfaction</div>
                            </div>
                        </motion.div>
                        {/* ITEM 2 */}
                        <motion.div variants={fadeInUp} className='font-semibold text-[8px] leading-[1.3] text-secondary uppercase bg-white bg-[linear-gradient(301.37deg,#305CD8_-71.49%,rgba(48,92,216,0)_42.23%)] text-body-base z-[1] rounded-[8px] grid grid-cols-[40px_1fr] gap-[7px] py-[10px] px-[8px] w-[190px] items-center absolute top-[50%] end-[calc(50%+20px)]'>
                            <Image src={SuccessProjectMIcon} alt='Years of Experience'/>
                            <div>
                                <div className="text-[18px] leading-[1.5] text-left font-bold text-navy font-dm-sans">700+</div>
                                <div>successful project</div>
                            </div>
                        </motion.div>
                        {/* ITEM 3 */}
                        <motion.div variants={fadeInUp} className='font-semibold text-[11px] leading-[1.3] text-secondary uppercase bg-white bg-[linear-gradient(301.37deg,#305CD8_-71.49%,rgba(48,92,216,0)_42.23%)] text-body-base z-[1] rounded-[8px] grid grid-cols-[40px_1fr] gap-[7px] py-[10px] px-[8px] w-[170px] items-center absolute top-[80%] end-[calc(50%+30px)]'>
                            <Image src={BGoalMIcon} alt='Business Goal'/>
                            <div>Business goal</div>
                        </motion.div>
                        <svg className='translate-y-[30px]' width="119" height="231" viewBox="0 0 119 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H39.5C50.5457 1 59.5 9.95431 59.5 21V223.5" stroke="url(#paint0_linear_69773_33146)" strokeWidth="2"/>
                            <path d="M23.5 91H39.5C50.5457 91 59.5 99.9543 59.5 111V231" stroke="url(#paint1_linear_69773_33146)" strokeWidth="2"/>
                            <path d="M18.5 167H39.5C50.5457 167 59.5 175.954 59.5 187V230.5" stroke="url(#paint2_linear_69773_33146)" strokeWidth="2"/>
                            <path d="M102.5 91H79.5C68.4543 91 59.5 99.9543 59.5 111V231" stroke="url(#paint3_linear_69773_33146)" strokeWidth="2"/>
                            <path d="M100.5 167H79.5005C68.4548 167 59.5005 175.954 59.5005 187V231" stroke="url(#paint4_linear_69773_33146)" strokeWidth="2"/>
                            <path d="M119 1H79.5C68.4543 1 59.5 9.95431 59.5 21V230.5" stroke="url(#paint5_linear_69773_33146)" strokeWidth="2"/>
                            <defs>
                            <linearGradient id="paint0_linear_69773_33146" x1="59.5" y1="190" x2="-51.2986" y2="54.0849" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#C7B0FE" stopOpacity="0"/>
                            <stop offset="1" stopColor="#305CD8"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_69773_33146" x1="62.5" y1="195.5" x2="-16.3355" y2="130.905" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#C7B0FE" stopOpacity="0"/>
                            <stop offset="1" stopColor="#305CD8"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_69773_33146" x1="62.5" y1="231" x2="-0.0163058" y2="198.645" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#C7B0FE" stopOpacity="0"/>
                            <stop offset="1" stopColor="#305CD8"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear_69773_33146" x1="59.5" y1="209.5" x2="141.589" y2="132.552" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#C7B0FE" stopOpacity="0"/>
                            <stop offset="1" stopColor="#305CD8"/>
                            </linearGradient>
                            <linearGradient id="paint4_linear_69773_33146" x1="56.5" y1="242.5" x2="123.65" y2="200.99" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#C7B0FE" stopOpacity="0"/>
                            <stop offset="1" stopColor="#305CD8"/>
                            </linearGradient>
                            <linearGradient id="paint5_linear_69773_33146" x1="57.5" y1="208.5" x2="177.043" y2="61.511" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#C7B0FE" stopOpacity="0"/>
                            <stop offset="1" stopColor="#305CD8"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        {/* ITEM 4 */}
                        <motion.div variants={fadeInUp} className='font-semibold text-[8px] leading-[1.3] text-secondary uppercase bg-white bg-[linear-gradient(63.24deg,#305CD8_-101.6%,rgba(48,92,216,0)_46.43%)] text-body-base z-[1] rounded-[8px] grid grid-cols-[30px_1fr] gap-[7px] py-[10px] px-[8px] w-[170px] items-center absolute top-[18%] start-[calc(50%+30px)]'>
                            <Image src={YearsExperienceMIcon} alt='Years of Experience'/>
                            <div>
                                <div className="text-[18px] leading-[1.5] text-left font-bold text-navy font-dm-sans">12+</div>
                                <div>Year of Experience</div>
                            </div>
                        </motion.div>
                        {/* ITEM 5 */}
                        <motion.div variants={fadeInUp} className='font-semibold text-[8px] leading-[1.3] text-secondary uppercase bg-white bg-[linear-gradient(75.84deg,#305CD8_-106.79%,rgba(48,92,216,0)_37.48%)] text-body-base z-[1] rounded-[8px] grid grid-cols-[40px_1fr] gap-[7px] py-[10px] px-[8px] w-[190px] items-center absolute top-[50%] start-[calc(50%+20px)]'>
                            <Image src={ProfessionalTeamMIcon} alt='Years of Experience'/>
                            <div>
                                <div className="text-[18px] leading-[1.5] text-left font-bold text-navy font-dm-sans">70+</div>
                                <div>professional team</div>
                            </div>
                        </motion.div>
                        {/* ITEM 6 */}
                        <motion.div variants={fadeInUp} className='font-semibold text-[11px] leading-[1.3] text-left text-secondary uppercase bg-white bg-[linear-gradient(74.29deg,#305CD8_-42.96%,rgba(48,92,216,0)_31.74%)] text-body-base z-[1] rounded-[8px] grid grid-cols-[45px_1fr] gap-[7px] py-[10px] px-[8px] w-[170px] items-center absolute top-[80%] start-[calc(50%+30px)]'>
                            <Image src={GYourBusinessMIcon} alt='Growth your Business'/>
                            <div>Growth your Business</div>
                        </motion.div>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start">
                        <motion.div variants={fadeInUp} className="mt-[36px] items-center inline-flex gap-[10px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_7.89%,_#FFFFFF_100%)] shadow-[0px_20px_60px_rgba(37,75,148,0.13)] rounded-[18px] p-[8px]">
                            <Image src={AwardsBanner} className='max-w-[170px] lg:max-w-full h-auto' alt='Banner' />
                            <div className='font-semibold leading-[1.4] font-body-base text-navy'>10+ <br />Award</div>
                        </motion.div>
                    </div>
                </div>
                <div className="grid__item hidden lg:block text-end">                        
                    <motion.div className="relative inline-flex">
                        <svg className='absolute top-[-20%] start-[-40%]' width="174" height="145" viewBox="0 0 174 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                            <motion.path variants={revealFromLeft} d="M164.304 94.0709C164.511 94.5826 165.095 94.8291 165.606 94.6213C166.118 94.4136 166.364 93.8304 166.157 93.3187L164.304 94.0709ZM72.8134 82.8803L72.6065 83.8587L72.6068 83.8587L72.8134 82.8803ZM100.042 35.8487L99.2425 36.4489L99.2425 36.449L100.042 35.8487ZM9.70281 80.3532C9.57201 80.8897 9.90095 81.4308 10.4375 81.5616C10.9741 81.6924 11.5151 81.3634 11.6459 80.8269L9.70281 80.3532ZM170.866 83.0575C171.047 82.5354 170.769 81.9662 170.247 81.7861C169.725 81.6061 169.156 81.8834 168.976 82.4055L170.866 83.0575ZM165.765 94.7838L165.559 95.7624C166.053 95.866 166.546 95.5863 166.71 95.1098L165.765 94.7838ZM153.288 91.4134C152.739 91.3567 152.247 91.756 152.19 92.3054C152.134 92.8547 152.533 93.3461 153.082 93.4029L153.288 91.4134ZM165.23 93.6948C166.157 93.3187 166.157 93.3182 166.156 93.3175C166.156 93.3169 166.156 93.316 166.155 93.315C166.154 93.3129 166.153 93.31 166.152 93.3063C166.149 93.2987 166.144 93.2879 166.138 93.2737C166.127 93.2454 166.11 93.2039 166.087 93.1497C166.042 93.0412 165.974 92.8816 165.885 92.6745C165.707 92.2602 165.442 91.6556 165.091 90.8882C164.388 89.3537 163.343 87.1675 161.964 84.5515C159.209 79.3223 155.119 72.3621 149.78 65.4527C139.139 51.6833 123.34 37.8654 103.095 38.7969L103.141 39.7958L103.187 40.7948C122.416 39.91 137.661 53.0416 148.197 66.6757C153.446 73.468 157.476 80.3232 160.195 85.4838C161.554 88.0627 162.583 90.2151 163.272 91.7204C163.616 92.4729 163.875 93.0635 164.048 93.4645C164.134 93.665 164.199 93.8181 164.241 93.9203C164.263 93.9714 164.279 94.0098 164.289 94.035C164.294 94.0477 164.298 94.057 164.3 94.063C164.302 94.066 164.302 94.0681 164.303 94.0695C164.303 94.0701 164.303 94.0705 164.304 94.0708C164.304 94.0709 164.304 94.0709 165.23 93.6948ZM103.141 39.7958L103.095 38.7969C83.0152 39.7208 70.9787 49.8219 66.1091 60.2948C63.6845 65.5094 63.0249 70.8516 64.102 75.1797C65.1871 79.5395 68.0587 82.8967 72.6065 83.8587L72.8134 82.8803L73.0204 81.902C69.3563 81.1269 66.9787 78.4571 66.0428 74.6966C65.099 70.9044 65.6465 66.0333 67.9227 61.138C72.4546 51.3912 83.7939 41.6871 103.187 40.7948L103.141 39.7958ZM72.8134 82.8803L72.6068 83.8587C77.0137 84.7896 82.1073 83.6572 86.9252 81.1769C91.7581 78.6889 96.4124 74.7967 99.9769 70.0461C107.114 60.5337 109.97 47.4089 100.842 35.2484L100.042 35.8487L99.2425 36.449C107.69 47.7034 105.143 59.8287 98.3772 68.8457C94.9902 73.3597 90.5681 77.052 86.0098 79.3987C81.4365 81.753 76.824 82.7054 73.0201 81.9019L72.8134 82.8803ZM100.042 35.8487L100.842 35.2485C96.2194 29.0884 88.8054 26.0503 80.2696 25.6035C71.7353 25.1567 61.9875 27.2882 52.494 31.5667C33.5204 40.1174 15.3064 57.3668 9.70281 80.3532L10.6744 80.59L11.6459 80.8269C17.0687 58.5822 34.7542 41.7551 53.3158 33.39C62.5898 29.2105 72.0186 27.1743 80.165 27.6008C88.3099 28.0271 95.0807 30.9031 99.2425 36.4489L100.042 35.8487ZM169.921 82.7315L168.976 82.4055L164.82 94.4578L165.765 94.7838L166.71 95.1098L170.866 83.0575L169.921 82.7315ZM165.765 94.7838C165.97 93.8051 165.97 93.8051 165.97 93.8051C165.97 93.8051 165.97 93.805 165.97 93.805C165.97 93.8049 165.969 93.8048 165.968 93.8047C165.967 93.8044 165.965 93.804 165.963 93.8035C165.958 93.8025 165.951 93.801 165.941 93.7989C165.922 93.7949 165.893 93.7889 165.856 93.7811C165.781 93.7655 165.671 93.7425 165.53 93.7132C165.249 93.6547 164.844 93.5708 164.351 93.4693C163.365 93.2664 162.024 92.9931 160.604 92.7116C157.792 92.1541 154.591 91.5481 153.288 91.4134L153.185 92.4082L153.082 93.4029C154.27 93.5256 157.36 94.1075 160.215 94.6734C161.629 94.9537 162.965 95.226 163.948 95.4283C164.44 95.5294 164.843 95.613 165.123 95.6713C165.263 95.7004 165.372 95.7232 165.446 95.7388C165.483 95.7465 165.512 95.7524 165.531 95.7564C165.54 95.7584 165.548 95.7599 165.552 95.7609C165.555 95.7614 165.557 95.7618 165.558 95.7621C165.558 95.7622 165.559 95.7623 165.559 95.7623C165.559 95.7624 165.559 95.7624 165.559 95.7624C165.559 95.7624 165.559 95.7624 165.765 94.7838Z" fill="#A3A3A3"/>
                            </g>
                        </svg>

                        <svg width="580" height="552" viewBox="0 0 580 552" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="580" height="552" rx="30" fill="url(#paint0_linear_69714_3784)"/>
                            <rect width="580" height="552" rx="30" fill="url(#paint1_linear_69714_3784)" fillOpacity="0.8"/>
                            <rect width="580" height="552" rx="30" fill="url(#paint2_linear_69714_3784)" fillOpacity="0.8"/>
                            <defs>
                            <linearGradient id="paint0_linear_69714_3784" x1="290" y1="0" x2="290" y2="552" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="#F5F7FA"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_69714_3784" x1="308.5" y1="236.177" x2="-237.141" y2="-395.728" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#6328EE" stopOpacity="0"/>
                            <stop offset="1" stopColor="#6328EE"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_69714_3784" x1="433.129" y1="31.9371" x2="923.189" y2="-349.209" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0068FF" stopOpacity="0"/>
                            <stop offset="1" stopColor="#0068FF"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        
                        <motion.div variants={fadeInUp} className='absolute bottom-0 start-0 h-[calc(100%+30px)] w-full z-[2]'>
                            <Image src={ManLaptop} alt='Man Laptop' fill objectFit='contain'/>
                        </motion.div>

                        <motion.div
                            variants={revealFromLeft}
                            className="absolute -top-[30%] start-0 min-w-[55vw] h-full overflow-hidden"
                            >
                            <Image src={Shape1} alt="Shape" fill objectFit='contain' objectPosition='left' />
                        </motion.div>


                        {/* Business Goal */}
                        <motion.div variants={fadeInRight} className='bg-[linear-gradient(109.13deg,#305CD8_-38.26%,rgba(48,92,216,0)_37.5%)] p-[20px] rounded-[8px] flex gap-1 items-center shadow-[0px_-16.3238px_20.4047px_rgba(46,104,253,0.04),-20.4047px_20.4047px_30.6071px_rgba(46,104,253,0.08)] uppercase text-body-base text-secondary absolute top-[30%] -start-[95px] bg-white font-semibold'>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.7228 24.6229C16.1817 28.1641 9.67578 27.3405 5.14637 22.8523C0.658135 18.3229 -0.124218 11.7758 3.41696 8.27583L4.52872 7.16406L20.8758 23.4699L19.7228 24.6229Z" fill="#CC104A"/>
                                <path d="M20.7941 23.553C17.253 27.0941 10.7471 26.2706 6.21766 21.7824C1.68825 17.253 0.905895 10.7471 4.44707 7.2059C7.98825 3.66472 14.4941 4.48825 18.9824 8.97648C20.3412 10.3353 21.3706 11.9 22.0294 13.4647C22.2353 14 22.4412 14.4941 22.5647 15.0294C23.4706 18.2412 22.8941 21.453 20.7941 23.553Z" fill="#F34B58"/>
                                <path d="M17.9108 10.0887C21.4108 13.5887 22.0285 18.6535 19.3108 21.4123C16.5932 24.1711 11.4873 23.5123 7.98729 20.0123C4.48729 16.5123 3.86964 11.4476 6.58729 8.68875C9.30494 5.92993 14.4108 6.58875 17.9108 10.0887Z" fill="white"/>
                                <path d="M16.8414 11.1589C19.3943 13.7119 19.8473 17.4178 17.8708 19.3942C15.8943 21.3707 12.1884 20.9589 9.63549 18.3648C7.08255 15.8119 6.62961 12.106 8.60608 10.1295C10.5825 8.15305 14.2884 8.60599 16.8414 11.1589Z" fill="#F34B58"/>
                                <path d="M15.6872 12.3118C17.3343 13.9589 17.6225 16.3059 16.3461 17.5824C15.0696 18.8589 12.7225 18.5706 11.0755 16.9236C9.42842 15.2765 9.14019 12.9295 10.4167 11.653C11.6931 10.3765 14.0814 10.6648 15.6872 12.3118Z" fill="white"/>
                                <path d="M14.6171 13.3816C15.3995 14.164 15.5642 15.3169 14.9465 15.9757C14.2877 16.5934 13.1348 16.4698 12.3524 15.6463C11.5701 14.864 11.4054 13.711 12.023 13.0934C12.6407 12.4757 13.7936 12.5993 14.6171 13.3816Z" fill="#F34B58"/>
                                <g opacity="0.2">
                                <path d="M22.6057 15.0706L13.6704 15.1117C12.641 15.1117 12.5998 13.547 13.6704 13.547L22.0704 13.5059C22.2763 14.0412 22.441 14.5353 22.6057 15.0706Z" fill="#1D2943"/>
                                </g>
                                <path d="M7.16327 20.8353C6.09268 20.0529 5.22797 18.9824 4.61032 17.8294C3.99268 16.6353 3.62209 15.3176 3.66327 14C4.03385 15.2765 4.48679 16.4706 5.10444 17.5824C5.68091 18.6941 6.38091 19.7647 7.16327 20.8353Z" fill="white"/>
                                <path d="M24.7461 3.25292C25.0755 3.58233 25.0755 4.07645 24.7461 4.36468L14.2049 14.8647C13.9167 15.1529 13.4225 15.1529 13.0931 14.8647C12.8049 14.5764 12.8049 14.0823 13.0931 13.7529L23.6343 3.25292C23.9637 2.92351 24.4578 2.92351 24.7461 3.25292Z" fill="#1D2943"/>
                                <path d="M24.581 4.48828L26.434 5.02358C26.7634 5.10593 26.8869 5.51769 26.6399 5.76475L26.1457 6.25887C25.9399 6.46475 25.6105 6.5471 25.3222 6.46475L24.7046 6.30005L24.8281 6.42358C25.1575 6.75299 25.1575 7.28828 24.8281 7.61769L23.7987 8.64711C23.5928 8.85299 23.2634 8.93534 22.9752 8.85299L20.834 8.23534L24.581 4.48828Z" fill="#FFD06C"/>
                                <path d="M23.5115 3.37675L22.9762 1.52381C22.8939 1.1944 22.4821 1.07087 22.235 1.31793L20.7527 2.80028C20.5468 3.00616 20.4644 3.33558 20.5468 3.62381L20.7115 4.24146L20.2997 3.82969C20.135 3.66499 19.8468 3.66499 19.6821 3.82969L19.3527 4.20028C19.1468 4.40616 19.0644 4.73558 19.1468 5.02381L19.7644 7.12381L23.5115 3.37675Z" fill="#FFD06C"/>
                                <path d="M20.6699 6.91882C21.0405 6.4247 21.4935 5.93058 21.9464 5.47764C22.1935 5.27176 22.9346 4.53058 22.6464 4.81882C22.8935 4.61294 23.1405 4.40705 23.3876 4.20117C23.1817 4.44823 22.9758 4.69529 22.7699 4.94235C22.564 5.18941 22.317 5.39529 22.1111 5.64235C21.6582 6.09529 21.2052 6.50705 20.6699 6.91882Z" fill="white"/>
                            </svg>
                            <span>Business goal</span>
                        </motion.div>

                        
                        {/* Client Satisfaction */}
                        <motion.div variants={fadeInUp} className='font-semibold text-white uppercase text-body-base absolute z-[3] bottom-[33%] end-[33%]'>
                            <div className="text-[64px] tracking-[-0.03em] leading-[1] font-dm-sans">95%</div>
                            <div>Client Satisfaction</div>
                        </motion.div>

                        {/* Client Satisfaction */}
                        <motion.div variants={fadeInRight} className='bg-[linear-gradient(301.37deg,#305CD8_-71.49%,rgba(48,92,216,0)_42.23%)] p-[20px] rounded-[8px] grid grid-cols-[60px_1fr] items-center gap-[14px] shadow-[0px_-16.3238px_20.4047px_rgba(46,104,253,0.04),-20.4047px_20.4047px_30.6071px_rgba(46,104,253,0.08)] uppercase text-body-base text-secondary absolute -bottom-[30px] -start-[50px] bg-white font-semibold z-[3]'>
                            <Image src={YearsExperienceIcon} alt='Years of Experience'/>
                            <div>
                                <div className="text-[64px] leading-[1] text-left font-bold text-navy font-dm-sans">12+</div>
                                <div>Year of Experience</div>
                            </div>
                        </motion.div>

                        {/* Grow Business */}
                        <motion.div variants={fadeInLeft} className='bg-[linear-gradient(109.13deg,#305CD8_-38.26%,rgba(48,92,216,0)_37.5%)] p-[20px] rounded-[8px] flex gap-2 items-center shadow-[0px_-16.3238px_20.4047px_rgba(46,104,253,0.04),-20.4047px_20.4047px_30.6071px_rgba(46,104,253,0.08)] uppercase text-body-base leading-[1.4] text-secondary absolute -bottom-[30px] end-[30px] bg-white font-semibold z-[3] text-start'>
                            <Image src={GrowthIcon} alt='Growth' />
                            <span>Growth your <br />Business</span>
                        </motion.div>


                        <motion.div variants={fadeInUp} className='w-[85px] h-[65px] absolute -end-[20px] bottom-[40%] z-[3] drop-shadow-[-15px_20px_40px_rgba(181,217,245,0.75)]'>
                            <Image src={GrowUpIcon} alt='Grow Up' fill objectFit='contain'/>

                        </motion.div>
                        
                        <motion.div variants={fadeInRight} className='w-[840px] max-w-[50vw] aspect-square blur-[77px] border-[64px] border-solid border-blue rounded-full absolute -end-[22vw] -top-[15vw] -z-[1]'></motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default HeroBanner;