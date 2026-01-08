import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageContent } from "./PageContent";
import { BaseLayout } from "@/app/layouts/BaseLayout";

interface DigitalMarkertingServicePageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Generate metadata for the services page
 */
export async function generateMetadata({
  params,
}: DigitalMarkertingServicePageProps): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata(
    {
      title: "Web Development Services",
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
export default function DigitalMarkertingServicePage() {
  return (
      <BaseLayout footerVariant="secondary">
        <PageContent />
      </BaseLayout>
    );
}

