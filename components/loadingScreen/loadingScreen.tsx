"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./loadingScreen.module.scss";
import logo from "@/assets/logo.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({
  onLoadingComplete,
}: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un délai minimum de 2 secondes pour l'effet visuel
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500); // Délai pour l'animation de sortie
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`${styles.loadingScreen} ${!isLoading ? styles.fadeOut : ""}`}
    >
      <div className={styles.logoContainer}>
        {/* Cercles de pulsation */}
        <div className={styles.pulseRing}></div>
        <div className={styles.pulseRing2}></div>
        <div className={styles.pulseRing3}></div>

        {/* Logo */}
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
        <h2>BJJ Insight</h2>
        <p>Chargement de la page...</p>
      </div>
    </div>
  );
}
