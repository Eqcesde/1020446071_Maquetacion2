
import '../styles/Contacto.css';

function Contacto() {
  return (
    <div className="contacto-container">
      <h2>Contáctanos</h2>

      <div className="info-contacto">
        <p><strong>Teléfono:</strong> (+57) 320 844 3691</p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/573113819400" target="_blank" rel="noreferrer">Enviar mensaje</a></p>
        <p><strong>Ubicación:</strong> Calle 50a 38 20, Bello-Antioquia</p>
        <p><a href="https://www.google.com/maps" target="_blank" rel="noreferrer">Ver en Google Maps</a></p>
      </div>

      <form className="formulario-contacto">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="correo">Correo electrónico</label>
        <input type="email" id="correo" name="correo" required />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
}

export default Contacto;
