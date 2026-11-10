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
      title: "Professional Digital Solutions & Services for Growing Businesses",
      description:
        "Discover tailored web design, custom web development, and digital marketing services designed to scale your business and drive measurable growth.",
      path: "/services",
      keywords: [
        "digital services",
        "web design services",
        "web development agency",
        "digital marketing packages",
        "small business IT solutions",
      ],
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
