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
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.loading}>
              Chargement des témoignages d'experts...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.exampleAthlete}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <h2 className={styles.mainTitle}>Devenez un Expert</h2>
            <p className={styles.subtitle}>
              Arrêtez de donner des conseils gratuitement.
            </p>

            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <div className={styles.checkmark}>✓</div>
                <p>
                  Partagez votre expertise avec les pratiquants de{" "}
                  <span className={styles.highlight}>Jiu-Jitsu</span> du monde
                  entier et développez votre communauté.
                </p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.checkmark}>✓</div>
                <p>
                  Monétisez votre temps en proposant des consultations 1-1 et
                  des formations personnalisées à votre audience.
                </p>
              </div>
            </div>

            <a
              href="https://apps.apple.com/fr/app/bjj-insight/id6748660983"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Devenir un expert
            </a>
          </div>

          <div className={styles.rightContent}>
            {athletes.length > 0 ? (
              athletes.map((athlete, index) => (
                <div key={athlete.id} className={styles.testimonial}>
                  <div className={styles.testimonialContent}>
                    <p className={styles.quote}>
                      "
                      {athlete.bio ||
                        "Expert passionné de Jiu-Jitsu brésilien, je partage mon expertise et mes connaissances avec la communauté BJJI pour aider chaque pratiquant à progresser dans sa discipline."}
                      "
                    </p>
                    <div className={styles.author}>
                      <span className={styles.authorName}>
                        —{athlete.name}, Expert en Jiu-Jitsu Brésilien
                      </span>
                    </div>
                  </div>
                  <div className={styles.authorImage}>
                    {athlete.profileImageUrl &&
                    athlete.profileImageUrl.trim() !== "" ? (
                      <Image
                        src={athlete.profileImageUrl}
                        alt={athlete.name}
                        width={80}
                        height={80}
                        className={styles.profileImage}
                      />
                    ) : (
                      <div className={styles.profileImagePlaceholder}>
                        <span>{athlete.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.testimonial}>
                <div className={styles.testimonialContent}>
                  <p className={styles.quote}>
                    "BJJI m'a permis de connecter avec une communauté passionnée
                    de Jiu-Jitsu et de partager mon expertise avec des
                    pratiquants du monde entier."
                  </p>
                  <div className={styles.author}>
                    <span className={styles.authorName}>
                      —Expert BJJI, Instructeur certifié
                    </span>
                  </div>
                </div>
                <div className={styles.authorImage}>
                  <div className={styles.profileImagePlaceholder}>
                    <span>E</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
