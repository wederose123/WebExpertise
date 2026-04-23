const pains = [
  "Vous n'avez pas de site internet à vous, ou juste une simple page Facebook.",
  "Vous dépendez quasi exclusivement du bouche-à-oreille « à l'ancienne ».",
  "Vos semaines sont irrégulières : certains jours c'est plein… d'autres beaucoup moins.",
];

export default function Problemes() {
  return (
    <section className="section">
      <div className="container">
        <p className="section__label">Vous reconnaissez-vous ?</p>
        <h2 className="section__title">
          Peut-être que vous vous reconnaissez dans cette situation :
        </h2>

        <ul className="problemes__list">
          {pains.map((pain, i) => (
            <li className="problemes__item" key={i}>
              <span className="icon-x">✕</span>
              {pain}
            </li>
          ))}
        </ul>

        <div className="problemes__paras">
          <p>Vous n'avez pas encore franchi le pas du digital.</p>
          <p>
            Vous pensez peut-être qu'avoir un vrai site web professionnel,
            c'est trop compliqué, très technique, ou carrément hors de prix.
            Résultat ? C'est le statut quo et votre activité stagne.
          </p>
          <p>
            Et pendant ce temps…{' '}
            <strong>
              D'autres professionnels de votre ville, parfois arrivés après
              vous, apparaissent en premier sur Google
            </strong>{' '}
            parce qu'ils ont un site web. Ce sont eux qui récupèrent VOS
            clients. Et vous passez tout simplement à côté de ce chiffre
            d'affaires.
          </p>
          <p>
            Ce n'est pas de votre faute, c'est un métier à part entière. Le
            monde a changé et il est temps pour vous d'occuper votre place sur
            internet en tant que véritable professionnel.
          </p>
        </div>
      </div>
    </section>
  );
}
