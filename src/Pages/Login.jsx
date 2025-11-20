import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext.jsx";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const manejarSubmit = (evento) => {
    evento.preventDefault();
    if (usuario === "admin" && contrasenia === "1234") {
      login(usuario);
      navigate("/admin");
    } else {
      alert("Usuario o contraseña inválido");
    }
  };

  return (
    <section className="login-body">
    <section className="login-page">
      <div className="login-card">

        <form className="login-form" onSubmit={manejarSubmit}>
          <h2>Iniciar sesión</h2>

          <label>
            Usuario
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </label>

          <label>
            Contraseña
            <input
              type="password"
              value={contrasenia}
              onChange={(e) => setContrasenia(e.target.value)}
              required
            />
          </label>

          <button className="general-button-nad" type="submit">Iniciar sesión</button>
        </form>
      </div>
    </section>
    </section>
  );
};

export default Login;