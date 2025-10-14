//15 Navbar
//Los enlaces presentados en el navbar deben ser funcionales, si tengo Inicio debe mostrar Inicio..

import { Link } from "react-router-dom";
const NavBar = () => {
  return(
    <nav>
      <div className="menu-nav-nad">
        <div className="menu-item-nad">
          <Link to="/" className="general-button-nad">Inicio</Link>
        </div>
        <div className="menu-item-nad">
          <Link to="/eventos" className="general-button-nad">Eventos</Link>
        </div>
        <div className="menu-item-nad">
          <Link to="/novedades" className="general-button-nad">Novedades</Link>
        </div>
        <div className="menu-item-nad">
          <Link to="/contacto" className="general-button-nad">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;