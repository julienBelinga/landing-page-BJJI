import Image from "next/image";
import styles from "./callToAction.module.scss";
import screen from "@/assets/screenExemple.png";
import appstore from "@/assets/AppStore.png";
import googleplay from "@/assets/googeplay.png";
import PhoneFrame from "@/components/phoneFrame/phoneFrame";

export default function CallToAction() {
  return (
    <section className={styles.callToAction}>
      <div className={styles.callToActionTitle}>Télécharger</div>
      <div className={styles.callToActionContainer}>
        <div className={styles.callToActionDisplay}>
          <div className={styles.callToActionText}>
            Commencez à vous connecter avec des athlètes de haut niveau en
            quelques clics.
          </div>
          <div className={styles.downloads}>
            <button className={styles.button}>
              <Image src={appstore} alt="Logo AppStore" />
            </button>
            <button className={styles.button}>
              <Image src={googleplay} alt="Logo GooglePlay" />
            </button>
          </div>
        </div>

        <PhoneFrame screenImage={screen} />
      </div>
    </section>
  );
}
