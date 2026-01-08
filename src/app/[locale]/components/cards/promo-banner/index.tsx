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
    <div className="bg-blue text-blue-foreground rounded-[16px] py-[60px] lg:py-[140px] px-[20px] lg:px-[110px] relative z-[1] overflow-hidden">
      {/* Decorative Elements */}
      <Image
        src={IconShape}
        alt="ICON"
        className="w-[80px] lg:w-[145px] absolute top-[17px] lg:top-[85px] start-[18px] lg:start-[50px] -z-[1]"
      />
      <span className="absolute max-w-[50vw] w-[500px] aspect-[1] bg-white blur-[60px] lg:blur-[140px] rounded-full -top-[20%] lg:-top-[40%] -end-[10%] lg:-end-[20%] z-[-1] inline-block opacity-50"></span>
      <span className="absolute max-w-[50vw] w-[500px] aspect-[1] bg-purple blur-[60px] lg:blur-[140px] rounded-full -bottom-[10%] lg:-bottom-[50%] -start-[20%] lg:-start-[20%] z-[-1] inline-block opacity-50"></span>

      {/* Content */}
      <div
        className={cn(
          "gap-6",
          isCentered
            ? "flex flex-col items-center text-center"
            : "flex flex-col lg:flex-row items-center justify-between"
        )}
      >
        {/* Text Section */}
        <div
          className={cn(
            "pb-[24px] space-y-4",
            isCentered ? "text-center max-w-[800px]" : "text-left max-w-[560px]",
            showBorder && "border-b-[2px] border-solid border-yellow"
          )}
        >
          <h2 className="text-[32px] lg:text-title-2 font-bold leading-tight font-dm-sans">
            {title}
          </h2>
          <p className="text-[18px] lg:text-heading-2 font-normal">{description}</p>
        </div>

        {/* Button Section */}
        {(primaryButton || secondaryButton) && (
          <div className={cn(
              "w-full md:w-auto",
              isCentered ? "flex flex-row justify-center gap-4 flex-wrap" : "flex flex-col gap-4"
            )}>
            {primaryButton && (
              <Button
                variant="yellow"
                className="h-[60px] text-[16px] font-dm-sans text-navy font-semibold min-w-full md:min-w-[270px]"
                asChild
              >
                <a href={primaryButton.href || "#"}>
                  <span>{primaryButton.label}</span>
                  <GoArrowUpRight className="!h-[20px] !w-[20px]" />
                </a>
              </Button>
            )}
            {secondaryButton && (
              <Button
                variant="outline"
                className="border border-solid border-white h-[60px] text-[16px] font-dm-sans bg-transparent text-white font-semibold min-w-full md:min-w-[270px]"
                asChild
              >
                <a href={secondaryButton.href || "#"}>
                  <span>{secondaryButton.label}</span>
                  <GoArrowUpRight className="!h-[20px] !w-[20px]" />
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
