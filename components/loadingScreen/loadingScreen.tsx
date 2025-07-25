"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useTranslation } from "@/lib/useTranslation";
import styles from "./loadingScreen.module.scss";
import logo from "@/assets/logo.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({
  onLoadingComplete,
}: LoadingScreenProps) {
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={styles.loadingScreen}>
      <div className={styles.logoContainer}>
        <div className={styles.pulseRing}></div>
        <div className={styles.pulseRing2}></div>
        <div className={styles.pulseRing3}></div>
        <div className={styles.logo}>
          <Image
            src={logo}
            alt="BJJ Insight Logo"
            width={120}
            height={120}
            priority
          />
        </div>
      </div>

      <div className={styles.loadingText}>
        <h2>{t("common.appName")}</h2>
        <p>{t("common.loadingPage")}</p>
      </div>
    </div>
  );
}
