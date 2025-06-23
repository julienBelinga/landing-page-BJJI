import Image from "next/image";
import styles from "./athleteQuote.module.scss";
import pic from "@/assets/athletee.png";

export default function AthleteQuote() {
  return (
    <section className={styles.athleteQuote}>
      <div>
        <div className={styles.athleteQuoteBackground}>
          <div className={styles.imageContainer}>
            <Image src={pic} alt="Image de l'athlète" />
          </div>
          <div className={styles.athleteQuoteText}>
            “Une citation stylée d’un athlète connu.”
          </div>
        </div>
      </div>
    </section>
  );
}
