"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/useTranslation";
import styles from "./support.module.scss";

export default function SupportPage() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t("support.title")}</h1>
          <p className={styles.description}>
            Besoin d'aide ? Posez vos questions ici ou écrivez-nous directement
            à{" "}
            <a href="mailto:julienbelinga.pro@gmail.com">
              julienbelinga.pro@gmail.com
            </a>
          </p>
        </div>
        <div className={styles.content}>
          <form
            action="https://formsubmit.co/julienbelinga.pro@gmail.com"
            method="POST"
            className={styles.form}
            onSubmit={() => setIsSubmitting(true)}
          >
            {/* Anti-spam honeypot */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value={t("support.hiddenSubject")}
            />
            <input
              type="hidden"
              name="_next"
              value="https://bjj-insight.vercel.app/support/success"
            />

            <input
              type="email"
              name="email"
              placeholder={t("support.emailPlaceholder")}
              required
              className={styles.input}
            />
            <textarea
              name="message"
              placeholder={t("support.messagePlaceholder")}
              required
              rows={4}
              className={styles.textarea}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting
                ? t("support.submitting")
                : t("support.submitButton")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
