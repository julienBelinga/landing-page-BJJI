import Image from "next/image";
import styles from "./exampleAthlete.module.scss";
import profil from "@/assets/athlete.png";
import athlete from "@/assets/experts/expert3.jpg";

export default function ExampleAthlete() {
  return (
    <section className={styles.exampleAthlete}>
      <div className={styles.exampleAthleteTitle}>Exemples d’athlètes</div>
      <div className={styles.profil1}>
        <div>
          <Image
            className={styles.profilImage}
            src={athlete}
            alt="Photo de l'athlète"
            height={380}
            width={235}
          />
        </div>
        <div className={styles.profilText}>
          <div className={styles.profilPresentation}>
            Mini-cards avec photo, nom, ceinture, académie. Liens vers leurs
            profils ou des réponses populaires.
          </div>
          <div className={styles.profilAnswer}>“réponses populaires.”</div>
        </div>
      </div>

      <div className={styles.profil2}>
        <div className={styles.profilImage}>
          <Image src={profil} alt="Photo de l'athlète" />
        </div>
        <div className={styles.profilText}>
          <div className={styles.profilPresentation}>
            Liens vers leurs profils ou des réponses populaires.
          </div>
          <div className={styles.profilAnswer}>“réponses populaires.”</div>
        </div>
      </div>

      <div className={styles.exampleAthleteLink}>
        voir les autres athlètes →
      </div>
    </section>
  );
}
