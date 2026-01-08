"use client"

import { GoArrowUpRight } from "react-icons/go"
import { Button } from "../../../../components/ui/button"
import Image from "next/image"
import Shape1 from "./assets/shape-1.svg"
import Shape2 from "./assets/shape-2.svg"
import Shape3 from "./assets/shape-3.svg"
import Shape4 from "./assets/shape-4.svg"
import { cn } from "@/lib/utils"

type CtaVisionProps = {
  title?: string
  description?: string
  variant?: "default" | "center" | "double"
  showBorder?: boolean
  primaryButton?: {
    label: string
    href?: string
  }
}

export default function CtaVision({
  title = "Let’s Build Something Great Together",
  description = "Whether you need a website, marketing help, or a full digital upgrade—we’re ready when you are.",
  variant = "default",
  showBorder = true,
  primaryButton,
}: CtaVisionProps) {
  const isCentered = variant === "center"

  return (
    <section className="py-[60px] lg:py-[120px]">
        <div className="container">
            
            <div className="bg-blue text-blue-foreground rounded-[16px] py-[60px] lg:py-[140px] px-[20px] lg:px-[110px] relative z-[1] overflow-hidden">
            {/* Decorative Elements */}
            <Image
                src={Shape1}
                alt="ICON"
                className="w-[70px] absolute top-[17px] lg:top-[85px] start-[18px] lg:start-[50px] -z-[1]"
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
                {(primaryButton) && (
                <div className={cn(
                    "w-full md:w-auto",
                    isCentered ? "flex flex-row justify-center gap-4 flex-wrap" : "flex flex-col gap-4"
                    )}>
                    {primaryButton && (
                    <Button
                        variant="yellow"
                        className="h-[auto] aspect-square text-[16px] lg:text-heading-1 font-dm-sans text-navy font-semibold min-w-full w-[230px] whitespace-normal flex flex-col gap-[5px] justify-center items-center text-center pt-[40px]"
                        asChild
                    >
                        <a href={primaryButton.href || "#"}>
                        <span>{primaryButton.label}</span>
                        <GoArrowUpRight className="!h-[40px] !w-[40px]" />
                        </a>
                    </Button>
                    )}
                </div>
                )}
            </div>
            </div>
        </div>
    </section>
  )
}
