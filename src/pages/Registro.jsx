// src/pages/Registro.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Registro.css';

function Registro() {
  return (
    <div className="registro-container">
      <h2>Crear Cuenta</h2>
      <form className="registro-form">
        <label htmlFor="usuario">Usuario</label>
        <input type="text" id="usuario" name="usuario" required />

        <label htmlFor="nombre">Nombre completo</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="correo">Correo electrónico</label>
        <input type="email" id="correo" name="correo" required />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Registrarse</button>

        <p className="login-link">
          ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </form>
    </div>
  );
}

export default Registro;
