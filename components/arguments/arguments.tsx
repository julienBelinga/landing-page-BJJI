import styles from "./arguments.module.scss";
import Image, { StaticImageData } from "next/image";

type ArgumentsProps = {
  className?: string;
  image: string | StaticImageData;
  description: string;
  text: string;
  user?: string;
};

export default function Arguments({
  className,
  image,
  description,
  text,
  user,
}: ArgumentsProps) {
  return (
    <div className={className}>
      <div className={styles.argument}>
        <Image className={styles.iconArgument} src={image} alt={description} />
        <div className={styles.textArgument}>{text}</div>
      </div>
      <div className={styles.userArgument}>{user}</div>
    </div>
  );
}
