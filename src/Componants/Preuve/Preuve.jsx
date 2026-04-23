import './Preuve.css';

export default function Preuve() {
  return (
    <section className="pv">
      <div className="pv__bg-dots" />
      <div className="pv__orb pv__orb--1" />
      <div className="pv__orb pv__orb--2" />

      <div className="pv__inner">

        {/* Header */}
        <div className="pv__head">
          <h2 className="pv__title">
            Ils ont franchi le pas du web{' '}
            <span className="pv__blue">avec succès</span>
          </h2>
        </div>

        {/* Deux colonnes */}
        <div className="pv__grid">

          {/* ── Colonne gauche : Vidéo témoignage ── */}
          <div className="pv__col">

            {/* Cadre vidéo */}
            <div className="pv__video-card">
              <div className="pv__card-shine" />

              {/* Placeholder vidéo — remplace src par ton lien */}
              <div className="pv__video-wrap">
                <div className="pv__video-bg" />
                <button className="pv__play-btn" aria-label="Lire le témoignage">
                  <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
                <div className="pv__video-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                  </svg>
                  Témoignage commerçant
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="pv__quote-card">
              <div className="pv__card-shine" />
              <span className="pv__quote-mark">"</span>
              <p className="pv__quote-text">
                Je n'y connaissais absolument rien à internet et je n'avais
                aucun site. L'équipe Web Expertise a tout codé et réglé.
                Aujourd'hui, je reçois des tonnes d'appels tous les jours
                via Google.
              </p>
            </div>
          </div>

          {/* ── Colonne droite : Preuves visuelles ── */}
          <div className="pv__col">

            {/* Cadre image preuve */}
            <div className="pv__proof-card">
              <div className="pv__card-shine" />

              {/* Placeholder image — remplace par tes vraies captures */}
              <div className="pv__proof-wrap">
                <div className="pv__proof-slot pv__proof-slot--main">
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" width="44" height="44">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                  <span>Capture Google Maps<br/>1ère page</span>
                </div>
                <div className="pv__proof-slot pv__proof-slot--sub">
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" width="36" height="36">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                  <span>Courbe des<br/>appels</span>
                </div>
              </div>
            </div>

            {/* Résultat */}
            <div className="pv__result-card">
              <div className="pv__card-shine" />
              <div className="pv__result-icon">✓</div>
              <p className="pv__result-text">
                <strong>Résultat :</strong> un site full-code hyper rapide
                = de nouveaux clients au quotidien.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
