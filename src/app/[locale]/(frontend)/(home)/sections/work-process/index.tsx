import React from 'react';
import { Button } from '@/app/[locale]/components/ui/button';
import { Badge } from '@/app/[locale]/components/ui/badge';
import { Calendar, Puzzle, Layers, BarChart } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a free consultation to discuss your IT needs and goals.',
      stepNumber: 'STEP 1'
    },
    {
      icon: Puzzle,
      title: 'Custom Solution',
      description: 'We design a tailored IT strategy that fits your business perfectly.',
      stepNumber: 'STEP 2'
    },
    {
      icon: Layers,
      title: 'Implementation',
      description: 'Our expert team deploys your solution with minimal disruption.',
      stepNumber: 'STEP 3'
    },
    {
      icon: BarChart,
      title: 'Support & Growth',
      description: 'Ongoing support and optimization to ensure continued success.',
      stepNumber: 'STEP 4'
    }
  ];

  return (
    <section className="relative w-full py-24 bg-background">
      <div className="container max-w-7xl">
        {/* Process Box */}
        <div className="process-box rounded-[20px] border border-blue bg-[#ECF7FA] p-[50px]">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Side - Header */}
            <div className="col-span-12 lg:col-span-5">
              <span className="mb-4 text-blue bg-blue/10 text-[14px] inline-flex leading-[1.7] uppercase py-[5px] px-[14px] font-semibold rounded-full">
                HOW IT WORKS
              </span>
              
              <h2 className="text-3xl lg:text-4xl font-dm-sans font-bold text-[#0B1B3A] leading-tight mb-6 max-w-[470px]">
                See Our Work Process for 
                <br />
                Fully managed IT Services
              </h2>
            </div>
            
            {/* Right Side - Description */}
            <div className="col-span-12 lg:col-span-7">
              <p className="text-[#6B7280] text-lg leading-relaxed">
                We follow a proven methodology that ensures seamless integration of IT solutions into your business operations. Our systematic approach guarantees that every project is delivered on time, within budget, and exceeds expectations. From initial consultation to ongoing support, we're with you every step of the way.
              </p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="process-steps mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector Lines - Desktop Only */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 800 1" preserveAspectRatio="none">
                <path
                  d="M 0,0.5 Q 100,20 200,0.5 T 400,0.5 T 600,0.5 T 800,0.5"
                  stroke="#305CD8"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                />
              </svg>
            </div>

            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="process-step text-center relative">
                  {/* Icon Bubble */}
                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-6 shadow-lg">
                    <IconComponent className="w-10 h-10 text-blue-600" />
                  </div>
                  
                  {/* Step Content */}
                  <h4 className="text-xl font-bold text-[#0B1B3A] mb-3">{step.title}</h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{step.description}</p>
                  
                  {/* Step Number */}
                  <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {step.stepNumber}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-full border-[#305CD8] text-[#305CD8] hover:bg-[#305CD8] hover:text-white shadow-md px-8 py-3"
          >
            Schedule a Free Meeting →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;