//2 Usar el hook useState para manejar el estado del carrito.
//3 Implementar un evento de clic que permita agregar y eliminar productos al carrito.
//4 Mostrar el carrito con los productos seleccionados en otro componente.
//5 Tener por separado el componente Producto del componente Carrito como se explico en la clase de consulta. 
//8 Gestión del estado con useState.

import { useState } from 'react';
import Productos from './Productos.jsx';
import Carrito from './Carrito.jsx';

const Inicio = () => {
  const [carrito, setCarrito] = useState([]);
  
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);   
  };
  
  const eliminarDelCarrito = (indiceAEliminar) => {
    setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
  };

  return(
    <>
      <Productos agregarProducto={agregarAlCarrito}/>
      <Carrito 
        productosEnCarrito={carrito}
        productosEliminados={eliminarDelCarrito}
      />
    </>
  );
}

export default Inicio;