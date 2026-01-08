# Quick Reference Guide

Quick reference for common tasks when adding new features.

## Adding a New Marketing Page

```bash
# 1. Create directory
mkdir -p src/app/[locale]/(marketing)/my-page

# 2. Create page.tsx (metadata)
# 3. Create PageContent.tsx (UI with animations)
```

**Template:**
```typescript
// page.tsx
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageContent } from "./PageContent";

export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "My Page",
    description: "Page description",
    path: "/my-page",
  }, locale);
}

export default function MyPage() {
  return <PageContent />;
}
```

```typescript
// PageContent.tsx
"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations/framer";

export function PageContent() {
  return (
    <main className="min-h-screen p-8">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.h1 variants={fadeInUp}>Title</motion.h1>
      </motion.div>
    </main>
  );
}
```

## Adding a New Dashboard Page

```bash
mkdir -p src/app/[locale]/(dashboard)/my-page
```

**Template:** Same as marketing page, but without animations.

## Adding Translations

**1. Add to `src/messages/en.json`:**
```json
{
  "myPage": {
    "title": "My Page Title",
    "description": "My page description"
  }
}
```

**2. Add to `src/messages/pt.json`:**
```json
{
  "myPage": {
    "title": "Título da Minha Página",
    "description": "Descrição da minha página"
  }
}
```

**3. Use in component:**
```typescript
const t = useTranslations("myPage");
<h1>{t("title")}</h1>
```

## Creating a Locale-Aware Component

```bash
mkdir -p src/app/[locale]/components/ui
```

```typescript
"use client";
import { useTranslations } from "next-intl";

export function MyComponent() {
  const t = useTranslations("namespace");
  return <div>{t("key")}</div>;
}
```

## Using GSAP Animations

```typescript
import { animateInView } from "@/lib/animations/gsap";
import { useRef, useEffect } from "react";

export function MyComponent() {
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      animateInView(ref.current);
    }
  }, []);
  
  return <section ref={ref}>Content</section>;
}
```

## Using Framer Motion

```typescript
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";

<motion.div variants={fadeInUp} initial="hidden" animate="visible">
  Content
</motion.div>
```

## Adding SEO Metadata

```typescript
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Page Title",
    description: "Page description",
    path: "/page-path",
    keywords: ["keyword1", "keyword2"],
  }, locale);
}
```

## File Locations Quick Reference

| What | Where |
|------|-------|
| Marketing pages | `src/app/[locale]/(marketing)/` |
| Dashboard pages | `src/app/[locale]/(dashboard)/` |
| Locale components | `src/app/[locale]/components/` |
| Global components | `src/components/` |
| Layouts | `src/app/layouts/` |
| Providers | `src/providers/` |
| Animations | `src/lib/animations/` |
| Metadata utils | `src/lib/metadata/` |
| Translations | `src/messages/` |

## Common Imports

```typescript
// Translations
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

// Animations
import { fadeInUp, staggerContainer } from "@/lib/animations/framer";
import { animateInView } from "@/lib/animations/gsap";

// Metadata
import { generatePageMetadata } from "@/lib/metadata";

// Theme
import { useTheme } from "next-themes";

// Utils
import { cn } from "@/lib/utils";
```

## Route Structure

```
/[locale]/                    → Home (marketing)
/[locale]/services            → Services (marketing)
/[locale]/about-us           → About (marketing)
/[locale]/blogs              → Blog (marketing)
/[locale]/contact-us         → Contact (marketing)
/[locale]/dashboard          → Dashboard (minimal)
```

## Provider Hierarchy

```
Root Layout
  └─ BaseLayout (theme + i18n)
      └─ Route Group Layout
          └─ Optional Providers (Lenis, animations)
              └─ Page Content
```

## Animation Availability

| Route Group | GSAP | Framer Motion | Lenis |
|-------------|------|----------------|-------|
| Marketing   | ✅   | ✅             | ✅    |
| Dashboard   | ❌   | ❌             | ❌    |

