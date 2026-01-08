# Provider Hierarchy & Layout System

Complete guide to understanding where providers and layouts are applied.

## Provider Hierarchy

```
Root Layout ([locale]/layout.tsx)
  └─ BaseLayout (src/app/layouts/BaseLayout.tsx)
      ├─ ThemeProvider (Global - always included)
      └─ I18nProvider (Global - always included)
          └─ Route Group Layouts
              ├─ (home)/layout.tsx
              │   ├─ LenisProvider (Optional)
              │   ├─ AnimationProvider (Optional)
              │   └─ Header Component
              └─ (frontend)/layout.tsx
                  ├─ LenisProvider (Optional)
                  ├─ AnimationProvider (Optional)
                  └─ Header Component
```

## File Locations

### Root Layout
**File**: `src/app/[locale]/layout.tsx`

**What it does:**
- HTML structure (`<html>`, `<head>`, `<body>`)
- SEO schemas (JSON-LD)
- Wraps everything with `BaseLayout`

**Providers included:**
- ThemeProvider (via BaseLayout)
- I18nProvider (via BaseLayout)

### BaseLayout Component
**File**: `src/app/layouts/BaseLayout.tsx`

**What it does:**
- Provides theme switching (light/dark mode)
- Provides internationalization (translations)

**Providers:**
- `ThemeProvider` - Theme management
- `I18nProvider` - i18n support

**Usage:**
```typescript
<BaseLayout messages={messages} locale={locale}>
  {children}
</BaseLayout>
```

### Route Group Layouts

#### Home Layout
**File**: `src/app/[locale]/(home)/layout.tsx`

**What it does:**
- Adds smooth scrolling (Lenis)
- Adds animation support (GSAP, Framer Motion)
- Includes Header component
- Wraps content in main layout structure

**Providers added:**
- `LenisProvider` - Smooth scrolling
- `AnimationProvider` - GSAP setup

**Applies to:**
- `/home` route

#### Frontend Layout
**File**: `src/app/[locale]/(frontend)/layout.tsx`

**What it does:**
- Same as Home Layout
- Adds smooth scrolling (Lenis)
- Adds animation support (GSAP, Framer Motion)
- Includes Header component

**Providers added:**
- `LenisProvider` - Smooth scrolling
- `AnimationProvider` - GSAP setup

**Applies to:**
- `/services`
- `/about-us`
- `/blogs`
- `/contact-us`

## Provider Files

All providers are located in: `src/providers/`

### Global Providers (Always Included)

#### ThemeProvider
**File**: `src/providers/ThemeProvider.tsx`

**What it does:**
- Manages light/dark theme
- Detects system preference
- Persists theme choice

**Usage:**
```typescript
import { ThemeProvider } from "@/providers";

<ThemeProvider>
  {children}
</ThemeProvider>
```

#### I18nProvider
**File**: `src/providers/I18nProvider.tsx`

**What it does:**
- Provides translation context
- Loads locale-specific messages

**Usage:**
```typescript
import { I18nProvider } from "@/providers";

<I18nProvider messages={messages} locale={locale}>
  {children}
</I18nProvider>
```

### Optional Providers

#### LenisProvider
**File**: `src/providers/LenisProvider.tsx`

**What it does:**
- Enables smooth scrolling
- Configurable scroll behavior

**Usage:**
```typescript
import { LenisProvider } from "@/providers";

<LenisProvider options={{ duration: 1.2 }}>
  {children}
</LenisProvider>
```

#### AnimationProvider
**File**: `src/providers/AnimationProvider.tsx`

**What it does:**
- Sets up GSAP context
- Registers ScrollTrigger (if enabled)

**Usage:**
```typescript
import { AnimationProvider } from "@/providers";

<AnimationProvider enableScrollTrigger>
  {children}
</AnimationProvider>
```

## Complete Flow Example

### Request to `/en/services`

1. **Root Layout** (`[locale]/layout.tsx`)
   - Validates locale
   - Gets messages
   - Wraps with BaseLayout

2. **BaseLayout** (`layouts/BaseLayout.tsx`)
   - Adds ThemeProvider
   - Adds I18nProvider

3. **Frontend Layout** (`(frontend)/layout.tsx`)
   - Adds LenisProvider
   - Adds AnimationProvider
   - Adds Header component

4. **Page** (`(frontend)/services/page.tsx`)
   - Generates metadata
   - Renders PageContent

5. **PageContent** (`(frontend)/services/PageContent.tsx`)
   - Uses translations
   - Uses animations
   - Renders UI

## Adding a New Route Group

If you need a new route group with different providers:

1. **Create layout file:**
```typescript
// src/app/[locale]/(mygroup)/layout.tsx
"use client";
import { LenisProvider } from "@/providers";

export default function MyGroupLayout({ children }) {
  return (
    <LenisProvider>
      {children}
    </LenisProvider>
  );
}
```

2. **Add pages:**
```
src/app/[locale]/(mygroup)/
  └─ my-page/
      ├── page.tsx
      └── PageContent.tsx
```

## Provider Order Matters

Providers are applied in this order:
1. ThemeProvider (outermost)
2. I18nProvider
3. LenisProvider
4. AnimationProvider (innermost)

This ensures:
- Theme context available to all components
- Translations available to all components
- Smooth scrolling wraps everything
- Animations can access all contexts

## Quick Reference

| Provider | Location | Always Included? | Used In |
|----------|----------|------------------|---------|
| ThemeProvider | `src/providers/ThemeProvider.tsx` | ✅ Yes | Root layout |
| I18nProvider | `src/providers/I18nProvider.tsx` | ✅ Yes | Root layout |
| LenisProvider | `src/providers/LenisProvider.tsx` | ❌ No | Route groups |
| AnimationProvider | `src/providers/AnimationProvider.tsx` | ❌ No | Route groups |

