"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Locale, getLocaleFromPathname, defaultLocale } from "./i18n";

type TranslationValue = string | Record<string, any>;
type Translations = Record<string, TranslationValue>;

const translationsCache: Record<string, Translations> = {};

export function useTranslation() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      const cacheKey = `${locale}-common`;

      if (translationsCache[cacheKey]) {
        setTranslations(translationsCache[cacheKey]);
        setIsLoading(false);
        return;
      }

      try {
        console.log(`Loading translations for locale: ${locale}`);
        const response = await fetch(`/locales/${locale}/common.json`);
        console.log(`Response status: ${response.status}`);
        const data = await response.json();
        console.log(`Loaded translations:`, data);
        translationsCache[cacheKey] = data;
        setTranslations(data);
      } catch (error) {
        console.error(`Failed to load translations for ${locale}:`, error);
        // Fallback to default locale
        if (locale !== defaultLocale) {
          try {
            const fallbackResponse = await fetch(
              `/locales/${defaultLocale}/common.json`
            );
            const fallbackData = await fallbackResponse.json();
            setTranslations(fallbackData);
          } catch (fallbackError) {
            console.error(
              "Failed to load fallback translations:",
              fallbackError
            );
          }
        }
      }
      setIsLoading(false);
    };

    loadTranslations();
  }, [locale]);

  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split(".");
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    if (typeof value !== "string") {
      return key;
    }

    // Handle parameter interpolation
    if (params) {
      return Object.entries(params).reduce((result, [param, replacement]) => {
        return result.replace(new RegExp(`{{${param}}}`, "g"), replacement);
      }, value);
    }

    return value;
  };

  return { t, locale, isLoading };
}
