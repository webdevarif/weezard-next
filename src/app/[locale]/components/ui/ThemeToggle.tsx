"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

/**
 * Theme Toggle Button
 * Switches between light and dark mode
 * Uses translations from the locale context
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("theme");
  const tCommon = useTranslations("common");

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="px-4 py-2 border rounded-lg bg-secondary text-secondary-foreground">
        {tCommon("loading")}
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 border rounded-lg bg-secondary text-secondary-foreground hover:opacity-80 transition-opacity"
    >
      {theme === "dark" ? `☀️ ${t("light")}` : `🌙 ${t("dark")}`}
    </button>
  );
}

