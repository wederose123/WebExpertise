import LegalLayout from './LegalLayout';

export default function PolitiqueConfidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <div className="legal__info-box">
        <p>Web Expertise accorde une grande importance à la protection de vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi Informatique et Libertés.</p>
      </div>

      <h2>1. Responsable du traitement</h2>
      <p><strong>Web Expertise</strong> — Louis Mickael</p>
      <p>154 Avenue Aristide Briand Bât 1, 93320 Les Pavillons-sous-Bois</p>
      <p>Email : <a href="mailto:webexpertise75@gmail.com">webexpertise75@gmail.com</a></p>
      <p>Téléphone : <a href="tel:0648233300">06 48 23 33 00</a></p>

      <h2>2. Données collectées</h2>
      <p>Nous collectons les données suivantes via nos formulaires :</p>
      <ul>
        <li><strong>Données d'identification :</strong> nom, prénom</li>
        <li><strong>Données de contact :</strong> adresse email, numéro de téléphone</li>
        <li><strong>Données de navigation :</strong> adresse IP, pages visitées, durée de session (via cookies)</li>
      </ul>

      <h2>3. Finalités du traitement</h2>
      <p>Vos données sont collectées pour :</p>
      <ul>
        <li>Répondre à vos demandes de contact et devis</li>
        <li>Planifier des rendez-vous de consultation</li>
        <li>Exécuter les prestations de services commandées</li>
        <li>Vous envoyer des communications commerciales (avec votre consentement)</li>
        <li>Améliorer nos services et notre site web</li>
      </ul>

      <h2>4. Base légale</h2>
      <p>Les traitements reposent sur :</p>
      <ul>
        <li>L'exécution d'un contrat ou de mesures précontractuelles</li>
        <li>Votre consentement (formulaires de contact, newsletter)</li>
        <li>L'intérêt légitime de Web Expertise (amélioration des services)</li>
      </ul>

      <h2>5. Durée de conservation</h2>
      <p>Vos données sont conservées :</p>
      <ul>
        <li><strong>Données clients :</strong> 5 ans après la fin de la relation contractuelle</li>
        <li><strong>Données prospects :</strong> 3 ans à compter du dernier contact</li>
        <li><strong>Données de navigation :</strong> 13 mois maximum</li>
      </ul>

      <h2>6. Destinataires des données</h2>
      <p>Vos données ne sont ni vendues ni cédées à des tiers. Elles peuvent être partagées avec :</p>
      <ul>
        <li>Nos sous-traitants techniques (hébergeur O2Switch, outils de gestion)</li>
        <li>Les autorités compétentes en cas d'obligation légale</li>
      </ul>

      <h2>7. Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
        <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
        <li><strong>Droit à l'effacement :</strong> supprimer vos données</li>
        <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
        <li><strong>Droit d'opposition :</strong> vous opposer à un traitement</li>
        <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
      </ul>
      <p>Pour exercer ces droits, contactez-nous à : <a href="mailto:webexpertise75@gmail.com">webexpertise75@gmail.com</a></p>
      <p>En cas de réponse insatisfaisante, vous pouvez introduire une réclamation auprès de la <strong>CNIL</strong> : <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">www.cnil.fr</a></p>

      <h2>8. Cookies</h2>
      <p>Notre site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire tiers n'est déposé sans votre consentement explicite.</p>

      <h2>9. Sécurité</h2>
      <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou altération.</p>

      <h2>10. Mise à jour</h2>
      <p>Cette politique peut être mise à jour à tout moment. La date de dernière mise à jour figure en bas de page. Nous vous encourageons à la consulter régulièrement.</p>

      <p style={{marginTop: '40px', fontSize: '0.8rem', opacity: 0.4}}>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
    </LegalLayout>
  );
}
