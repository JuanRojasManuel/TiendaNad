const Carrito = ({ productosEnCarrito, productosEliminados }) => {
  return (
    <div className="carrito-container-nad">
      <h2>Carrito</h2>
        <ul className="carrito-lista-nad">
          {productosEnCarrito.map((producto, indice) => (
            <div key={indice}>
              <li className="carrito-item-nad" key={producto.id}>
                  <img
                  src={producto.image}
                  alt={producto.title}
                  className="carrito-img-nad"
                  />
                  <h3 className="carrito-nombre-nad" >{producto.title}</h3>
                  <p className="carrito-descripcion-nad">{producto.description}</p>
                  <p className="carrito-precio-nad">${producto.price}</p>
                  <button className="general-button-nad" onClick={() => productosEliminados(indice)}>Eliminar</button>
              </li>
            </div>
          ))}
        </ul>
    </div>
  );
};

export default Carrito;