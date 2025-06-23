import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footerTitle}>BJJ Insight</div>
        <div className={styles.footerText}>
          Sous-texte expliquant le concept en une phrase.
        </div>
      </div>

      <ul className={styles.footerDownloadList}>
        <li className={styles.footerListTitle}>Download</li>
        <li>Android</li>
        <li>iOS</li>
      </ul>

      <ul className={styles.footerTermsList}>
        <li className={styles.footerListTitle}>Other</li>
        <li>FAQ</li>
        <li>Contact</li>
        <li>Terms and Policy</li>
      </ul>
    </footer>
  );
}
