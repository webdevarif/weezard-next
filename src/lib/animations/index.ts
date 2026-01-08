// Animation utilities - centralized exports

// GSAP animations
export {
  gsap,
  ScrollTrigger,
  animateTitle,
  animateImage,
  animateButton,
  animateInView,
  animateProgressBar,
  animateStagger,
  killAllScrollTriggers,
  refreshScrollTrigger,
  type AnimationOptions,
} from "./gsap";

// Framer Motion variants
export {
  // Transitions
  defaultTransition,
  springTransition,
  bounceTransition,
  // Fade variants
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  // Scale variants
  scaleUp,
  pop,
  // Container variants
  staggerContainer,
  staggerContainerFast,
  // Page transitions
  pageTransition,
  // Hover variants
  hoverLift,
  hoverGlow,
  // Utility functions
  createStaggerContainer,
  createFadeVariant,
} from "./framer";

// Lenis smooth scrolling
export {
  Lenis,
  useLenis,
  LenisProvider,
  getLenis,
  scrollTo,
  stopLenis,
  startLenis,
  type LenisOptions,
} from "./lenis";

