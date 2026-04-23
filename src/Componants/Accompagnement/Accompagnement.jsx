const items = [
  {
    title: 'Zéro technique de votre côté',
    desc: 'notre code parle pour nous.',
  },
  {
    title: 'Échange clair',
    desc: 'on vous explique simplement de quoi vous avez besoin.',
  },
  {
    title: 'Indépendance',
    desc: 'vous êtes propriétaire de votre site sur-mesure.',
  },
];

export default function Accompagnement() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="accompagnement__inner">
          <div>
            <p className="section__label">Notre approche</p>
            <h2 className="section__title">
              Un accompagnement humain et ultra transparent
            </h2>
            <p className="section__lead" style={{ marginBottom: '32px' }}>
              Nous comprenons que se lancer et faire créer son site internet
              peut faire peur. Chez Web Expertise, on discute d'une profession
              à une autre :
            </p>

            <ul className="checklist">
              {items.map((item, i) => (
                <li className="checklist__item" key={i}>
                  <span className="icon-check">✓</span>
                  <p>
                    <strong>{item.title}</strong> : {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="accompagnement__cta-box">
            <p>
              Si vous êtes prêt à rattraper votre retard sur vos concurrents
              et à posséder une machinerie digitale sérieuse, cliquez juste
              en dessous.
            </p>
            <p>
              Nous prendrons le temps de vous écouter pour définir
              l'architecture web la plus adaptée à votre commerce.
            </p>
            <a href="#reservation" className="btn-primary">
              Créer mon premier site web →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
