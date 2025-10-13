import './App.css'
import Header from './components/header.jsx'
import Boton from './Clase4/Boton.jsx'
import Nav from './components/nav.jsx'
import Main from './components/main.jsx'
import Footer from './components/footer.jsx'
import Formulario from './Clase4/formulario.jsx'
import Carrito from './components/carrito.jsx'
import Clicker from './Clase5/Clicker.jsx'
import Productos from './Clase5/Productos.jsx'
import Contacto from './Clase6/Contacto.jsx'
import Inicio from './Clase6/Inicio.jsx'
import { Routes, Route } from 'react-router-dom'
import RutaProtegida from './Clase7/rutasprotegidas.jsx'
import Admin from './Clase7/Admin.jsx'
import Login from './Clase7/Login.jsx'

function App() {
  const [estaAutenticado, setestaAutenticado] = useState(false)
  return (
   <>
   <Header />
   <Nav />
   <Main />
   <Boton />
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/producto/:id" element={<DetalleProducto />} />
        <RutaProtegida estaAutenticado={estaAutenticado}>
           <Admin/>
        </RutaProtegida>
    </Routes>
   <Formulario />
   <Carrito />
   <Clicker />
   <Productos />
   <Footer />

   
   </>
  )
}
export default App