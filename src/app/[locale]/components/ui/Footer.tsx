"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./input-group";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, XIcon, LinkedInIcon, LocationIcon, EmailIcon, PhoneIcon, WhatsappIcon, LinkArrowIcon } from "@/lib/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

/**
 * Footer Component
 * Locale-aware footer component
 */
export default function Footer({ variant }: { variant: "default" | "secondary" }) {
  const t = useTranslations("common");

  return (
    <footer className="border-t bg-navy text-navy-foreground pt-[60px] lg:pt-[100px] pb-[15px] relative">
      {/* WHATSAPP BUTTON */}
      <div className="hidden lg:block absolute top-[-30px] lg:top-[-64px] right-[15px] lg:right-[30px] z-[3]">
        <Link href="https://wa.me/1234567890" className=" w-[60px] h-[60px] lg:w-[112px] lg:h-[112px] p-[10px] lg:p-[20px] bg-white/50 text-[#289D2C] backdrop-blur-[34px] shadow-[0px_50px_60px_rgba(21,62,122,0.46)] rounded-full flex items-center justify-center">
          <WhatsappIcon size={72} />
        </Link>
      </div>
      <div className="container">
        <div className="relative">
          
          {variant == 'secondary' && <div className="w-full grid grid-cols-[1fr_auto] items-center mb-[30px]">
            <div>
              <span className="text-[48px] lg:text-[120px] xl:text-[150px] leading-[1] text-dm-sans text-geadient-1">LET’S TALK!</span>
            </div>  
            <div className="">
              <Link className="inline-flex" href={'#'}>
                <LinkArrowIcon className="max-w-[50px] lg:max-w-[12vw] h-auto text-yellow" size={150}/>
              </Link>
            </div>  
          </div>}

          {/* MENU BOX */}
          <div className="relative z-[1]">
            <div className="py-[30px] px-[16px] sm:p-[40px] bg-[#08234D]/80 backdrop-blur-[7.5px] rounded-[16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto] gap-[20px] md:gap-[30px] xl:gap-[80px] relative z-[1]">
              {/* GRID ITEM */}
              <div className="h-full flex flex-col justify-center">
                <div className="max-w-[450px]">
                  <h3 className="text-heading-1 font-bold mb-[13px]">Check out how we can help your business thrive!</h3>
                  <InputGroup className="h-auto rounded-[12px] bg-[#1C3D6E] border-none focus-visible:ring-0 focus-visible:ring-offset-0">
                    <InputGroupInput placeholder="Enter your website" className="ps-[15px] sm:ps-[24px] text-body-base placeholder:text-white/50 placeholder:text-body-base bg-[#1C3D6E] border-none"/>
                    <InputGroupAddon align="inline-end" className="py-0 !me-0 !pe-0">
                      <InputGroupButton className="h-[55px] px-4 lg:px-6 text-heading-2 font-bold bg-yellow text-navy hover:bg-yellow/90 rounded-[12px]" variant="default">Send me a Proposal</InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>

                  {/* SOCIAL LIST */}
                  <ul className="flex items-center gap-[16px] mt-[24px]">
                    <li>
                      <Link href="/" className="text-body-base text-navy w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:text-navy transition-colors">
                        <FacebookIcon size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-body-base text-navy w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:text-navy transition-colors">
                        <InstagramIcon size={24} />
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-body-base text-navy w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:text-navy transition-colors">
                        <XIcon size={24} />
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-body-base text-navy w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:text-navy transition-colors">
                        <LinkedInIcon size={24} />
                      </Link>
                    </li>
                  </ul>

                </div>

              </div>
              {/* GRID ITEM */}
              <div className="space-y-[24px] hidden sm:block">
                <h4 className="text-heading-2 text-white">Quick Links</h4>
                <ul className="space-y-[8px] uppercase text-body-base">
                  <li>
                    <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Home</Link>
                  </li>
                  <li>
                    <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">pricing</Link>
                  </li>
                  <li>
                    <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Blog</Link>
                  </li>
                  <li>
                    <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">About Us</Link>
                  </li>
                  <li>
                    <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* COLLAPSEABLE CONTENT */}

              {/* GRID ITEM */}
              <div className="space-y-[24px] hidden sm:block">
                <h4 className="text-heading-2 text-white">Services</h4>
                <ul className="space-y-[8px] uppercase text-body-base">
                  <li>
                    <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Web Design</Link>
                  </li>
                  <li>
                    <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Development</Link>
                  </li>
                  <li>
                    <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Marketing</Link>
                  </li>
                  <li>
                    <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">SEO</Link>
                  </li>
                  <li>
                    <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Content writing</Link>
                  </li>
                  <li>
                    <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Logo & Branding</Link>
                  </li>
                </ul>
              </div>
              {/* GRID ITEM */}
              <div className="space-y-[24px] hidden sm:block">
                <h4 className="text-heading-2 text-white">Contact Us</h4>
                <ul className="space-y-[16px] text-body-base">
                  <li className="">
                    <Link href="https://maps.app.goo.gl/XQgqV4b915YZwE2x6" className="flex items-center gap-[10px] text-body-base text-white/50 hover:text-white transition-colors">
                      <LocationIcon size={20} />
                      <span>Somewhere in Bangladesh</span>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="mailto:mailernaam@weezard.com" className="flex items-center gap-[10px] text-body-base text-white/50 hover:text-white transition-colors">
                      <EmailIcon size={20} />
                      <span>mailernaam@weezard.com</span>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="tel:+8801212131415" className="flex items-center gap-[10px] text-body-base text-white/50 hover:text-white transition-colors">
                      <PhoneIcon size={20} />
                      <span>+88 01212131415</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <Accordion
                type="single"
                collapsible
                className="sm:hidden"
                defaultValue="item-1"
              >
                <AccordionItem className="border-b-transparent" value="item-1">
                  <AccordionTrigger className="!text-body-base hover:no-underline py-[10px] [&>svg]:text-white [&>svg]:w-[20px] [&>svg]:h-[20px]">Quick Links</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-[8px] uppercase text-body-base">
                    <li>
                      <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Home</Link>
                    </li>
                    <li>
                      <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">pricing</Link>
                    </li>
                    <li>
                      <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Portfolio</Link>
                    </li>
                    <li>
                      <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Blog</Link>
                    </li>
                    <li>
                      <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">About Us</Link>
                    </li>
                    <li>
                      <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Contact</Link>
                    </li>
                  </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-b-transparent" value="item-2">
                <AccordionTrigger className="!text-body-base hover:no-underline py-[10px] [&>svg]:text-white [&>svg]:w-[20px] [&>svg]:h-[20px]">Services</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-[8px] uppercase text-body-base">
                      <li>
                        <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Web Design</Link>
                      </li>
                      <li>
                        <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Development</Link>
                      </li>
                      <li>
                        <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Marketing</Link>
                      </li>
                      <li>
                        <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">SEO</Link>
                      </li>
                      <li>
                        <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Content writing</Link>
                      </li>
                      <li>
                        <Link href="/" className="text-body-base text-white/50 hover:text-white transition-colors">Logo & Branding</Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-b-transparent" value="item-3">
                  <AccordionTrigger className="!text-body-base hover:no-underline py-[10px] [&>svg]:text-white [&>svg]:w-[20px] [&>svg]:h-[20px]">Contact Us</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-[16px] text-body-base">
                      <li className="">
                        <Link href="https://maps.app.goo.gl/XQgqV4b915YZwE2x6" className="flex items-center gap-[10px] text-body-base text-white/50 hover:text-white transition-colors">
                          <LocationIcon size={20} />
                          <span>Somewhere in Bangladesh</span>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="mailto:mailernaam@weezard.com" className="flex items-center gap-[10px] text-body-base text-white/50 hover:text-white transition-colors">
                          <EmailIcon size={20} />
                          <span>mailernaam@weezard.com</span>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="tel:+8801212131415" className="flex items-center gap-[10px] text-body-base text-white/50 hover:text-white transition-colors">
                          <PhoneIcon size={20} />
                          <span>+88 01212131415</span>
                        </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>            
          <span className="absolute top-0 left-0 w-[73px] h-full bg-blue blur-[42px] rounded-full z-[-1]"></span>
          <span className="absolute top-0 end-0 w-[73px] h-full bg-blue blur-[42px] rounded-full z-[-1]"></span>
          </div>
          {variant == 'default' &&
            <div className="w-full pb-[25px] sm:pb-[150px]">
              <svg className="absolute bottom-0 sm:bottom-5 start-2/4 -translate-x-2/4 max-w-[90%] h-auto" width="1198" height="391" viewBox="0 0 1198 391" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7" clipPath="url(#clip0_69667_11336)">
                <path d="M1118.54 127.146H1130.04V160.294H1136.43V127.146H1147.91V121.301H1118.54V127.146Z" fill="#231F20"/>
                <path d="M1184.59 121.301L1176.76 148.646L1175.48 154.554H1174.59L1173.31 148.646L1165.53 121.301H1153V160.294H1159.39V127.02H1161.08L1170.6 160.294H1179.51L1189.03 127.02H1190.72V160.294H1197.11V121.301H1184.59Z" fill="#231F20"/>
                <path d="M422.48 320.527C422.48 277.902 393.506 247.863 353.636 247.863C313.765 247.863 284.812 277.902 284.812 319.442C284.812 360.982 314.329 391 354.742 391C383.152 391 402.545 379.54 415.382 361.504L396.825 344.011C388.058 357.12 375.22 365.303 354.742 365.303C333.158 365.303 316.521 349.459 314.872 326.518H422.501V320.506L422.48 320.527ZM314.851 306.312C318.128 286.084 334.515 272.975 353.636 272.975C372.757 272.975 389.164 286.084 392.42 306.312H314.851Z" fill="#231F20"/>
                <path d="M578.015 320.527C578.015 277.902 549.062 247.863 509.192 247.863C469.321 247.863 440.348 277.902 440.348 319.442C440.348 360.982 469.864 391 510.298 391C538.687 391 558.101 379.54 570.938 361.504L552.36 344.011C543.614 357.12 530.776 365.303 510.298 365.303C488.714 365.303 472.056 349.459 470.407 326.518H578.036V320.506L578.015 320.527ZM470.386 306.312C473.663 286.084 490.05 272.975 509.192 272.975C528.334 272.975 544.699 286.084 547.977 306.312H470.386Z" fill="#231F20"/>
                <path d="M628.052 357.141L697.981 288.569V251.141H596.364V277.923H662.453V281.743L592.523 350.294V387.722H700.695V360.961H628.052V357.141Z" fill="#231F20"/>
                <path d="M730.795 251.141V276.545H812.205V297.315L775.049 302.492C745.824 306.855 717.414 316.707 717.414 349.48C717.414 374.07 736.556 391 765.78 391C787.907 391 801.016 383.36 812.226 369.165V387.722H842.264V251.162H730.816L730.795 251.141ZM812.205 332.53C812.205 356.849 793.063 368.601 772.857 368.601C757.013 368.601 747.452 359.604 747.452 348.666C747.452 333.094 760.019 325.976 777.219 322.97L812.184 317.25V332.53H812.205Z" fill="#231F20"/>
                <path d="M1088.04 188.328V269.739C1076.04 256.066 1058.55 247.883 1038.07 247.883C998.719 247.883 970.58 277.921 970.58 319.462C970.58 361.002 998.719 391.019 1038.07 391.019C1058.55 391.019 1076.04 382.837 1088.04 369.185V387.742H1118.1V188.349H1088.04V188.328ZM1044.35 363.695C1019.22 363.695 1000.64 344.553 1000.64 319.441C1000.64 294.329 1019.22 275.166 1044.35 275.166C1069.48 275.166 1088.04 294.308 1088.04 319.441C1088.04 344.574 1069.48 363.695 1044.35 363.695Z" fill="#231F20"/>
                <path d="M875.059 307.292V387.721H905.494V307.292C905.494 291.677 918.164 278.986 933.799 278.986H962.731V248.551H933.799C901.402 248.551 875.059 274.894 875.059 307.292Z" fill="#231F20"/>
                <path d="M144.953 236.8L127.648 273.456L119.82 256.903L94.7913 203.819L80.0957 172.653L108.235 159.043L129.36 203.819L137.271 220.518L144.953 236.8Z" fill="#231F20"/>
                <path d="M257.424 203.816L213.129 359.394H202.754L173.759 297.919L156.496 334.574L183.09 390.998H236.612L289.884 203.816H257.424Z" fill="#231F20"/>
                <path d="M1118.54 127.146H1130.04V160.294H1136.43V127.146H1147.91V121.301H1118.54V127.146Z" fill="url(#paint0_linear_69667_11336)"/>
                <path d="M1184.59 121.301L1176.76 148.646L1175.48 154.554H1174.59L1173.31 148.646L1165.53 121.301H1153V160.294H1159.39V127.02H1161.08L1170.6 160.294H1179.51L1189.03 127.02H1190.72V160.294H1197.11V121.301H1184.59Z" fill="url(#paint1_linear_69667_11336)"/>
                <path d="M422.48 320.527C422.48 277.902 393.506 247.863 353.636 247.863C313.765 247.863 284.812 277.902 284.812 319.442C284.812 360.982 314.329 391 354.742 391C383.152 391 402.545 379.54 415.382 361.504L396.825 344.011C388.058 357.12 375.22 365.303 354.742 365.303C333.158 365.303 316.521 349.459 314.872 326.518H422.501V320.506L422.48 320.527ZM314.851 306.312C318.128 286.084 334.515 272.975 353.636 272.975C372.757 272.975 389.164 286.084 392.42 306.312H314.851Z" fill="url(#paint2_linear_69667_11336)"/>
                <path d="M578.015 320.527C578.015 277.902 549.062 247.863 509.192 247.863C469.321 247.863 440.348 277.902 440.348 319.442C440.348 360.982 469.864 391 510.298 391C538.687 391 558.101 379.54 570.938 361.504L552.36 344.011C543.614 357.12 530.776 365.303 510.298 365.303C488.714 365.303 472.056 349.459 470.407 326.518H578.036V320.506L578.015 320.527ZM470.386 306.312C473.663 286.084 490.05 272.975 509.192 272.975C528.334 272.975 544.699 286.084 547.977 306.312H470.386Z" fill="url(#paint3_linear_69667_11336)"/>
                <path d="M628.052 357.141L697.981 288.569V251.141H596.364V277.923H662.453V281.743L592.523 350.294V387.722H700.695V360.961H628.052V357.141Z" fill="url(#paint4_linear_69667_11336)"/>
                <path d="M730.795 251.141V276.545H812.205V297.315L775.049 302.492C745.824 306.855 717.414 316.707 717.414 349.48C717.414 374.07 736.556 391 765.78 391C787.907 391 801.016 383.36 812.226 369.165V387.722H842.264V251.162H730.816L730.795 251.141ZM812.205 332.53C812.205 356.849 793.063 368.601 772.857 368.601C757.013 368.601 747.452 359.604 747.452 348.666C747.452 333.094 760.019 325.976 777.219 322.97L812.184 317.25V332.53H812.205Z" fill="url(#paint5_linear_69667_11336)"/>
                <path d="M1088.04 188.328V269.739C1076.04 256.066 1058.55 247.883 1038.07 247.883C998.719 247.883 970.58 277.921 970.58 319.462C970.58 361.002 998.719 391.019 1038.07 391.019C1058.55 391.019 1076.04 382.837 1088.04 369.185V387.742H1118.1V188.349H1088.04V188.328ZM1044.35 363.695C1019.22 363.695 1000.64 344.553 1000.64 319.441C1000.64 294.329 1019.22 275.166 1044.35 275.166C1069.48 275.166 1088.04 294.308 1088.04 319.441C1088.04 344.574 1069.48 363.695 1044.35 363.695Z" fill="url(#paint6_linear_69667_11336)"/>
                <path d="M875.059 307.292V387.721H905.494V307.292C905.494 291.677 918.164 278.986 933.799 278.986H962.731V248.551H933.799C901.402 248.551 875.059 274.894 875.059 307.292Z" fill="url(#paint7_linear_69667_11336)"/>
                <path d="M144.953 236.8L127.648 273.456L119.82 256.903L94.7913 203.819L80.0957 172.653L108.235 159.043L129.36 203.819L137.271 220.518L144.953 236.8Z" fill="url(#paint8_linear_69667_11336)"/>
                <path d="M257.424 203.816L213.129 359.394H202.754L173.759 297.919L156.496 334.574L183.09 390.998H236.612L289.884 203.816H257.424Z" fill="url(#paint9_linear_69667_11336)"/>
                <path d="M223.086 144.473L195.114 203.82L162.237 273.478L144.952 310.154L106.794 391.001H53.2717L0 203.82H32.4807L76.7555 359.418H87.1092L127.647 273.478V273.457L144.952 236.801L194.926 130.863L223.086 144.473Z" fill="black"/>
                <path d="M255.212 72.1422L247.593 89.969L235.778 117.607L207.598 103.976L221.187 77.7157L230.288 60.0977L255.212 72.1422Z" fill="url(#paint10_linear_69667_11336)"/>
                <path d="M305.122 45.8003L284.874 39.7259L270.366 55.1103L276.441 34.8621L261.035 20.3543L281.304 26.4288L295.812 11.0234L289.758 31.2926L305.122 45.8003Z" fill="url(#paint11_linear_69667_11336)"/>
                <path d="M247.405 37.7194L237.991 34.8804L231.248 42.0404L234.066 32.626L226.906 25.9044L236.321 28.7225L243.063 21.5625L240.266 30.9769L247.405 37.7194Z" fill="url(#paint12_linear_69667_11336)"/>
                <path d="M296.208 59.8037C296.208 62.4756 294.058 64.6048 291.407 64.6048C288.756 64.6048 286.627 62.4548 286.627 59.8037C286.627 57.1526 288.777 55.0234 291.407 55.0234C294.037 55.0234 296.208 57.1735 296.208 59.8037Z" fill="url(#paint13_linear_69667_11336)"/>
                <path d="M235.777 6.88858C235.777 10.7086 232.708 13.798 228.888 13.798C225.068 13.798 221.979 10.7086 221.979 6.88858C221.979 3.06855 225.068 0 228.888 0C232.708 0 235.777 3.08942 235.777 6.88858Z" fill="url(#paint14_linear_69667_11336)"/>
                <path d="M223.086 144.473L195.114 203.82L162.237 273.478L144.952 310.154L106.794 391.001H53.2717L0 203.82H32.4807L76.7555 359.418H87.1092L127.647 273.478V273.457L144.952 236.801L194.926 130.863L223.086 144.473Z" fill="url(#paint15_linear_69667_11336)"/>
                <path d="M255.212 72.1422L247.593 89.969L235.778 117.607L207.598 103.976L221.187 77.7157L230.288 60.0977L255.212 72.1422Z" fill="url(#paint16_linear_69667_11336)"/>
                <path d="M305.122 45.8003L284.874 39.7259L270.366 55.1103L276.441 34.8621L261.035 20.3543L281.304 26.4288L295.812 11.0234L289.758 31.2926L305.122 45.8003Z" fill="url(#paint17_linear_69667_11336)"/>
                <path d="M247.405 37.7194L237.991 34.8804L231.248 42.0404L234.066 32.626L226.906 25.9044L236.321 28.7225L243.063 21.5625L240.266 30.9769L247.405 37.7194Z" fill="url(#paint18_linear_69667_11336)"/>
                <path d="M296.208 59.8037C296.208 62.4756 294.058 64.6048 291.407 64.6048C288.756 64.6048 286.627 62.4548 286.627 59.8037C286.627 57.1526 288.777 55.0234 291.407 55.0234C294.037 55.0234 296.208 57.1735 296.208 59.8037Z" fill="url(#paint19_linear_69667_11336)"/>
                <path d="M235.777 6.88858C235.777 10.7086 232.708 13.798 228.888 13.798C225.068 13.798 221.979 10.7086 221.979 6.88858C221.979 3.06855 225.068 0 228.888 0C232.708 0 235.777 3.08942 235.777 6.88858Z" fill="url(#paint20_linear_69667_11336)"/>
                <g style={{ mixBlendMode: 'multiply' }}>
                <path d="M144.953 236.802L127.648 273.457L119.82 256.904L137.271 220.52L144.953 236.802Z" fill="#BABABA"/>
                </g>
                </g>
                <defs>
                <linearGradient id="paint0_linear_69667_11336" x1="109.762" y1="90.1143" x2="1430.86" y2="468.065" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="1" stopColor="#903DD1"/>
                </linearGradient>
                <linearGradient id="paint1_linear_69667_11336" x1="109.757" y1="90.1143" x2="1430.86" y2="468.068" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="1" stopColor="#903DD1"/>
                </linearGradient>
                <linearGradient id="paint2_linear_69667_11336" x1="109.759" y1="90.1148" x2="1430.86" y2="468.068" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="1" stopColor="#903DD1"/>
                </linearGradient>
                <linearGradient id="paint3_linear_69667_11336" x1="109.758" y1="90.1148" x2="1430.86" y2="468.068" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="1" stopColor="#903DD1"/>
                </linearGradient>
                <linearGradient id="paint4_linear_69667_11336" x1="109.759" y1="90.1148" x2="1430.86" y2="468.068" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="1" stopColor="#903DD1"/>
                </linearGradient>
                <linearGradient id="paint5_linear_69667_11336" x1="109.758" y1="90.1148" x2="1430.86" y2="468.068" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="1" stopColor="#903DD1"/>
                </linearGradient>
                <linearGradient id="paint6_linear_69667_11336" x1="109.758" y1="90.1136" x2="1430.86" y2="468.067" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="1" stopColor="#903DD1"/>
                </linearGradient>
                <linearGradient id="paint7_linear_69667_11336" x1="109.758" y1="90.1134" x2="1430.86" y2="468.067" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="1" stopColor="#903DD1"/>
                </linearGradient>
                <linearGradient id="paint8_linear_69667_11336" x1="109.758" y1="90.1154" x2="1430.86" y2="468.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="1" stopColor="#903DD1"/>
                </linearGradient>
                <linearGradient id="paint9_linear_69667_11336" x1="109.758" y1="90.1131" x2="1430.86" y2="468.067" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="1" stopColor="#903DD1"/>
                </linearGradient>
                <linearGradient id="paint10_linear_69667_11336" x1="218.953" y1="111.157" x2="246.904" y2="66.8819" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="0.48" stopColor="#903DD1"/>
                <stop offset="1" stopColor="#EAD53F"/>
                </linearGradient>
                <linearGradient id="paint11_linear_69667_11336" x1="269.51" y1="54.5676" x2="296.668" y2="11.5662" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="0.48" stopColor="#903DD1"/>
                <stop offset="1" stopColor="#EAD53F"/>
                </linearGradient>
                <linearGradient id="paint12_linear_69667_11336" x1="230.852" y1="41.7899" x2="243.481" y2="21.813" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="0.48" stopColor="#903DD1"/>
                <stop offset="1" stopColor="#EAD53F"/>
                </linearGradient>
                <linearGradient id="paint13_linear_69667_11336" x1="288.861" y1="63.8742" x2="293.975" y2="55.7749" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="0.48" stopColor="#903DD1"/>
                <stop offset="1" stopColor="#EAD53F"/>
                </linearGradient>
                <linearGradient id="paint14_linear_69667_11336" x1="225.172" y1="12.7334" x2="232.562" y2="1.0646" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="0.48" stopColor="#903DD1"/>
                <stop offset="1" stopColor="#EAD53F"/>
                </linearGradient>
                <linearGradient id="paint15_linear_69667_11336" x1="4.15402" y1="375.345" x2="222.71" y2="29.4133" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="0.48" stopColor="#903DD1"/>
                <stop offset="1" stopColor="#EAD53F"/>
                </linearGradient>
                <linearGradient id="paint16_linear_69667_11336" x1="4.15485" y1="375.344" x2="222.711" y2="29.4121" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="0.48" stopColor="#903DD1"/>
                <stop offset="1" stopColor="#EAD53F"/>
                </linearGradient>
                <linearGradient id="paint17_linear_69667_11336" x1="4.15374" y1="375.346" x2="222.71" y2="29.4139" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="0.48" stopColor="#903DD1"/>
                <stop offset="1" stopColor="#EAD53F"/>
                </linearGradient>
                <linearGradient id="paint18_linear_69667_11336" x1="4.15458" y1="375.343" x2="222.71" y2="29.4113" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="0.48" stopColor="#903DD1"/>
                <stop offset="1" stopColor="#EAD53F"/>
                </linearGradient>
                <linearGradient id="paint19_linear_69667_11336" x1="4.15361" y1="375.342" x2="222.71" y2="29.4106" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="0.48" stopColor="#903DD1"/>
                <stop offset="1" stopColor="#EAD53F"/>
                </linearGradient>
                <linearGradient id="paint20_linear_69667_11336" x1="4.15321" y1="375.344" x2="222.709" y2="29.4121" gradientUnits="userSpaceOnUse">
                <stop stopColor="#305CD8"/>
                <stop offset="0.48" stopColor="#903DD1"/>
                <stop offset="1" stopColor="#EAD53F"/>
                </linearGradient>
                <clipPath id="clip0_69667_11336">
                <rect width="1197.11" height="391" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </div>
          }
          {variant == 'secondary' && <div className="w-full block h-[25px] lg:h-[60px]"></div>}
        </div>

        {/* FOOTER COPYRIGHT */}
        <div className="sm:border-t border-t-white/20 py-[16px] grid gap-[10px] grid-cols-1 sm:grid-cols-[1fr_auto]">
          <p className="text-body-base text-white/50 text-center sm:text-left">© {new Date().getFullYear()} Weezard. All rights reserved.</p>
          <div className="flex items-center justify-center sm:justify-start gap-[18px] text-body-base">
            <Link href="/privacy-policy" className="text-white/50 hover:text-yellow transition-colors">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <Link href="/terms-of-service" className="text-white/50 hover:text-yellow transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}