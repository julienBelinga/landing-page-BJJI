import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h4 className={styles.navbarTitle}>BJJ Insight</h4>
      <ul className={styles.navbarList}>
        <li className={styles.navbarListElement}>Les athlètes</li>
        <li className={styles.navbarListElement}>Ipsum</li>
        <li className={styles.navbarListElement}>Dolor</li>
        <li className={styles.navbarListElement}>sit</li>
        <li className={styles.navbarListElement}>FAQ</li>
      </ul>
      <button className={styles.navbarButton}>Télécharger</button>
    </nav>
  );
}
