import { useEffect, useRef } from 'react';
import './Reservation.css';

export default function Reservation() {
  const iframeRef = useRef(null);

  // Ajustement dynamique de la hauteur de l'iframe via postMessage
  useEffect(() => {
    const iframe = iframeRef.current;
    const handler = (e) => {
      if (e.origin !== 'https://app.myleadsnow.com') return;
      if (!e.data || e.data.type !== 'mln:embed:height' || typeof e.data.height !== 'number') return;
      if (iframe && e.source === iframe.contentWindow) {
        iframe.style.height = e.data.height + 'px';
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <section className="resa" id="reservation">
      <div className="resa__bg-dots" />
      <div className="resa__orb resa__orb--1" />
      <div className="resa__orb resa__orb--2" />

      <div className="resa__inner">

        {/* ── Header ── */}
        <div className="resa__head">
          <span className="resa__badge">Réservation</span>
          <h2 className="resa__title">
            Prenez votre <span className="resa__blue">rendez-vous</span> gratuit
          </h2>
          <p className="resa__lead">
            Un appel de 30 min pour faire le point sur votre visibilité locale
            et vous proposer une solution adaptée. Sans engagement.
          </p>
        </div>

        {/* ── Calendrier pleine largeur ── */}
        <iframe
          ref={iframeRef}
          id="mln-booking-rdv-avec-web-expertise-ida9s"
          src="https://app.myleadsnow.com/book/rdv-avec-web-expertise-ida9s/widget"
          title="Réserver un créneau"
          scrolling="no"
          allowTransparency={true}
          className="resa__iframe"
        />
      </div>
    </section>
  );
}
