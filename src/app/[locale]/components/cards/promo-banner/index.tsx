"use client"

import { GoArrowUpRight } from "react-icons/go"
import { Button } from "../../ui/button"
import Image from "next/image"
import IconShape from "./assets/star-icon.svg"
import { cn } from "@/lib/utils"

type PromoBannerProps = {
  title?: string
  description?: string
  variant?: "default" | "center" | "double"
  showBorder?: boolean
  primaryButton?: {
    label: string
    href?: string
  }
  secondaryButton?: {
    label: string
    href?: string
  }
}

export default function PromoBanner({
  title = "Let’s Build Something Great Together",
  description = "Whether you need a website, marketing help, or a full digital upgrade—we’re ready when you are.",
  variant = "default",
  showBorder = true,
  primaryButton,
  secondaryButton,
}: PromoBannerProps) {
  const isCentered = variant === "center"

  return (
    <div className="bg-blue text-blue-foreground rounded-[12px] sm:rounded-[16px] py-[36px] sm:py-[60px] lg:py-[100px] px-[16px] sm:px-[24px] lg:px-[110px] relative z-[1] overflow-hidden">
      {/* Decorative Elements */}
      <Image
        src={IconShape}
        alt="ICON"
        className="w-[82px] lg:w-[145px] absolute top-[17px] lg:top-[85px] start-[18px] lg:start-[50px] -z-[1] opacity-30 select-none pointer-events-none"
      />
      <span className="absolute max-w-[50vw] w-[320px] sm:w-[450px] lg:w-[500px] aspect-square bg-white blur-[50px] sm:blur-[70px] lg:blur-[140px] rounded-full -top-[15%] lg:-top-[40%] -end-[10%] lg:-end-[20%] z-[-1] inline-block opacity-50 select-none pointer-events-none"></span>
      <span className="absolute max-w-[50vw] w-[320px] sm:w-[450px] lg:w-[500px] aspect-square bg-purple blur-[50px] sm:blur-[70px] lg:blur-[140px] rounded-full -bottom-[15%] lg:-bottom-[50%] -start-[15%] lg:-start-[20%] z-[-1] inline-block opacity-50 select-none pointer-events-none"></span>

      {/* Content */}
      <div
        className={cn(
          "gap-5 sm:gap-6",
          isCentered
            ? "flex flex-col items-center text-center"
            : "flex flex-col lg:flex-row items-center justify-between"
        )}
      >
        {/* Text Section */}
        <div
          className={cn(
            "space-y-2.5 sm:space-y-4",
            isCentered ? "text-center max-w-[340px] sm:max-w-[580px] lg:max-w-[800px]" : "text-left max-w-[560px]",
            showBorder && "pb-[20px] sm:pb-[24px] border-b-[2px] border-solid border-yellow"
          )}
        >
          <h2 className="text-[26px] xs:text-[28px] sm:text-[34px] lg:text-title-2 font-bold leading-tight font-dm-sans text-white">
            {title}
          </h2>
          <p className="text-[14px] xs:text-[15px] sm:text-[17px] lg:text-heading-2 font-normal text-white/90 leading-snug sm:leading-relaxed">
            {description}
          </p>
        </div>

        {/* Button Section */}
        {(primaryButton || secondaryButton) && (
          <div
            className={cn(
              "w-full",
              isCentered
                ? "flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-[350px] sm:max-w-none mx-auto mt-1 sm:mt-0"
                : "flex flex-col gap-3 sm:gap-4 md:w-auto"
            )}
          >
            {primaryButton && (
              <Button
                variant="yellow"
                className="h-[48px] sm:h-[54px] lg:h-[60px] text-[15px] sm:text-[16px] font-dm-sans text-navy font-semibold w-full sm:w-auto sm:min-w-[240px] lg:min-w-[270px] rounded-full shadow-none hover:bg-yellow/90 transition-colors"
                asChild
              >
                <a href={primaryButton.href || "#"}>
                  <span>{primaryButton.label}</span>
                  <GoArrowUpRight className="!h-[18px] !w-[18px] sm:!h-[20px] sm:!w-[20px]" />
                </a>
              </Button>
            )}
            {secondaryButton && (
              <Button
                variant="outline"
                className="border border-solid border-white h-[48px] sm:h-[54px] lg:h-[60px] text-[15px] sm:text-[16px] font-dm-sans bg-transparent text-white font-semibold w-full sm:w-auto sm:min-w-[240px] lg:min-w-[270px] rounded-full hover:bg-white/10 hover:text-white transition-colors"
                asChild
              >
                <a href={secondaryButton.href || "#"}>
                  <span>{secondaryButton.label}</span>
                  <GoArrowUpRight className="!h-[18px] !w-[18px] sm:!h-[20px] sm:!w-[20px]" />
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
