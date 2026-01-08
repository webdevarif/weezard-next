import { Metadata } from "next";

/**
 * Page metadata options for generating SEO-friendly metadata
 */
export interface PageMetadataOptions {
  /** Page title */
  title: string;
  /** Page description for SEO */
  description: string;
  /** Canonical URL path (without locale prefix) */
  path?: string;
  /** Open Graph image URL */
  image?: string;
  /** Page type for Open Graph */
  type?: "website" | "article";
  /** Article publish date (for article type) */
  publishedTime?: string;
  /** Article modified date (for article type) */
  modifiedTime?: string;
  /** Article author (for article type) */
  author?: string;
  /** Keywords for SEO */
  keywords?: string[];
  /** Disable indexing for this page */
  noIndex?: boolean;
}

/**
 * Site configuration for metadata generation
 */
export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  defaultImage: string;
  twitterHandle?: string;
  locale: string;
  alternateLocales: string[];
}

/**
 * Schema.org Organization data
 */
export interface OrganizationSchema {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
}

/**
 * Schema.org WebPage data
 */
export interface WebPageSchema {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

/**
 * Schema.org BreadcrumbList item
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Extended metadata type with schema support
 */
export interface ExtendedMetadata extends Metadata {
  schema?: Record<string, unknown>;
}

