import Link from "next/link";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbarLink}>
        <h4 className={styles.navbarTitle}>BJJ Insight</h4>
      </Link>

      <ul className={styles.navbarList}>
        <Link href="Athletes" className={styles.navbarLinkList}>
          <li className={styles.navbarListElement}>Les athlètes</li>
        </Link>

        <Link href="/" className={styles.navbarLinkList}>
          <li className={styles.navbarListElement}>Ipsum</li>
        </Link>

        <Link href="/" className={styles.navbarLinkList}>
          <li className={styles.navbarListElement}>Dolor</li>
        </Link>

        <Link href="/" className={styles.navbarLinkList}>
          <li className={styles.navbarListElement}>FAQ</li>
        </Link>
      </ul>
      <button className={styles.navbarButton}>Télécharger</button>
    </nav>
  );
}
