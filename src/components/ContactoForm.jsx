import '../styles/ContactoForm.css';

function ContactoForm() {
  return (
    <form className="contacto-form">
      <label htmlFor="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" required />

      <label htmlFor="correo">Correo electrónico</label>
      <input type="email" id="correo" name="correo" required />

      <label htmlFor="mensaje">Mensaje</label>
      <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

      <button type="submit">Enviar mensaje</button>
    </form>
  );
}

export default ContactoForm;
