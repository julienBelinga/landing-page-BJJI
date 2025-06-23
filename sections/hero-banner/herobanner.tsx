import Image from "next/image";
import styles from "./herobanner.module.scss";
import appstore from "@/assets/AppStore.png";
import googleplay from "@/assets/googeplay.png";
import expert1 from "@/assets/experts/expert1.jpg";
import expert2 from "@/assets/experts/expert2.jpg";
import expert3 from "@/assets/experts/expert3.jpg";
import expert4 from "@/assets/experts/expert4.jpg";
import expert5 from "@/assets/experts/expert5.jpg";
import GridHerobanner from "@/components/gridHerobanner/gridHerobanner";

const experts = [
  { name: "Luffy", title: "Ceinture noire", image: expert1 },
  { name: "Nami", title: "Coach No-Gi", image: expert2 },
  { name: "Zoro", title: "Multi-médaillé IBJJF", image: expert3 },
  { name: "Brook", title: "Légende ADCC", image: expert4 },
  { name: "Robin", title: "Stratégie & défense", image: expert5 },
];

export default function Herobanner() {
  return (
    <section className={styles.herobanner}>
      <div className={styles.herobannerDisplay}>
        <div className={styles.herobannerText}>
          <div className={styles.herobannerParagraph1}>
            Pose tes questions aux champions du JJB.
          </div>
          <div className={styles.herobannerParagraph2}>
            Sous-texte expliquant le concept en une phrase.
          </div>
          <div className={styles.downloads}>
            <button className={styles.button}>
              <Image src={appstore} alt="Logo AppStore" />
            </button>
            <button className={styles.button}>
              <Image src={googleplay} alt="Logo GooglePlay" />
            </button>
          </div>
        </div>
        <div className={styles.herobannerImages}>
          <GridHerobanner />
        </div>
      </div>
    </section>
  );
}
