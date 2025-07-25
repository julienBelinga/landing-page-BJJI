"use client";

import { useTranslation } from "@/lib/useTranslation";
import styles from "./functionalities.module.scss";
import Arguments from "@/components/arguments/arguments";
import icon from "@/assets/logo.png";

export default function Functionalities() {
  const { t } = useTranslation();

  return (
    <section className={styles.functionalities}>
      <div className={styles.functionalitiesTitle}>
        {t("functionalities.title")}
      </div>
      <div className={styles.functionalitiesContainer}>
        <Arguments
          className={styles.functionalitiesArguments}
          image={icon}
          description={t("functionalities.iconAlt")}
          text={t("functionalities.feature1")}
        />

        <Arguments
          className={styles.functionalitiesArguments}
          image={icon}
          description={t("functionalities.iconAlt")}
          text={t("functionalities.feature2")}
        />

        <Arguments
          className={styles.functionalitiesArguments}
          image={icon}
          description={t("functionalities.iconAlt")}
          text={t("functionalities.feature3")}
        />
      </div>
    </section>
  );
}
