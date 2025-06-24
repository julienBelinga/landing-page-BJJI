import Image from "next/image";
import styles from "./phoneFrame.module.scss";
import Frame from "@/assets/phone.png";
import Screen from "@/assets/screenExemple.png";

export default function PhoneFrame() {
  return (
    <div className={styles.benefitsImage}>
      <Image
        className={styles.phoneScreen}
        src={Screen}
        alt="Contenu de l'écran"
      />
      <Image
        className={styles.phoneFrame}
        src={Frame}
        alt="Maquette de téléphone"
      />
    </div>
  );
}
