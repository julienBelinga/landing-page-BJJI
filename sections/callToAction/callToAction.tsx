import Image from "next/image";
import styles from "./callToAction.module.scss";
import DownloadButton from "@/components/downloadButton/downloadButton";

export default function CallToAction() {
  return (
    <section className={styles.callToAction}>
      <div className={styles.callToActionTitle}>Télécharger</div>
      <div className={styles.callToActionContainer}>
        <div className={styles.callToActionDisplay}>
          <div className={styles.callToActionText}>
            Commencez à vous connecter avec des athlètes de haut niveau en
            quelques clics.
          </div>
          <DownloadButton />
        </div>
      </div>
    </section>
  );
}
