import { Metadata } from "next";
import { Locale } from "./i18n";
import { getPageMetadata, SiteMetadata } from "./metadata";
import fs from "fs";
import path from "path";

// Fonction pour charger les métadonnées depuis les fichiers JSON
async function loadMetadataForLocale(locale: Locale): Promise<SiteMetadata> {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "locales",
      locale,
      "common.json"
    );
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);
    return data.metadata as SiteMetadata;
  } catch (error) {
    console.error(`Failed to load metadata for ${locale}:`, error);
    // Fallback to French
    const fallbackPath = path.join(
      process.cwd(),
      "public",
      "locales",
      "fr",
      "common.json"
    );
    const fallbackContent = fs.readFileSync(fallbackPath, "utf8");
    const fallbackData = JSON.parse(fallbackContent);
    return fallbackData.metadata as SiteMetadata;
  }
}

export async function generatePageMetadata(
  locale: Locale,
  pageKey: keyof SiteMetadata
): Promise<Metadata> {
  const metadata = await loadMetadataForLocale(locale);
  return getPageMetadata(pageKey, locale, metadata);
}

// Helper pour déterminer la clé de page depuis les params
export function getPageKeyFromParams(params: any): keyof SiteMetadata {
  // Pour la page d'accueil
  if (!params || Object.keys(params).length === 1) {
    return "home";
  }

  // Pour les autres pages, on peut ajouter la logique ici
  return "home";
}

// Métadonnées par défaut pour le layout principal
export async function generateDefaultMetadata(
  locale: Locale
): Promise<Metadata> {
  return generatePageMetadata(locale, "home");
}
