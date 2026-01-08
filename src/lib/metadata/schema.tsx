import React from "react";
import type {
  OrganizationSchema,
  WebPageSchema,
  BreadcrumbItem,
} from "./types";
import { defaultSiteConfig } from "./base";

/**
 * Generate Schema.org Organization JSON-LD
 *
 * @example
 * // In layout.tsx
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{
 *     __html: JSON.stringify(generateOrganizationSchema({
 *       name: "My Company",
 *       url: "https://mysite.com",
 *       logo: "https://mysite.com/logo.png",
 *     })),
 *   }}
 * />
 */
export function generateOrganizationSchema(
  data: OrganizationSchema
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
    ...(data.logo && { logo: data.logo }),
    ...(data.description && { description: data.description }),
    ...(data.sameAs && { sameAs: data.sameAs }),
  };
}

/**
 * Generate Schema.org WebPage JSON-LD
 *
 * @example
 * // In page.tsx
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{
 *     __html: JSON.stringify(generateWebPageSchema({
 *       name: "About Us",
 *       description: "Learn about our company",
 *       url: "https://mysite.com/about",
 *     })),
 *   }}
 * />
 */
export function generateWebPageSchema(
  data: WebPageSchema
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.name,
    description: data.description,
    url: data.url,
    ...(data.datePublished && { datePublished: data.datePublished }),
    ...(data.dateModified && { dateModified: data.dateModified }),
    ...(data.author && {
      author: {
        "@type": "Person",
        name: data.author,
      },
    }),
  };
}

/**
 * Generate Schema.org BreadcrumbList JSON-LD
 *
 * @example
 * // In page.tsx
 * const breadcrumbs = [
 *   { name: "Home", url: "/" },
 *   { name: "Products", url: "/products" },
 *   { name: "Widget", url: "/products/widget" },
 * ];
 *
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{
 *     __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
 *   }}
 * />
 */
export function generateBreadcrumbSchema(
  items: BreadcrumbItem[],
  baseUrl: string = defaultSiteConfig.url
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

/**
 * Generate Schema.org WebSite JSON-LD with search action
 *
 * @example
 * // In root layout.tsx
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{
 *     __html: JSON.stringify(generateWebSiteSchema()),
 *   }}
 * />
 */
export function generateWebSiteSchema(
  searchPath?: string
): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: defaultSiteConfig.name,
    url: defaultSiteConfig.url,
    description: defaultSiteConfig.description,
  };

  if (searchPath) {
    schema.potentialAction = {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${defaultSiteConfig.url}${searchPath}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    };
  }

  return schema;
}

/**
 * Component to render JSON-LD schema in head
 * Use this in your layout or page components
 *
 * @example
 * <JsonLd schema={generateOrganizationSchema({ name: "My Company", url: "/" })} />
 */
export function JsonLdScript({
  schema,
}: {
  schema: Record<string, unknown>;
}): React.ReactElement {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

