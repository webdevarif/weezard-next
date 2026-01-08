"use client";

import { LenisProvider as LenisProviderComponent } from "@/lib/animations/lenis";
import type { LenisOptions } from "@/lib/animations/lenis";

interface LenisProviderProps {
  children: React.ReactNode;
  options?: LenisOptions;
}

/**
 * Optional Lenis Smooth Scroll Provider
 * Only include in layouts that need smooth scrolling (e.g., marketing pages)
 * Exclude from dashboard/admin pages for better performance
 */
export function LenisProvider({ children, options }: LenisProviderProps) {
  return (
    <LenisProviderComponent options={options || { duration: 1.2 }}>
      {children}
    </LenisProviderComponent>
  );
}

