import Logo from '../../assets/Logo.png';
import '../../styles/Header/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo Web Expertise" />
      </div>

      <nav className="header__nav">
        <a href="#devis" className="btn-devis">
          Demande de devis
        </a>
        <a href="#rdv" className="btn-rdv">
          Prendre un RDV
        </a>
      </nav>
    </header>
  );
}
