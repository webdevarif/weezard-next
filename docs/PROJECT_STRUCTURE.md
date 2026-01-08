# Project Structure

Complete file and folder tree for the Weezard Next.js starter project.

## Directory Tree

```
Weezard/
├── docs/                              # Documentation files
│   ├── PROJECT_STRUCTURE.md          # This file
│   ├── FEATURES.md                   # Features documentation
│   ├── ANIMATIONS.md                 # Animation guide
│   └── QUICK_REFERENCE.md            # Quick reference guide
├── public/                            # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── [locale]/                 # Locale-based routing
│   │   │   ├── layout.tsx            # Root locale layout (global providers)
│   │   │   ├── not-found.tsx         # 404 page
│   │   │   ├── components/           # Locale-aware components
│   │   │   └── ui/
│   │   │       └── ThemeToggle.tsx   # Theme switcher (with translations)
│   │   │   ├── (marketing)/          # Marketing route group
│   │   │   │   ├── layout.tsx        # Marketing layout (Lenis + animations)
│   │   │   │   ├── page.tsx          # Home page (/)
│   │   │   │   ├── PageContent.tsx   # Home page UI
│   │   │   │   ├── services/
│   │   │   │   │   ├── page.tsx      # Services page (/services)
│   │   │   │   │   └── PageContent.tsx
│   │   │   │   ├── about-us/
│   │   │   │   │   ├── page.tsx      # About page (/about-us)
│   │   │   │   │   └── PageContent.tsx
│   │   │   │   ├── blogs/
│   │   │   │   │   ├── page.tsx      # Blog page (/blogs)
│   │   │   │   │   └── PageContent.tsx
│   │   │   │   └── contact-us/
│   │   │   │       ├── page.tsx      # Contact page (/contact-us)
│   │   │   │       └── PageContent.tsx
│   │   │   └── (dashboard)/          # Dashboard route group
│   │   │       ├── layout.tsx        # Dashboard layout (minimal)
│   │   │       └── dashboard/
│   │   │           ├── page.tsx      # Dashboard page (/dashboard)
│   │   │           └── PageContent.tsx
│   │   ├── layouts/                   # Reusable layout components
│   │   │   ├── BaseLayout.tsx         # Base layout (theme + i18n)
│   │   │   ├── MarketingLayout.tsx    # Marketing layout (+ Lenis + animations)
│   │   │   └── DashboardLayout.tsx    # Dashboard layout (minimal)
│   │   ├── globals.css                # Global styles + theme variables
│   │   └── providers.tsx              # (Deprecated - moved to providers/)
│   ├── components/                    # Global components (no translations)
│   │   └── ui/                        # Reusable UI components
│   ├── lib/                           # Utility libraries
│   │   ├── animations/                # Animation utilities
│   │   │   ├── gsap.ts                # GSAP helpers
│   │   │   ├── framer.ts              # Framer Motion variants
│   │   │   ├── lenis.tsx              # Lenis smooth scroll
│   │   │   └── index.ts               # Central exports
│   │   ├── i18n/                      # Internationalization
│   │   │   ├── config.ts              # Locale configuration
│   │   │   ├── request.ts             # next-intl request config
│   │   │   └── routing.ts             # Navigation helpers
│   │   ├── metadata/                  # SEO & metadata utilities
│   │   │   ├── base.ts                # Base metadata functions
│   │   │   ├── schema.tsx             # Schema.org JSON-LD
│   │   │   ├── types.ts               # TypeScript types
│   │   │   └── index.ts               # Central exports
│   │   └── utils.ts                   # General utilities (cn, etc.)
│   ├── providers/                      # Composable providers
│   │   ├── index.tsx                  # Provider exports
│   │   ├── ThemeProvider.tsx          # Global theme provider
│   │   ├── I18nProvider.tsx            # Global i18n provider
│   │   ├── LenisProvider.tsx          # Optional smooth scroll
│   │   └── AnimationProvider.tsx      # Optional animation setup
│   ├── messages/                      # Translation files
│   │   ├── en.json                    # English translations
│   │   └── pt.json                    # Portuguese translations
│   ├── types/                         # TypeScript definitions
│   │   └── global.d.ts                # Global types
│   └── middleware.ts                  # Locale detection middleware
├── .dockerignore
├── .env.example
├── .env.local
├── .env.production
├── .eslintrc.json
├── .gitignore
├── Dockerfile                         # Multi-stage Docker build
├── docker-compose.yml                 # Docker Compose config
├── next.config.ts                     # Next.js configuration
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts                 # Tailwind CSS config
└── tsconfig.json                      # TypeScript config
```

## Route Structure

### Marketing Routes (with animations)
- `/` - Home page
- `/services` - Services page
- `/about-us` - About us page
- `/blogs` - Blog listing page
- `/contact-us` - Contact page

### Dashboard Routes (minimal, no animations)
- `/dashboard` - Dashboard page

## Key Conventions

### Page Pattern
Every page follows this pattern:
```
[route]/
├── page.tsx          # Server component (metadata only)
└── PageContent.tsx   # Client component (UI logic)
```

### Component Location
- **Locale-aware components**: `src/app/[locale]/components/`
- **Global components**: `src/components/`
- **Layout components**: `src/app/layouts/`

### Provider Hierarchy
1. Root layout: `BaseLayout` (theme + i18n)
2. Route group layouts: Add optional providers (Lenis, animations)
3. Page components: Use providers via context

## Adding New Pages

### Marketing Page (with animations)
```bash
mkdir -p src/app/[locale]/(marketing)/your-page
```

Create:
- `page.tsx` - Metadata
- `PageContent.tsx` - UI with animations

### Dashboard Page (minimal)
```bash
mkdir -p src/app/[locale]/(dashboard)/your-page
```

Create:
- `page.tsx` - Metadata
- `PageContent.tsx` - UI without animations

### New Locale-Aware Component
```bash
mkdir -p src/app/[locale]/components/ui
```

Create component with `useTranslations()` hook.

