import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footerTitle}>BJJ Insight</div>
        <div className={styles.footerText}>
          Conseils personnalisés de vos athlètes préférés.
        </div>
      </div>

      <ul className={styles.footerDownloadList}>
        <li className={styles.footerListTitle}>Télécharger</li>
        <li>
          <Link
            href="https://apps.apple.com/fr/app/bjj-insight/id6748660983"
            target="_blank"
            rel="noopener noreferrer"
          >
            iOS
          </Link>
        </li>
        <li>
          <Link href="/onboarding-beta">Android</Link>
        </li>
      </ul>

      <ul className={styles.footerTermsList}>
        <li className={styles.footerListTitle}>Légal</li>
        <li>
          <Link href="/privacy-policy">Politique de confidentialité</Link>
        </li>
        <li>
          <Link href="/terms-of-service">Conditions d'utilisation</Link>
        </li>
        <li>
          <Link href="/refund-policy">Politique de remboursement</Link>
        </li>
        <li>
          <Link href="/delete-data">Supprimer mes données</Link>
        </li>
        <li>
          <Link href="/support">Support</Link>
        </li>
      </ul>
    </footer>
  );
}
