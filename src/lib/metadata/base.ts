import { Metadata } from "next";
import type { PageMetadataOptions, SiteConfig } from "./types";

/**
 * Default site configuration
 * Override these values in your environment or pass custom config
 */
export const defaultSiteConfig: SiteConfig = {
  name: "Weezard",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://weezard.com",
  description: "A production-ready Next.js starter with i18n, themes, and animations",
  defaultImage: "/og-image.jpg",
  twitterHandle: "@weezard",
  locale: "en",
  alternateLocales: ["pt"],
};

/**
 * Generate page metadata with SEO best practices
 *
 * @example
 * // In layout.tsx or page.tsx (server component)
 * export const metadata = generateMetadata({
 *   title: "Home",
 *   description: "Welcome to our site",
 *   path: "/",
 * });
 */
export function generatePageMetadata(
  options: PageMetadataOptions,
  locale: string = "en",
  siteConfig: SiteConfig = defaultSiteConfig
): Metadata {
  const {
    title,
    description,
    path = "",
    image,
    type = "website",
    publishedTime,
    modifiedTime,
    author,
    keywords,
    noIndex = false,
  } = options;

  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}/${locale}${path}`;
  const ogImage = image || siteConfig.defaultImage;

  // Generate alternate language URLs
  const languages: Record<string, string> = {};
  [siteConfig.locale, ...siteConfig.alternateLocales].forEach((lang) => {
    languages[lang] = `${siteConfig.url}/${lang}${path}`;
  });

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(", "),
    authors: author ? [{ name: author }] : undefined,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: siteConfig.twitterHandle,
    },
  };
}

/**
 * Generate base metadata for the root layout
 * Use this in your root layout.tsx
 */
export function generateBaseMetadata(
  locale: string = "en",
  siteConfig: SiteConfig = defaultSiteConfig
): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
      type: "website",
      locale,
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.defaultImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      creator: siteConfig.twitterHandle,
    },
  };
}

