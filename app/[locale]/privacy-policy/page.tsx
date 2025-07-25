import styles from "./privacy-policy.module.scss";

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Politique de confidentialité</h1>

        <p className={styles.text}>
          Votre vie privée est importante pour nous. Cette politique de
          confidentialité explique comment nous collectons, utilisons et
          protégeons vos données personnelles lors de l'utilisation de notre
          application et de nos services.
        </p>

        <p className={styles.text}>
          Nous collectons uniquement les données personnelles nécessaires au bon
          fonctionnement de l'application et pour vous offrir la meilleure
          expérience possible. Cela peut inclure votre nom, votre adresse e-mail
          et vos préférences d'entraînement.
        </p>

        <p className={styles.text}>
          Nous ne vendons ni ne partageons vos données personnelles avec des
          tiers. Toutes les données sont stockées de manière sécurisée et
          utilisées uniquement pour améliorer le service et communiquer avec
          vous.
        </p>

        <h2 className={styles.sectionTitle}>Accès au microphone</h2>
        <p className={styles.text}>
          Notre application utilise le microphone de votre appareil uniquement
          pour enregistrer et envoyer des messages vocaux à d'autres
          utilisateurs. Ces messages sont stockés de façon sécurisée dans
          Firebase Storage et sont supprimés automatiquement lorsque la
          conversation est supprimée par l'utilisateur.
        </p>

        <p className={styles.text}>
          Nous n'utilisons pas les données du microphone à des fins d'analyse,
          de publicité ou d'écoute en arrière-plan. L'accès au micro n'est
          activé que lorsque l'utilisateur choisit explicitement d'enregistrer
          un message.
        </p>

        <h2 className={styles.sectionTitle}>Consentement de l'utilisateur</h2>
        <p className={styles.text}>
          En utilisant notre application, vous consentez à la collecte et à
          l'utilisation de vos données telles que décrites dans cette politique
          de confidentialité. Pour toute question ou pour demander la
          suppression de vos données, contactez-nous.
        </p>
      </div>
    </div>
  );
}
