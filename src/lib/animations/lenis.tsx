"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * =============================================================================
 * Lenis Smooth Scrolling
 * =============================================================================
 * Provides smooth scrolling functionality using Lenis library.
 *
 * USAGE EXAMPLE:
 * ```tsx
 * // Option 1: Use the hook in a client component
 * "use client";
 * import { useLenis } from "@/lib/animations/lenis";
 *
 * export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
 *   useLenis();
 *   return <>{children}</>;
 * }
 *
 * // Option 2: Use the LenisProvider component
 * import { LenisProvider } from "@/lib/animations/lenis";
 *
 * export function Layout({ children }: { children: React.ReactNode }) {
 *   return <LenisProvider>{children}</LenisProvider>;
 * }
 * ```
 */

export interface LenisOptions {
  /** Scroll duration multiplier (default: 1.2) */
  duration?: number;
  /** Easing function (default: power2.out equivalent) */
  easing?: (t: number) => number;
  /** Enable smooth scrolling (default: true) */
  smooth?: boolean;
  /** Scroll direction (default: vertical) */
  orientation?: "vertical" | "horizontal";
  /** Enable gesture direction lock (default: false) */
  gestureOrientation?: "vertical" | "horizontal" | "both";
  /** Wheel multiplier (default: 1) */
  wheelMultiplier?: number;
  /** Touch multiplier (default: 2) */
  touchMultiplier?: number;
  /** Infinite scroll (default: false) */
  infinite?: boolean;
}

// Default easing function (similar to power2.out)
const defaultEasing = (t: number): number => Math.min(1, 1.001 - Math.pow(2, -10 * t));

const defaultOptions: LenisOptions = {
  duration: 1.2,
  easing: defaultEasing,
  smooth: true,
  orientation: "vertical",
  gestureOrientation: "vertical",
  wheelMultiplier: 1,
  touchMultiplier: 2,
  infinite: false,
};

// Global Lenis instance for access outside React
let lenisInstance: Lenis | null = null;

/**
 * Get the current Lenis instance
 * Useful for programmatic scrolling outside of React components
 */
export function getLenis(): Lenis | null {
  return lenisInstance;
}

/**
 * Scroll to a specific target
 *
 * @example
 * // Scroll to element
 * scrollTo("#section-id");
 *
 * // Scroll to position
 * scrollTo(500);
 *
 * // Scroll with options
 * scrollTo("#contact", { offset: -100, duration: 2 });
 */
export function scrollTo(
  target: string | number | HTMLElement,
  options?: {
    offset?: number;
    duration?: number;
    immediate?: boolean;
  }
): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, options);
  } else {
    // Fallback to native scroll if Lenis is not initialized
    if (typeof target === "string") {
      const element = document.querySelector(target);
      element?.scrollIntoView({ behavior: "smooth" });
    } else if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  }
}

/**
 * Stop smooth scrolling temporarily
 */
export function stopLenis(): void {
  lenisInstance?.stop();
}

/**
 * Start smooth scrolling
 */
export function startLenis(): void {
  lenisInstance?.start();
}

/**
 * Custom hook for initializing Lenis smooth scrolling
 *
 * @example
 * "use client";
 * import { useLenis } from "@/lib/animations/lenis";
 *
 * export function App() {
 *   const lenis = useLenis({ duration: 1.5 });
 *   return <div>...</div>;
 * }
 */
export function useLenis(options: LenisOptions = {}): Lenis | null {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const mergedOptions = { ...defaultOptions, ...options };

    const lenis = new Lenis({
      duration: mergedOptions.duration,
      easing: mergedOptions.easing,
      orientation: mergedOptions.orientation,
      gestureOrientation: mergedOptions.gestureOrientation,
      wheelMultiplier: mergedOptions.wheelMultiplier,
      touchMultiplier: mergedOptions.touchMultiplier,
      infinite: mergedOptions.infinite,
    });

    lenisRef.current = lenis;
    lenisInstance = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      lenisInstance = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    options.duration,
    options.easing,
    options.orientation,
    options.gestureOrientation,
    options.wheelMultiplier,
    options.touchMultiplier,
    options.infinite,
  ]);

  return lenisRef.current;
}

/**
 * Lenis Provider Component
 * Wrap your app with this component to enable smooth scrolling
 *
 * @example
 * // In your layout or providers
 * import { LenisProvider } from "@/lib/animations/lenis";
 *
 * export function Providers({ children }) {
 *   return (
 *     <LenisProvider options={{ duration: 1.5 }}>
 *       {children}
 *     </LenisProvider>
 *   );
 * }
 */
export function LenisProvider({
  children,
  options,
}: {
  children: React.ReactNode;
  options?: LenisOptions;
}): React.ReactElement {
  useLenis(options);
  return <>{children}</>;
}

export { Lenis };

