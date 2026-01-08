"use client"

import { useState } from "react"
import Image from "next/image"
import Banner from "./banner.jpg"
import { GoPlay } from "react-icons/go"
import { Dialog, DialogContent, DialogTitle } from "@/app/[locale]/components/ui/dialog";
import { cn } from "@/lib/utils"

export default function CaseVideoSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={Banner}
        alt="BigBank Fintech Case Study"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,40,86,0.4)_0%,#092856_90%)] z-10" />

      {/* Play Button */}
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] lg:w-[140px] min-w-[60px] lg:min-w-[140px] flex items-center justify-center text-white aspect-square",
          "bg-[rgba(48,92,216,0.1)] backdrop-blur-[5px] rounded-full p-0 hover:scale-105 transition-all"
        )}
      >
        <svg className="w-[15px] lg:w-[40px] h-auto" width="46" height="52" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.4914 21.4035C45.9251 23.4464 45.9251 28.5536 42.4914 30.5965L7.72571 51.281C4.29206 53.3239 -1.73309e-07 50.7703 0 46.6845L1.75475e-06 5.31555C1.92806e-06 1.22973 4.29207 -1.3239 7.72572 0.719007L42.4914 21.4035Z" fill="currentColor"/>
        </svg>

        <span className="absolute inset-0 rounded-full animate-ping bg-white blur-[2px] opacity-30 -z-[1]" />
      </button>

      {/* Lightbox Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[960px] w-full aspect-video bg-black p-0 overflow-hidden">
            <DialogTitle className="sr-only">Case Study Video</DialogTitle>
          <iframe
            src="https://player.vimeo.com/video/123456789?autoplay=1&muted=0"
            width="100%"
            height="100%"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-full"
          />
        </DialogContent>
      </Dialog>
    </section>
  )
}


