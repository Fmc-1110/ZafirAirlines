import { Link } from 'react-router-dom';
export default function Roles() {
  return (
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Roles</title>
    </head>
    <header className="header">
    <div className="logo">
      <a href="#">
        <img src="/ZafirLogo.jpg" alt="ZAFIR AIRLINES" />
      </a>
      <Link to='/Roles' className="MENUA">
      <a className="MENUA" href="#">Seguridad</a>
      </Link>
      <Link to='/Aerolineas' className="MENUA">
      <a className="MENUA" href="#">Administración</a>
      </Link>
      
      
    </div>
    <nav >
      
      <a className="MENUA" id="margen" href="#">
        <img src="/person.png" alt="Usuario" />
      </a>
    </nav>
    
  </header>
    <body>
        <div className='RolesInicio'>
        <div className='OpcionesR'>
            <ul>
                <li> 
                <Link to={'/CrearUsuario'}>
                Crear usuario
                </Link>
                </li>
                <li> 
                <Link to={'/Roles'}>
                Ediar roles
                </Link>
                  
                </li>
                <li> 
                <Link to={'/CambiarContraseña'}>
                Cambiar contraseña
                </Link>
                </li>
            </ul>

            <input type="text" placeholder='Nombre' id='BuscadorNombres' />
            <button id='BuscarRol'> Buscar</button>
        </div>
        <div className='Usuarios'>
            <table className='TablaRoles'>
                <tr>
                <th>Usuarios</th>
                </tr>
                <tr>
                <td> <a href="">
                        USUARIO1
                    </a> 
                </td>
                </tr>
                <tr>
                <td> <a href="">
                        USUARIO2
                    </a> 
                </td>
                </tr>
                <tr>
                <td> <a href="">
                        USUARIO3
                    </a> 
                </td>
                </tr>
                <tr>
                <td> <a href="">
                        USUARIO4
                    </a> 
                </td>
                </tr>


            </table>
            
            
        </div>

        </div>

        
        
        
    </body>
    <footer className="Pie">
        <img src="LogoZafirSF.png" alt="Logo" />
  <div className="contenedorPIE">
    <div className="pie-row">
      <div className="pie-links">
        <h4>Vuelos baratos</h4>
        <ul>
          <li><a href="#">Vuelos a Bogotá</a></li>
        </ul>
        <ul>
          <li><a href="#">Vuelos a Medellín</a></li>
        </ul>
        <ul>
          <li><a href="#">Vuelos a San José</a></li>
        </ul>
        <ul>
          <li><a href="#">Vuelos a Guanacaste</a></li>
        </ul>
      </div>
      <div className="pie-links">
        <h4>Sobre nosotros</h4>
        <ul>
          <li><a href="#">Somos Zafir Airlines</a></li>
          <li><a href="#">Politicas</a></li>
        </ul>
      </div>
      <div className="pie-links">
        <h4>Enlaces rápidos</h4>
        <ul>
          <li><a href="#">Contactenos</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    </html>
  )
}
