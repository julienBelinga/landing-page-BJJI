import Image from "next/image";
import styles from "./downloadButton.module.scss";
import appstore from "@/assets/AppStore.png";
import googleplay from "@/assets/googeplay.png";

export default function DownloadButton() {
  return (
    <div className={styles.downloads}>
      <a
        href="https://apps.apple.com/fr/app/bjj-insight/id6748660983"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        <Image src={appstore} alt="Logo AppStore" />
      </a>
      <a href="/onboarding-beta" className={styles.button}>
        <Image src={googleplay} alt="Logo GooglePlay" />
      </a>
    </div>
  );
}
