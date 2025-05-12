import '../styles/ServicioCard.css';

function ServicioCard({ titulo, descripcion, precio, imagen }) {
  return (
    <div className="servicio-card">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <p className="precio">{precio}</p>
      <button>Agendar cita</button>
    </div>
  );
}

export default ServicioCard;
