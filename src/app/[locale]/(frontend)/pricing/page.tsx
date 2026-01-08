import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageContent } from "./PageContent";
import { BaseLayout } from "@/app/layouts/BaseLayout";

interface PricingPageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Generate metadata for the Pricing page
 */
export async function generateMetadata({
  params,
}: PricingPageProps): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata(
    {
      title: "Pricing",
      description: "Learn more about our company and mission",
      path: "/about-us",
      keywords: ["about", "company", "mission", "team"],
    },
    locale
  );
}

/**
 * Pricing Page
 * 
 * Route: /[locale]/about-us
 */
export default function PricingPage() {
  return (
    <BaseLayout footerVariant="secondary">
      <PageContent />
    </BaseLayout>
  );
}

