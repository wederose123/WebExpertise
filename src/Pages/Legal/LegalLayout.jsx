import { Link } from 'react-router-dom';
import Footer from '../../Componants/Footer/Footer';
import './LegalLayout.css';

export default function LegalLayout({ title, children }) {
  return (
    <>
      <div className="legal">
        <div className="legal__bg-dots" />

        {/* Back button */}
        <div className="legal__topbar">
          <div className="legal__topbar-inner">
            <Link to="/" className="legal__back">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
              Retour
            </Link>
            <span className="legal__brand">Web Expertise</span>
          </div>
        </div>

        <div className="legal__inner">
          <h1 className="legal__title">{title}</h1>
          <div className="legal__body">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
