const cards = [
  {
    icon: '🌍',
    title: 'Site Vitrine & SEO',
    text: "Design ultra-rapide et sur-mesure pour présenter vos services et capter vos clients sur Google.",
  },
  {
    icon: '🛒',
    title: 'E-Commerce',
    text: "Vente de produits en ligne, prise de rendez-vous automatisée, gestion des paiements sécurisée.",
  },
  {
    icon: '⚡',
    title: 'App Sur-Mesure',
    text: "Développement logiciel interne : devis complexes, espaces membres, CRM... Aucune limite.",
  },
];

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <p className="section__label">Nos expertises</p>
        <h2 className="section__title">Ce qu'on sait faire ? Absolument tout.</h2>
        <p className="section__lead">
          Contrairement à 90% des agences locales qui utilisent des modèles
          tout faits et lents, nous développons nos sites de A à Z en
          « full code ». Aucune limite technique : si vous l'imaginez, nous le
          concevons.
        </p>

        <div className="services__grid">
          {cards.map((c, i) => (
            <div className="service-card" key={i}>
              <div className="service-card__icon">{c.icon}</div>
              <h3 className="service-card__title">{c.title}</h3>
              <p className="service-card__text">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
