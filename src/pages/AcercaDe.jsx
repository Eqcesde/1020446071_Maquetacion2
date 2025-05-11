// src/pages/AcercaDe.jsx
import React from 'react';
import '../styles/AcercaDe.css';

function AcercaDe() {
  return (
    <div className="acerca-container">
      <h2>Acerca de Nosotros</h2>

      <section className="historia">
        <h3>Nuestra Historia</h3>
        <p>
          Studio M nació en 2018 con la idea de ofrecer un espacio donde cada clienta
          pueda sentirse especial, relajada y hermosa. Con el tiempo, hemos crecido gracias
          al cariño y la confianza de nuestras clientas fieles.
        </p>
      </section>

      <section className="filosofia">
        <h3>Nuestra Filosofía</h3>
        <ul>
          <li>✨ Atención personalizada</li>
          <li>💅 Calidad en cada servicio</li>
          <li>🌿 Higiene y productos seguros</li>
          <li>🎨 Creatividad y pasión por el diseño</li>
        </ul>
      </section>

      <section className="testimonios">
        <h3>Lo que dicen nuestras clientas</h3>
        <div className="testimonio-card">
          <p>"¡Me encantan mis uñas cada vez que voy! Siempre tienen diseños únicos."</p>
          <span>- Karla R.</span>
        </div>
        <div className="testimonio-card">
          <p>"Excelente trato, lugar limpio y muy profesional. Lo recomiendo 100%."</p>
          <span>- Mariana G.</span>
        </div>
        <div className="testimonio-card">
          <p>"Las chicas son súper creativas y amables. Es mi lugar favorito."</p>
          <span>- Alejandra M.</span>
        </div>
      </section>
    </div>
  );
}

export default AcercaDe;
