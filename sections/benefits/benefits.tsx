import styles from "./benefits.module.scss";
import PhoneFrame from "@/components/phoneFrame/phoneFrame";
import Screen from "@/assets/screenExample.png";

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsTitle}>
        Bénéfices pour les utilisateurs
      </div>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitsText}>
          Avec BJJ Insight, vous posez une question précise sur votre pratique,
          technique, stratégie, préparation mentale ou même récupération et vous
          recevez une réponse claire, directe, et personnalisée par un athlète
          confirmé. Plus besoin de chercher dans des heures de vidéos génériques
          : vous gagnez du temps, vous progressez plus vite, et vous profitez de
          l’expérience de ceux qui vivent le haut niveau au quotidien.
        </div>
        <PhoneFrame screenImage={Screen} />
      </div>
    </section>
  );
}
