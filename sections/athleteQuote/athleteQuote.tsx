"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./athleteQuote.module.scss";
import johnDanaherImg from "@/assets/John Danaher.png";
import craigJonesImg from "@/assets/Craig.png";
import joeRoganImg from "@/assets/Joe Rogan.png";

interface Quote {
  id: number;
  text: string;
  author: string;
  image: any;
}

const quotes: Quote[] = [
  {
    id: 1,
    text: "The fastest way to improve is to ask better questions and seek answers from those ahead of you.",
    author: "John Danaher",
    image: johnDanaherImg,
  },
  {
    id: 2,
    text: "You don't need a library of techniques. You need the right fix at the right time.",
    author: "Craig Jones",
    image: craigJonesImg,
  },
  {
    id: 3,
    text: "The best investment you can make is in yourself.",
    author: "Joe Rogan",
    image: joeRoganImg,
  },
];

export default function AthleteQuote() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentQuoteIndex];

  const goToQuote = (index: number) => {
    setCurrentQuoteIndex(index);
  };

  return (
    <section className={styles.athleteQuote}>
      <div>
        <div className={styles.athleteQuoteBackground}>
          <div className={styles.imageContainer}>
            <Image
              src={currentQuote.image}
              alt={`Image de ${currentQuote.author}`}
            />
          </div>
          <div className={styles.quoteContent}>
            <div className={styles.athleteQuoteText}>"{currentQuote.text}"</div>
            <div className={styles.authorName}>— {currentQuote.author}</div>
          </div>
        </div>

        {/* Indicateurs de pagination */}
        <div className={styles.quoteIndicators}>
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentQuoteIndex ? styles.active : ""
              }`}
              onClick={() => goToQuote(index)}
              aria-label={`Citation ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
