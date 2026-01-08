/**
 * Internationalization Configuration
 * Defines supported locales and default locale for the application
 */

export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/**
 * Locale display names for UI
 */
export const localeNames: Record<Locale, string> = {
  en: "English",
  pt: "Português",
};

/**
 * Check if a string is a valid locale
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

