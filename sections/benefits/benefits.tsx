import Image from "next/image";
import styles from "./benefits.module.scss";
import Frame from "@/assets/phone.png";
import Screen from "@/assets/screenExemple.png";
import Test from "@/assets/nico.jpg";
import PhoneFrame from "@/components/phoneFrame/phoneFrame";

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
        <PhoneFrame />
      </div>
    </section>
  );
}
