import './Temoignages.css';

const projects = [
  {
    title: 'Site Vitrine — Artisan Plombier',
    category: 'Site Web',
    year: '2025',
    img: null,
    bg: '#111827',
  },
  {
    title: 'Site Vitrine — Boulangerie',
    category: 'Site Web',
    year: '2025',
    img: null,
    bg: '#1c1917',
  },
  {
    title: 'Site Vitrine — Électricien',
    category: 'Site Web',
    year: '2024',
    img: null,
    bg: '#0f172a',
  },
  {
    title: 'Site Vitrine — Restaurant',
    category: 'Site Web',
    year: '2024',
    img: null,
    bg: '#171717',
  },
];

export default function Temoignages() {
  return (
    <section className="tpf" id="temoignages">
      <div className="tpf__bg-dots" />

      <div className="tpf__inner">

        {/* ── Header row ── */}
        <div className="tpf__toprow">
          <h2 className="tpf__title">
            <span className="tpf__title-main">ILS NOUS ONT</span>
            <span className="tpf__title-sub">FAIT CONFIANCE</span>
          </h2>
          <div className="tpf__nav">
            <button className="tpf__nav-btn" aria-label="Précédent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button className="tpf__nav-btn" aria-label="Suivant">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* ── Grid 2×2 ── */}
        <div className="tpf__grid">
          {projects.map((p, i) => (
            <div className="tpf__card" key={i}>

              {/* Image / placeholder */}
              <div
                className="tpf__card-img"
                style={{
                  background: p.img
                    ? `url(${p.img}) center/cover no-repeat`
                    : p.bg,
                }}
              >
                {/* Overlay hover */}
                <div className="tpf__card-overlay">
                  <span className="tpf__card-view">VIEW</span>
                </div>

                {/* Placeholder si pas d'image */}
                {!p.img && (
                  <div className="tpf__placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" width="56" height="56">
                      <rect x="2" y="3" width="20" height="14" rx="2"/>
                      <path d="M8 21h8M12 17v4"/>
                    </svg>
                    <span>Ajoute ton screenshot ici</span>
                  </div>
                )}
              </div>

              {/* Infos sous la carte */}
              <div className="tpf__card-info">
                <p className="tpf__card-title">{p.title}</p>
                <div className="tpf__card-meta">
                  <span className="tpf__card-cat">{p.category}</span>
                  <span className="tpf__card-year">{p.year}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
