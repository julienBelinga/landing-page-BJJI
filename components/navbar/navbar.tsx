import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h4 className={styles.navbarTitle}>BJJ Insight</h4>
      <ul className={styles.navbarList}>
        <li className={styles.navbarListElement}>Lorem</li>
        <li className={styles.navbarListElement}>Ipsum</li>
        <li className={styles.navbarListElement}>Dolor</li>
        <li className={styles.navbarListElement}>Sit</li>
        <li className={styles.navbarListElement}>Amet</li>
      </ul>
      <button className={styles.navbarButton}>Télécharger</button>
    </nav>
  );
}
