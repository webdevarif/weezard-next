# Animations Guide

Complete guide to using animations in the Weezard project.

## Table of Contents

1. [Overview](#overview)
2. [GSAP Animations](#gsap-animations)
3. [Framer Motion](#framer-motion)
4. [Lenis Smooth Scroll](#lenis-smooth-scroll)
5. [Usage Examples](#usage-examples)
6. [Best Practices](#best-practices)

---

## Overview

The project includes three animation libraries:
- **GSAP** - Advanced animations with ScrollTrigger
- **Framer Motion** - React-friendly animations
- **Lenis** - Smooth scrolling

### When to Use Which

- **GSAP**: Complex scroll-triggered animations, timelines, advanced effects
- **Framer Motion**: Component animations, page transitions, simple interactions
- **Lenis**: Smooth scrolling (automatic in marketing pages)

---

## GSAP Animations

### Setup
**File**: `src/lib/animations/gsap.ts`

GSAP is automatically registered when imported. ScrollTrigger is registered on client-side.

### Available Functions

#### `animateTitle(element, options?)`
Fade-up animation for titles.

```typescript
import { animateTitle } from "@/lib/animations/gsap";
import { useRef, useEffect } from "react";

export function MyComponent() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (titleRef.current) {
      animateTitle(titleRef.current, { duration: 1.2 });
    }
  }, []);
  
  return <h1 ref={titleRef}>Title</h1>;
}
```

**Options:**
- `duration` (default: 1)
- `delay` (default: 0)
- `ease` (default: "power3.out")
- `onComplete` - Callback function

#### `animateImage(element, options?)`
Scale and fade animation for images.

```typescript
import { animateImage } from "@/lib/animations/gsap";

useEffect(() => {
  if (imageRef.current) {
    animateImage(imageRef.current);
  }
}, []);
```

#### `animateButton(element, options?)`
Pop animation for buttons.

```typescript
import { animateButton } from "@/lib/animations/gsap";

useEffect(() => {
  if (buttonRef.current) {
    animateButton(buttonRef.current, { ease: "back.out(1.7)" });
  }
}, []);
```

#### `animateInView(element, options?)`
Scroll-triggered animation when element enters viewport.

```typescript
import { animateInView } from "@/lib/animations/gsap";

useEffect(() => {
  if (sectionRef.current) {
    animateInView(sectionRef.current, {
      start: "top 80%",
      markers: false, // Set to true for debugging
    });
  }
}, []);
```

**Options:**
- `start` (default: "top 80%") - ScrollTrigger start position
- `markers` (default: false) - Show debug markers
- `duration`, `delay`, `ease` - Animation options

#### `animateProgressBar(element, options?)`
Animate progress bar to target percentage.

```typescript
import { animateProgressBar } from "@/lib/animations/gsap";

useEffect(() => {
  if (progressRef.current) {
    animateProgressBar(progressRef.current, {
      targetProgress: 75, // 0-100
    });
  }
}, []);
```

#### `animateStagger(container, childSelector, options?)`
Stagger animation for multiple children.

```typescript
import { animateStagger } from "@/lib/animations/gsap";

useEffect(() => {
  if (listRef.current) {
    animateStagger(listRef.current, "li", {
      stagger: 0.1, // Delay between each item
    });
  }
}, []);
```

### Direct GSAP Access

```typescript
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";

// Custom animation
gsap.to(element, {
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: element,
    start: "top center",
  },
});
```

### Cleanup

```typescript
import { killAllScrollTriggers, refreshScrollTrigger } from "@/lib/animations/gsap";

// Kill all ScrollTriggers (cleanup)
useEffect(() => {
  return () => {
    killAllScrollTriggers();
  };
}, []);

// Refresh after dynamic content changes
refreshScrollTrigger();
```

---

## Framer Motion

### Setup
**File**: `src/lib/animations/framer.ts`

Pre-configured variants and transitions ready to use.

### Available Variants

#### Fade Variants
```typescript
import { fadeIn, fadeInUp, fadeInDown, fadeInLeft, fadeInRight } from "@/lib/animations/framer";

<motion.div variants={fadeInUp} initial="hidden" animate="visible">
  Content
</motion.div>
```

#### Scale Variants
```typescript
import { scaleUp, pop } from "@/lib/animations/framer";

<motion.button variants={scaleUp} initial="hidden" animate="visible" whileHover="hover">
  Click me
</motion.button>
```

#### Container Variants (Stagger)
```typescript
import { staggerContainer, staggerContainerFast } from "@/lib/animations/framer";

<motion.ul variants={staggerContainer} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.li key={item.id} variants={fadeInUp}>
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

#### Page Transitions
```typescript
import { pageTransition } from "@/lib/animations/framer";
import { AnimatePresence } from "framer-motion";

<AnimatePresence mode="wait">
  <motion.div
    key={pathname}
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
</AnimatePresence>
```

#### Hover Variants
```typescript
import { hoverLift, hoverGlow } from "@/lib/animations/framer";

<motion.div variants={hoverLift} initial="initial" whileHover="hover">
  Card content
</motion.div>
```

### Custom Variants

```typescript
import { createFadeVariant, createStaggerContainer } from "@/lib/animations/framer";

// Custom fade variant
const customFade = createFadeVariant(60, 0.8); // yOffset, duration

// Custom stagger container
const customStagger = createStaggerContainer(0.15, 0.2); // staggerDelay, delayChildren
```

### Transitions

```typescript
import { defaultTransition, springTransition, bounceTransition } from "@/lib/animations/framer";

<motion.div
  animate={{ x: 100 }}
  transition={springTransition}
>
  Content
</motion.div>
```

---

## Lenis Smooth Scroll

### Setup
**File**: `src/lib/animations/lenis.tsx`

Automatically enabled in marketing pages via `MarketingLayout`.

### Manual Usage

**Hook:**
```typescript
import { useLenis } from "@/lib/animations/lenis";

export function MyComponent() {
  const lenis = useLenis({ duration: 1.5 });
  return <div>Content</div>;
}
```

**Provider:**
```typescript
import { LenisProvider } from "@/lib/animations/lenis";

<LenisProvider options={{ duration: 1.2 }}>
  {children}
</LenisProvider>
```

### Programmatic Scrolling

```typescript
import { scrollTo, getLenis } from "@/lib/animations/lenis";

// Scroll to element
scrollTo("#section-id");

// Scroll to position
scrollTo(500);

// Scroll with options
scrollTo("#contact", { offset: -100, duration: 2 });

// Get Lenis instance
const lenis = getLenis();
```

### Options

```typescript
interface LenisOptions {
  duration?: number;              // Scroll duration (default: 1.2)
  easing?: (t: number) => number; // Easing function
  smooth?: boolean;               // Enable smooth scroll (default: true)
  orientation?: "vertical" | "horizontal";
  wheelMultiplier?: number;       // Mouse wheel sensitivity
  touchMultiplier?: number;       // Touch sensitivity
  infinite?: boolean;             // Infinite scroll
}
```

---

## Usage Examples

### Complete Page Example

```typescript
"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations/framer";
import { useRef, useEffect } from "react";
import { animateInView } from "@/lib/animations/gsap";

export function PageContent() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      animateInView(sectionRef.current);
    }
  }, []);
  
  return (
    <main>
      {/* Framer Motion animation */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={fadeInUp}>Title</motion.h1>
        <motion.p variants={fadeInUp}>Description</motion.p>
      </motion.section>
      
      {/* GSAP scroll-triggered animation */}
      <section ref={sectionRef}>
        <h2>Scroll to see animation</h2>
      </section>
    </main>
  );
}
```

### Button with Animation

```typescript
"use client";

import { motion } from "framer-motion";
import { scaleUp } from "@/lib/animations/framer";

export function AnimatedButton() {
  return (
    <motion.button
      variants={scaleUp}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      className="px-6 py-3 bg-primary"
    >
      Click Me
    </motion.button>
  );
}
```

### Staggered List

```typescript
"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations/framer";

export function AnimatedList({ items }) {
  return (
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {items.map((item) => (
        <motion.li key={item.id} variants={fadeInUp}>
          {item.name}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

---

## Best Practices

### Performance

1. **Use CSS for simple animations**
   - Hover effects
   - Transitions
   - Simple fades

2. **Use GSAP for complex animations**
   - Scroll-triggered animations
   - Complex timelines
   - Performance-critical animations

3. **Use Framer Motion for React components**
   - Component animations
   - Page transitions
   - Interactive elements

### Cleanup

Always cleanup GSAP ScrollTriggers:

```typescript
useEffect(() => {
  // Setup animations
  return () => {
    killAllScrollTriggers();
  };
}, []);
```

### Accessibility

- Respect `prefers-reduced-motion`
- Provide fallbacks for animations
- Don't animate critical content

### When NOT to Use Animations

- Dashboard pages (performance)
- Data-heavy pages
- Forms (can be distracting)
- Critical user actions

---

## Quick Reference

### Import Paths
```typescript
// GSAP
import { animateTitle, animateInView, gsap } from "@/lib/animations/gsap";

// Framer Motion
import { fadeInUp, staggerContainer } from "@/lib/animations/framer";

// Lenis
import { useLenis, scrollTo } from "@/lib/animations/lenis";
```

### Common Patterns

**Fade in on mount:**
```typescript
<motion.div variants={fadeInUp} initial="hidden" animate="visible">
```

**Scroll-triggered:**
```typescript
useEffect(() => {
  if (ref.current) animateInView(ref.current);
}, []);
```

**Stagger children:**
```typescript
<motion.div variants={staggerContainer}>
  {items.map(item => <motion.div variants={fadeInUp}>)}
</motion.div>
```

