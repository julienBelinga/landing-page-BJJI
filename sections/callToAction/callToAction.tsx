"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";
import styles from "./callToAction.module.scss";
import DownloadButton from "@/components/downloadButton/downloadButton";

export default function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className={styles.callToAction}>
      <div className={styles.callToActionTitle}>{t("callToAction.title")}</div>
      <div className={styles.callToActionContainer}>
        <div className={styles.callToActionDisplay}>
          <div className={styles.callToActionText}>
            {t("callToAction.description")}
          </div>
          <DownloadButton />
        </div>
      </div>
    </section>
  );
}
