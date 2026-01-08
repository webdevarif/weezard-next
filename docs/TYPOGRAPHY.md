# Typography System

This document provides a comprehensive reference for the typography system implemented in this project. All typography styles are available as Tailwind CSS utility classes.

## Quick Reference

| Class | Font Size | Line Height | Use Case |
|-------|-----------|-------------|----------|
| `text-title-hero` | 85px | 94px | Main hero headlines |
| `text-title-hero-sm` | 72px | 85px | Smaller hero headlines |
| `text-title-page` | 48px | 120px | Page titles |
| `text-title-1` | 64px | 83px | Primary page titles |
| `text-title-1-sm` | 48px | 67px | Smaller page titles |
| `text-title-2` | 45px | 54px | Section titles |
| `text-title-2-alt` | 45px | 63px | Section titles (alt line height) |
| `text-heading-1` | 24px | 32px | Main headings |
| `text-heading-2` | 18px | 27px | Sub headings |
| `text-subtitle-1` | 32px | 45px | Subtitles |
| `text-subtitle-2` | 32px | 45px | Secondary subtitles |
| `text-body-base` | 16px | 27px | Body text |
| `text-body-base-alt` | 16px | 24px | Body text (tight) |
| `text-body-small` | 14px | 22px | Small body text |
| `text-body-small-alt` | 14px | 20px | Small body text (tight) |
| `text-label` | 16px | 20px | Labels |
| `text-label-small` | 14px | 20px | Small labels |

## Material Design 3 (M3) Typography

### Display Styles

| Class | Font Size | Line Height |
|-------|-----------|-------------|
| `text-m3-display-lg` | 57px | 64px |
| `text-m3-display-md` | 45px | 52px |
| `text-m3-display-sm` | 36px | 44px |

### Headline Styles

| Class | Font Size | Line Height |
|-------|-----------|-------------|
| `text-m3-headline-lg` | 32px | 40px |
| `text-m3-headline-md` | 28px | 36px |
| `text-m3-headline-sm` | 24px | 32px |

### Title Styles

| Class | Font Size | Line Height |
|-------|-----------|-------------|
| `text-m3-title-lg` | 22px | 28px |
| `text-m3-title-md` | 16px | 24px |
| `text-m3-title-sm` | 14px | 20px |

### Label Styles

| Class | Font Size | Line Height |
|-------|-----------|-------------|
| `text-m3-label-lg` | 14px | 20px |
| `text-m3-label-md` | 12px | 16px |
| `text-m3-label-sm` | 11px | 16px |

### Body Styles

| Class | Font Size | Line Height |
|-------|-----------|-------------|
| `text-m3-body-lg` | 16px | 24px |
| `text-m3-body-md` | 14px | 20px |
| `text-m3-body-sm` | 12px | 16px |

## Usage Examples

### Basic Usage

```tsx
// Hero section
<h1 className="text-title-hero font-bold">Welcome to Our Platform</h1>

// Page title
<h2 className="text-title-1 font-semibold">About Us</h2>

// Section heading
<h3 className="text-heading-1 font-medium">Our Services</h3>

// Body text
<p className="text-body-base">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>

// Small text
<span className="text-body-small text-muted-foreground">
  Last updated: January 2024
</span>

// Label
<label className="text-label font-medium">Email Address</label>
```

### With Font Weights

Combine typography classes with Tailwind's font weight utilities:

```tsx
// Regular (400)
<p className="text-body-base font-normal">Regular text</p>

// Medium (500)
<p className="text-body-base font-medium">Medium text</p>

// Semibold (600)
<p className="text-heading-1 font-semibold">Semibold heading</p>

// Bold (700)
<h1 className="text-title-hero font-bold">Bold title</h1>
```

### Responsive Typography

Use responsive prefixes to change typography at different breakpoints:

```tsx
<h1 className="text-title-1-sm md:text-title-1 lg:text-title-hero font-bold">
  Responsive Heading
</h1>

<p className="text-body-small md:text-body-base">
  Responsive body text that grows on larger screens.
</p>
```

### Material Design 3 Components

Use M3 typography for Material Design styled components:

```tsx
// Display for hero sections
<h1 className="text-m3-display-lg font-normal">Display Large</h1>

// Headlines for sections
<h2 className="text-m3-headline-md font-medium">Headline Medium</h2>

// Titles for cards
<h3 className="text-m3-title-lg font-semibold">Card Title</h3>

// Labels for form elements
<label className="text-m3-label-md font-medium">Form Label</label>

// Body for content
<p className="text-m3-body-lg">Body text content here.</p>
```

## Font Weight Reference

| Class | Weight | Best Used With |
|-------|--------|----------------|
| `font-normal` | 400 | Body text, paragraphs |
| `font-medium` | 500 | Labels, subtitles, emphasis |
| `font-semibold` | 600 | Headings, important text |
| `font-bold` | 700 | Titles, heroes, CTAs |

## Recommended Combinations

### Hero Sections
```tsx
<h1 className="text-title-hero font-bold">Main Headline</h1>
<p className="text-subtitle-1 font-normal text-muted-foreground">
  Supporting text that provides more context
</p>
```

### Card Components
```tsx
<div className="card">
  <h3 className="text-heading-1 font-semibold">Card Title</h3>
  <p className="text-body-base font-normal text-muted-foreground">
    Card description goes here with regular body text.
  </p>
  <span className="text-label-small font-medium">Read more</span>
</div>
```

### Form Elements
```tsx
<div className="form-group">
  <label className="text-label font-medium">Email</label>
  <input type="email" className="..." />
  <p className="text-body-small text-muted-foreground">
    We'll never share your email.
  </p>
</div>
```

### Navigation
```tsx
<nav>
  <a className="text-body-base font-medium hover:text-primary">Home</a>
  <a className="text-body-base font-medium hover:text-primary">About</a>
  <a className="text-body-base font-medium hover:text-primary">Contact</a>
</nav>
```

## CSS Variables Reference

All typography values are stored as CSS custom properties in `globals.css`. You can override these values for specific themes or contexts:

```css
:root {
  /* Title Hero */
  --font-title-hero: 5.3125rem;  /* 85px */
  --line-title-hero: 5.875rem;   /* 94px */
  
  /* Body Base */
  --font-body-base: 1rem;        /* 16px */
  --line-body-base: 1.6875rem;   /* 27px */
  
  /* ... and more */
}
```

## Best Practices

1. **Consistency**: Use the predefined typography classes instead of custom sizes
2. **Hierarchy**: Establish clear visual hierarchy with different text sizes
3. **Readability**: Use appropriate line heights for long-form content
4. **Responsiveness**: Adjust typography sizes for different screen sizes
5. **Weights**: Use font weights to create emphasis, not just size differences

