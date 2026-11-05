import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BaseLayout } from "@/app/layouts/BaseLayout";
import { SingleBlogPageContent } from "./PageContent";

interface SingleBlogPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

/**
 * Format slug into human-readable title
 * e.g. "what-does-ppc-stand-for" -> "What Does PPC Stand For"
 */
function formatSlugToTitle(slug: string): string {
  if (!slug) return "What Does PPC Stand For In Marketing? How To Do PPC?";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Generate metadata for the single blog post
 */
export async function generateMetadata({
  params,
}: SingleBlogPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const title = formatSlugToTitle(slug);

  return generatePageMetadata(
    {
      title: `${title} | Weezard Blog`,
      description: `Read about ${title} on Weezard. Insights, industry analysis, and creative solutions.`,
      path: `/blog/${slug}`,
      keywords: ["blog", slug, "weezard", "insights", "ppc", "marketing"],
    },
    locale
  );
}

/**
 * Single Blog Post Page (Dynamic)
 * 
 * Route: /[locale]/blog/[slug]
 */
export default async function SingleBlogPage({ params }: SingleBlogPageProps) {
  const { slug } = await params;

  return (
    <BaseLayout footerVariant="secondary">
      <SingleBlogPageContent slug={slug} />
    </BaseLayout>
  );
}
