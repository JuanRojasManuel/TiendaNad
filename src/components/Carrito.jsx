import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext.jsx";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();
  
  const handleVaciar = () => {
    vaciarCarrito();
    toast.info("Carrito vaciado", { icon: "🧹" });
  };

  const handleFinalizarCompra = () => {
    if (carrito.length === 0) {
      toast.error("El carrito está vacío", { icon: "⚠️" });
      return;
    }


    toast.loading("Procesando compra...", { toastId: "compra" });

    setTimeout(() => {

      toast.update("compra", {
        render: "¡Compra realizada con éxito!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
        icon: "🧾",
      });


      vaciarCarrito();
      setTimeout(() => {
        navigate("/gracias");
      }, 700);
    }, 2000);
  };

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
        <p>Total: ${carrito.reduce((acc, p) => acc + Number(p.price), 0)}</p>

        <div className="producto-botonera-nad">
          <button className="btn-comprar-nad" onClick={handleFinalizarCompra}>
            Finalizar compra
          </button>

          <button className="btn-comprar-nad" onClick={handleVaciar}>
            Vaciar carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;