"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations/framer";
import Pricing from "../../components/sections/Pricing";
import PromoBanner from "../../components/cards/promo-banner";
import Faq from "../../components/sections/Faq";
import { ListStarShapeIcon } from "@/lib/icons/list";
import { Button } from "../../components/ui/button";
import { Link } from "@/lib/i18n/routing";
import { GoArrowUpRight } from "react-icons/go";
import SmallBusinessChooseUsBanner1 from './assets/banner-1.jpg';
import SmallBusinessChooseUsBanner2 from './assets/banner-2.jpg';

/**
 * About Us Page Content
 */
export function PageContent() {

  const data = {

      faqs: {
          title: "FAQs — About Weezard",
          info: "Got questions? You’re not alone. Here are a few common things small business owners ask us before they get started.",
          categories: [
              {
                  name: "Website Design",
                  slug: "website-design",
                  items: [
                      {
                          title: 'Why the name “Weezard”?',
                          content: `Weezard stands for wisdom, simplicity, and skill. While we don’t do magic, our process-driven approach often feels like it—delivering smart digital solutions that just work.`
                      },
                      {
                          title: 'How do you keep things simple for non-tech clients?',
                          content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                      },
                      {
                          title: 'What makes Weezard different from other agencies?',
                          content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                      },
                      {
                          title: 'How do you manage projects remotely?',
                          content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                      },
                      {
                          title: 'How experienced is your team?',
                          content: `You can expect measurable improvements in website traffic, online visibility, and lead generation. Depending on your goals, this could include more inquiries, higher social engagement, or improved search rankings.`
                      },
                  ]
              },
          ],
          question: {
          title: "Still have a questions?",
          button_label: "Contact Us",
          button_url: "#"
          }
      },
  }
return (
  <>
  
      {/* WHY SMALL BUSINESS CHOOSE US */}
      <section className="py-[60px] lg:py-[120px] space-y-[60px] lg:space-y-[120px]">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-y-[36px] gap-x-[24px]">
                <div className="grid__item">
                    <h3 className="text-title-2 font-bold text-navy mb-[16px]">Why Small Businesses Choose Us</h3>
                    <p className="text-heading-2 font-normal text-secondary mb-[40px]">Small businesses choose Weezard because we speak their language, respect their budget, and focus on real outcomes. We’re fast, friendly, and flexible—delivering agency-level quality without the stress or big agency price tag.</p>

                    <div className="space-y-[20px] mb-[40px] max-w-[430px]">
                        <div className="grid grid-cols-[18px_1fr] gap-[12px] items-center text-heading-1 font-bold text-navy">
                            <ListStarShapeIcon size={18}/>
                            <span>Tailored services, not templates</span>
                        </div>
                        <div className="bg-[#305CD8] w-[100%] h-[2px] opacity-25"></div>
                        <div className="grid grid-cols-[18px_1fr] gap-[12px] items-center text-heading-1 font-bold text-navy">
                            <ListStarShapeIcon size={18}/>
                            <span>Clear communication</span>
                        </div>
                        <div className="bg-[#305CD8] w-[100%] h-[2px] opacity-25"></div>
                        <div className="grid grid-cols-[18px_1fr] gap-[12px] items-center text-heading-1 font-bold text-navy">
                            <ListStarShapeIcon size={18}/>
                            <span>Scalable as you grow</span>
                        </div>
                        <div className="bg-[#305CD8] w-[100%] h-[2px] opacity-25"></div>
                        <div className="grid grid-cols-[18px_1fr] gap-[12px] items-center text-heading-1 font-bold text-navy">
                            <ListStarShapeIcon size={18}/>
                            <span>Fully white-label options</span>
                        </div>
                    </div>
                    <Button variant={'default'} className="bg-blue hover:bg-blue/90 h-[60px] px-[30px] rounded-full" size={'lg'} asChild>
                        <Link href={'#'}>
                            <span>Let’s Talk About Your Business</span>
                            <GoArrowUpRight className='!w-[24px] !h-[24px]'/>
                        </Link>
                    </Button>
                </div>
                <div className="grid__item">
                    <div className="relative">
                        <svg className="max-w-full h-auto" width="760" height="657" viewBox="0 0 760 657" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect opacity="0.5" x="166.398" y="72.0391" width="490.673" height="486.087" rx="51" transform="rotate(6.95488 166.398 72.0391)" fill="url(#paint0_linear_68297_36948)"/>
                            <g opacity="0.5">
                            <mask id="mask0_68297_36948" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="554" y="19" width="146" height="146">
                            <path fillRule="evenodd" clipRule="evenodd" d="M641.6 19L612.4 19V56.7525L585.705 30.0575L565.057 50.7049L591.753 77.4H554V106.6H591.752L565.057 133.295L585.705 153.943L612.4 127.247V165H641.6V127.247L668.295 153.943L688.943 133.295L662.247 106.6L700 106.6V77.4L662.247 77.4L688.943 50.7049L668.295 30.0574L641.6 56.7525V19Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_68297_36948)">
                            <g clipPath="url(#clip0_68297_36948)">
                            <path d="M700 19H554V165H700V19Z" fill="white"/>
                            <path d="M700 19H554V165H700V19Z" fill="url(#paint1_linear_68297_36948)"/>
                            <g filter="url(#filter0_f_68297_36948)">
                            <path d="M722.63 102.219L560.57 102.219V186.899H722.63V102.219Z" fill="#8F5BFF"/>
                            <ellipse cx="592.702" cy="19.1604" rx="81.7124" ry="56.1158" transform="rotate(-15 592.702 19.1604)" fill="#00F0FF"/>
                            </g>
                            </g>
                            </g>
                            </g>
                            <path d="M0 16C0 7.16345 7.16344 0 16 0H473C481.837 0 489 7.16344 489 16V507C489 515.837 481.837 523 473 523H16C7.16345 523 0 515.837 0 507V16Z" fill="url(#pattern0_68297_36948)"/>
                            <path d="M420 203C420 194.163 427.163 187 436 187H744C752.837 187 760 194.163 760 203V641C760 649.837 752.837 657 744 657H436C427.163 657 420 649.837 420 641V203Z" fill="url(#pattern1_68297_36948)"/>
                            <defs>
                            <filter id="filter0_f_68297_36948" x="452.434" y="-99.0391" width="330.197" height="345.938" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_68297_36948"/>
                            </filter>
                            <pattern id="pattern0_68297_36948" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_68297_36948" transform="matrix(0.00106953 0 0 0.001 -0.302147 0)"/>
                            </pattern>
                            <pattern id="pattern1_68297_36948" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image1_68297_36948" transform="matrix(0.000506171 0 0 0.000366166 -1.07286 0)"/>
                            </pattern>
                            <linearGradient id="paint0_linear_68297_36948" x1="657.072" y1="72.0391" x2="258.431" y2="620.292" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#C7B0FE" stopOpacity="0.2"/>
                            <stop offset="1" stopColor="#305CD8"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_68297_36948" x1="829.367" y1="150.677" x2="551.424" y2="135.927" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#C7B0FE"/>
                            <stop offset="1" stopColor="#305CD8"/>
                            </linearGradient>
                            <clipPath id="clip0_68297_36948">
                            <rect width="146" height="146" fill="white" transform="translate(554 19)"/>
                            </clipPath>
                            <image id="image0_68297_36948" width="1500" height="1000" preserveAspectRatio="slice" xlinkHref={SmallBusinessChooseUsBanner1.src}/>
                            <image id="image1_68297_36948" width="4096" height="2731" preserveAspectRatio="xMaxYMid meet" xlinkHref={SmallBusinessChooseUsBanner2.src}/>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
      </section>


    {/* Ready to Launch a Website That Works for Your Business? */}
    <section className="pt-[60px] lg:pt-[120px]">
      <div className="container">
          <PromoBanner
              title="Ready to Launch a Website That Works?"
              description="See how our websites improve load times, UX, and conversions for businesses like yours."
              primaryButton={{ label: "Book a Free Consultation", href: "/contact" }}
              secondaryButton={{ label: "Request a Custom Quote", href: "/quote" }}
              showBorder={true}
          />
      </div>
    </section>
    <Faq data={data.faqs} />
  </>
);
}
