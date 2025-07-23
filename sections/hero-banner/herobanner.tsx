import Image from "next/image";
import styles from "./herobanner.module.scss";
import GridHerobanner from "@/components/gridHerobanner/gridHerobanner";
import DownloadButton from "@/components/downloadButton/downloadButton";

export default function Herobanner() {
  return (
    <section className={styles.herobanner}>
      <div className={styles.herobannerDisplay}>
        <div className={styles.herobannerText}>
          <div className={styles.herobannerParagraph1}>
            Progresse avec ceux qui t'inspirent.
          </div>
          <div className={styles.herobannerParagraph2}>
            Ask. Learn. Connect.
          </div>
          <DownloadButton />
        </div>
      </div>
      <GridHerobanner />
    </section>
  );
}
