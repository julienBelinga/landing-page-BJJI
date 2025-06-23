import Image from "next/image";
import styles from "./benefits.module.scss";
import Screen from "@/assets/screenExemple.png";

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsTitle}>
        Bénéfices pour les utilisateurs
      </div>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitsText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </div>
        <div className={styles.benefitsImage}>
          <Image src={Screen} alt="Image exemple" height={450} width={280} />
        </div>
      </div>
    </section>
  );
}
