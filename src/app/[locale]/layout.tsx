import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { Manrope, DM_Sans } from "next/font/google";
import { routing } from "@/lib/i18n/routing";
import { generateBaseMetadata } from "@/lib/metadata";
import { JsonLdScript, generateWebSiteSchema, generateOrganizationSchema } from "@/lib/metadata";
import { ThemeProvider, I18nProvider } from "@/providers";
import "@/app/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

/**
 * Generate metadata for the locale layout
 * This is the base metadata that applies to all pages under this locale
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateBaseMetadata(locale);
}

/**
 * Generate static params for locale routing
 */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/**
 * Root Locale Layout
 *
 * This is the minimal root layout that applies to ALL pages under [locale].
 * It contains only:
 * - HTML structure with locale
 * - Global providers (theme + i18n via BaseLayout)
 * - SEO schemas
 *
 * Route groups can add their own layouts on top of this.
 * All UI logic should be in PageContent components.
 */
export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as "en" | "pt")) {
    notFound();
  }

  // Get messages for this locale
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={`${manrope.variable} ${dmSans.variable}`}>
      <head>
        {/* Schema.org structured data */}
        <JsonLdScript schema={generateWebSiteSchema()} />
        <JsonLdScript
          schema={generateOrganizationSchema({
            name: "Weezard",
            url: process.env.NEXT_PUBLIC_SITE_URL || "https://weezard.com",
            description: "A production-ready Next.js starter",
          })}
        />
      </head>
      <body className={manrope.className}>
        <ThemeProvider>
          <I18nProvider messages={messages} locale={locale}>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

