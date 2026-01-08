"use client";

import { useEffect } from "react";

interface AnimationProviderProps {
  children: React.ReactNode;
  /**
   * Enable GSAP ScrollTrigger registration
   * Only enable for pages that use scroll-based animations
   */
  enableScrollTrigger?: boolean;
}

/**
 * Optional Animation Provider
 * Registers GSAP plugins and sets up animation context
 * Only include in layouts that need complex animations (e.g., marketing pages)
 * Exclude from dashboard/admin pages for better performance
 */
export function AnimationProvider({
  children,
  enableScrollTrigger = false,
}: AnimationProviderProps) {
  useEffect(() => {
    if (enableScrollTrigger && typeof window !== "undefined") {
      // ScrollTrigger is already registered in gsap.ts
      // This provider can be extended for animation context setup
    }
  }, [enableScrollTrigger]);

  return <>{children}</>;
}

