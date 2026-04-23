export default function Fondateur() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="fondateur__inner">
          <div className="fondateur__photo">
            Votre photo ici
          </div>

          <div className="fondateur__content">
            <p className="section__label">Le fondateur</p>
            <h2>Qui est derrière Web Expertise ?</h2>

            <p>
              Je m'appelle <strong style={{ color: '#e8eaf0' }}>[Votre Prénom]</strong> et
              je suis développeur passionné. Pendant des années, j'ai vu des
              commerçants se faire vendre des sites lents, chers et inefficaces
              par des agences qui ne se souciaient pas de leurs vrais besoins.
            </p>

            <p>
              Aujourd'hui, au sein de Web Expertise, on a décidé de remettre
              l'artisanat du web et la performance au centre de notre métier.
            </p>

            <div className="fondateur__conviction">
              <span style={{ fontSize: '1.4rem' }}>💡</span>
              <p>
                <strong style={{ color: '#e8eaf0' }}>Notre conviction :</strong> un
                site web ne doit pas être une charge, mais votre meilleur
                employé commercial, ouvert 24h/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
