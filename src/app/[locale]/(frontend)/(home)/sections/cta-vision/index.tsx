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
  description = "Your business deserves the best, and Weezard is here to help you achieve it. Whether you need a brand-new website or need expert digital marketing strategies, we’ve got you covered through our all-in-one IT Services. Reach out today, and let’s start working together to make your goals a reality.",
  variant = "default",
  showBorder = true,
  primaryButton,
}: CtaVisionProps) {
  const isCentered = variant === "center"

  return (
    <section className="py-[60px] lg:py-[120px]">
        <div className="container">
            
            <div className="bg-blue text-blue-foreground rounded-[16px] py-[60px] lg:py-[85px] px-[20px] lg:px-[70px] relative z-[1] overflow-hidden">
            {/* Decorative Elements */}
            <Image
                src={Shape1}
                alt="ICON"
                className="w-[40px] lg:w-[70px] absolute bottom-[190px] lg:bottom-[unset] lg:top-[40px] start-[40px] lg:start-[unset] end-[unset] lg:end-[30%] -z-[1]"
            />
            <Image
                src={Shape2}
                alt="ICON"
                className="w-[55px] absolute bottom-[180px] lg:bottom-[unset] top-[unset] lg:top-[20px] end-[20px] lg:end-[35px] -z-[1]"
            />
            <Image
                src={Shape3}
                alt="ICON"
                className="w-[40px] lg:w-[57px] absolute bottom-[25px] lg:bottom-[85px] start-[40px] lg:start-[unset] end-[unset] lg:end-[27%] -z-[1]"
            />
            <Image
                src={Shape4}
                alt="ICON"
                className="w-[40px] lg:w-[61px] absolute bottom-[45px] lg:bottom-[44px] end-[30px] lg:end-[80px] -z-[1]"
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
                    isCentered ? "text-center max-w-[800px]" : "text-left max-w-[740px]",
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
                    "w-auto",
                    isCentered ? "flex flex-row justify-center gap-4 flex-wrap" : "flex flex-col gap-4"
                    )}>
                    {primaryButton && (
                    <Button
                        variant="yellow"
                        className="h-[auto] aspect-square text-[18px] lg:text-heading-1 font-dm-sans text-navy font-semibold w-[170px] lg:w-[230px] whitespace-normal flex flex-col gap-[5px] justify-center items-center text-center pt-[40px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTcwIiBoZWlnaHQ9IjE3MCIgdmlld0JveD0iMCAwIDE3MCAxNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9Ijg1IiBjeT0iODUiIHI9Ijg1IiBmaWxsPSIjRUFENTNGIi8+CjxjaXJjbGUgY3g9Ijg0Ljk5OTUiIGN5PSI4NS4wMDE1IiByPSI3NS40NzQxIiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcl82NDY4MV8xNDQ5KSIgc3Ryb2tlLXdpZHRoPSIxLjA5OTE0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjYuNTkgNi41OSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzY0NjgxXzE0NDkiIHgxPSIxNTMuODciIHkxPSIxNTMuODcyIiB4Mj0iLTE5LjExMDEiIHkyPSIzMy4xMzY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNDN0IwRkUiIHN0b3Atb3BhY2l0eT0iMC4xMyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMDVDRDgiIHN0b3Atb3BhY2l0eT0iMC40NiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=')] bg-cover bg-center bg-no-repeat"
                        asChild
                    >
                        <a href={primaryButton.href || "#"}>
                        <span>{primaryButton.label}</span>
                        <GoArrowUpRight className="h-[30px] w-[30px] lg:!h-[40px] lg:!w-[40px]" />
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
