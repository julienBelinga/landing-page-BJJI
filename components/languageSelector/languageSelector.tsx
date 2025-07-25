"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "@/lib/useTranslation";
import {
  locales,
  localeNames,
  localeFlags,
  removeLocaleFromPathname,
  Locale,
} from "@/lib/i18n";
import styles from "./languageSelector.module.scss";

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const { t, locale } = useTranslation();

  const handleLanguageChange = (newLocale: string) => {
    const pathWithoutLocale = removeLocaleFromPathname(pathname);
    const newPath = `/${newLocale}${
      pathWithoutLocale === "/" ? "" : pathWithoutLocale
    }`;
    router.push(newPath);
  };

  return (
    <div className={styles.languageSelector}>
      <h4 className={styles.title}>{t("footer.language")}</h4>
      <div className={styles.languageOptions}>
        {locales.map((languageCode) => (
          <button
            key={languageCode}
            onClick={() => handleLanguageChange(languageCode)}
            className={`${styles.languageButton} ${
              locale === languageCode ? styles.active : ""
            }`}
          >
            <span className={styles.flag}>{localeFlags[languageCode]}</span>
            <span className={styles.name}>{localeNames[languageCode]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
