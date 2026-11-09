# Weezard Next.js Project Rules & Agent Instructions

These rules apply automatically to all agent interactions in this project workspace.

## 1. Git Workflow Safety
- **STRICT PROHIBITION**: NEVER run `git add .`, `git commit`, `git push`, `git merge`, or `git rebase`.
- Only `git status`, `git diff`, and `git branch` are permitted for checking repository status.
- All staging, committing, and pushing must be left to the user.

## 2. Component Architecture & Modularization
- Break down every section and feature into **small, atomic, single-responsibility component files**.
- Avoid large monolithic files. Each sub-part (e.g. Card, Header, Badge, Button Group) must reside in its own dedicated file.
- Follow the established directory layout:
  - Home sections: `src/app/[locale]/(frontend)/(home)/sections/<section-name>/`
  - Granular section subcomponents: `src/app/[locale]/(frontend)/(home)/sections/<section-name>/components/`
  - Section assets: `src/app/[locale]/(frontend)/(home)/sections/<section-name>/assets/`
  - Shared UI: `@/app/[locale]/components/ui/`
  - Icon library: `src/lib/icons/`
  - Navigation: Use `<Link>` from `@/lib/i18n/routing`

## 3. Code Cleanliness & Documentation
- Maintain a clean, readable, professional codebase.
- **Mandatory comments**: Every component file must include top-level documentation and meaningful comments on layouts, animations, and responsive logic.
- Follow existing Tailwind tokens (`text-navy`, `text-blue`, `text-secondary`, `font-dm-sans`, `font-manrope`, etc.).

## 4. Review & Approval Protocol
- **Always provide a detailed plan first**: Before making any significant code changes, present the step-by-step plan to the user.
- **Wait for explicit approval**: Do not write application code until the user has reviewed and approved the plan.

## 5. Figma Pixel-Perfect Clone Standards
- Match exact typography sizes, line heights, font weights (`dm-sans`, `manrope`).
- Match exact padding, gap, border-radius, shadows, and gradient fills.
- Support both desktop (1440px / 1280px / 1024px) and mobile (< 768px) responsive layouts.

