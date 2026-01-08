import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/metadata";
import { PageContent } from "./PageContent";
import { BaseLayout } from "@/app/layouts/BaseLayout";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Generate metadata for the home page
 */
export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return generatePageMetadata(
    {
      title: t("title"),
      description: t("description"),
      path: "/",
      keywords: ["nextjs", "starter", "i18n", "themes", "animations"],
    },
    locale
  );
}

/**
 * Home Page
 * 
 * Main landing page with full marketing layout:
 * - Smooth scrolling (Lenis)
 * - Animations (GSAP, Framer Motion)
 * 
 * Route: /[locale]/
 */
export default function HomePage() {
  return (
    <BaseLayout footerVariant="default">
      <PageContent />
    </BaseLayout>
  );
}
