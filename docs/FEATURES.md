# Features Documentation

Complete guide to all features in the Weezard Next.js starter.

## Table of Contents

1. [Internationalization (i18n)](#internationalization-i18n)
2. [Theme Management](#theme-management)
3. [SEO & Metadata](#seo--metadata)
4. [Layout System](#layout-system)
5. [Provider System](#provider-system)
6. [Route Groups](#route-groups)
7. [Component Organization](#component-organization)
8. [Docker Support](#docker-support)

---

## Internationalization (i18n)

### Overview
Built with `next-intl` for server-side and client-side translations.

### Supported Locales
- English (`en`) - Default
- Portuguese (`pt`)

### Configuration
**File**: `src/lib/i18n/config.ts`

```typescript
export const locales = ["en", "pt"] as const;
export const defaultLocale: Locale = "en";
```

### Adding Translations

**1. Add to translation files:**
- `src/messages/en.json`
- `src/messages/pt.json`

**2. Use in components:**
```typescript
// Server component
import { getTranslations } from "next-intl/server";
const t = await getTranslations("namespace");

// Client component
import { useTranslations } from "next-intl";
const t = useTranslations("namespace");
```

### Translation Structure
```json
{
  "namespace": {
    "key": "value"
  }
}
```

### Usage Examples

**In page.tsx (server):**
```typescript
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return { title: t("title") };
}
```

**In PageContent.tsx (client):**
```typescript
"use client";
import { useTranslations } from "next-intl";

export function PageContent() {
  const t = useTranslations("home");
  return <h1>{t("title")}</h1>;
}
```

---

## Theme Management

### Overview
Uses `next-themes` for light/dark mode switching with system preference detection.

### Theme Provider
**File**: `src/providers/ThemeProvider.tsx`

Always included in root layout. Provides:
- Light mode
- Dark mode
- System preference detection

### Theme Toggle Component
**File**: `src/app/[locale]/components/ui/ThemeToggle.tsx`

Reusable component with translations:
```typescript
import { ThemeToggle } from "../components/ui/ThemeToggle";
```

### CSS Variables
**File**: `src/app/globals.css`

Theme colors defined as CSS variables:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

### Using Theme in Components
```typescript
"use client";
import { useTheme } from "next-themes";

export function MyComponent() {
  const { theme, setTheme } = useTheme();
  return <div>Current theme: {theme}</div>;
}
```

---

## SEO & Metadata

### Overview
Centralized metadata utilities for SEO-friendly pages.

### Base Metadata
**File**: `src/lib/metadata/base.ts`

**Functions:**
- `generateBaseMetadata()` - Root layout metadata
- `generatePageMetadata()` - Page-specific metadata

### Usage in Pages
```typescript
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return generatePageMetadata(
    {
      title: "Page Title",
      description: "Page description",
      path: "/page-path",
      keywords: ["keyword1", "keyword2"],
    },
    locale
  );
}
```

### Schema.org JSON-LD
**File**: `src/lib/metadata/schema.tsx`

**Available schemas:**
- `generateOrganizationSchema()` - Organization data
- `generateWebPageSchema()` - WebPage data
- `generateBreadcrumbSchema()` - Breadcrumb navigation
- `generateWebSiteSchema()` - Website with search action

**Usage:**
```typescript
import { JsonLdScript, generateOrganizationSchema } from "@/lib/metadata";

<JsonLdScript
  schema={generateOrganizationSchema({
    name: "Company Name",
    url: "https://example.com",
  })}
/>
```

---

## Layout System

### Overview
Three-tier layout system for flexible page organization.

### Layout Hierarchy

1. **Root Layout** (`src/app/[locale]/layout.tsx`)
   - HTML structure
   - Global providers (theme + i18n)
   - SEO schemas

2. **Route Group Layouts** (`src/app/[locale]/(group)/layout.tsx`)
   - Adds optional providers
   - Route-specific features

3. **Reusable Layout Components** (`src/app/layouts/`)
   - `BaseLayout` - Theme + i18n only
   - `MarketingLayout` - Base + Lenis + animations
   - `DashboardLayout` - Base only (minimal)

### Creating a New Layout

**1. Create layout component:**
```typescript
// src/app/layouts/MyLayout.tsx
"use client";
import { BaseLayout } from "./BaseLayout";
import { LenisProvider } from "@/providers";

export function MyLayout({ children, messages, locale }) {
  return (
    <BaseLayout messages={messages} locale={locale}>
      <LenisProvider>
        {children}
      </LenisProvider>
    </BaseLayout>
  );
}
```

**2. Use in route group:**
```typescript
// src/app/[locale]/(mygroup)/layout.tsx
import { MyLayout } from "@/app/layouts/MyLayout";
import { getMessages } from "next-intl/server";

export default async function MyGroupLayout({ children }) {
  const messages = await getMessages();
  return <MyLayout messages={messages} locale="en">{children}</MyLayout>;
}
```

---

## Provider System

### Overview
Composable provider system for selective feature inclusion.

### Global Providers (Always Included)
- **ThemeProvider** - Theme switching
- **I18nProvider** - Internationalization

### Optional Providers
- **LenisProvider** - Smooth scrolling
- **AnimationProvider** - GSAP setup

### Provider Files
- `src/providers/ThemeProvider.tsx`
- `src/providers/I18nProvider.tsx`
- `src/providers/LenisProvider.tsx`
- `src/providers/AnimationProvider.tsx`
- `src/providers/index.tsx` - Central exports

### Using Providers

**In layout:**
```typescript
import { LenisProvider } from "@/providers";

export default function MyLayout({ children }) {
  return (
    <LenisProvider options={{ duration: 1.2 }}>
      {children}
    </LenisProvider>
  );
}
```

---

## Route Groups

### Overview
Next.js route groups allow different layouts for different page types.

### Marketing Route Group
**Path**: `src/app/[locale]/(marketing)/`

**Features:**
- Lenis smooth scrolling
- Animation support (GSAP, Framer Motion)
- All public-facing pages

**Pages:**
- `/` - Home
- `/services` - Services
- `/about-us` - About
- `/blogs` - Blog
- `/contact-us` - Contact

### Dashboard Route Group
**Path**: `src/app/[locale]/(dashboard)/`

**Features:**
- Minimal layout
- No animations
- Performance-focused

**Pages:**
- `/dashboard` - Dashboard

### Creating a New Route Group

**1. Create directory:**
```bash
mkdir -p src/app/[locale]/(mygroup)
```

**2. Create layout:**
```typescript
// src/app/[locale]/(mygroup)/layout.tsx
export default function MyGroupLayout({ children }) {
  return <>{children}</>;
}
```

**3. Add pages:**
```bash
mkdir -p src/app/[locale]/(mygroup)/my-page
```

---

## Component Organization

### Locale-Aware Components
**Location**: `src/app/[locale]/components/`

**Use when:**
- Component needs translations
- Component is locale-specific

**Example:**
```typescript
"use client";
import { useTranslations } from "next-intl";

export function MyComponent() {
  const t = useTranslations("namespace");
  return <div>{t("text")}</div>;
}
```

### Global Components
**Location**: `src/components/`

**Use when:**
- Component doesn't need translations
- Component is reusable across locales

**Example:**
```typescript
"use client";

export function Button({ children }) {
  return <button>{children}</button>;
}
```

---

## Docker Support

### Overview
Multi-stage Docker builds for development and production.

### Development
```bash
docker compose --profile dev up --build
```

**Features:**
- Hot reload
- Source code mounted
- Fast iteration

### Production
```bash
docker compose --profile prod up --build
```

**Features:**
- Optimized build
- Standalone output
- Minimal image size

### Docker Files
- `Dockerfile` - Multi-stage build
- `docker-compose.yml` - Service configuration
- `.dockerignore` - Build exclusions

---

## Quick Reference

### Adding a New Marketing Page
1. Create directory: `src/app/[locale]/(marketing)/my-page`
2. Create `page.tsx` with metadata
3. Create `PageContent.tsx` with UI
4. Use animations from `@/lib/animations`

### Adding a New Dashboard Page
1. Create directory: `src/app/[locale]/(dashboard)/my-page`
2. Create `page.tsx` with metadata
3. Create `PageContent.tsx` with UI (no animations)

### Adding Translations
1. Add keys to `src/messages/en.json`
2. Add translations to `src/messages/pt.json`
3. Use `useTranslations()` in components

### Adding a New Provider
1. Create provider in `src/providers/`
2. Export from `src/providers/index.tsx`
3. Use in layout components

