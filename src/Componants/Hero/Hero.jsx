import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero2">

      {/* Dot grid + glow */}
      <div className="hero2__bg-dots" />
      <div className="hero2__bg-glow" />

      {/* Curved SVG lines */}
      <svg className="hero2__curves" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <path d="M -60 200 C 100 300, 80 450, -40 600" stroke="rgba(59,130,246,0.18)" strokeWidth="1.5" fill="none" />
        <path d="M -20 150 C 160 280, 140 480, 0 650" stroke="rgba(59,130,246,0.10)" strokeWidth="1" fill="none" />
        <path d="M 1340 100 C 1180 250, 1200 430, 1360 580" stroke="rgba(59,130,246,0.18)" strokeWidth="1.5" fill="none" />
        <path d="M 1300 80 C 1120 240, 1140 460, 1320 620" stroke="rgba(59,130,246,0.10)" strokeWidth="1" fill="none" />
        <path d="M 400 -30 C 500 180, 780 180, 880 -30" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
        <circle cx="1100" cy="580" r="220" stroke="rgba(59,130,246,0.06)" strokeWidth="1" fill="none" />
        <circle cx="1100" cy="580" r="150" stroke="rgba(59,130,246,0.05)" strokeWidth="1" fill="none" />
      </svg>

      {/* Dot navigation top right */}
      <div className="hero2__dots">
        {[...Array(8)].map((_, i) => (
          <span key={i} className={`hero2__dot${i === 0 ? ' hero2__dot--active' : ''}`} />
        ))}
      </div>

      {/* Main layout */}
      <div className="hero2__container">

        {/* LEFT */}
        <div className="hero2__left">
          <h1 className="hero2__headline">
            Quand quelqu'un cherche un professionnel de votre métier sur Google…{' '}
            <strong>
              tombe-t-il sur vous ou sur vos <span className="hero2__highlight">concurrents ?</span>
            </strong>
          </h1>

          <a href="#reservation" className="hero2__cta">Je veux un site pour mon entreprise</a>

          <div className="hero2__social-proof">
            <p className="hero2__clients">
              <span className="hero2__shield">🛡️</span>
              <strong>100% Sans engagement</strong> — Devis et conseils offerts
            </p>
          </div>
        </div>

        {/* RIGHT — VSL */}
        <div className="hero2__right">
          <p className="hero2__watch-label">
            <span className="hero2__arrow">↓</span> WATCH NOW <span className="hero2__arrow">↓</span>
          </p>

          <div className="hero2__video-wrapper">
            <div className="hero2__video-overlay">
              <div className="hero2__video-bg" />

              <button className="hero2__play-btn" aria-label="Lire la vidéo">
                <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              <div className="hero2__expert-badge">
                <img
                  className="hero2__expert-avatar"
                  src="https://i.pravatar.cc/48?img=11"
                  alt="Expert"
                />
                <div>
                  <p className="hero2__expert-name">Web Expertise</p>
                  <p className="hero2__expert-title">Votre partenaire digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="hero2__bottom-bar">
        <div className="hero2__features">
          {[
            '4.9/5 Avis Clients',
            '+150 Commerçants Accompagnés',
            'Spécialiste Visibilité Locale',
          ].map((item) => (
            <span key={item} className="hero2__feature-item">
              <svg className="hero2__check" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </span>
          ))}
        </div>

        <div className="hero2__trustpilot">
          <span className="hero2__trustpilot-logo">★ Trustpilot</span>
          <div className="hero2__stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`hero2__star${i < 4 ? ' hero2__star--filled' : ' hero2__star--half'}`} viewBox="0 0 20 20" width="18" height="18" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
