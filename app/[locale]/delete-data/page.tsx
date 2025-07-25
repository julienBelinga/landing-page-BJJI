"use client";

import { useState } from "react";
import styles from "./delete-data.module.scss";

export default function DeleteDataPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Suppression de données</h1>
          <p className={styles.description}>
            Demandez la suppression de vos données personnelles.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.warning}>
            <p className={styles.warningText}>
              <strong>Attention :</strong> Cette action est irréversible. Toutes
              vos données personnelles seront définitivement supprimées de nos
              serveurs.
            </p>
          </div>
          <form
            action="https://formsubmit.co/julienbelinga.pro@gmail.com"
            method="POST"
            className={styles.form}
            onSubmit={() => setIsSubmitting(true)}
          >
            {/* Anti-spam / configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="Demande de suppression de données"
            />
            <input
              type="hidden"
              name="_next"
              value="https://bjj-insight.vercel.app/delete-data/success"
            />

            <input
              type="email"
              name="email"
              placeholder="Votre adresse e-mail"
              required
              className={styles.input}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? "Envoi en cours..." : "Demander la suppression"}
            </button>
          </form>

          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Information</h3>
            <p className={styles.infoText}>
              Nous traiterons votre demande sous 30 jours conformément au RGPD.
              Un e-mail de confirmation vous sera envoyé une fois la suppression
              effectuée.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
