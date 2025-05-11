// src/components/Promocion.jsx
import React from 'react';
import '../styles/Promocion.css';

function PromocionCard({ texto }) {
  return (
    <div className="promocion">
      <p>{texto}</p>
    </div>
  );
}

export default PromocionCard;
