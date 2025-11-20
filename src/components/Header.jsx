// src/components/Header.jsx
import Nav from "./Nav.jsx";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext.jsx";
import { CarritoContext } from "../context/CarritoContext.jsx";
import BagIcon from "../assets/BagIcon.jsx";

function Header() {
  const { carrito } = useContext(CarritoContext);
  const { usuario, logout } = useAuthContext();
  const contadorEnCarrito = carrito.length;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header-nad">
      <div className="header-bar">
        <div className="header-brand">
          <Link to="/" className="brand-text" onClick={closeMenu}>
            TIENDA NAD
          </Link>
        </div>

        <div className={`header-right ${menuOpen ? "open" : ""}`}>
          {/* 👇 le pasamos la función de cerrar al Nav */}
          <Nav onLinkClick={closeMenu} />

          <div className="menu-actions">
            {usuario ? (
              <button
                className="general-button-nad"
                onClick={() => { logout(); closeMenu(); }}
              >
                Cerrar Sesión
              </button>
            ) : (
              <Link to="/login" onClick={closeMenu}>
                <button className="general-button-nad">Ingresá</button>
              </Link>
            )}

            <Link to="/carrito" onClick={closeMenu}>
              <button className="general-button-nad btn-cart-nad">
                <BagIcon className="icon-cart-nad" />
                <span>Carrito</span>
                {contadorEnCarrito > 0 && (
                  <span className="cart-count-nad">{contadorEnCarrito}</span>
                )}
              </button>
            </Link>
          </div>
        </div>

        <button className="hamburger-nad" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
