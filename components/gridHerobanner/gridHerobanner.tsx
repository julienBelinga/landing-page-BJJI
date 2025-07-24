"use client";

import { useEffect, useState } from "react";
import styles from "./gridHerobanner.module.scss";
import Image from "next/image";
import {
  fetchTopAthletesWithPhoto,
  Athlete,
} from "../../lib/services/athleteService";

export default function GridHerobanner() {
  const [experts, setExperts] = useState<Athlete[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExperts = async () => {
      try {
        const athletes = await fetchTopAthletesWithPhoto(6);
        setExperts(athletes);
        console.log("Athlètes chargés pour la grille:", athletes);
      } catch (error) {
        console.error("Erreur lors du chargement des experts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadExperts();
  }, []);

  if (loading) {
    return (
      <article className={styles.gridHerobanner}>
        <div className={styles.grid}>
          {/* Affichage de skeleton cards pendant le chargement */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className={`${styles.card} ${styles[`card${index + 1}`]} ${
                styles.skeleton
              }`}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div className={styles.skeletonImage}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    );
  }

  if (experts.length === 0) {
    return (
      <div className={styles.gridHerobanner}>
        <div className={styles.noAthletes}>
          Aucun athlète avec photo trouvé pour le moment.
        </div>
      </div>
    );
  }

  return (
    <article className={styles.gridHerobanner}>
      <div className={styles.grid}>
        {experts.map((expert, index) => (
          <div
            key={expert.id}
            className={`${styles.card} ${styles[`card${index + 1}`]}`}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                {expert.profileImageUrl &&
                expert.profileImageUrl.trim() !== "" ? (
                  <Image
                    src={expert.profileImageUrl}
                    alt={expert.name}
                    fill
                    className={styles.image}
                    priority={index === 0}
                  />
                ) : (
                  <div className={styles.placeholderImage}>
                    <span>{expert.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className={styles.cardBack}>
                <div className={styles.backContent}>
                  <div className={styles.name}>{expert.name}</div>
                  <div className={styles.title}>{expert.specialization}</div>
                  <div className={styles.description}>{expert.bio}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
