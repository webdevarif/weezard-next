import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageContent } from "./PageContent";
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
      title: "High-Performance Custom Web Development Services",
      description:
        "Custom, scalable, and fast web development solutions built from scratch. Robust full-stack architectures engineered for security, speed, and business growth.",
      path: "/services/web-development",
      keywords: [
        "web development",
        "custom web development",
        "full stack development",
        "scalable websites",
        "fast web solutions",
      ],
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
