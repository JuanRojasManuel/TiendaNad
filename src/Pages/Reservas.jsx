import { useState } from "react";

const Reservas = () => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [comentario, setComentario] = useState("");
  const [reservas, setReservas] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !fecha || !hora) {
      setMensaje("Completá nombre, fecha y hora para reservar.");
      return;
    }

    const nuevaReserva = {
      id: Date.now(),
      nombre,
      fecha,
      hora,
      comentario,
    };

    setReservas((prev) => [...prev, nuevaReserva]);
    setMensaje("¡Tu cita fue reservada!");

    // limpiar form
    setNombre("");
    setFecha("");
    setHora("");
    setComentario("");
  };

  return (
    <div className="reservas-page">
      <h2>Reservar cita</h2>
      <p className="reservas-sub">
        Elegí día y horario para tu próxima visita a <strong>Tienda Nad</strong>.
      </p>

      <div className="reservas-wrapper">
        <form className="reservas-form" onSubmit={manejarSubmit}>
          <label>
            Nombre
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
            />
          </label>

          <div className="reservas-row">
            <label>
              Fecha
              <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </label>

            <label>
              Hora
              <input
                type="time"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
            </label>
          </div>

          <label>
            Comentario (opcional)
            <textarea
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Ej: mesa cerca de la ventana, reunión de trabajo, etc."
              rows={3}
            />
          </label>

          {mensaje && <p className="reservas-msg">{mensaje}</p>}

          <button type="submit" className="general-button-nad">
            Reservar
          </button>
        </form>

        <div className="reservas-lista">
          <h3>Próximas reservas</h3>
          {reservas.length === 0 ? (
            <p className="reservas-empty">Todavía no hay reservas.</p>
          ) : (
            <ul>
              {reservas.map((reserva) => (
                <li key={reserva.id}>
                  <strong>{reserva.nombre}</strong>
                  <span>
                    {reserva.fecha} – {reserva.hora}
                  </span>
                  {reserva.comentario && (
                    <small>{reserva.comentario}</small>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservas;
