import Link from "next/link";
import LanguageSelector from "../languageSelector/languageSelector";
import styles from "./footer.module.scss";

interface FooterProps {
  translations: {
    title: string;
    description: string;
    download: string;
    ios: string;
    android: string;
    legal: string;
    privacyPolicy: string;
    termsOfService: string;
    refundPolicy: string;
    deleteData: string;
    support: string;
  };
}

export default function Footer({ translations }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footerTitle}>{translations.title}</div>
        <div className={styles.footerText}>{translations.description}</div>
      </div>

      <ul className={styles.footerDownloadList}>
        <li className={styles.footerListTitle}>{translations.download}</li>
        <li>
          <Link
            href="https://apps.apple.com/fr/app/bjj-insight/id6748660983"
            target="_blank"
            rel="noopener noreferrer"
          >
            {translations.ios}
          </Link>
        </li>
        <li>
          <Link href="./onboarding-beta">{translations.android}</Link>
        </li>
      </ul>

      <ul className={styles.footerTermsList}>
        <li className={styles.footerListTitle}>{translations.legal}</li>
        <li>
          <Link href="./privacy-policy">{translations.privacyPolicy}</Link>
        </li>
        <li>
          <Link href="./terms-of-service">{translations.termsOfService}</Link>
        </li>
        <li>
          <Link href="./refund-policy">{translations.refundPolicy}</Link>
        </li>
        <li>
          <Link href="./delete-data">{translations.deleteData}</Link>
        </li>
        <li>
          <Link href="./support">{translations.support}</Link>
        </li>
      </ul>

      <div className={styles.footerLanguageSection}>
        <LanguageSelector />
      </div>
    </footer>
  );
}
