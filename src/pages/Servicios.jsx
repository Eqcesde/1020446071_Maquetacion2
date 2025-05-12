
import '../styles/Servicios.css';

function Servicios() {
  const servicios = [
    {
      nombre: 'Manicura Clásica',
      descripcion: 'Limpieza, limado, cutícula y esmalte tradicional.',
      precio: '$40.000',
      imagen: '../../public/clasicas.jpg',
    },
    {
      nombre: 'Manicura Press On',
      descripcion: 'Incluye exfoliación, hidratación y esmaltado.',
      precio: '$90.000',
      imagen: '../../public/PressOn.jpg',
    },
    {
      nombre: 'Uñas Acrílicas',
      descripcion: 'Aplicación con molde, decoración y color a elección.',
      precio: '$80.000',
      imagen: '../../public/Acrilicas.jpg',
    },
    {
      nombre: 'Nail Art Personalizado',
      descripcion: 'Diseños únicos y creativos según tu estilo.',
      precio: '$50.000 a 100.000',
      imagen: '../../public/Arte.jpg',
    },
  ];

  return (
    <div className="servicios-page">
      <h2>Nuestros Servicios</h2>
      <div className="servicio-lista">
        {servicios.map((servicio, index) => (
          <div className="servicio-card" key={index}>
            <img src={servicio.imagen} alt={servicio.nombre} />
            <h3>{servicio.nombre}</h3>
            <p>{servicio.descripcion}</p>
            <p className="precio">{servicio.precio}</p>
            <button>Agendar cita</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;
