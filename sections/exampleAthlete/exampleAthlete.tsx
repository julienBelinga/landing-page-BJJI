"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";
import styles from "./exampleAthlete.module.scss";
import {
  fetchTrendingAthletesWithPhoto,
  Athlete,
} from "../../lib/services/athleteService";

export default function ExampleAthlete() {
  const { t } = useTranslation();
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
            <div className={styles.loading}>{t("exampleAthlete.loading")}</div>
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
            <h2 className={styles.mainTitle}>{t("exampleAthlete.title")}</h2>
            <p className={styles.subtitle}>{t("exampleAthlete.subtitle")}</p>

            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <div className={styles.checkmark}>✓</div>
                <p>
                  {t("exampleAthlete.benefit1Prefix")}{" "}
                  <span className={styles.highlight}>
                    {t("exampleAthlete.benefit1Highlight")}
                  </span>{" "}
                  {t("exampleAthlete.benefit1Suffix")}
                </p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.checkmark}>✓</div>
                <p>{t("exampleAthlete.benefit2")}</p>
              </div>
            </div>

            <a
              href="https://apps.apple.com/fr/app/bjj-insight/id6748660983"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              {t("exampleAthlete.ctaButton")}
            </a>
          </div>

          <div className={styles.rightContent}>
            {athletes.length > 0 ? (
              athletes.map((athlete, index) => (
                <div key={athlete.id} className={styles.testimonial}>
                  <div className={styles.testimonialContent}>
                    <p className={styles.quote}>
                      "{athlete.bio || t("exampleAthlete.defaultQuote")}"
                    </p>
                    <div className={styles.author}>
                      <span className={styles.authorName}>
                        —{athlete.name}, {t("exampleAthlete.expertTitle")}
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
                    "{t("exampleAthlete.fallbackQuote")}"
                  </p>
                  <div className={styles.author}>
                    <span className={styles.authorName}>
                      —{t("exampleAthlete.fallbackAuthor")}
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
