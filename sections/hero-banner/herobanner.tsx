"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";
import styles from "./herobanner.module.scss";
import GridHerobanner from "@/components/gridHerobanner/gridHerobanner";
import DownloadButton from "@/components/downloadButton/downloadButton";

export default function Herobanner() {
  const { t } = useTranslation();

  return (
    <section className={styles.herobanner}>
      <div className={styles.herobannerDisplay}>
        <div className={styles.herobannerText}>
          <div className={styles.herobannerParagraph1}>
            {t("herobanner.title1")}
          </div>
          <div className={styles.herobannerParagraph2}>
            {t("herobanner.title2")}
          </div>
          <DownloadButton />
        </div>
      </div>
      <GridHerobanner />
    </section>
  );
}
