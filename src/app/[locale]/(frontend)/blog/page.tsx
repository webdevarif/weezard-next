import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BlogPageContent } from "./PageContent";
import { BaseLayout } from "@/app/layouts/BaseLayout";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Generate metadata for the blog page
 */
export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata(
    {
      title: "Blog & Insights",
      description: "Read our latest articles, insights, and technological updates",
      path: "/blog",
      keywords: ["blog", "articles", "insights", "technology", "weezard"],
    },
    locale
  );
}

/**
 * Blog Index Page
 * 
 * Route: /[locale]/blog
 */
export default function BlogPage() {
  return (
    <BaseLayout footerVariant="secondary">
      <BlogPageContent />
    </BaseLayout>
  );
}

