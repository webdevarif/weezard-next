import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageContent } from "./PageContent";
import { BaseLayout } from "@/app/layouts/BaseLayout";

interface ReviewPageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Generate metadata for the Review page
 */
export async function generateMetadata({
  params,
}: ReviewPageProps): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata(
    {
      title: "Review",
      description: "Learn more about our company and mission",
      path: "/about-us",
      keywords: ["about", "company", "mission", "team"],
    },
    locale
  );
}

/**
 * Review Page
 * 
 * Route: /[locale]/about-us
 */
export default function ReviewPage() {
  return (
    <BaseLayout footerVariant="secondary">
      <PageContent />
    </BaseLayout>
  );
}

