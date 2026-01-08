import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageContent } from "./PageContent";
import { BaseLayout } from "@/app/layouts/BaseLayout";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Generate metadata for the about us page
 */
export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata(
    {
      title: "About Us",
      description: "Learn more about our company and mission",
      path: "/about-us",
      keywords: ["about", "company", "mission", "team"],
    },
    locale
  );
}

/**
 * About Us Page
 * 
 * Route: /[locale]/about-us
 */
export default function AboutPage() {
  return (
    <BaseLayout footerVariant="secondary">
      <PageContent />
    </BaseLayout>
  );
}

