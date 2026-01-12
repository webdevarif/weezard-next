import { Variants, Transition } from "framer-motion";

/**
 * =============================================================================
 * Framer Motion Animation Variants
 * =============================================================================
 * Reusable animation variants and transitions for Framer Motion components.
 *
 * USAGE EXAMPLE:
 * ```tsx
 * "use client";
 * import { motion } from "framer-motion";
 * import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations/framer";
 *
 * export function MyComponent() {
 *   return (
 *     <motion.div
 *       variants={staggerContainer}
 *       initial="hidden"
 *       animate="visible"
 *     >
 *       <motion.h1 variants={fadeInUp}>Title</motion.h1>
 *       <motion.p variants={fadeInUp}>Description</motion.p>
 *     </motion.div>
 *   );
 * }
 * ```
 */

// =============================================================================
// DEFAULT TRANSITIONS
// =============================================================================

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

export const bounceTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

// =============================================================================
// FADE VARIANTS
// =============================================================================

/**
 * Simple fade in animation
 *
 * @example
 * <motion.div variants={fadeIn} initial="hidden" animate="visible">
 *   Content fades in
 * </motion.div>
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
  exit: { opacity: 0 },
};

/**
 * Fade in with upward movement
 *
 * @example
 * <motion.div variants={fadeInUp} initial="hidden" animate="visible">
 *   Content slides up and fades in
 * </motion.div>
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
  exit: { opacity: 0, y: 20 },
};

/**
 * Fade in with downward movement
 */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
  exit: { opacity: 0, y: -20 },
};

/**
 * Fade in from the left
 */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
  exit: { opacity: 0, x: -20 },
};

/**
 * Fade in from the right
 */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
  exit: { opacity: 0, x: 20 },
};


// REVEALS
export const revealFromLeft: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)", // fully hidden from right
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0 0% 0 0)", // fully visible
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    clipPath: "inset(0 100% 0 0)",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
}


// =============================================================================
// SCALE VARIANTS
// =============================================================================

/**
 * Scale up animation (good for buttons, cards)
 *
 * @example
 * <motion.button variants={scaleUp} initial="hidden" animate="visible" whileHover="hover">
 *   Click me
 * </motion.button>
 */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
  exit: { opacity: 0, scale: 0.8 },
};

/**
 * Pop animation (bouncy scale)
 */
export const pop: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: bounceTransition,
  },
  exit: { opacity: 0, scale: 0.5 },
};

// =============================================================================
// CONTAINER VARIANTS (for stagger animations)
// =============================================================================

/**
 * Container variant for staggering children
 *
 * @example
 * <motion.ul variants={staggerContainer} initial="hidden" animate="visible">
 *   {items.map((item) => (
 *     <motion.li key={item.id} variants={fadeInUp}>{item.name}</motion.li>
 *   ))}
 * </motion.ul>
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Faster stagger container
 */
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
};

// =============================================================================
// ANIMATION MODE OPTIONS
// =============================================================================

/**
 * Animation mode options for different trigger behaviors
 */
export const animationModes = {
  // On page load - animates immediately
  onLoad: {
    variants: staggerContainer,
    initial: "hidden" as const,
    animate: "visible" as const,
    whileInView: undefined,
    viewport: undefined,
  },
  
  // On scroll reveal - animates when section comes into view
  onScroll: {
    variants: staggerContainer,
    initial: "hidden" as const,
    animate: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.3 },
  },
  
  // On scroll reveal with custom stagger
  onScrollSlow: {
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
          delayChildren: 0.2,
        },
      },
    },
    initial: "hidden" as const,
    animate: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.3 },
  },
};

/**
 * Child animation variants for different modes
 */
export const childAnimations = {
  onLoad: {
    fadeInLeft,
    fadeInUp,
    fadeInRight,
    fadeInDown,
  },
  
  onScroll: {
    fadeInLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
    },
  },
};

// =============================================================================
// PAGE TRANSITION VARIANTS
// =============================================================================

/**
 * Page transition variant (use with AnimatePresence)
 *
 * @example
 * <AnimatePresence mode="wait">
 *   <motion.div
 *     key={pathname}
 *     variants={pageTransition}
 *     initial="initial"
 *     animate="animate"
 *     exit="exit"
 *   >
 *     {children}
 *   </motion.div>
 * </AnimatePresence>
 */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// =============================================================================
// HOVER VARIANTS
// =============================================================================

/**
 * Lift effect on hover
 */
export const hoverLift: Variants = {
  initial: { y: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
  hover: {
    y: -4,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.2 },
  },
};

/**
 * Glow effect on hover
 */
export const hoverGlow: Variants = {
  initial: { boxShadow: "0 0 0 rgba(59, 130, 246, 0)" },
  hover: {
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
    transition: { duration: 0.3 },
  },
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Create custom stagger container with configurable delay
 */
export function createStaggerContainer(
  staggerDelay: number = 0.1,
  delayChildren: number = 0
): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };
}

/**
 * Create custom fade variant with configurable values
 */
export function createFadeVariant(
  yOffset: number = 40,
  duration: number = 0.6
): Variants {
  return {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: { opacity: 0, y: yOffset / 2 },
  };
}

