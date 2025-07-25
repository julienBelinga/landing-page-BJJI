"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Locale, getLocaleFromPathname, defaultLocale } from "./i18n";
import { SiteMetadata } from "./metadata";

const metadataCache: Record<string, SiteMetadata> = {};

export function useMetadata() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const [metadata, setMetadata] = useState<SiteMetadata | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMetadata = async () => {
      const cacheKey = `${locale}-metadata`;

      if (metadataCache[cacheKey]) {
        setMetadata(metadataCache[cacheKey]);
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`/locales/${locale}/common.json`);
        const data = await response.json();
        const siteMetadata = data.metadata as SiteMetadata;
        metadataCache[cacheKey] = siteMetadata;
        setMetadata(siteMetadata);
      } catch (error) {
        console.error(`Failed to load metadata for ${locale}:`, error);
        // Fallback to default locale
        if (locale !== defaultLocale) {
          try {
            const fallbackResponse = await fetch(
              `/locales/${defaultLocale}/common.json`
            );
            const fallbackData = await fallbackResponse.json();
            setMetadata(fallbackData.metadata);
          } catch (fallbackError) {
            console.error("Failed to load fallback metadata:", fallbackError);
          }
        }
      }
      setIsLoading(false);
    };

    loadMetadata();
  }, [locale]);

  const getPageKey = (pathname: string): keyof SiteMetadata => {
    const pathSegments = pathname.split("/").filter(Boolean);
    // Remove locale from path
    const pageSegments = pathSegments.slice(1);

    if (pageSegments.length === 0) return "home";

    const page = pageSegments[0];
    switch (page) {
      case "support":
        return "support";
      case "onboarding-beta":
        return "onboardingBeta";
      case "delete-data":
        return "deleteData";
      case "privacy-policy":
        return "privacyPolicy";
      case "terms-of-service":
        return "termsOfService";
      case "refund-policy":
        return "refundPolicy";
      default:
        return "home";
    }
  };

  return { metadata, locale, isLoading, getPageKey };
}
