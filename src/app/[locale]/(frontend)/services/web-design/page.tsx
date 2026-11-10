import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageContent } from "./PageContent";
import { BaseLayout } from "@/app/layouts/BaseLayout";

interface WebDesignServicePageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Generate metadata for the Web Design services page
 */
export async function generateMetadata({
  params,
}: WebDesignServicePageProps): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata(
    {
      title: "All-In-One Web Design Packages for Small Businesses",
      description:
        "Custom web design and redesign packages tailored to your brand, crafted to boost user engagement, conversion rates, and measurable business growth.",
      path: "/services/web-design",
      keywords: [
        "web design",
        "small business website",
        "ui/ux design",
        "website redesign",
        "responsive web design",
        "custom web design",
      ],
    },
    locale
  );
}

/**
 * Web Design Services Page
 * 
 * Route: /[locale]/services/web-design
 */
export default function WebDesignServicesPage() {
  return (
    <BaseLayout footerVariant="secondary">
      <PageContent />
    </BaseLayout>
  );
}
