"use client";

import { useTranslation } from "@/lib/useTranslation";
import styles from "./benefits.module.scss";
import PhoneFrame from "@/components/phoneFrame/phoneFrame";
import Screen from "@/assets/screenExample.png";

export default function Benefits() {
  const { t } = useTranslation();

  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsTitle}>{t("benefits.title")}</div>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitsText}>{t("benefits.description")}</div>
        <PhoneFrame screenImage={Screen} />
      </div>
    </section>
  );
}
