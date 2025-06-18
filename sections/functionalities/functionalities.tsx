import styles from "./functionalities.module.scss";
import Arguments from "@/components/arguments/arguments";
import icon from "@/assets/icon.png";

export default function Functionalities() {
  return (
    <section className={styles.functionalities}>
      <div className={styles.functionalitiesTitle}>Fonctionnalités clés</div>
      <div className={styles.functionalitiesContainer}>
        <Arguments
          image={icon}
          description="Icône fonctionnalité"
          text="Pose une question en 1 clic, reçois une réponse vidéo personnalisée."
        />

        <Arguments
          image={icon}
          description="Icône fonctionnalité"
          text="Demande des conseils techniques, mentaux ou stratégiques."
        />

        <Arguments
          image={icon}
          description="Icône fonctionnalité"
          text="Accède à des athlètes du monde entier."
        />
      </div>
    </section>
  );
}
