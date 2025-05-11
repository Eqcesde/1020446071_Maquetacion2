// src/pages/Home.jsx
import React from 'react';
import Banner from '../components/Banner';
import PromocionCard from '../components/PromocionCard';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="banner">
        <h1>Bienvenida a Studio M</h1>
        By Milena Nails
        <p>Tu lugar ideal para lucir unas uñas increíbles. ¡Déjate consentir!</p>
      </section>

      <section className="descripcion">
        <h2>Sobre Nuestro Spa</h2>
        <p>
          Somos especialistas en cuidado y diseño de uñas. Utilizamos productos de alta calidad,
          técnicas modernas y un ambiente relajante para darte la mejor experiencia posible.
        </p>
      </section>

      <section className="servicios">
        <h2>Servicios Destacados</h2>
        <div className="cards-container">
          <div className="card">
            <img src="../../public/Imagen de WhatsApp 2025-05-10 a las 18.06.32_6ca909d0.jpg" alt="Manicura" />
            <h3>Manicura Profesional</h3>
            <p>Uñas limpias, saludables y elegantes.</p>
          </div>
          <div className="card">
            <img src="../../public/pedicure.jpg" alt="Pedicura" />
            <h3>Pedicura Spa</h3>
            <p>Relaja tus pies con un tratamiento completo.</p>
          </div>
          <div className="card">
            <img src="../../public/mujer-uñas.jpg" alt="Nail Art" />
            <h3>Nail Art Creativo</h3>
            <p>Diseños únicos y personalizados para tus uñas.</p>
          </div>
        </div>
      </section>

      <section className="promociones">
        <h2>Promociones Activas</h2>
        <p>💅 2x1 en manicura los miércoles</p>
        <p>💎 15% de descuento en tu primera visita</p>
      </section>
    </div>
  );
}

export default Home;
