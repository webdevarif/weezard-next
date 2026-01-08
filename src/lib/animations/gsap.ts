import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins (call this once in your app initialization)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * =============================================================================
 * GSAP Animation Utilities
 * =============================================================================
 * Reusable animation functions for common UI elements.
 * All functions are designed to work with refs and can be called in useEffect.
 *
 * USAGE EXAMPLE:
 * ```tsx
 * "use client";
 * import { useRef, useEffect } from "react";
 * import { animateTitle, animateInView } from "@/lib/animations/gsap";
 *
 * export function MyComponent() {
 *   const titleRef = useRef<HTMLHeadingElement>(null);
 *   const cardRef = useRef<HTMLDivElement>(null);
 *
 *   useEffect(() => {
 *     if (titleRef.current) {
 *       animateTitle(titleRef.current);
 *     }
 *     if (cardRef.current) {
 *       animateInView(cardRef.current);
 *     }
 *   }, []);
 *
 *   return (
 *     <>
 *       <h1 ref={titleRef}>Hello World</h1>
 *       <div ref={cardRef}>Card content</div>
 *     </>
 *   );
 * }
 * ```
 */

export interface AnimationOptions {
  duration?: number;
  delay?: number;
  ease?: string;
  onComplete?: () => void;
}

/**
 * Animate title elements with a fade-up effect
 *
 * @example
 * const titleRef = useRef<HTMLHeadingElement>(null);
 * useEffect(() => {
 *   if (titleRef.current) animateTitle(titleRef.current);
 * }, []);
 * <h1 ref={titleRef}>Welcome</h1>
 */
export function animateTitle(
  element: HTMLElement,
  options: AnimationOptions = {}
): gsap.core.Tween {
  const { duration = 1, delay = 0, ease = "power3.out", onComplete } = options;

  gsap.set(element, { opacity: 0, y: 50 });

  return gsap.to(element, {
    opacity: 1,
    y: 0,
    duration,
    delay,
    ease,
    onComplete,
  });
}

/**
 * Animate image elements with a scale and fade effect
 *
 * @example
 * const imageRef = useRef<HTMLImageElement>(null);
 * useEffect(() => {
 *   if (imageRef.current) animateImage(imageRef.current);
 * }, []);
 * <img ref={imageRef} src="/hero.jpg" alt="Hero" />
 */
export function animateImage(
  element: HTMLElement,
  options: AnimationOptions = {}
): gsap.core.Tween {
  const { duration = 1.2, delay = 0, ease = "power2.out", onComplete } = options;

  gsap.set(element, { opacity: 0, scale: 1.1 });

  return gsap.to(element, {
    opacity: 1,
    scale: 1,
    duration,
    delay,
    ease,
    onComplete,
  });
}

/**
 * Animate button elements with a pop effect
 *
 * @example
 * const buttonRef = useRef<HTMLButtonElement>(null);
 * useEffect(() => {
 *   if (buttonRef.current) animateButton(buttonRef.current);
 * }, []);
 * <button ref={buttonRef}>Click Me</button>
 */
export function animateButton(
  element: HTMLElement,
  options: AnimationOptions = {}
): gsap.core.Tween {
  const { duration = 0.6, delay = 0, ease = "back.out(1.7)", onComplete } = options;

  gsap.set(element, { opacity: 0, scale: 0.8 });

  return gsap.to(element, {
    opacity: 1,
    scale: 1,
    duration,
    delay,
    ease,
    onComplete,
  });
}

/**
 * Animate elements when they come into view (scroll-triggered)
 *
 * @example
 * const sectionRef = useRef<HTMLDivElement>(null);
 * useEffect(() => {
 *   if (sectionRef.current) animateInView(sectionRef.current);
 * }, []);
 * <section ref={sectionRef}>Content appears on scroll</section>
 */
export function animateInView(
  element: HTMLElement,
  options: AnimationOptions & {
    start?: string;
    markers?: boolean;
  } = {}
): gsap.core.Tween {
  const {
    duration = 1,
    delay = 0,
    ease = "power3.out",
    start = "top 80%",
    markers = false,
    onComplete,
  } = options;

  gsap.set(element, { opacity: 0, y: 60 });

  return gsap.to(element, {
    opacity: 1,
    y: 0,
    duration,
    delay,
    ease,
    onComplete,
    scrollTrigger: {
      trigger: element,
      start,
      markers,
      toggleActions: "play none none reverse",
    },
  });
}

/**
 * Animate progress bar with scroll-linked progress
 *
 * @example
 * const progressRef = useRef<HTMLDivElement>(null);
 * useEffect(() => {
 *   if (progressRef.current) {
 *     animateProgressBar(progressRef.current, { targetProgress: 75 });
 *   }
 * }, []);
 * <div className="h-2 bg-gray-200">
 *   <div ref={progressRef} className="h-full bg-blue-500" style={{ width: 0 }} />
 * </div>
 */
export function animateProgressBar(
  element: HTMLElement,
  options: AnimationOptions & {
    targetProgress?: number; // 0-100
  } = {}
): gsap.core.Tween {
  const {
    duration = 1.5,
    delay = 0,
    ease = "power2.out",
    targetProgress = 100,
    onComplete,
  } = options;

  return gsap.to(element, {
    width: `${targetProgress}%`,
    duration,
    delay,
    ease,
    onComplete,
  });
}

/**
 * Stagger animation for multiple child elements
 *
 * @example
 * const listRef = useRef<HTMLUListElement>(null);
 * useEffect(() => {
 *   if (listRef.current) {
 *     animateStagger(listRef.current, "li");
 *   }
 * }, []);
 * <ul ref={listRef}>
 *   <li>Item 1</li>
 *   <li>Item 2</li>
 *   <li>Item 3</li>
 * </ul>
 */
export function animateStagger(
  container: HTMLElement,
  childSelector: string,
  options: AnimationOptions & {
    stagger?: number;
  } = {}
): gsap.core.Tween {
  const {
    duration = 0.8,
    delay = 0,
    ease = "power3.out",
    stagger = 0.1,
    onComplete,
  } = options;

  const children = container.querySelectorAll(childSelector);

  gsap.set(children, { opacity: 0, y: 30 });

  return gsap.to(children, {
    opacity: 1,
    y: 0,
    duration,
    delay,
    ease,
    stagger,
    onComplete,
  });
}

/**
 * Kill all ScrollTrigger instances (useful for cleanup)
 */
export function killAllScrollTriggers(): void {
  ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) => trigger.kill());
}

/**
 * Refresh ScrollTrigger (call after dynamic content changes)
 */
export function refreshScrollTrigger(): void {
  ScrollTrigger.refresh();
}

// Re-export gsap and ScrollTrigger for direct use
export { gsap, ScrollTrigger };

