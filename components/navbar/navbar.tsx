import Link from "next/link";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbarLink}>
        <h4 className={styles.navbarTitle}>BJJ Insight</h4>
      </Link>
      <Link
        href="https://apps.apple.com/fr/app/bjj-insight/id6748660983"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.navbarButton}
      >
        Télécharger
      </Link>
    </nav>
  );
}
