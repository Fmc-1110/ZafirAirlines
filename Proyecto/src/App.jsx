import Inicio from './Components/Inicio'
import IniciarSesion from './Components/IniciarSesion'
import Busqueda from './Components/Usuarios/Busqueda'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuInicial from './Components/MenuInicial';
import Pago from './Components/Usuarios/Pago';
import Registro from './Components/Registro'
import Roles from './Components/Seguridad/Roles'
import Aerolineas from './Components/Admin/Aerolineas'
import CrearUsuario from './Components/Seguridad/CrearUsuario'
import CambiarContraseña from './Components/Seguridad/CambiarContraseña'
import EditAerolineas from './Components/Admin/EditAerolineas'
import Consecutivos from './Components/Admin/Consecutivos'
import Países from './Components/Admin/Países'
import Puertas from './Components/Admin/Puertas'
function App() {

  return (
  <div>

<Router>
    <MenuInicial></MenuInicial>
    <Routes>
      <Route path="/IniciarSesion" element={<IniciarSesion/>}/>
      <Route path='/Inicio' element={<Inicio/>}></Route>
      <Route path='/Busqueda' element={<Busqueda/>}></Route>
      <Route path='/Pago' element={<Pago/>}></Route>
      <Route path='/Registro' element={<Registro/>}></Route>
      <Route path='/Roles' element={<Roles/>}></Route>
      <Route path='/Aerolineas' element={<Aerolineas/>}></Route>
      <Route path='/CrearUsuario' element={<CrearUsuario/>}></Route>
      <Route path='/CambiarContraseña' element={<CambiarContraseña/>}></Route>
      <Route path='/EditAerolineas' element={<EditAerolineas/>}></Route>
      <Route path='/Consecutivos' element={<Consecutivos/>}></Route>
      <Route path='/Países' element={<Países/>}></Route>
      <Route path='/Puertas' element={<Puertas/>}></Route>
    </Routes>


    </Router>

  </div>

  )
}

export default App
