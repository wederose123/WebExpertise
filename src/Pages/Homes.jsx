import '../styles/Sections.css';
import Hero from '../Componants/Hero/Hero';
import SavoirFaire from '../Componants/SavoirFaire/SavoirFaire';
import Problemes from '../Componants/Problemes/Problemes';
import Solution from '../Componants/Solution/Solution';
import Services from '../Componants/Services/Services';
import Fondateur from '../Componants/Fondateur/Fondateur';
import Preuve from '../Componants/Preuve/Preuve';
import Temoignages from '../Componants/Temoignages/Temoignages';
import Reservation from '../Componants/Reservation/Reservation';
import Accompagnement from '../Componants/Accompagnement/Accompagnement';
import CTAFinale from '../Componants/CTAFinale/CTAFinale';

export default function Homes() {
  return (
    <main>
      <Hero />
      <SavoirFaire />
      <Problemes />
      <Solution />
      <Services />
      <Fondateur />
      <Preuve />
      <Temoignages />
      <Reservation />
      <Accompagnement />
      <CTAFinale />
    </main>
  );
}
