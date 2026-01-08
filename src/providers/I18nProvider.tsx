"use client";

import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";

interface I18nProviderProps {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}

/**
 * Global I18n Provider
 * Always included in root layout for internationalization
 */
export function I18nProvider({ children, messages, locale }: I18nProviderProps) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}

