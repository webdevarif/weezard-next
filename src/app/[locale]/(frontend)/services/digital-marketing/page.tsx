import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageContent } from "./PageContent";
import { BaseLayout } from "@/app/layouts/BaseLayout";

interface DigitalMarketingServicePageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Generate metadata for the digital marketing service page
 */
export async function generateMetadata({
  params,
}: DigitalMarketingServicePageProps): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata(
    {
      title: "Results-Driven Digital Marketing Agency for Small Businesses",
      description:
        "Grow your online visibility, dominate local search, and convert visitors into loyal customers with tailored SEO, content, and digital marketing strategies.",
      path: "/services/digital-marketing",
      keywords: [
        "digital marketing",
        "seo services",
        "social media marketing",
        "small business marketing",
        "local seo",
        "lead generation",
      ],
    },
    locale
  );
}

/**
 * Digital Marketing Services Page
 * 
 * Route: /[locale]/services/digital-marketing
 */
export default function DigitalMarketingServicePage() {
  return (
    <BaseLayout footerVariant="secondary">
      <PageContent />
    </BaseLayout>
  );
}
