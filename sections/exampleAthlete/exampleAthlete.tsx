import Image from "next/image";
import styles from "./exampleAthlete.module.scss";
import profil from "@/assets/athlete.png";
import athlete1 from "@/assets/experts/expert3.jpg";
import athlete2 from "@/assets/nico.jpg";
import Card from "@/components/card/card";

export default function ExampleAthlete() {
  return (
    <section className={styles.exampleAthlete}>
      <div className={styles.exampleAthleteTitle}>Exemples d’athlètes</div>
      <div className={styles.profil1}>
        <Card image={athlete1} description="Photo de l'athlète" />
        <div className={styles.profilText}>
          <div className={styles.profilPresentation}>
            Mini-cards avec photo, nom, ceinture, académie. Liens vers leurs
            profils ou des réponses populaires.
          </div>
          <div className={styles.profilAnswer}>“réponses populaires.”</div>
        </div>
      </div>

      <div className={styles.profil2}>
        <Card image={athlete2} description="Photo de l'athlète" />
        <div className={styles.profilText}>
          <div className={styles.profilPresentation}>
            Liens vers leurs profils ou des réponses populaires.
          </div>
          <div className={styles.profilAnswer}>“réponses populaires.”</div>
        </div>
      </div>
    </section>
  );
}
