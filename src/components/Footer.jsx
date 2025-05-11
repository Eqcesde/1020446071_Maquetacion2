// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Studio M. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
