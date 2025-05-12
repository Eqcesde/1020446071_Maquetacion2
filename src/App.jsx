import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import AcercaDe from './pages/AcercaDe';
import Login from './pages/Login';
import Registro from './pages/Registro';


function App() {
  return (
    <Router>
      <Navbar />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/acerca" element={<AcercaDe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
