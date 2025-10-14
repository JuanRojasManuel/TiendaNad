//13 Navegar entre productos
//14 Estado de carga y manejo de errores.
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductoDetalle = () => {
  
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(respuesta => respuesta.json())
      .then(dato => setProducto(dato))
      .catch(error => {
      setError('Error al cargar el detalle de tu producto')
      })
},[id]);

  if(error)
        return <p>{error}</p>
  if(!producto)
    return <p>Cargando ......</p>
  
  return(
    <>
        <h2>{producto.title}</h2>
        <div className="detalle-nad">
                <div className="detalle-img-nad" key={producto.id}>
                  <img
                  src={producto.image}
                  alt={producto.title}
                  className="detalle-img2-nad"
                  />
                </div>
                <div className="detalle-datos-nad">
                  <p className="producto-categoria-nad">Categoría: {producto.category}</p>
                  <p className="detalle-descripcion-nad">{producto.description}</p>
                  <p className="producto-precio-nad">${producto.price}</p>
                  <div className="producto-rating-nad">
                  {producto.rating.rate} / 5
                  <span className="producto-count-nad"> ({producto.rating.count} reseñas)</span>
                  </div>
                </div>
              </div>
    </>
    
  );
}

export default ProductoDetalle;