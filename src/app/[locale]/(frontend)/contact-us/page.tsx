import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageContent } from "./PageContent";
import { BaseLayout } from "@/app/layouts/BaseLayout";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Generate metadata for the contact us page
 */
export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata(
    {
      title: "Contact Us",
      description: "Get in touch with us. We'd love to hear from you.",
      path: "/contact-us",
      keywords: ["contact", "support", "help", "get in touch"],
    },
    locale
  );
}

/**
 * Contact Us Page
 * 
 * Route: /[locale]/contact-us
 */
export default function ContactPage() {
  return (
    <BaseLayout footerVariant="secondary">
      <PageContent />
    </BaseLayout>
  );
}

