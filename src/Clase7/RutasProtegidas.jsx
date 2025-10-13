import { Navigate } from 'react-router-dom';


function RutaProtegida({ estaAutenticado, children }) {
  if (!estaAutenticado) {
    return <Navigate to="/login" replace />; //replace evita que redirige a la pagina anterior //Navigate te lleva a la pagina X si no esta autenticado
  }
  return children; //Recibe el componente completo
}

export default RutaProtegida;
