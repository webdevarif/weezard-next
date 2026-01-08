"use client";

import { LenisProvider, AnimationProvider } from "@/providers";
import Header from "@/app/[locale]/components/ui/Header";
import Footer from "@/app/[locale]/components/ui/Footer";

export interface BaseLayoutProps {
  children: React.ReactNode;
  /**
   * Show header component
   * @default true
   */
  showHeader?: boolean;
  /**
   * Show footer component
   * @default true
   */
  showFooter?: boolean;
  /**
   * Enable smooth scrolling (Lenis)
   * @default true
   */
  enableSmoothScroll?: boolean;
  /**
   * Header variant
   * @default "default"
   */
  headerVariant?: "default" | "secondary";

  /**
   * Footer variant
   * @default "default"
   */
  footerVariant?: "default" | "secondary";

  /**
   * Enable animations (GSAP + Framer Motion)
   * @default true
   */
  enableAnimations?: boolean;
  /**
   * Custom header component (overrides default Header)
   */
  customHeader?: React.ReactNode;
  /**
   * Custom footer component (overrides default Footer)
   */
  customFooter?: React.ReactNode;
  /**
   * Lenis smooth scroll options
   */
  lenisOptions?: {
    duration?: number;
  };
  /**
   * Additional CSS classes for main content wrapper
   */
  className?: string;
}

/**
 * BaseLayout Component
 * 
 * Customizable layout with animations, header, and footer.
 * Use this component to wrap your pages with consistent layout structure.
 * 
 * @example
 * // Default usage (header + footer + animations)
 * <BaseLayout>
 *   <YourPageContent />
 * </BaseLayout>
 * 
 * @example
 * // Without footer
 * <BaseLayout showFooter={false}>
 *   <YourPageContent />
 * </BaseLayout>
 * 
 * @example
 * // Custom header
 * <BaseLayout customHeader={<CustomHeader />}>
 *   <YourPageContent />
 * </BaseLayout>
 * 
 * @example
 * // No animations (for performance-critical pages)
 * <BaseLayout enableAnimations={false} enableSmoothScroll={false}>
 *   <YourPageContent />
 * </BaseLayout>
 */
export function BaseLayout({
  children,
  showHeader = true,
  showFooter = true,
  enableSmoothScroll = true,
  enableAnimations = true,
  customHeader,
  customFooter,
  lenisOptions = { duration: 1.2 },
  className = "",
  headerVariant = "default",
  footerVariant = "default",
}: BaseLayoutProps) {
  const content = (
    <div className={`flex flex-col min-h-screen ${className}`}>
      {showHeader && (customHeader || <Header variant={headerVariant} />)}
      <main className="flex-1">
        {children}
      </main>
      {showFooter && (customFooter || <Footer variant={footerVariant} />)}
    </div>
  );

  // Wrap with providers if enabled
  if (enableSmoothScroll && enableAnimations) {
    return (
      <LenisProvider options={lenisOptions}>
        <AnimationProvider enableScrollTrigger>
          {content}
        </AnimationProvider>
      </LenisProvider>
    );
  }

  if (enableSmoothScroll) {
    return <LenisProvider options={lenisOptions}>{content}</LenisProvider>;
  }

  if (enableAnimations) {
    return <AnimationProvider enableScrollTrigger>{content}</AnimationProvider>;
  }

  return content;
}
