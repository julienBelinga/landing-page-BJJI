"use client";

import { useState } from "react";
import styles from "./onboarding-beta.module.scss";

export default function OnboardingBetaPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>🔓 Accès Bêta Fermée</h1>
          <p className={styles.subtitle}>
            BJJ Insight est actuellement en phase de bêta fermée.
            <br />
            <strong>
              Toutes les demandes sont acceptées automatiquement !
            </strong>
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Comment accéder à la bêta ?</h2>
            <p className={styles.description}>
              Il vous suffit de renseigner l'adresse e-mail associée à votre
              compte Google Play Store ci-dessous.
              <br />
              Vous recevrez automatiquement un lien pour télécharger
              l'application sur le Play Store.
            </p>
          </div>

          <form
            action="https://formsubmit.co/julienbelinga.pro@gmail.com"
            method="POST"
            className={styles.form}
            onSubmit={() => setIsSubmitting(true)}
          >
            {/* Configuration FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="Demande d'accès bêta fermée - BJJ Insight"
            />
            <input
              type="hidden"
              name="_next"
              value="https://bjj-insight.vercel.app/onboarding-beta/success"
            />

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Adresse e-mail Google Play Store *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="votre.email@example.com"
                required
                className={styles.input}
              />
              <p className={styles.inputHint}>
                Utilisez la même adresse e-mail que votre compte Google Play
                Store
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting
                ? "Envoi en cours..."
                : "Recevoir le lien Play Store"}
            </button>
          </form>

          <div className={styles.waitingInfo}>
            <h3 className={styles.waitingTitle}>Après votre demande</h3>
            <ul className={styles.waitingList}>
              <li>📧 Vous recevrez un e-mail avec le lien Play Store</li>
              <li>
                📱 Vous pourrez alors télécharger et tester l'application
                immédiatement
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
