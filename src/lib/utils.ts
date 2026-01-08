import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// lib/base64.ts (server-only)
export async function imageToBase64(url: string) {
  const res = await fetch(url)
  const buffer = Buffer.from(await res.arrayBuffer())
  return `data:image/png;base64,${buffer.toString("base64")}`
}


