// import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form className="login-form">
        <label htmlFor="email">Usuario o Correo</label>
        <input type="text" id="email" name="email" required />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Iniciar Sesión</button>

        <p className="registro-link">
          ¿No tienes cuenta? <Link to="/registro">Crear cuenta</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
