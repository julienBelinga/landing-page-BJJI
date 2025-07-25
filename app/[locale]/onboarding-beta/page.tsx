"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/useTranslation";
import MetaHead from "@/components/metaHead/metaHead";
import styles from "./onboarding-beta.module.scss";

export default function OnboardingBetaPage() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <MetaHead pageKey="onboardingBeta" />
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.title}>{t("onboardingBeta.title")}</h1>
            <p className={styles.subtitle}>
              {t("onboardingBeta.subtitle")}
              <br />
              <strong>{t("onboardingBeta.autoAccept")}</strong>
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.infoSection}>
              <h2 className={styles.sectionTitle}>
                {t("onboardingBeta.howToAccess")}
              </h2>
              <p className={styles.description}>
                {t("onboardingBeta.description")}
                <br />
                {t("onboardingBeta.descriptionLine2")}
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
                  {t("onboardingBeta.emailLabel")}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={t("onboardingBeta.emailPlaceholder")}
                  required
                  className={styles.input}
                />
                <p className={styles.inputHint}>
                  {t("onboardingBeta.inputHint")}
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting
                  ? t("onboardingBeta.submitting")
                  : t("onboardingBeta.submitButton")}
              </button>
            </form>

            <div className={styles.waitingInfo}>
              <h3 className={styles.waitingTitle}>
                {t("onboardingBeta.afterRequest")}
              </h3>
              <ul className={styles.waitingList}>
                <li>{t("onboardingBeta.emailStep")}</li>
                <li>{t("onboardingBeta.downloadStep")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
