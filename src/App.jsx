// 6 Crear un Layout del eCommerce.
// Header, dentro de este el Navbar y el footer, esto mínimo.


import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header.jsx'

import Carrito from './components/Carrito.jsx'
import Contacto from './components/Contacto.jsx'
import Eventos from './components/Eventos.jsx'
import Novedades from './components/Novedades.jsx'
import Inicio from './components/Inicio.jsx'
import ProductoDetalle from './components/ProductoDetalle.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
   <>
   <Header />

    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path='/producto/:id' element={<ProductoDetalle />}/>
      <Route path='/carrito' element={<Carrito />}/>
    </Routes>   
   <Footer />

   
   </>
  )
}
export default App