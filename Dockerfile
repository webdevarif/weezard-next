# =============================================================================
# Multi-stage Dockerfile for Next.js Application
# =============================================================================
# This Dockerfile provides optimized builds for both development and production.
#
# Usage:
#   Development: docker-compose up dev
#   Production:  docker-compose up prod
#
# Build stages:
#   1. base      - Common dependencies
#   2. deps      - Install all dependencies
#   3. builder   - Build the application
#   4. runner    - Production runtime (minimal image)
# =============================================================================

# -----------------------------------------------------------------------------
# Stage 1: Base image with Node.js
# -----------------------------------------------------------------------------
FROM node:20-alpine AS base

# Install dependencies needed for native modules
RUN apk add --no-cache libc6-compat

WORKDIR /app

# -----------------------------------------------------------------------------
# Stage 2: Install dependencies
# -----------------------------------------------------------------------------
FROM base AS deps

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# -----------------------------------------------------------------------------
# Stage 3: Build the application
# -----------------------------------------------------------------------------
FROM base AS builder

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build the application
RUN npm run build

# -----------------------------------------------------------------------------
# Stage 4: Production runtime
# -----------------------------------------------------------------------------
FROM base AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Set correct permissions for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy standalone build output
# The standalone output includes only necessary files for production
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set hostname
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

# Start the application
CMD ["node", "server.js"]

# -----------------------------------------------------------------------------
# Stage: Development (used with docker-compose)
# -----------------------------------------------------------------------------
FROM base AS dev

WORKDIR /app

# Copy package files and install all dependencies (including devDependencies)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source code (will be overridden by volume mount in docker-compose)
COPY . .

# Expose port
EXPOSE 3000

# Set development environment
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

# Start development server
CMD ["npm", "run", "dev"]

