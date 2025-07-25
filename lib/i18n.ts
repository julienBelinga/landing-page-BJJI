export const defaultLocale = "fr";
export const locales = ["fr", "en", "pt", "pl"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  pt: "Português",
  pl: "Polski",
};

export const localeFlags: Record<Locale, string> = {
  fr: "🇫🇷",
  en: "🇺🇸",
  pt: "🇧🇷",
  pl: "🇵🇱",
};

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split("/");
  const potentialLocale = segments[1];

  if (locales.includes(potentialLocale as Locale)) {
    return potentialLocale as Locale;
  }

  return defaultLocale;
}

export function removeLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/");
  const potentialLocale = segments[1];

  if (locales.includes(potentialLocale as Locale)) {
    return "/" + segments.slice(2).join("/");
  }

  return pathname;
}
