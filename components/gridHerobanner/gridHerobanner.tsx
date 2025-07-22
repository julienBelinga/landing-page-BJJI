"use client";

import { useEffect, useState } from "react";
import styles from "./gridHerobanner.module.scss";
import Image from "next/image";
import { fetchTopAthletes, Athlete } from "../../lib/services/athleteService";

export default function GridHerobanner() {
  const [experts, setExperts] = useState<Athlete[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExperts = async () => {
      try {
        const athletes = await fetchTopAthletes(6);
        setExperts(athletes);
      } catch (error) {
        console.error("Erreur lors du chargement des experts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadExperts();
  }, []);

  if (loading) {
    return <div className={styles.gridHerobanner}>Chargement...</div>;
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
                <Image
                  src={expert.profileImageUrl}
                  alt={expert.name}
                  fill
                  className={styles.image}
                  priority={index === 0}
                />
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
