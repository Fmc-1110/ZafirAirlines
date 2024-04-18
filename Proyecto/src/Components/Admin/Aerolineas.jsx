import { Link } from 'react-router-dom';
export default function Aerolíneas() {
    return (
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Aerolíneas</title>
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
        <a className="MENUA" href="#">Consultas</a>
        
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
                    <Link to={'/Consecutivos'}>
                    Consecutivos
                    </Link>
                       
                  </li>
                  <li> 
                  <Link to={'/Países'}>
                    Países
                    </Link>
                  </li>
                  <li> 
                  <Link to={'/Aerolineas'}>
                    Aerolineas
                    </Link> 
                  </li>
                  <li> 
                  <Link to={'/Puertas'}>
                    Puertas del aeropuerto
                    </Link> 
                  </li>
              </ul>
  
              
          </div>
          <div className='Usuarios'>
          <h2 className='RegistroH2'>Aerolíneas</h2>
          <table className='TablaConsec'>
                <tr>
                <th>ID</th>
                <th>Aerolinea</th>
                <th>Logo</th>
                <th>Agencia</th>
                <th>País</th>
                <th> </th>
                </tr>
                <tr>
                <td>
                        1
                    
                </td>
                <td> 
                        American Airlines
                    
                </td>
                <td> 
                [Logo]
                    
                </td>
                <td> 
                Agencia
                    
                </td>
                <td> 
                País
                    
                </td>
                <td> 
                  <Link to={'/EditAerolineas'}>
                    Editar
                </Link>
                </td>
                </tr>
                <tr>
                <td>
                        1
                    
                </td>
                <td> 
                        American Airlines
                    
                </td>
                <td> 
                [Logo]
                    
                </td>
                <td> 
                Agencia
                    
                </td>
                <td> 
                País
                    
                </td>
                <td> <Link to={'/EditAerolineas'}>
                    Editar
                </Link>
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
  