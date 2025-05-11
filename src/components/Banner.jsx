// src/components/Banner.jsx
import React from 'react';
import '../styles/Banner.css';

function Banner({ titulo, subtitulo }) {
  return (
    <div className="banner">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
    </div>
  );
}

export default Banner;
