// 6 Crear un Layout del eCommerce.
// Header, dentro de este el Navbar y el footer, esto mínimo.

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Carrito from './components/Carrito.jsx';
import Contacto from './Pages/Contacto.jsx';
import Eventos from './Pages/Eventos.jsx';
import Novedades from './Pages/Novedades.jsx';
import Inicio from './Pages/Inicio.jsx';
import ProductoDetalle from './components/ProductoDetalle.jsx';
import Footer from './components/Footer.jsx';
import RutaProtegida from "./components/RutaProtegida.jsx";
import Login from "./Pages/Login.jsx";
import Admin from "./Pages/Admin.jsx";
import Reservas from "./Pages/Reservas.jsx";

function App() {
  return (
   <>
   <Header />

    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reservas" element={<Reservas />} />
      <Route path='/productos/:id' element={<ProductoDetalle />}/>
      <Route path="/carrito" element={
              <RutaProtegida >
                <Carrito />
              </RutaProtegida>}/>
      <Route path="/admin" element={
              <RutaProtegida >
                <Admin />
              </RutaProtegida>}/>
    </Routes>   
   <Footer />

   
   </>
  )
}
export default App