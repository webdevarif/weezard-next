import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageContent } from "./PageContent";
import { BaseLayout } from "@/app/layouts/BaseLayout";

interface BlogsPageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Generate metadata for the blogs page
 */
export async function generateMetadata({
  params,
}: BlogsPageProps): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata(
    {
      title: "Blog",
      description: "Read our latest articles, insights, and updates",
      path: "/blogs",
      keywords: ["blog", "articles", "insights", "news"],
    },
    locale
  );
}

/**
 * Blogs Page
 * 
 * Route: /[locale]/blogs
 */
export default function BlogsPage() {
  return (
    <BaseLayout footerVariant="secondary">
      <PageContent />
    </BaseLayout>
  );
}

