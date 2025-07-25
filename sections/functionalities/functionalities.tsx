import styles from "./functionalities.module.scss";
import Arguments from "@/components/arguments/arguments";
import icon from "@/assets/logo.png";

export default function Functionalities() {
  return (
    <section className={styles.functionalities}>
      <div className={styles.functionalitiesTitle}>Fonctionnalités clés</div>
      <div className={styles.functionalitiesContainer}>
        <Arguments
          className={styles.functionalitiesArguments}
          image={icon}
          description="Icône fonctionnalité"
          text="Pose une question en 1 clic, reçois une réponse vidéo personnalisée."
        />

        <Arguments
          className={styles.functionalitiesArguments}
          image={icon}
          description="Icône fonctionnalité"
          text="Demande des conseils techniques, mentaux ou stratégiques."
        />

        <Arguments
          className={styles.functionalitiesArguments}
          image={icon}
          description="Icône fonctionnalité"
          text="Accède à des athlètes du monde entier."
        />
      </div>
    </section>
  );
}
