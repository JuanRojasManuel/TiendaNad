//1 Crear un componente para listar los productos disponibles.
//7 Integración con una API.
//9 Manejo de efectos secundarios con useEffect.

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Productos = ({ agregarProducto }) =>  {
    const [producto, setProducto] = useState([]);
    //const [productosuma, setProductosuma] = useState([0]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products') 
        .then(respuesta => respuesta.json())
        .then(datos => {
            setProducto(datos);
      //      setProductosuma(productosuma+1)
            setCargando(false);
    })
    .catch(error => {
    setError('Error al cargar tus productos')
    setCargando(false);
    })

},[]);

    if(cargando)
        return <p>Estamos cargando sus productos.</p>
    if(error)
        return <p>{error}</p>
    return(
    <>
    <div className="productos-container-nad">
        <h2>Productos</h2>
        <ul className="productos-lista-nad">
            {producto.map(producto =>(
                <li className="producto-item-nad" key={producto.id}>
                <img
                src={producto.image}
                alt={producto.title}
                className="producto-img-nad"
                />
                <h3 className="producto-nombre-nad" >{producto.title}</h3>
                <p className="producto-categoria-nad">Categoría: {producto.category}</p>
                <p className="producto-descripcion-nad">{producto.description}</p>
                <p className="producto-precio-nad">${producto.price}</p>
                <div className="producto-rating-nad">
                {producto.rating.rate} / 5
                <span className="producto-rating-count"> ({producto.rating.count} reseñas)</span>
                <div className="producto-botonera-nad">
                    <button className="general-button-nad" onClick={() => agregarProducto(producto)}>Agregar</button>
                    <Link className="general-button-nad" to={`/producto/${producto.id}`} >Detalles</Link>
                </div>
                </div>
                </li>
            ))}
        </ul>
    </div>
    </>
    );
}
export default Productos;