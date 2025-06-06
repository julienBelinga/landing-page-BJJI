import styles from "./herobanner.module.scss";

export default function Herobanner() {
  return (
    <section className={styles.herobanner}>
      <div className={styles.herobannerDisplay}>
        <div className={styles.herobannerText}>
          <div className={styles.herobannerParagraph1}>
            Pose tes questions aux champions du JJB.
          </div>
          <div className={styles.herobannerParagraph2}>
            Sous-texte expliquant le concept en une phrase.
          </div>
          <div className={styles.downloads}>
            <button></button>
            <button></button>
          </div>
        </div>
        <div className={styles.herobannerImages}>ZONE IMAGES</div>
      </div>
    </section>
  );
}
