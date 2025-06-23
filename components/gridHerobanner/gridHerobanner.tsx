import styles from "./gridHerobanner.module.scss";
import Image from "next/image";

// Import des images locales
import expert1 from "@/assets/experts/expert1.jpg";
import expert2 from "@/assets/experts/expert2.jpg";
import expert3 from "@/assets/experts/expert3.jpg";
import expert4 from "@/assets/experts/expert4.jpg";
import expert5 from "@/assets/experts/expert5.jpg";

type Expert = {
  name: string;
  title: string;
  description: string;
  image: string;
};

const experts = [
  {
    name: "Monkey D. Luffy",
    title: "Captain of the Straw Hat Pirates",
    description:
      "Dreams of becoming the Pirate King. Has eaten the Gum-Gum fruit.",
    image: expert1,
  },
  {
    name: "Roronoa Zoro",
    title: "Swordsman",
    description:
      "Master of the three sword style. Dreams of becoming the world's greatest swordsman.",
    image: expert2,
  },
  {
    name: "Nami",
    title: "Navigator",
    description: "Expert cartographer and weather manipulator. Loves treasure.",
    image: expert3,
  },
  {
    name: "Brook",
    title: "Musician",
    description:
      "The undead gentleman with a soul. Skilled with a sword and violin.",
    image: expert4,
  },
  {
    name: "Nico Robin",
    title: "Archaeologist",
    description: "Can read poneglyphs. Searching for the True History.",
    image: expert5,
  },
];

export default function GridHerobanner() {
  return (
    <section className={styles.gridHerobanner}>
      <div className={styles.grid}>
        {experts.map((expert, index) => (
          <div
            key={expert.name}
            className={`${styles.card} ${styles[`card${index + 1}`]}`}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.backContent}>
                  <div className={styles.name}>{expert.name}</div>
                  <div className={styles.title}>{expert.title}</div>
                  <div className={styles.description}>{expert.description}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
