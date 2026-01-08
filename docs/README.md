# Weezard Documentation

Welcome to the Weezard Next.js starter documentation. This directory contains comprehensive guides for all features and functionality.

## Documentation Files

- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Complete file and folder tree
- **[FEATURES.md](./FEATURES.md)** - Detailed feature documentation
- **[ANIMATIONS.md](./ANIMATIONS.md)** - Animation guide (GSAP, Framer Motion, Lenis)
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Quick reference for common tasks
- **[DOCKER_TROUBLESHOOTING.md](./DOCKER_TROUBLESHOOTING.md)** - Docker build and runtime issues

## Quick Start

### Adding a New Page

1. **Marketing Page (with animations):**
   ```bash
   mkdir -p src/app/[locale]/(marketing)/my-page
   ```
   See [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) for templates.

2. **Dashboard Page (minimal):**
   ```bash
   mkdir -p src/app/[locale]/(dashboard)/my-page
   ```

### Adding Translations

1. Add keys to `src/messages/en.json`
2. Add translations to `src/messages/pt.json`
3. Use `useTranslations()` in components

See [FEATURES.md](./FEATURES.md#internationalization-i18n) for details.

### Using Animations

- **GSAP**: See [ANIMATIONS.md](./ANIMATIONS.md#gsap-animations)
- **Framer Motion**: See [ANIMATIONS.md](./ANIMATIONS.md#framer-motion)
- **Lenis**: Automatically enabled in marketing pages

## Project Overview

Weezard is a production-ready Next.js 16 starter with:

- ✅ **Internationalization** - English & Portuguese support
- ✅ **Theme Management** - Light/Dark mode with system preference
- ✅ **SEO Optimized** - Centralized metadata utilities
- ✅ **Animations** - GSAP, Framer Motion, Lenis
- ✅ **Docker Support** - Development and production containers
- ✅ **Route Groups** - Selective layouts and providers
- ✅ **TypeScript** - Full type safety

## Architecture

### Layout System
- **Root Layout**: Global providers (theme + i18n)
- **Route Group Layouts**: Optional providers (Lenis, animations)
- **Reusable Layouts**: Composable layout components

### Component Organization
- **Locale-aware**: `src/app/[locale]/components/`
- **Global**: `src/components/`

### Provider System
- **Global**: Theme, i18n (always included)
- **Optional**: Lenis, animations (selective)

## Getting Help

- Check [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) for common tasks
- See [FEATURES.md](./FEATURES.md) for detailed feature docs
- Review [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for file locations
- Troubleshoot Docker issues: [DOCKER_TROUBLESHOOTING.md](./DOCKER_TROUBLESHOOTING.md)

## Docker Build Issues

If you encounter network timeout errors during Docker builds:

**Quick fix:**
```bash
# Pre-pull the base image
docker pull node:20-alpine

# Then rebuild
docker compose --profile dev up --build
```

**Or use the retry script:**
```bash
# Windows
scripts\docker-retry.bat

# Linux/Mac
./scripts/docker-retry.sh
```

See [DOCKER_TROUBLESHOOTING.md](./DOCKER_TROUBLESHOOTING.md) for more solutions.

## Contributing

When adding new features:

1. Follow the existing patterns
2. Update relevant documentation
3. Add translations for all text
4. Test with both locales (en, pt)

