import Image from "next/image";
import styles from "./phoneFrame.module.scss";
import Frame from "@/assets/phone.png";
import { StaticImageData } from "next/image";

interface PhoneFrameProps {
  screenImage: StaticImageData;
  screenAlt?: string;
}

export default function PhoneFrame({
  screenImage,
  screenAlt = "Contenu de l'écran",
}: PhoneFrameProps) {
  return (
    <div className={styles.benefitsImage}>
      <Image className={styles.phoneScreen} src={screenImage} alt={screenAlt} />
      <Image className={styles.phoneFrame} src={Frame} alt="Frame iPhone 13" />
    </div>
  );
}
