"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./exampleAthlete.module.scss";
import {
  fetchTrendingAthletesWithPhoto,
  Athlete,
} from "../../lib/services/athleteService";

export default function ExampleAthlete() {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAthletes = async () => {
      try {
        const athletesData = await fetchTrendingAthletesWithPhoto(2);
        setAthletes(athletesData);
        console.log("Athlètes chargés:", athletesData);
      } catch (error) {
        console.error("Erreur lors du chargement des athlètes:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAthletes();
  }, []);

  if (loading) {
    return (
      <section className={styles.exampleAthlete}>
        <div className={styles.exampleAthleteTitle}>Exemples d'athlètes</div>
        <div className={styles.loading}>
          Chargement des athlètes trending...
        </div>
      </section>
    );
  }

  if (athletes.length === 0) {
    return (
      <section className={styles.exampleAthlete}>
        <div className={styles.exampleAthleteTitle}>Exemples d'athlètes</div>
        <div className={styles.loading}>
          Aucun athlète trending trouvé avec photo de profil.
        </div>
      </section>
    );
  }

  return (
    <section className={styles.exampleAthlete}>
      <div className={styles.exampleAthleteTitle}>Exemples d'athlètes</div>

      {athletes.map((athlete, index) => (
        <div
          key={athlete.id}
          className={`${styles.profil} ${
            index === 1 ? styles.profilReverse : ""
          }`}
        >
          <div className={styles.athleteCard}>
            {athlete.profileImageUrl &&
            athlete.profileImageUrl.trim() !== "" ? (
              <Image
                src={athlete.profileImageUrl}
                alt={athlete.name}
                fill
                className={styles.athleteImage}
              />
            ) : (
              <div className={styles.athleteImagePlaceholder}>
                <span>{athlete.name.charAt(0)}</span>
              </div>
            )}
          </div>

          <div className={styles.profilText}>
            <h3 className={styles.athleteName}>{athlete.name}</h3>
            <div className={styles.athleteBio}>
              {athlete.bio ||
                "Athlète de haut niveau prêt à partager son expertise avec vous."}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
