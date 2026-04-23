import { Routes, Route } from 'react-router-dom';
import Homes from './Pages/Homes';
import Footer from './Componants/Footer/Footer';
import MentionsLegales from './Pages/Legal/MentionsLegales';
import ConditionsGenerales from './Pages/Legal/ConditionsGenerales';
import PolitiqueConfidentialite from './Pages/Legal/PolitiqueConfidentialite';
import ConditionsUtilisation from './Pages/Legal/ConditionsUtilisation';
import './styles/index.css';

function App() {
  return (
    <Routes>
      {/* Page principale */}
      <Route path="/" element={
        <>
          <Homes />
          <Footer />
        </>
      } />

      {/* Pages légales (Footer inclus dans LegalLayout) */}
      <Route path="/mentions-legales"           element={<MentionsLegales />} />
      <Route path="/conditions-generales"       element={<ConditionsGenerales />} />
      <Route path="/politique-confidentialite"  element={<PolitiqueConfidentialite />} />
      <Route path="/conditions-utilisation"     element={<ConditionsUtilisation />} />
    </Routes>
  );
}

export default App;
