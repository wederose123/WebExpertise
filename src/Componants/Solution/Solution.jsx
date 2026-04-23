import { useState, useEffect, useRef } from 'react';
import './Solution.css';

const slides = [
  {
    num: '01',
    tag: 'Visibilité',
    title: 'Site Web Professionnel',
    desc: 'Pour présenter votre activité 24h/24 au monde entier.',
    icon: '🌐',
    color: 'rgba(59,130,246,0.15)',
  },
  {
    num: '02',
    tag: 'Google',
    title: 'Référencement Local',
    desc: "Pour sortir en premier sur Google quand quelqu'un cherche votre métier dans votre ville.",
    icon: '📍',
    color: 'rgba(99,102,241,0.15)',
  },
  {
    num: '03',
    tag: 'Clients',
    title: "Générateur d'appels",
    desc: 'Pour transformer ces visiteurs internet en vrais clients dans votre entreprise.',
    icon: '📞',
    color: 'rgba(14,165,233,0.15)',
  },
];

export default function Solution() {
  const [active, setActive] = useState(0);
  const [key, setKey] = useState(0); // reset animation trigger
  const DURATION = 4000; // ms
  const timerRef = useRef(null);

  const goTo = (idx) => {
    setActive(idx);
    setKey(k => k + 1); // restart CSS animation
  };

  const prev = () => goTo((active - 1 + slides.length) % slides.length);
  const next = () => goTo((active + 1) % slides.length);

  // Auto-advance quand le timer expire
  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      goTo((active + 1) % slides.length);
    }, DURATION);
    return () => clearTimeout(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section className="sol" id="solution">
      <div className="sol__bg-dots" />
      <div className="sol__orb sol__orb--1" />
      <div className="sol__orb sol__orb--2" />

      <div className="sol__inner">

        {/* ── TOP ROW ── */}
        <div className="sol__toprow">
          <div className="sol__head">
            <span className="sol__badge">Notre rôle</span>
            <h2 className="sol__title">
              C'est exactement là que{' '}
              <span className="sol__blue">Web Expertise</span> intervient.
            </h2>
            <p className="sol__lead">
              Chez Web Expertise, nous aidons les commerçants, les artisans et
              les professionnels qui n'y connaissent rien en informatique à
              s'installer sur le web. On vous crée un outil « clé en main »
              pensé pour trois choses :
            </p>
          </div>

          {/* Nav arrows */}
          <div className="sol__nav">
            <button className="sol__nav-btn" onClick={prev} aria-label="Précédent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="sol__nav-btn sol__nav-btn--active" onClick={next} aria-label="Suivant">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── CAROUSEL ── */}
        <div className="sol__track-wrap">
          <div
            className="sol__track"
            style={{ transform: `translateX(calc(-${active * 100}% / ${slides.length}))` }}
          >
            {slides.map((s, i) => {
              const state = i === active ? 'active' : i === (active + 1) % slides.length ? 'next' : 'prev';
              return (
                <div
                  key={i}
                  className={`sol__slide sol__slide--${state}`}
                  onClick={() => goTo(i)}
                  style={{ '--card-color': s.color }}
                >
                  <div className="sol__slide-shine" />

                  {/* Top */}
                  <div className="sol__slide-top">
                    <div className="sol__slide-icon-wrap">
                      <span className="sol__slide-icon">{s.icon}</span>
                    </div>
                    <span className="sol__slide-tag">{s.tag}</span>
                  </div>

                  {/* Num large */}
                  <div className="sol__slide-num">{s.num}</div>

                  {/* Title */}
                  <h3 className="sol__slide-title">{s.title}</h3>

                  {/* Desc */}
                  <p className="sol__slide-desc">{s.desc}</p>

                  {/* Bottom line progress */}
                  <div className="sol__slide-foot">
                    <div className="sol__slide-prog">
                      <div className="sol__slide-prog-fill" key={key} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Indicators ── */}
        <div className="sol__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`sol__dot${i === active ? ' sol__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* ── CTA strip ── */}
        <div className="sol__cta">
          <div className="sol__cta-shine" />
          <div className="sol__cta-left">
            <span className="sol__cta-icon">🛡️</span>
            <div>
              <p className="sol__cta-title"><strong>100% Sans engagement</strong></p>
              <p className="sol__cta-sub">Devis et conseils offerts en 24h</p>
            </div>
          </div>
          <a href="#reservation" className="sol__btn">Je veux un site pour mon entreprise</a>
        </div>

      </div>
    </section>
  );
}
