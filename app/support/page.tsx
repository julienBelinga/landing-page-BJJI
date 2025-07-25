"use client";

import { useState } from "react";
import styles from "./support.module.scss";

export default function SupportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Support utilisateur</h1>
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
              value="Nouveau message de support"
            />
            <input
              type="hidden"
              name="_next"
              value="https://bjj-insight.vercel.app/support/success"
            />

            <input
              type="email"
              name="email"
              placeholder="Votre adresse e-mail"
              required
              className={styles.input}
            />
            <textarea
              name="message"
              placeholder="Décrivez votre problème ou votre question"
              required
              rows={4}
              className={styles.textarea}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
