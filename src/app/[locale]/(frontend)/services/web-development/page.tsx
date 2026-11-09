import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageContent } from "../website-development/PageContent";
import { BaseLayout } from "@/app/layouts/BaseLayout";

interface WebDevelopmentServicePageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Generate metadata for the web development service page
 */
export async function generateMetadata({
  params,
}: WebDevelopmentServicePageProps): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata(
    {
      title: "Web Development Services",
      description: "Explore our professional web development services and solutions",
      path: "/services/web-development",
      keywords: ["services", "web development", "solutions", "professional"],
    },
    locale
  );
}

/**
 * Web Development Services Page
 * 
 * Route: /[locale]/services/web-development
 */
export default function WebDevelopmentServicesPage() {
  return (
    <BaseLayout footerVariant="secondary">
      <PageContent />
    </BaseLayout>
  );
}

