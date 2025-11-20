//15 Navbar
// Los enlaces presentados en el navbar deben ser funcionales
// src/components/Nav.jsx
// Navbar responsive con hamburguesa
// src/components/Nav.jsx
// src/components/Nav.jsx
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Nav = ({ onLinkClick }) => {
  const { usuario } = useAuthContext();
  const esAdmin = usuario === "admin";

  // por si algún día lo usás sin pasarle la prop
  const handleClick = () => {
    if (onLinkClick) onLinkClick();
  };

  return (
    <nav className="nav-links-nad">
      <Link to="/" className="general-link-nad" onClick={handleClick}>
        Inicio
      </Link>
      <Link to="/eventos" className="general-link-nad" onClick={handleClick}>
        Eventos
      </Link>
      <Link to="/novedades" className="general-link-nad" onClick={handleClick}>
        Novedades
      </Link>
      <Link to="/reservas" className="general-link-nad">
        Reservas
      </Link>
      <Link to="/contacto" className="general-link-nad" onClick={handleClick}>
        Contacto
      </Link>
      {esAdmin && (
        <Link to="/admin" className="general-link-nad" onClick={handleClick}>
          Admin
        </Link>
      )}
    </nav>
  );
};

export default Nav;
