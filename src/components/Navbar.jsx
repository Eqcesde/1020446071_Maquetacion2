
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">STUDIO M</div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/acerca">Acerca de</Link></li>
        <li><Link to="/login">Iniciar sesión</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
