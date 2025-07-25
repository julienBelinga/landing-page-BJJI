import styles from "./terms-of-service.module.scss";

export default function TermsOfServicePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Conditions d'utilisation</h1>
        <p className={styles.lastUpdated}>
          Dernière mise à jour : Décembre 2024
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Acceptation des conditions</h2>
          <p className={styles.text}>
            En utilisant l'application BJJ Insight, vous acceptez d'être lié par
            ces conditions d'utilisation. Si vous n'acceptez pas ces conditions,
            veuillez ne pas utiliser notre application.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Description du service</h2>
          <p className={styles.text}>
            BJJ Insight est une application mobile dédiée aux pratiquants de
            jiu-jitsu brésilien. Elle propose des fonctionnalités pour suivre
            vos entraînements, analyser vos performances et améliorer votre
            pratique du BJJ.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Utilisation acceptable</h2>
          <p className={styles.text}>Vous vous engagez à :</p>
          <ul className={styles.list}>
            <li>
              Utiliser l'application de manière responsable et respectueuse
            </li>
            <li>Ne pas partager vos identifiants de connexion</li>
            <li>Fournir des informations exactes et à jour</li>
            <li>
              Respecter les droits d'auteur et de propriété intellectuelle
            </li>
            <li>
              Ne pas utiliser l'application à des fins illégales ou non
              autorisées
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Propriété intellectuelle</h2>
          <p className={styles.text}>
            Tous les contenus de l'application (textes, images, logos, vidéos)
            sont protégés par les droits d'auteur et appartiennent à BJJ Insight
            ou à ses partenaires. Toute reproduction non autorisée est
            strictement interdite.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Données personnelles</h2>
          <p className={styles.text}>
            La collecte et le traitement de vos données personnelles sont régis
            par notre politique de confidentialité. Nous nous engageons à
            protéger votre vie privée conformément au RGPD.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            6. Limitation de responsabilité
          </h2>
          <p className={styles.text}>
            BJJ Insight ne peut être tenu responsable des dommages directs ou
            indirects résultant de l'utilisation de l'application. L'application
            est fournie "en l'état" sans garantie de fonctionnement
            ininterrompu.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            7. Modifications des conditions
          </h2>
          <p className={styles.text}>
            Nous nous réservons le droit de modifier ces conditions à tout
            moment. Les utilisateurs seront informés des changements importants
            par notification dans l'application ou par e-mail.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Résiliation</h2>
          <p className={styles.text}>
            Vous pouvez cesser d'utiliser l'application à tout moment. Nous nous
            réservons le droit de suspendre ou de résilier votre accès en cas de
            violation de ces conditions.
          </p>
        </div>

        <div className={styles.contact}>
          <h3 className={styles.contactTitle}>Contact</h3>
          <p className={styles.contactText}>
            Pour toute question concernant ces conditions d'utilisation,
            contactez-nous à :
            <a href="mailto:julienbelinga.pro@gmail.com">
              julienbelinga.pro@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
