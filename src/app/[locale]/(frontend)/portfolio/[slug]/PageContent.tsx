"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations/framer";
import Faq from "@/app/[locale]/components/sections/Faq";
import CaseVideoSection from "@/app/[locale]/components/sections/case-video";
import Image from "next/image";
import FeaturesTableBanner from './assets/features-table.jpg'
import OpportTunityBannar1 from './assets/the-opportunity-1.jpg';
import OpportTunityBannar2 from './assets/the-opportunity-2.jpg';
import OpportTunityBannar3 from './assets/the-opportunity-3.jpg';
import { Separator } from "@/app/[locale]/components/ui/separator";
import HeroBanner from './assets/hero-banner.png';

/**
 * Services Page Content
 */
export function PageContent() {
  const data={
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
    {/* HERO BANNER */}
    <section className="pb-[60px] pt-[100px] lg:py-[100px] min-h-[510px] lg:min-h-[800px] flex flex-col justify-end bg-navy text-navy-foreground bg-cover bg-center" style={{
      backgroundImage: `url(${HeroBanner.src})`
    }}>
      <div className="container max-w-[1120px]">
        <h1 className="text-[48px] lg:text-[72px] leading-[1.2] text-center font-bold mb-[30px]">Finance Management App</h1>
        <div className="bg-white/20 rounded-[16px] p-[24px] flex flex-wrap md:flex-nowrap gap-y-[28px] items-center justify-between">
          <div className="w-[calc(50%-58px)] md:w-full flex-grow">
            <h6 className="text-[14px] lg:text-heading-2 font-medium mb-[5px]">Client</h6>
            <div className="text-[16px] lg:text-heading-1 font-bold">Mark J.</div>
          </div>
          <Separator className="h-[60px] mx-[28px]" orientation="vertical" />
          <div className="w-[calc(50%-58px)] md:w-full flex-grow">
            <h6 className="text-[14px] lg:text-heading-2 font-medium mb-[5px]">Date</h6>
            <div className="text-[16px] lg:text-heading-1 font-bold">August  2025</div>
          </div>
          <Separator className="h-[60px] hidden md:block mx-[28px]" orientation="vertical" />
          <div className="w-[calc(50%-58px)] md:w-full flex-grow">
            <h6 className="text-[14px] lg:text-heading-2 font-medium mb-[5px]">Role</h6>
            <div className="text-[16px] lg:text-heading-1 font-bold">App Development</div>
          </div>
          <Separator className="h-[60px] mx-[28px]" orientation="vertical" />
          <div className="w-[calc(50%-58px)] md:w-full flex-grow">
            <h6 className="text-[14px] lg:text-heading-2 font-medium mb-[5px]">Website</h6>
            <div className="text-[16px] lg:text-heading-1 font-bold">www.bigbank.com</div>
          </div>
        </div>
      </div>
    </section>


      <section className="py-[60px] lg:py-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_8fr] gap-[20px] lg:gap-x-[80px]">
            <div className="grid__item">
              <h3 className="text-[32px] lg:text-title-2 font-dm-sans -tracking-[0.03em] font-bold text-navy">Key insight about the project goes here</h3>
            </div>
            <div className="grid__item">
              <p className="text-body-base mb-[10px]">Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
              <p className="text-body-base mb-[20px] lg:mb-[80px]">Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
              <table className="table-collapse w-full">
                <tbody>
                  <tr>
                    <td className="py-[15px] text-heading-2 font-bold text-navy text-left border-t border-solid border-[#E8EBEE]">Client</td>
                    <td className="py-[15px] text-body-base font-normal text-secondary text-right border-t border-solid border-[#E8EBEE]">Client</td>
                  </tr>
                  <tr>
                    <td className="py-[15px] text-heading-2 font-bold text-navy text-left border-t border-solid border-[#E8EBEE]">Date</td>
                    <td className="py-[15px] text-body-base font-normal text-secondary text-right border-t border-solid border-[#E8EBEE]">August  2025</td>
                  </tr>
                  <tr>
                    <td className="py-[15px] text-heading-2 font-bold text-navy text-left border-t border-solid border-[#E8EBEE]">Role</td>
                    <td className="py-[15px] text-body-base font-normal text-secondary text-right border-t border-solid border-[#E8EBEE]">App Development</td>
                  </tr>
                  <tr>
                    <td className="py-[15px] text-heading-2 font-bold text-navy text-left border-t border-solid border-[#E8EBEE]">Website</td>
                    <td className="py-[15px] text-body-base font-normal text-secondary text-right border-t border-solid border-[#E8EBEE]">http://www.bigbank.com/</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      <CaseVideoSection />

      <section className="pt-[60px] lg:pt-[100px] space-y-[30px] space-y-[80px]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_8fr] gap-[20px] lg:gap-x-[80px]">
            <div className="grid__item">
              <h3 className="text-[32px] lg:text-title-2 font-dm-sans -tracking-[0.03em] font-bold text-navy">Key heading about the project goes here</h3>
            </div>
            <div className="grid__item">
              <p className="text-body-base mb-[10px]">Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
              <p className="text-body-base">Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
            </div>
          </div>
        </div>
        <div className="container"> 
          <Image src={FeaturesTableBanner} alt="Features Table" className="w-full h-auto max-w-full"/>
        </div>
        
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_8fr] gap-[20px] lg:gap-x-[80px]">
            <div className="grid__item flex flex-col gap-[15px]">
              <h3 className="text-[32px] lg:text-title-2 font-dm-sans -tracking-[0.03em] font-bold text-navy">The opportunity</h3>
              <div className="space-y-[10px]">
                <p className="text-body-base">Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                <p className="text-body-base">Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
                <p className="text-body-base">Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>
              </div>
            </div>
            <div className="grid__item">
              <div className="space-y-[10px]">
                <Image src={OpportTunityBannar1} alt="OpportTunityBannar1" className="w-full h-auto max-w-full rounded-[8px]"/>
                <Image src={OpportTunityBannar2} alt="OpportTunityBannar2" className="w-full h-auto max-w-full rounded-[8px]"/>
                <Image src={OpportTunityBannar3} alt="OpportTunityBannar3" className="w-full h-auto max-w-full rounded-[8px]"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq data={data.faqs} />
    </>
  );
}

