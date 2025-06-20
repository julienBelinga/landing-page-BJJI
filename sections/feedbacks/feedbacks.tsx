import Arguments from "@/components/arguments/arguments";
import styles from "./feedbacks.module.scss";
import icon from "@/assets/icon.png";

export default function Feedbacks() {
  return (
    <section className={styles.feedbacks}>
      <div className={styles.feedbacksTitle}>
        Feedbacks d’utilisateurs bêta ou d’athlètes
      </div>
      <div className={styles.feedbacksContainer}>
        <Arguments
          className={styles.feedbacksArguments}
          image={icon}
          description="Icône Feedbacks"
          text="Témoingage. Lorem ipsum dolor sit amet."
          user="-  ”utilisateur”"
        />

        <Arguments
          className={styles.feedbacksArguments}
          image={icon}
          description="Icône Feedbacks"
          text="Témoingage. Lorem ipsum dolor sit amet."
          user="-  ”utilisateur”"
        />

        <Arguments
          className={styles.feedbacksArguments}
          image={icon}
          description="Icône Feedbacks"
          text="Témoingage. Lorem ipsum dolor sit amet."
          user="-  ”utilisateur”"
        />
      </div>
    </section>
  );
}
