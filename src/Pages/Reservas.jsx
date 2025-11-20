//Reservas usando MockApi
import { useEffect, useState } from "react";

const API_RESERVAS = "https://68def7d5898434f41356757f.mockapi.io/reservas";

const Reservas = () => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [comentario, setComentario] = useState("");

  const [reservas, setReservas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Cargar reservas al montar
  useEffect(() => {
    const cargarReservas = async () => {
      try {
        setCargando(true);
        setError("");
        const res = await fetch(API_RESERVAS);

        if (!res.ok) throw new Error("Error HTTP " + res.status);

        const datos = await res.json();
        setReservas(datos);
      } catch (e) {
        console.error("Error al cargar reservas:", e);
        setError("Hubo un problema al cargar las reservas.");
      } finally {
        setCargando(false);
      }
    };

    cargarReservas();
  }, []);

  const manejarSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setError("");

    if (!nombre || !fecha || !hora) {
      setMensaje("Completá nombre, fecha y hora para reservar.");
      return;
    }

    const nuevaReserva = { nombre, fecha, hora, comentario };

    try {
      const res = await fetch(API_RESERVAS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaReserva),
      });

      if (!res.ok) throw new Error("Error al crear reserva");

      const reservaCreada = await res.json();
      setReservas((prev) => [...prev, reservaCreada]);
      setMensaje("¡Tu cita fue reservada!");

      setNombre("");
      setFecha("");
      setHora("");
      setComentario("");
    } catch (e) {
      console.error("Error al reservar:", e);
      setError("Hubo un problema al reservar. Intentalo de nuevo.");
    }
  };

  const cancelarReserva = async (id) => {
    const confirmar = window.confirm("¿Querés cancelar esta reserva?");
    if (!confirmar) return;

    try {
      setError("");
      const res = await fetch(`${API_RESERVAS}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Error al cancelar reserva");

      setReservas((prev) => prev.filter((r) => r.id !== id));
    } catch (e) {
      console.error("Error al cancelar:", e);
      setError("No se pudo cancelar la reserva.");
    }
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
          {error && <p className="reservas-msg" style={{ color: "crimson" }}>{error}</p>}

          <button type="submit" className="general-button-nad">
            Reservar
          </button>
        </form>

        <div className="reservas-lista">
          <h3>Próximas reservas</h3>

          {cargando && <p>Cargando reservas...</p>}

          {!cargando && reservas.length === 0 && (
            <p className="reservas-empty">Todavía no hay reservas.</p>
          )}

          {!cargando && reservas.length > 0 && (
            <ul>
              {reservas.map((reserva) => (
                <li key={reserva.id}>
                  <strong>{reserva.nombre}</strong>
                  <span>
                    {reserva.fecha} – {reserva.hora}
                  </span>
                  {reserva.comentario && <small>{reserva.comentario}</small>}

                  <button
                    type="button"
                    className="general-button-nad"
                    style={{ alignSelf: "flex-start", marginTop: "0.3rem" }}
                    onClick={() => cancelarReserva(reserva.id)}
                  >
                    Cancelar
                  </button>
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
