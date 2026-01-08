# BaseLayout Usage Guide

Complete guide to using the customizable BaseLayout component.

## Overview

`BaseLayout` is a flexible layout component that provides:
- Header component
- Footer component
- Smooth scrolling (Lenis)
- Animation support (GSAP + Framer Motion)
- Full customization via props

## Location

**File**: `src/app/layouts/BaseLayout.tsx`

## Provider Hierarchy

```
Root Layout ([locale]/layout.tsx)
  ├─ ThemeProvider (Global)
  └─ I18nProvider (Global)
      └─ Route Group Layouts
          └─ BaseLayout (Customizable)
              ├─ LenisProvider (Optional)
              ├─ AnimationProvider (Optional)
              ├─ Header (Optional)
              └─ Footer (Optional)
```

## Basic Usage

### Default (All Features Enabled)

```typescript
import { BaseLayout } from "@/app/layouts/BaseLayout";

export default function MyLayout({ children }) {
  return (
    <BaseLayout>
      {children}
    </BaseLayout>
  );
}
```

**Includes:**
- ✅ Header
- ✅ Footer
- ✅ Smooth scrolling
- ✅ Animations

## Customization Options

### Hide Footer

```typescript
<BaseLayout showFooter={false}>
  {children}
</BaseLayout>
```

### Hide Header

```typescript
<BaseLayout showHeader={false}>
  {children}
</BaseLayout>
```

### Disable Animations (Performance Mode)

```typescript
<BaseLayout enableAnimations={false}>
  {children}
</BaseLayout>
```

### Disable Smooth Scrolling

```typescript
<BaseLayout enableSmoothScroll={false}>
  {children}
</BaseLayout>
```

### Disable Both Animations and Smooth Scroll

```typescript
<BaseLayout 
  enableAnimations={false}
  enableSmoothScroll={false}
>
  {children}
</BaseLayout>
```

### Custom Header

```typescript
<BaseLayout customHeader={<MyCustomHeader />}>
  {children}
</BaseLayout>
```

### Custom Footer

```typescript
<BaseLayout customFooter={<MyCustomFooter />}>
  {children}
</BaseLayout>
```

### Custom Header and Footer

```typescript
<BaseLayout 
  customHeader={<MyCustomHeader />}
  customFooter={<MyCustomFooter />}
>
  {children}
</BaseLayout>
```

### Custom Lenis Options

```typescript
<BaseLayout 
  lenisOptions={{ duration: 1.5 }}
>
  {children}
</BaseLayout>
```

### Custom CSS Classes

```typescript
<BaseLayout className="bg-custom-background">
  {children}
</BaseLayout>
```

## Complete Props Reference

```typescript
interface BaseLayoutProps {
  children: React.ReactNode;
  
  // Header/Footer visibility
  showHeader?: boolean;        // Default: true
  showFooter?: boolean;         // Default: true
  
  // Feature toggles
  enableSmoothScroll?: boolean; // Default: true
  enableAnimations?: boolean;   // Default: true
  
  // Custom components
  customHeader?: React.ReactNode;
  customFooter?: React.ReactNode;
  
  // Configuration
  lenisOptions?: {
    duration?: number;          // Default: 1.2
  };
  
  // Styling
  className?: string;
}
```

## Usage Examples

### Landing Page (Full Features)

```typescript
"use client";
import { BaseLayout } from "@/app/layouts/BaseLayout";

export default function LandingLayout({ children }) {
  return (
    <BaseLayout>
      {children}
    </BaseLayout>
  );
}
```

### Dashboard (No Animations, No Footer)

```typescript
"use client";
import { BaseLayout } from "@/app/layouts/BaseLayout";

export default function DashboardLayout({ children }) {
  return (
    <BaseLayout 
      enableAnimations={false}
      enableSmoothScroll={false}
      showFooter={false}
    >
      {children}
    </BaseLayout>
  );
}
```

### Custom Header Page

```typescript
"use client";
import { BaseLayout } from "@/app/layouts/BaseLayout";
import { MyCustomHeader } from "@/components/MyCustomHeader";

export default function CustomLayout({ children }) {
  return (
    <BaseLayout customHeader={<MyCustomHeader />}>
      {children}
    </BaseLayout>
  );
}
```

### Minimal Layout (No Header/Footer)

```typescript
"use client";
import { BaseLayout } from "@/app/layouts/BaseLayout";

export default function MinimalLayout({ children }) {
  return (
    <BaseLayout 
      showHeader={false}
      showFooter={false}
    >
      {children}
    </BaseLayout>
  );
}
```

## Current Usage in Project

### Home Layout
**File**: `src/app/[locale]/(home)/layout.tsx`

```typescript
<BaseLayout>
  {children}
</BaseLayout>
```

### Frontend Layout
**File**: `src/app/[locale]/(frontend)/layout.tsx`

```typescript
<BaseLayout>
  {children}
</BaseLayout>
```

## Component Files

### Header
**File**: `src/app/[locale]/components/ui/Header.tsx`

Default header component. Can be customized or replaced via `customHeader` prop.

### Footer
**File**: `src/app/[locale]/components/ui/Footer.tsx`

Default footer component. Can be customized or replaced via `customFooter` prop.

## Best Practices

1. **Use default BaseLayout** for most pages (header + footer + animations)
2. **Disable animations** for data-heavy pages (dashboards, admin panels)
3. **Custom headers/footers** for special pages (landing pages, marketing pages)
4. **Performance mode** (`enableAnimations={false}`) for authenticated pages

## Quick Reference

| Feature | Prop | Default |
|---------|------|---------|
| Header | `showHeader` | `true` |
| Footer | `showFooter` | `true` |
| Smooth Scroll | `enableSmoothScroll` | `true` |
| Animations | `enableAnimations` | `true` |
| Custom Header | `customHeader` | `undefined` |
| Custom Footer | `customFooter` | `undefined` |

