import LegalLayout from './LegalLayout';

export default function ConditionsUtilisation() {
  return (
    <LegalLayout title="Conditions d'utilisation">
      <div className="legal__info-box">
        <p>En accédant et en utilisant ce site web, vous acceptez sans réserve les présentes conditions d'utilisation. Si vous ne les acceptez pas, veuillez ne pas utiliser ce site.</p>
      </div>

      <h2>1. Accès au site</h2>
      <p>Le site Web Expertise est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Web Expertise se réserve le droit de refuser l'accès au site, sans préavis ni justification, notamment en cas d'utilisation abusive.</p>

      <h2>2. Utilisation acceptable</h2>
      <p>En utilisant ce site, vous vous engagez à :</p>
      <ul>
        <li>Ne pas utiliser le site à des fins illicites ou frauduleuses</li>
        <li>Ne pas tenter de pirater, altérer ou perturber le fonctionnement du site</li>
        <li>Ne pas collecter des données personnelles d'autres utilisateurs sans consentement</li>
        <li>Ne pas diffuser de contenus illégaux, diffamatoires ou contraires aux bonnes mœurs</li>
        <li>Respecter les droits de propriété intellectuelle de Web Expertise</li>
      </ul>

      <h2>3. Propriété intellectuelle</h2>
      <p>L'ensemble des contenus de ce site (textes, images, logos, design, code source) est protégé par le droit d'auteur et appartient à Web Expertise ou à ses partenaires. Toute reproduction, même partielle, sans autorisation écrite préalable est interdite.</p>

      <h2>4. Liens vers d'autres sites</h2>
      <p>Ce site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre informatif uniquement. Web Expertise ne contrôle pas ces sites et ne peut être tenu responsable de leur contenu, leur disponibilité ou leur politique de confidentialité.</p>

      <h2>5. Disponibilité du site</h2>
      <p>Web Expertise s'efforce de maintenir le site accessible 24h/24 et 7j/7. Cependant, des interruptions peuvent survenir pour maintenance, mise à jour ou en cas de force majeure. Web Expertise ne saurait être tenu responsable des conséquences d'une indisponibilité temporaire du site.</p>

      <h2>6. Exactitude des informations</h2>
      <p>Les informations présentées sur ce site sont fournies à titre indicatif et peuvent évoluer. Web Expertise s'efforce de les maintenir à jour mais ne garantit pas leur exhaustivité ni leur exactitude absolue.</p>

      <h2>7. Limitation de responsabilité</h2>
      <p>Web Expertise ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site, incluant la perte de données, les interruptions d'activité ou les préjudices financiers, même si Web Expertise a été informé de la possibilité de tels dommages.</p>

      <h2>8. Formulaires de contact</h2>
      <p>Les formulaires présents sur ce site permettent de nous contacter pour une demande de devis ou un rendez-vous. Les informations transmises sont traitées conformément à notre <a href="/politique-confidentialite">Politique de confidentialité</a>.</p>

      <h2>9. Modification des conditions</h2>
      <p>Web Expertise se réserve le droit de modifier les présentes conditions à tout moment. Les modifications prennent effet dès leur publication sur le site. L'utilisation continue du site après modification vaut acceptation des nouvelles conditions.</p>

      <h2>10. Droit applicable</h2>
      <p>Les présentes conditions d'utilisation sont régies par le droit français. Tout litige relatif à leur interprétation ou exécution sera soumis aux tribunaux compétents du ressort de Seine-Saint-Denis.</p>

      <p style={{marginTop: '40px', fontSize: '0.8rem', opacity: 0.4}}>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
    </LegalLayout>
  );
}
