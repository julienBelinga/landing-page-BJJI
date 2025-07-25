import Link from "next/link";
import styles from "./navbar.module.scss";

interface NavbarProps {
  translations: {
    title: string;
    download: string;
  };
}

export default function Navbar({ translations }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <Link href="./" className={styles.navbarLink}>
        <h4 className={styles.navbarTitle}>{translations.title}</h4>
      </Link>
      <Link
        href="https://apps.apple.com/fr/app/bjj-insight/id6748660983"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.navbarButton}
      >
        {translations.download}
      </Link>
    </nav>
  );
}
