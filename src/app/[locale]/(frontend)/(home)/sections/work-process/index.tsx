import React from 'react';
import { Button } from '@/app/[locale]/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/app/[locale]/components/ui/carousel"
import MettingIcon from './assets/metting-icon.svg';
import LaunchGrowIcon from './assets/launch-grow-icon.svg';
import DesignBuildIcon from './assets/design-build-icon.svg';
import GetCustomStrategyIcon from './assets/get-custom-strategy-icon.svg';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from '@/lib/i18n/routing';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInUp, revealFromLeft, staggerContainer, animationModes, childAnimations } from '@/lib/animations/framer';

const ProcessSection = () => {
  // Animation mode options: 'onLoad' | 'onScroll' | 'onScrollSlow'
  const animationMode = 'onScroll'; // Change this to switch modes
  
  const steps = [
    {
        icon: MettingIcon,
        title: 'Schedule a Meeting',
        description: 'Let’s set up a meeting to discuss our upcoming projects.',
        stepNumber: 'STEP 1'
    },
    {
        icon: GetCustomStrategyIcon,
        title: 'Get Custom Strategy',
        description: 'What do you think about setting up a brainstorming session.',
        stepNumber: 'STEP 2'
    },
    {
        icon: DesignBuildIcon,
        title: 'Design & Build',
        description: 'Let’s schedule a meeting to go over our upcoming projects.',
        stepNumber: 'STEP 3'
    },
    {
        icon: LaunchGrowIcon,
        title: 'Launch & Grow',
        description: 'How about we schedule a time to discuss our future projects?',
        stepNumber: 'STEP 4'
    }
  ];

  return (
    <motion.section 
        className="relative w-full z-[0] py-24 bg-background overflow-hidden" 
        {...animationModes[animationMode]}
    >

        <span className="hidden lg:block w-[450px] max-w-[30vw] aspect-square absolute top-[60%] -translate-y-2/4 opacity-20 -start-[13vw] bg-[#903DD1] rounded-full blur-[150px] -z-[1]"></span>

        <span className="hidden lg:block w-[700px] max-w-[40vw] aspect-square absolute top-0 opacity-20 -end-[20vw] bg-[#F5B283] rounded-full blur-[150px] -z-[1]"></span>

        <span className="block lg:hidden w-[230px] aspect-square absolute bottom-[17%] -translate-y-2/4 opacity-20 -start-[10vw] bg-[#86DDF1] rounded-full blur-[200px] -z-[1]"></span>

      <div className="container">
        {/* Process Box */}
        <div className="rounded-[20px] border border-solid border-blue bg-[#ECF7FA] px-[20px] py-[30px] lg:p-[50px]">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-x-[50px] items-center">
            {/* Left Side - Header */}
            <div className="">
              <span className="mb-4 text-blue bg-blue/10 text-[14px] inline-flex leading-[1.7] uppercase py-[5px] px-[14px] font-semibold rounded-full">
                HOW IT WORKS
              </span>
              
              <h2 className="text-3xl lg:text-title-2 tracking-[-0.03em] font-dm-sans font-bold text-[#0B1B3A] leading-tight mb-6 max-w-[480px]">
                See Our Work Process for Fully managed IT Services
              </h2>
            </div>
            
            {/* Right Side - Description */}
            <div className="">
              <p className="text-secondary text-heading-2 leading-relaxed">
                Weezard’s process is designed for efficiency and success. We start by scheduling a consultation to understand your goals and needs. From there, we build a custom strategy that leverages our expertise in IT services. Our team works diligently to execute your plan by keeping you updated and informed every step of the way. After launching your solution, we continue to monitor performance and make necessary adjustments. In one way or another, we ensure your business sees continuous growth and success in the digital world.
              </p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="process-steps mt-[50px]">
          {/* Desktop: Grid Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[70px] relative">
            {steps.map((step, index) => {
              return (
                <motion.div variants={childAnimations[animationMode].fadeInLeft} key={index} className="process-step text-center relative">
                    {/* Connector Lines - Desktop Only */}
                    {index > 0 && (
                        <div className="hidden lg:block absolute bottom-[10px] end-[calc(50%+30px)] w-full h-[calc(100%-60px)] pointer-events-none">
                            <svg className='w-full h-full' width="235" height="220" viewBox="0 0 235 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M234.53 214.28C234.823 213.987 234.823 213.513 234.53 213.22L229.757 208.447C229.464 208.154 228.99 208.154 228.697 208.447C228.404 208.74 228.404 209.214 228.697 209.507L232.939 213.75L228.697 217.993C228.404 218.286 228.404 218.76 228.697 219.053C228.99 219.346 229.464 219.346 229.757 219.053L234.53 214.28ZM162.874 213.75V214.5V213.75ZM6.23948 1.5C6.6537 1.5 6.98948 1.16421 6.98948 0.75C6.98948 0.335786 6.6537 0 6.23948 0V1.5ZM18.7185 0C18.3042 0 17.9685 0.335786 17.9685 0.75C17.9685 1.16421 18.3042 1.5 18.7185 1.5V0ZM31.1974 1.5C31.6116 1.5 31.9474 1.16421 31.9474 0.75C31.9474 0.335786 31.6116 0 31.1974 0V1.5ZM43.6764 0C43.2622 0 42.9264 0.335786 42.9264 0.75C42.9264 1.16421 43.2622 1.5 43.6764 1.5V0ZM56.1554 1.5C56.5696 1.5 56.9054 1.16421 56.9054 0.75C56.9054 0.335786 56.5696 0 56.1554 0V1.5ZM68.6343 0C68.2201 0 67.8843 0.335786 67.8843 0.75C67.8843 1.16421 68.2201 1.5 68.6343 1.5V0ZM80.5236 1.8656C80.9343 1.91918 81.3107 1.62964 81.3643 1.21891C81.4179 0.808176 81.1284 0.431778 80.7176 0.378201L80.5236 1.8656ZM92.0038 3.39595C91.6211 3.23728 91.1823 3.41883 91.0237 3.80145C90.865 4.18407 91.0466 4.62287 91.4292 4.78154L92.0038 3.39595ZM101.203 10.4351C101.532 10.6875 102.003 10.6259 102.255 10.2974C102.507 9.96898 102.446 9.49813 102.117 9.24574L101.203 10.4351ZM110.378 17.5065C110.126 17.1781 109.655 17.1164 109.326 17.3688C108.998 17.6212 108.936 18.0921 109.189 18.4205L110.378 17.5065ZM114.842 28.1946C115.001 28.5772 115.44 28.7588 115.822 28.6001C116.205 28.4415 116.387 28.0027 116.228 27.62L114.842 28.1946ZM119.246 38.9062C119.192 38.4955 118.816 38.2059 118.405 38.2595C117.994 38.3131 117.705 38.6895 117.758 39.1002L119.246 38.9062ZM118.124 49.9583C118.124 50.3725 118.46 50.7083 118.874 50.7083C119.288 50.7083 119.624 50.3725 119.624 49.9583H118.124ZM119.624 60.375C119.624 59.9608 119.288 59.625 118.874 59.625C118.46 59.625 118.124 59.9608 118.124 60.375H119.624ZM118.124 70.7917C118.124 71.2059 118.46 71.5417 118.874 71.5417C119.288 71.5417 119.624 71.2059 119.624 70.7917H118.124ZM119.624 81.2083C119.624 80.7941 119.288 80.4583 118.874 80.4583C118.46 80.4583 118.124 80.7941 118.124 81.2083H119.624ZM118.124 91.625C118.124 92.0392 118.46 92.375 118.874 92.375C119.288 92.375 119.624 92.0392 119.624 91.625H118.124ZM119.624 102.042C119.624 101.627 119.288 101.292 118.874 101.292C118.46 101.292 118.124 101.627 118.124 102.042H119.624ZM118.124 112.458C118.124 112.873 118.46 113.208 118.874 113.208C119.288 113.208 119.624 112.873 119.624 112.458H118.124ZM119.624 122.875C119.624 122.461 119.288 122.125 118.874 122.125C118.46 122.125 118.124 122.461 118.124 122.875H119.624ZM118.124 133.292C118.124 133.706 118.46 134.042 118.874 134.042C119.288 134.042 119.624 133.706 119.624 133.292H118.124ZM119.624 143.708C119.624 143.294 119.288 142.958 118.874 142.958C118.46 142.958 118.124 143.294 118.124 143.708H119.624ZM118.124 154.125C118.124 154.539 118.46 154.875 118.874 154.875C119.288 154.875 119.624 154.539 119.624 154.125H118.124ZM119.624 164.542C119.624 164.127 119.288 163.792 118.874 163.792C118.46 163.792 118.124 164.127 118.124 164.542H119.624ZM118.502 175.594C118.556 176.005 118.932 176.294 119.343 176.241C119.753 176.187 120.043 175.811 119.989 175.4L118.502 175.594ZM122.905 186.305C122.747 185.923 122.308 185.741 121.925 185.9C121.543 186.059 121.361 186.497 121.52 186.88L122.905 186.305ZM127.37 196.993C127.622 197.322 128.093 197.384 128.421 197.131C128.75 196.879 128.811 196.408 128.559 196.079L127.37 196.993ZM136.544 204.065C136.216 203.812 135.745 203.874 135.493 204.203C135.24 204.531 135.302 205.002 135.63 205.254L136.544 204.065ZM145.744 211.104C146.126 211.263 146.565 211.081 146.724 210.699C146.883 210.316 146.701 209.877 146.318 209.718L145.744 211.104ZM157.224 212.634C156.813 212.581 156.437 212.87 156.383 213.281C156.33 213.692 156.619 214.068 157.03 214.122L157.224 212.634ZM168.801 214.5C169.215 214.5 169.551 214.164 169.551 213.75C169.551 213.336 169.215 213 168.801 213V214.5ZM180.655 213C180.241 213 179.905 213.336 179.905 213.75C179.905 214.164 180.241 214.5 180.655 214.5V213ZM192.51 214.5C192.924 214.5 193.26 214.164 193.26 213.75C193.26 213.336 192.924 213 192.51 213V214.5ZM204.364 213C203.95 213 203.614 213.336 203.614 213.75C203.614 214.164 203.95 214.5 204.364 214.5V213ZM216.218 214.5C216.633 214.5 216.968 214.164 216.968 213.75C216.968 213.336 216.633 213 216.218 213V214.5ZM228.073 213C227.659 213 227.323 213.336 227.323 213.75C227.323 214.164 227.659 214.5 228.073 214.5V213ZM0 0.75V1.5H6.23948V0.75V0H0V0.75ZM18.7185 0.75V1.5H31.1974V0.75V0H18.7185V0.75ZM43.6764 0.75V1.5H56.1554V0.75V0H43.6764V0.75ZM68.6343 0.75V1.5H74.8738V0.75V0H68.6343V0.75ZM74.8738 0.75V1.5C76.789 1.5 78.6748 1.62444 80.5236 1.8656L80.6206 1.1219L80.7176 0.378201C78.8047 0.128674 76.8541 0 74.8738 0V0.75ZM91.7165 4.08874L91.4292 4.78154C94.9449 6.23945 98.227 8.14791 101.203 10.4351L101.66 9.84043L102.117 9.24574C99.0382 6.87958 95.6422 4.90476 92.0038 3.39595L91.7165 4.08874ZM109.783 17.9635L109.189 18.4205C111.476 21.3968 113.384 24.6789 114.842 28.1946L115.535 27.9073L116.228 27.62C114.719 23.9816 112.744 20.5856 110.378 17.5065L109.783 17.9635ZM118.502 39.0032L117.758 39.1002C117.999 40.949 118.124 42.8348 118.124 44.75H118.874H119.624C119.624 42.7697 119.495 40.8191 119.246 38.9062L118.502 39.0032ZM118.874 44.75H118.124V49.9583H118.874H119.624V44.75H118.874ZM118.874 60.375H118.124V70.7917H118.874H119.624V60.375H118.874ZM118.874 81.2083H118.124V91.625H118.874H119.624V81.2083H118.874ZM118.874 102.042H118.124V112.458H118.874H119.624V102.042H118.874ZM118.874 122.875H118.124V133.292H118.874H119.624V122.875H118.874ZM118.874 143.708H118.124V154.125H118.874H119.624V143.708H118.874ZM118.874 164.542H118.124V169.75H118.874H119.624V164.542H118.874ZM118.874 169.75H118.124C118.124 171.73 118.252 173.681 118.502 175.594L119.246 175.497L119.989 175.4C119.748 173.551 119.624 171.665 119.624 169.75H118.874ZM122.213 186.593L121.52 186.88C123.029 190.518 125.003 193.914 127.37 196.993L127.964 196.536L128.559 196.079C126.272 193.103 124.363 189.821 122.905 186.305L122.213 186.593ZM136.087 204.66L135.63 205.254C138.709 207.62 142.105 209.595 145.744 211.104L146.031 210.411L146.318 209.718C142.803 208.261 139.521 206.352 136.544 204.065L136.087 204.66ZM157.127 213.378L157.03 214.122C158.943 214.371 160.894 214.5 162.874 214.5V213.75V213C160.959 213 159.073 212.876 157.224 212.634L157.127 213.378ZM162.874 213.75V214.5H168.801V213.75V213H162.874V213.75ZM180.655 213.75V214.5H192.51V213.75V213H180.655V213.75ZM204.364 213.75V214.5H216.218V213.75V213H204.364V213.75ZM228.073 213.75V214.5H234V213.75V213H228.073V213.75Z" fill="url(#paint0_linear_62818_2277)"/>
                                <defs>
                                <linearGradient id="paint0_linear_62818_2277" x1="0" y1="0.75" x2="238.01" y2="209.171" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#305CD8" stopOpacity="0"/>
                                <stop offset="1" stopColor="#903DD1"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    )}
                    
                  {/* Icon Bubble */}
                  <Image src={step.icon} className='mx-auto mb-[36px]' alt="" />
                  
                  {/* Step Content */}
                  <h4 className="text-heading-1 font-dm-sans font-bold text-navy mb-[6px]">{step.title}</h4>
                  <p className="text-secondary text-heading-2 leading-relaxed mb-[24px]">{step.description}</p>
                  
                  {/* Step Number */}
                  <span className="inline-block text-[18px] leading-[27px] font-semibold text-[#969696]">
                    {step.stepNumber}
                  </span>
                </motion.div>
              );
            })}
            </div>
          </div>
        </div>
          
        {/* Mobile: Process Carousel */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full shadow-[0px_20px_60px_rgba(37,75,148,0.13)] rounded-[13px]"
          >
            <CarouselContent className="-ml-4">
              {steps.map((step, index) => (
                <CarouselItem key={index} className="basis-[100%] pl-4">
                  <div className="bg-white rounded-[13px] px-[60px] py-[50px] text-center relative h-full z-[1]">
                    {index < steps.length - 1 && (
                        <div className="absolute bottom-[10px] end-0 flex justify-end w-full h-[calc(100%-60px)] pointer-events-none">
                            <svg width="147" height="222" viewBox="0 0 147 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M146.207 214.707C146.598 214.317 146.598 213.683 146.207 213.293L139.843 206.929C139.453 206.538 138.819 206.538 138.429 206.929C138.038 207.319 138.038 207.953 138.429 208.343L144.086 214L138.429 219.657C138.038 220.047 138.038 220.681 138.429 221.071C138.819 221.462 139.453 221.462 139.843 221.071L146.207 214.707ZM141.875 213C141.323 213 140.875 213.448 140.875 214C140.875 214.552 141.323 215 141.875 215V213ZM134.624 215C135.177 215 135.624 214.552 135.624 214C135.624 213.448 135.177 213 134.624 213V215ZM125.338 212.448C124.797 212.341 124.271 212.693 124.163 213.235C124.056 213.777 124.409 214.303 124.95 214.41L125.338 212.448ZM113.774 209.778C114.233 210.085 114.854 209.962 115.162 209.503C115.469 209.044 115.346 208.423 114.887 208.116L113.774 209.778ZM106.883 200.112C106.576 199.653 105.955 199.53 105.496 199.838C105.037 200.145 104.914 200.766 105.221 201.225L106.883 200.112ZM100.589 190.049C100.696 190.591 101.223 190.943 101.764 190.836C102.306 190.729 102.658 190.203 102.551 189.661L100.589 190.049ZM101.999 178.536C101.999 177.983 101.552 177.536 100.999 177.536C100.447 177.536 99.9992 177.983 99.9992 178.536H101.999ZM99.9992 167.607C99.9992 168.159 100.447 168.607 100.999 168.607C101.552 168.607 101.999 168.159 101.999 167.607H99.9992ZM101.999 156.679C101.999 156.126 101.552 155.679 100.999 155.679C100.447 155.679 99.9992 156.126 99.9992 156.679H101.999ZM99.9992 145.75C99.9992 146.302 100.447 146.75 100.999 146.75C101.552 146.75 101.999 146.302 101.999 145.75H99.9992ZM101.999 134.821C101.999 134.269 101.552 133.821 100.999 133.821C100.447 133.821 99.9992 134.269 99.9992 134.821H101.999ZM99.9992 123.893C99.9992 124.445 100.447 124.893 100.999 124.893C101.552 124.893 101.999 124.445 101.999 123.893H99.9992ZM101.999 112.964C101.999 112.412 101.552 111.964 100.999 111.964C100.447 111.964 99.9992 112.412 99.9992 112.964H101.999ZM99.9992 102.036C99.9992 102.588 100.447 103.036 100.999 103.036C101.552 103.036 101.999 102.588 101.999 102.036H99.9992ZM101.999 91.1072C101.999 90.5549 101.552 90.1072 100.999 90.1072C100.447 90.1072 99.9992 90.5549 99.9992 91.1072H101.999ZM99.9992 80.1786C99.9992 80.7309 100.447 81.1786 100.999 81.1786C101.552 81.1786 101.999 80.7309 101.999 80.1786H99.9992ZM101.999 69.25C101.999 68.6978 101.552 68.25 100.999 68.25C100.447 68.25 99.9992 68.6978 99.9992 69.25H101.999ZM99.9992 58.3215C99.9992 58.8737 100.447 59.3215 100.999 59.3215C101.552 59.3215 101.999 58.8737 101.999 58.3215H99.9992ZM101.999 47.3929C101.999 46.8406 101.552 46.3929 100.999 46.3929C100.447 46.3929 99.9992 46.8406 99.9992 47.3929H101.999ZM99.9992 36.4643C99.9992 37.0166 100.447 37.4643 100.999 37.4643C101.552 37.4643 101.999 37.0166 101.999 36.4643H99.9992ZM101.409 24.9511C101.302 24.4093 100.776 24.057 100.234 24.1642C99.6924 24.2714 99.34 24.7975 99.4472 25.3392L101.409 24.9511ZM95.1152 14.8879C95.4225 15.3468 96.0436 15.4698 96.5025 15.1625C96.9614 14.8553 97.0844 14.2342 96.7772 13.7752L95.1152 14.8879ZM88.224 5.22209C87.7651 4.91486 87.144 5.03781 86.8367 5.49675C86.5295 5.95567 86.6524 6.57678 87.1114 6.88403L88.224 5.22209ZM76.66 2.55205C77.2018 2.65923 77.7279 2.3069 77.8351 1.76512C77.9423 1.22334 77.5899 0.69725 77.0482 0.590057L76.66 2.55205ZM65.0826 3.05176e-05C64.5303 3.05176e-05 64.0826 0.447739 64.0826 1.00003C64.0826 1.55232 64.5303 2.00003 65.0826 2.00003V3.05176e-05ZM53.2494 2.00003C53.8017 2.00003 54.2494 1.55232 54.2494 1.00003C54.2494 0.447739 53.8017 3.05176e-05 53.2494 3.05176e-05V2.00003ZM41.4162 3.05176e-05C40.8639 3.05176e-05 40.4162 0.447739 40.4162 1.00003C40.4162 1.55232 40.8639 2.00003 41.4162 2.00003V3.05176e-05ZM29.583 2.00003C30.1353 2.00003 30.583 1.55232 30.583 1.00003C30.583 0.447739 30.1353 3.05176e-05 29.583 3.05176e-05V2.00003ZM17.7498 3.05176e-05C17.1975 3.05176e-05 16.7498 0.447739 16.7498 1.00003C16.7498 1.55232 17.1975 2.00003 17.7498 2.00003V3.05176e-05ZM5.9166 2.00003C6.46889 2.00003 6.9166 1.55232 6.9166 1.00003C6.9166 0.447739 6.46889 3.05176e-05 5.9166 3.05176e-05V2.00003ZM145.5 214V213H141.875V214V215H145.5V214ZM134.624 214V213H130.999V214V215H134.624V214ZM130.999 214V213C129.061 213 127.168 212.81 125.338 212.448L125.144 213.429L124.95 214.41C126.907 214.797 128.93 215 130.999 215V214ZM114.331 208.947L114.887 208.116C111.724 205.998 109.001 203.275 106.883 200.112L106.052 200.668L105.221 201.225C107.484 204.605 110.394 207.515 113.774 209.778L114.331 208.947ZM101.57 189.855L102.551 189.661C102.189 187.831 101.999 185.938 101.999 184H100.999H99.9992C99.9992 186.069 100.202 188.092 100.589 190.049L101.57 189.855ZM100.999 184H101.999V178.536H100.999H99.9992V184H100.999ZM100.999 167.607H101.999V156.679H100.999H99.9992V167.607H100.999ZM100.999 145.75H101.999V134.821H100.999H99.9992V145.75H100.999ZM100.999 123.893H101.999V112.964H100.999H99.9992V123.893H100.999ZM100.999 102.036H101.999V91.1072H100.999H99.9992V102.036H100.999ZM100.999 80.1786H101.999V69.25H100.999H99.9992V80.1786H100.999ZM100.999 58.3215H101.999V47.3929H100.999H99.9992V58.3215H100.999ZM100.999 36.4643H101.999V31H100.999H99.9992V36.4643H100.999ZM100.999 31H101.999C101.999 28.931 101.796 26.9083 101.409 24.9511L100.428 25.1452L99.4472 25.3392C99.8093 27.1693 99.9992 29.062 99.9992 31H100.999ZM95.9462 14.3316L96.7772 13.7752C94.5142 10.3951 91.6042 7.48506 88.224 5.22209L87.6677 6.05307L87.1114 6.88403C90.2743 9.00156 92.9977 11.725 95.1152 14.8879L95.9462 14.3316ZM76.8541 1.57106L77.0482 0.590057C75.091 0.202881 73.0683 3.05176e-05 70.9992 3.05176e-05V1.00003V2.00003C72.9373 2.00003 74.83 2.19 76.66 2.55205L76.8541 1.57106ZM70.9992 1.00003V3.05176e-05H65.0826V1.00003V2.00003H70.9992V1.00003ZM53.2494 1.00003V3.05176e-05H41.4162V1.00003V2.00003H53.2494V1.00003ZM29.583 1.00003V3.05176e-05H17.7498V1.00003V2.00003H29.583V1.00003ZM5.9166 1.00003V3.05176e-05H0V1.00003V2.00003H5.9166V1.00003Z" fill="url(#paint0_linear_64681_1288)"/>
                                <defs>
                                <linearGradient id="paint0_linear_64681_1288" x1="235.498" y1="214" x2="-2.5116" y2="5.57926" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#903DD1"/>
                                <stop offset="1" stopColor="#305CD8" stopOpacity="0"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </div>   
                    )}
                    
                    {/* Icon Bubble */}
                    <Image src={step.icon} className='mx-auto mb-[36px]' alt="" />
                    
                    {/* Step Content */}
                    <h4 className="text-heading-1 font-dm-sans font-bold text-navy mb-[6px]">{step.title}</h4>
                    <p className="text-secondary text-heading-2 leading-relaxed mb-[24px]">{step.description}</p>
                    
                    {/* Step Number */}
                    <span className="inline-block text-[18px] leading-[27px] font-semibold text-[#969696]">
                      {step.stepNumber}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className='mt-4 absolute gap-[4px] start-2/4 -translate-x-2/4 -bottom-2 bg-blue rounded-full p-[4px] [&_.carousel-bullet]:bg-white/20 [&_.carousel-bullet]:border [&_.carousel-bullet]:border-solid [&_.carousel-bullet]:border-white/30 [&_.carousel-bullet-active]:!bg-[#EAD53F]' />
          </Carousel>
        </div>
        {/* CTA Button */}
        <motion.div variants={childAnimations[animationMode].fadeInUp} className="text-center mt-12">
            <Button variant={'outline'} size={'lg'} className='w-full md:w-auto rounded-full border border-solid border-navy text-navy hover:border-navy hover:bg-navy hover:text-navy-foreground font-semibold items-center' asChild>
                <Link href={'#'}>
                    <span>Schedule a Free Meeting</span>
                    <GoArrowUpRight className="!h-[24px] !w-[24px]" />
                </Link>
            </Button>
        </motion.div>
      </div>

    </motion.section>
  );
};

export default ProcessSection;