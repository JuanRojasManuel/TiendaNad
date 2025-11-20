import { useState } from "react";
import FormProducto from "./FormProducto.jsx";
import { useProductosContext } from "../context/ProductosContext.jsx";

const GestionProductos = () => {
  const { productos, eliminarProducto } = useProductosContext();

  const [mostrarForm, setMostrarForm] = useState(false);
  const [modoFormulario, setModoFormulario] = useState("agregar");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const [mostrarModalEliminar, setMostrarModalEliminar] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  const abrirFormularioAgregar = () => {
    setModoFormulario("agregar");
    setProductoSeleccionado(null);
    setMostrarForm(true);
  };

  const abrirFormularioEditar = (producto) => {
    setModoFormulario("editar");
    setProductoSeleccionado(producto);
    setMostrarForm(true);
  };

  const cerrarFormulario = () => {
    setMostrarForm(false);
    setProductoSeleccionado(null);
  };

  // 🔴 Modal eliminar
  const abrirModalEliminar = (producto) => {
    setProductoAEliminar(producto);
    setMostrarModalEliminar(true);
  };

  const cancelarEliminar = () => {
    setMostrarModalEliminar(false);
    setProductoAEliminar(null);
  };

  const confirmarEliminar = () => {
    if (productoAEliminar) {
      eliminarProducto(productoAEliminar.id);
    }
    setMostrarModalEliminar(false);
    setProductoAEliminar(null);
  };

  return (
    <div className="productos-container-nad">
      <div className="gestor-header-nad">
        <div>
          <h2>Gestor de Productos</h2>
          <p>Administrá los productos que se muestran en tu tienda Nad.</p>
        </div>
        <button
          onClick={abrirFormularioAgregar}
          className="general-button-nad gestor-add-btn-nad"
        >
          + Agregar Producto
        </button>
      </div>

      <div>
        {productos.length === 0 ? (
          <p className="productos-empty-nad">
            No hay productos cargados todavía. Empezá agregando el primero.
          </p>
        ) : (
          <ul className="productos-lista-nad">
            {productos.map((producto) => (
              <li className="producto-item-nad" key={producto.id}>
                <img
                  className="producto-img-nad"
                  src={producto.image}
                  alt={producto.title}
                />
                <h3 className="producto-nombre-nad">{producto.title}</h3>
                <p className="producto-descripcion-nad">
                  {producto.description}
                </p>
                <p className="producto-precio-nad">${producto.price}</p>

                <div className="producto-botonera-nad">
                  <button
                    className="general-button-nad"
                    onClick={() => abrirFormularioEditar(producto)}
                  >
                    Editar
                  </button>
                  <button
                    className="general-button-nad btn-eliminar-nad"
                    onClick={() => abrirModalEliminar(producto)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {mostrarForm && (
        <FormProducto
          productoInicial={productoSeleccionado || {}}
          modo={modoFormulario}
          onCerrar={cerrarFormulario}
        />
      )}

      {/* 🔴 Modal de confirmación Eliminar */}
      {mostrarModalEliminar && (
        <div
          className="nad-modal-overlay"
          onClick={cancelarEliminar}
        >
          <div
            className="nad-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="nad-modal-header">
              <h3>Eliminar producto</h3>
              <button
                className="nad-modal-close"
                type="button"
                onClick={cancelarEliminar}
              >
                ×
              </button>
            </div>

            <div className="nad-modal-body">
              <p>
                ¿Seguro que querés eliminar{" "}
                <strong>{productoAEliminar?.title}</strong>?  
                Esta acción no se puede deshacer.
              </p>
            </div>

            <div className="nad-modal-footer">
              <button
                type="button"
                className="general-button-nad nad-btn-sec"
                onClick={cancelarEliminar}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="general-button-nad nad-btn-danger"
                onClick={confirmarEliminar}
              >
                Sí, eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GestionProductos;
