import LegalLayout from './LegalLayout';

export default function ConditionsGenerales() {
  return (
    <LegalLayout title="Conditions générales de vente et de services">
      <div className="legal__info-box">
        <p>Ces conditions générales de vente s'appliquent à toutes les prestations de services conclues entre Web Expertise et ses clients professionnels ou particuliers.</p>
      </div>

      <h2>1. Objet</h2>
      <p>Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre <strong>Web Expertise</strong>, entreprise individuelle représentée par Louis Mickael (SIREN 923 534 473), et tout client souhaitant bénéficier de ses services de création de sites web, de référencement local (SEO) et de conseil digital.</p>

      <h2>2. Services proposés</h2>
      <ul>
        <li>Création de sites web professionnels (vitrine, e-commerce)</li>
        <li>Référencement local (SEO, Google My Business)</li>
        <li>Maintenance et hébergement de sites web</li>
        <li>Conseil en visibilité digitale locale</li>
      </ul>

      <h2>3. Devis et commande</h2>
      <p>Toute prestation fait l'objet d'un devis gratuit, sans engagement. Le devis est valable 30 jours à compter de son émission. La commande est confirmée par la signature du devis et le versement d'un acompte.</p>

      <h2>4. Prix et modalités de paiement</h2>
      <p>Les prix sont exprimés en euros, toutes taxes comprises (TVA non applicable — article 293B du CGI, régime de la franchise en base de TVA).</p>
      <p>Sauf disposition contraire dans le devis :</p>
      <ul>
        <li>Acompte de <strong>50%</strong> à la commande</li>
        <li>Solde de <strong>50%</strong> à la livraison</li>
      </ul>
      <p>Paiement accepté par virement bancaire ou chèque.</p>

      <h2>5. Délais de réalisation</h2>
      <p>Les délais de réalisation sont précisés dans le devis. Ils courent à compter de la réception de l'acompte et de la fourniture de tous les éléments nécessaires par le client. Web Expertise ne peut être tenu responsable des retards causés par le client.</p>

      <h2>6. Livraison et réception</h2>
      <p>La livraison s'effectue par la mise en ligne du site ou la transmission des fichiers. Le client dispose de 7 jours ouvrés pour signaler des non-conformités par rapport au cahier des charges. Passé ce délai, la prestation est réputée acceptée.</p>

      <h2>7. Droit de rétractation</h2>
      <p>Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les prestations de services pleinement exécutées avant la fin du délai de rétractation et dont l'exécution a commencé avec l'accord préalable du consommateur.</p>

      <h2>8. Propriété intellectuelle</h2>
      <p>Les créations réalisées par Web Expertise sont cédées au client à titre définitif après règlement intégral de la facture. Web Expertise conserve le droit de mentionner la réalisation dans son portfolio.</p>

      <h2>9. Confidentialité</h2>
      <p>Chaque partie s'engage à garder confidentielles les informations échangées dans le cadre de la prestation.</p>

      <h2>10. Responsabilité</h2>
      <p>Web Expertise est soumis à une obligation de moyens et non de résultats. La responsabilité de Web Expertise ne peut être engagée en cas de force majeure, de faute du client ou d'un tiers.</p>

      <h2>11. Résiliation</h2>
      <p>En cas de manquement grave d'une partie à ses obligations, l'autre partie peut résilier le contrat après mise en demeure restée sans effet pendant 15 jours.</p>

      <h2>12. Droit applicable et litiges</h2>
      <p>Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en premier lieu. À défaut, le litige sera porté devant les tribunaux compétents.</p>
    </LegalLayout>
  );
}
