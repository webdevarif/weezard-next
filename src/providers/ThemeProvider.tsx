"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Global Theme Provider
 * Always included in root layout for theme switching
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}

