import LegalLayout from './LegalLayout';

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales">
      <div className="legal__info-box">
        <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique.</p>
      </div>

      <h2>1. Éditeur du site</h2>
      <p><strong>Nom commercial :</strong> Web Expertise</p>
      <p><strong>Forme juridique :</strong> Entrepreneur individuel</p>
      <p><strong>Dirigeant :</strong> Louis Mickael</p>
      <p><strong>Adresse du siège social :</strong> 154 Avenue Aristide Briand Bât 1, 93320 Les Pavillons-sous-Bois</p>
      <p><strong>Téléphone :</strong> <a href="tel:0648233300">06 48 23 33 00</a></p>
      <p><strong>Email :</strong> <a href="mailto:webexpertise75@gmail.com">webexpertise75@gmail.com</a></p>
      <p><strong>SIREN :</strong> 923 534 473</p>
      <p><strong>SIRET (siège social) :</strong> 923 534 473 00015</p>
      <p><strong>Numéro de TVA intracommunautaire :</strong> FR94923534473</p>
      <p><strong>Code APE / NAF :</strong> 6201Z — Programmation informatique</p>
      <p><strong>Date de création :</strong> 17 mai 2023</p>

      <h2>2. Hébergeur</h2>
      <p><strong>Nom :</strong> O2Switch</p>
      <p><strong>Adresse :</strong> Chemin des Pardiaux, 63000 Clermont-Ferrand, France</p>
      <p><strong>Téléphone :</strong> 04 44 44 60 40</p>
      <p><strong>Site web :</strong> <a href="https://www.o2switch.fr" target="_blank" rel="noreferrer">www.o2switch.fr</a></p>

      <h2>3. Directeur de la publication</h2>
      <p>Louis Mickael, en qualité d'entrepreneur individuel.</p>

      <h2>4. Propriété intellectuelle</h2>
      <p>L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, icônes) est la propriété exclusive de Web Expertise, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation sans autorisation préalable est strictement interdite.</p>

      <h2>5. Responsabilité</h2>
      <p>Web Expertise s'efforce de maintenir les informations disponibles sur ce site à jour et exactes. Toutefois, la société ne peut garantir l'exhaustivité ni l'absence d'erreurs des informations diffusées.</p>

      <h2>6. Liens hypertextes</h2>
      <p>Ce site peut contenir des liens vers des sites tiers. Web Expertise n'est pas responsable du contenu de ces sites externes et ne peut être tenu pour responsable des dommages résultant de leur consultation.</p>

      <h2>7. Droit applicable</h2>
      <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
    </LegalLayout>
  );
}
