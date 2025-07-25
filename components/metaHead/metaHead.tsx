"use client";

import Head from "next/head";
import { useMetadata } from "@/lib/useMetadata";
import { SiteMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/metadata";

interface MetaHeadProps {
  pageKey: keyof SiteMetadata;
}

export default function MetaHead({ pageKey }: MetaHeadProps) {
  const { metadata, locale, isLoading } = useMetadata();

  if (isLoading || !metadata) {
    return null;
  }

  const pageData = metadata[pageKey];
  const baseUrl = siteConfig.url;
  const fullUrl = `${baseUrl}/${locale}${
    pageKey === "home" ? "" : `/${pageKey}`
  }`;

  return (
    <Head>
      <title>{pageData.title}</title>
      <meta name="description" content={pageData.description} />
      <meta name="keywords" content={pageData.keywords} />
      <meta name="author" content={siteConfig.author} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={pageData.ogTitle || pageData.title} />
      <meta
        property="og:description"
        content={pageData.ogDescription || pageData.description}
      />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${baseUrl}${siteConfig.ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content={`${siteConfig.name} - ${pageData.title}`}
      />
      <meta
        property="og:locale"
        content={
          locale === "en"
            ? "en_US"
            : locale === "pt"
            ? "pt_BR"
            : locale === "pl"
            ? "pl_PL"
            : "fr_FR"
        }
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="twitter:title"
        content={pageData.twitterTitle || pageData.title}
      />
      <meta
        name="twitter:description"
        content={pageData.twitterDescription || pageData.description}
      />
      <meta
        name="twitter:image"
        content={`${baseUrl}${siteConfig.twitterImage}`}
      />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Alternate languages */}
      <link
        rel="alternate"
        href={`${baseUrl}/fr${pageKey === "home" ? "" : `/${pageKey}`}`}
        hrefLang="fr"
      />
      <link
        rel="alternate"
        href={`${baseUrl}/en${pageKey === "home" ? "" : `/${pageKey}`}`}
        hrefLang="en"
      />
      <link
        rel="alternate"
        href={`${baseUrl}/pt${pageKey === "home" ? "" : `/${pageKey}`}`}
        hrefLang="pt"
      />
      <link
        rel="alternate"
        href={`${baseUrl}/pl${pageKey === "home" ? "" : `/${pageKey}`}`}
        hrefLang="pl"
      />
      <link
        rel="alternate"
        href={`${baseUrl}${pageKey === "home" ? "" : `/${pageKey}`}`}
        hrefLang="x-default"
      />

      {/* Favicon */}
      <link rel="icon" href={siteConfig.favicon} />

      {/* Additional meta tags */}
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      <meta name="theme-color" content="#8B5CF6" />
    </Head>
  );
}
