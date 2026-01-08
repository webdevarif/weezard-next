import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageContent } from "./PageContent";
import { BaseLayout } from "@/app/layouts/BaseLayout";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Generate metadata for the services page
 */
export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata(
    {
      title: "Services",
      description: "Explore our professional services and solutions",
      path: "/services",
      keywords: ["services", "solutions", "professional"],
    },
    locale
  );
}

/**
 * Services Page
 * 
 * Route: /[locale]/services
 */
export default function ServicesPage() {
  return (
    <BaseLayout footerVariant="secondary">
      <PageContent />
    </BaseLayout>
  );
}

