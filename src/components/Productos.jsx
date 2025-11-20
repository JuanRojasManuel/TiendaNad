//1 Crear un componente para listar los productos disponibles.
//7 Integración con una API.
//9 Manejo de efectos secundarios con useEffect.
//10 Estado de carga y errores al cargar productos.
//14 Estado de carga y manejo de errores.
import { Link } from 'react-router-dom';

import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext.jsx";
import { useProductosContext } from "../context/ProductosContext.jsx";
// Importo Destacados Swiper.
import Destacados from "../Pages/Destacados.jsx";
const Productos = () =>  {
    
    const { productos, cargando, error } = useProductosContext();
    
    const {agregarAlCarrito } = useContext(CarritoContext);

    if(error) return <p>{error}</p>
    if(cargando) return <p>Estamos cargando sus productos.</p>

    return(
    <>
    <div className="productos-container-nad">
    <Destacados />
       <h2 className="destacados-title">Todos nuestros productos</h2>
        <ul className="productos-lista-nad">
            {productos.map(producto =>(
                <li className="producto-item-nad" key={producto.id}>
                <img className="producto-img-nad"
                src={producto.image}
                alt={producto.title} />
                <h3 className="producto-nombre-nad" >{producto.title}</h3>
                {/* <p className="producto-categoria-nad">Categoría: {producto.category}</p>*/}
                <p className="producto-descripcion-nad">{producto.description}</p>
                <p className="producto-precio-nad">${producto.price}</p>
                {/*<div className="producto-rating-nad">
                {producto.rating.rate} / 5
                <span className="producto-rating-count"> ({producto.rating.count} reseñas)</span>*/}
                <div className="producto-botonera-nad">
                    <button className="general-button-nad" onClick={() => agregarAlCarrito (producto)}>Pedir</button>
                    <Link className="general-button-nad" to={`/productos/${producto.id}`} >Ver mas</Link>
                </div>
                {/*</div>*/}
                </li>
            ))}
        </ul>
    </div>
    </>
    );
}
export default Productos;