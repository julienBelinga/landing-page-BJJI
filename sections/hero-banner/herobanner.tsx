import Image from "next/image";
import styles from "./herobanner.module.scss";
import expert1 from "@/assets/experts/expert1.jpg";
import expert2 from "@/assets/experts/expert2.jpg";
import expert3 from "@/assets/experts/expert3.jpg";
import expert4 from "@/assets/experts/expert4.jpg";
import expert5 from "@/assets/experts/expert5.jpg";
import GridHerobanner from "@/components/gridHerobanner/gridHerobanner";
import DownloadButton from "@/components/downloadButton/downloadButton";

export default function Herobanner() {
  return (
    <section className={styles.herobanner}>
      <div className={styles.herobannerDisplay}>
        <div className={styles.herobannerText}>
          <div className={styles.herobannerParagraph1}>
            Pose tes questions aux champions du JJB.
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
