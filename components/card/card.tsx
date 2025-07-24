import Image, { StaticImageData } from "next/image";
import styles from "./card.module.scss";

type CardProps = {
  image: string | StaticImageData;
  description: string;
};

export default function Card({ image, description }: CardProps) {
  return (
    <div className={styles.card}>
      <Image src={image} alt={description} />
    </div>
  );
}
