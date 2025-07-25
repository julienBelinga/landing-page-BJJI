import { Metadata } from "next";
import { Locale } from "./i18n";

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

export interface SiteMetadata {
  home: PageMetadata;
  support: PageMetadata;
  onboardingBeta: PageMetadata;
  deleteData: PageMetadata;
  privacyPolicy: PageMetadata;
  termsOfService: PageMetadata;
  refundPolicy: PageMetadata;
}

export const siteConfig = {
  name: "BJJ Insight",
  url: "https://landing-page-bjji.vercel.app",
  ogImage: "/assets/og-image.jpg",
  twitterImage: "/assets/twitter-image.jpg",
  favicon: "/favicon.ico",
  author: "BJJ Insight Team",
  social: {
    twitter: "@BJJInsight",
    instagram: "@bjj_insight",
  },
};

export function getPageMetadata(
  pageKey: keyof SiteMetadata,
  locale: Locale,
  metadata: SiteMetadata
): Metadata {
  const pageData = metadata[pageKey];
  const baseUrl = siteConfig.url;
  const fullUrl = `${baseUrl}/${locale}${
    pageKey === "home" ? "" : `/${pageKey}`
  }`;

  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
      languages: {
        fr: `${baseUrl}/fr${pageKey === "home" ? "" : `/${pageKey}`}`,
        en: `${baseUrl}/en${pageKey === "home" ? "" : `/${pageKey}`}`,
        pt: `${baseUrl}/pt${pageKey === "home" ? "" : `/${pageKey}`}`,
        pl: `${baseUrl}/pl${pageKey === "home" ? "" : `/${pageKey}`}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: pageData.ogTitle || pageData.title,
      description: pageData.ogDescription || pageData.description,
      url: fullUrl,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${pageData.title}`,
        },
      ],
      locale:
        locale === "en"
          ? "en_US"
          : locale === "pt"
          ? "pt_BR"
          : locale === "pl"
          ? "pl_PL"
          : "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.twitterTitle || pageData.title,
      description: pageData.twitterDescription || pageData.description,
      images: [siteConfig.twitterImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code", // À remplacer par votre code
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
  };
}
