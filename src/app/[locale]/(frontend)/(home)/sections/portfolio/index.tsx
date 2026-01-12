import React from 'react'
import { Badge } from '@/app/[locale]/components/ui/badge';
import { Button } from '@/app/[locale]/components/ui/button';
import { Card } from '@/app/[locale]/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/app/[locale]/components/ui/carousel"
import Image from 'next/image'
import styles from './portfolio.module.css'
import Banner1 from './assets/banner-1.jpg';
import Banner2 from './assets/banner-2.jpg';
import Banner3 from './assets/banner-3.jpg';
import Banner4 from './assets/banner-4.jpg';

const Portfolio = () => {
  const categories = [
    'All',
    'Website Design',
    'Web Development',
    'Digital Marketing',
    'SEO',
    'Design Branding',
    'Social Media',
    'Marketing'
  ]

  const portfolioItems = [
    {
      id: 1,
      category: 'DESIGN BRANDING',
      image: Banner1
    },
    {
      id: 2,
      category: 'WEB DEVELOPMENT',
      image: Banner2
    },
    {
      id: 3,
      category: 'DIGITAL MARKETING',
      image: Banner3
    },
    {
      id: 4,
      category: 'WEBSITE DESIGN',
      image: Banner4
    },
    {
      id: 5,
      category: 'SEO',
      image: Banner2
    },
    {
      id: 6,
      category: 'SOCIAL MEDIA',
      image: Banner3
    },
    {
      id: 7,
      category: 'SOCIAL MEDIA',
      image: Banner4
    },
    {
      id: 8,
      category: 'SOCIAL MEDIA',
      image: Banner1
    }
  ]

  return (
    <section className="relative w-full py-24 overflow-hidden bg-dotted-spacing-4 bg-dotted-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Panel - Static Content */}
          <div className="col-span-1 lg:col-span-5 md:col-span-6">
            <div className="">
              <Badge className="px-4 py-2 text-sm font-medium rounded-full bg-blue-50 text-blue-600 border-blue-200 mb-[10px]">
                CASE STUDY
              </Badge>
              
              <h2 className="text-4xl font-dm-sans lg:text-title-2 font-bold text-navy leading-tight mb-[20px]">
                Our Portfolio
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[540px] mb-[40px]">
                Every project we touch on is built with purpose, precision, and achievable goals. These portfolios highlight the kind of work we stand behind. These reflect our craft, our care, and our commitment to helping brands grow. Take a scroll through the transformations we’ve crafted, and find out what Weezard can do for you.
              </p>
              
              {/* Category Chips */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "secondary"}
                    className={`rounded-full px-6 py-2 min-w-[70px] text-heading-2 font-semibold transition-all shadow-none border-none ${
                      index === 0 
                        ? 'bg-[linear-gradient(129.49deg,#305CD8_7.87%,_#903DD1_146.55%)] hover:bg-[linear-gradient(129.49deg,#305CD8_7.87%,_#903DD1_146.55%)] text-white' 
                        : 'bg-[#E7EDFE] hover:bg-[#E7EDFE]/80 text-muted-foreground'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Panel - Vertical Slider */}
          <div className="col-span-1 lg:col-span-7 md:col-span-6">
            {/* Desktop: Animated Columns */}
            <div className="hidden lg:block">
              <div className={`${styles.sliderContainer} group relative h-[650px] overflow-hidden`}>
                <div className="grid grid-cols-2 gap-6">
                  {/* Left Column - Scrolls UP */}
                  <div className={`${styles.sliderColUp} slider-col up`}>
                    <div className="space-y-6">
                      {[...portfolioItems, ...portfolioItems].map((item, index) => (
                        <Card key={`up-${index}`} className="relative overflow-hidden rounded-[16px] h-[370px] border border-solid border-blue">
                          <Badge className="absolute top-[16px] left-[18px] z-10 bg-black/75 rounded-[6px] text-white uppercase text-[14px] border-none px-[6px] py-[4px]">
                            {item.category}
                          </Badge>
                          <Image
                            src={item.image}
                            alt={item.category}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </Card>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right Column - Scrolls DOWN */}
                  <div className={`${styles.sliderColDown} slider-col down`}>
                    <div className="space-y-6">
                      {[...portfolioItems.slice().reverse(), ...portfolioItems.slice().reverse()].map((item, index) => (
                        <Card key={`down-${index}`} className="relative overflow-hidden rounded-[16px] h-[370px] border border-solid border-blue">
                          <Badge className="absolute top-[16px] left-[18px] z-10 bg-black/75 rounded-[6px] text-white uppercase text-[14px] border-none px-[6px] py-[4px]">
                            {item.category}
                          </Badge>
                          <Image
                            src={item.image}
                            alt={item.category}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile: Portfolio Carousel */}
            <div className="lg:hidden">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {portfolioItems.map((item, index) => (
                    <CarouselItem key={index} className="basis-[90%] pl-4">
                      <Card className="relative overflow-hidden rounded-[16px] h-[370px] border border-solid border-blue">
                        <Badge className="absolute top-[16px] left-[18px] z-10 bg-black/75 rounded-[6px] text-white uppercase text-[14px] border-none px-[6px] py-[4px]">
                          {item.category}
                        </Badge>
                        <Image
                          src={item.image}
                          alt={item.category}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselDots className='mt-4 [&_.carousel-bullet]:bg-[#D9D9D9] [&_.carousel-bullet-active]:!bg-[#305CD8]' />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio