import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext.jsx";

const Carrito = () => {
  const {carrito, eliminarDelCarrito} = useContext(CarritoContext);

  return (
    <div className="carrito-container-nad">
      <h2>Carrito</h2>
        <ul className="carrito-lista-nad">
          {carrito.map((producto, indice) => (
            <div key={indice}>
              <li className="carrito-card">
                <div className="carrito-img-box">
                  <img src={producto.image} alt={producto.title} />
                </div>

                <div className="carrito-info">
                  <h3>{producto.title}</h3>
                  <p className="carrito-desc">{producto.description}</p>
                  <p className="carrito-price">${producto.price}</p>

                  <button
                    className="carrito-delete"
                    onClick={() => eliminarDelCarrito(indice)}
                  >
                    ✕
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
        <div className="carrito-total">
          <p>Total: ${carrito.reduce((acc,p)=>acc + Number(p.price),0)}</p>
          <button className="btn-comprar-nad">Finalizar compra</button>
        </div>
    </div>
  );
};

export default Carrito;