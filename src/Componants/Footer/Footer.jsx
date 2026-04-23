import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__bg-dots" />

      <div className="footer__inner">

        {/* ── Top ── */}
        <div className="footer__top">

          {/* Brand */}
          <div className="footer__brand">
            <p className="footer__brand-name">Web Expertise</p>
            <p className="footer__brand-desc">
              Nous aidons les commerçants, artisans et professionnels à
              s'installer sur le web avec un site clé en main, optimisé
              pour Google et conçu pour générer de vrais appels clients.
            </p>
            <div className="footer__contact">
              <a href="mailto:webexpertise75@gmail.com" className="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                webexpertise75@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__nav-group">
            <p className="footer__nav-title">Navigation</p>
            <ul className="footer__nav-list">
              <li><a href="#solution">Nos services</a></li>
              <li><a href="#temoignages">Réalisations</a></li>
              <li><a href="#reservation">Réserver un appel</a></li>
            </ul>
          </div>

          {/* Légal */}
          <div className="footer__nav-group">
            <p className="footer__nav-title">Légal</p>
            <ul className="footer__nav-list">
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/conditions-generales">Conditions générales</Link></li>
              <li><Link to="/politique-confidentialite">Politique de confidentialité</Link></li>
              <li><Link to="/conditions-utilisation">Conditions d'utilisation</Link></li>
            </ul>
          </div>

        </div>

        {/* ── Séparateur ── */}
        <div className="footer__divider" />

        {/* ── Bottom ── */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Web Expertise. Tous droits réservés.
          </p>
          <div className="footer__legal-links">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/politique-confidentialite">Confidentialité</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
