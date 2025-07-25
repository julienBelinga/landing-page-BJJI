import MetaHead from "@/components/metaHead/metaHead";
import styles from "./refund-policy.module.scss";

export default function RefundPolicyPage() {
  return (
    <>
      <MetaHead pageKey="refundPolicy" />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Politique de remboursement</h1>
          <p className={styles.lastUpdated}>
            Dernière mise à jour : Décembre 2024
          </p>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Politique générale</h2>
            <p className={styles.text}>
              Chez BJJ Insight, nous nous efforçons de fournir une application
              de qualité qui répond à vos attentes. Si vous n'êtes pas
              entièrement satisfait de votre achat, nous proposons une politique
              de remboursement équitable et transparente.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Période de remboursement</h2>
            <p className={styles.text}>
              Les demandes de remboursement doivent être effectuées dans les{" "}
              <strong>14 jours</strong>
              suivant votre achat initial. Après cette période, nous ne pourrons
              malheureusement pas traiter votre demande de remboursement.
            </p>
          </div>

          <div className={styles.highlight}>
            <h3 className={styles.highlightTitle}>Important</h3>
            <p className={styles.highlightText}>
              Les achats effectués via Google Play Store sont soumis à leur
              propre politique de remboursement. Vous devez d'abord contacter
              Google Play pour une demande de remboursement.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Conditions d'éligibilité</h2>
            <p className={styles.text}>
              Pour être éligible à un remboursement, votre demande doit
              respecter les conditions suivantes :
            </p>
            <ul className={styles.list}>
              <li>
                La demande est effectuée dans les 14 jours suivant l'achat
              </li>
              <li>
                Vous n'avez pas utilisé l'application de manière extensive (plus
                de 50% des fonctionnalités)
              </li>
              <li>
                Vous fournissez une raison valable pour la demande de
                remboursement
              </li>
              <li>
                Aucune violation des conditions d'utilisation n'a été commise
              </li>
              <li>
                Vous acceptez la suppression définitive de votre compte et de
                vos données
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              4. Raisons valables pour un remboursement
            </h2>
            <p className={styles.text}>
              Les demandes de remboursement sont généralement acceptées pour :
            </p>
            <ul className={styles.list}>
              <li>Problèmes techniques majeurs non résolus</li>
              <li>Fonctionnalités annoncées non disponibles</li>
              <li>Incompatibilité avec votre appareil</li>
              <li>Achat accidentel ou en double</li>
              <li>Insatisfaction justifiée du service</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Processus de demande</h2>
            <p className={styles.text}>Pour demander un remboursement :</p>
            <ul className={styles.list}>
              <li>
                Contactez notre équipe support à julienbelinga.pro@gmail.com
              </li>
              <li>
                Indiquez votre adresse e-mail d'achat et la date de transaction
              </li>
              <li>Expliquez la raison de votre demande de remboursement</li>
              <li>Fournissez tout élément justificatif si nécessaire</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Délai de traitement</h2>
            <p className={styles.text}>
              Nous nous engageons à examiner votre demande dans les{" "}
              <strong>5 jours ouvrables</strong>. Si votre demande est
              approuvée, le remboursement sera effectué sous 7 à 14 jours selon
              votre méthode de paiement originale.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Remboursements partiels</h2>
            <p className={styles.text}>
              Dans certains cas, nous pouvons proposer un remboursement partiel
              si :
            </p>
            <ul className={styles.list}>
              <li>
                Vous avez utilisé l'application pendant une période
                significative
              </li>
              <li>Seules certaines fonctionnalités posent problème</li>
              <li>Une solution alternative peut être proposée</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Exceptions</h2>
            <p className={styles.text}>
              Aucun remboursement ne sera accordé dans les cas suivants :
            </p>
            <ul className={styles.list}>
              <li>Violation des conditions d'utilisation</li>
              <li>Utilisation abusive ou frauduleuse de l'application</li>
              <li>Demande effectuée après la période de 14 jours</li>
              <li>
                Changement d'avis sans raison valable après utilisation
                extensive
              </li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h3 className={styles.contactTitle}>Contact pour remboursement</h3>
            <p className={styles.contactText}>
              Pour toute demande de remboursement, contactez-nous à :
              <a href="mailto:julienbelinga.pro@gmail.com">
                julienbelinga.pro@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
