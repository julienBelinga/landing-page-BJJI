import styles from "./arguments.module.scss";
import Image, { StaticImageData } from "next/image";

type ArgumentsProps = {
  image: string | StaticImageData;
  description: string;
  text: string;
};

export default function Arguments({
  image,
  description,
  text,
}: ArgumentsProps) {
  return (
    <div className={styles.argument}>
      <Image className={styles.iconArgument} src={image} alt={description} />
      <div className={styles.textArgument}>{text}</div>
    </div>
  );
}
