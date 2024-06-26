
export default function Bitácora() {
    return (
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Bitácora</title>
      </head>
      <header className="header">
      <div className="logo">
        <a href="#">
          <img src="/ZafirLogo.jpg" alt="ZAFIR AIRLINES" />
        </a>
        <a className="MENUA" href="#">Seguridad</a>
        <a className="MENUA" href="#">Administración</a>
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
                      <a href="">
                          Bitácora
                      </a> 
                  </li>
                  <li> 
                      <a href="">
                          Errores
                      </a> 
                  </li>
                  <li> 
                      <a href="">
                          Aerolineas por país
                      </a> 
                  </li>
                  <li> 
                      <a href="">
                          Puertas activas
                      </a> 
                  </li>
              </ul>
  
              
          </div>
          <div className='Usuarios'>
          <h2 className='RegistroH2'>BITÁCORA</h2>
          <table className='TablaConsec'>
                <tr>
                <th>Usuario</th>
                <th>Fecha de inicio</th>
                <th>Fecha final</th>
                <th>Tipo</th>
                </tr>
                <tr>
                <td>
                        USUARIO
                    
                </td>
                <td> 
                    FECHA INICIO
                    
                </td>
                <td> 
                    FECHA FINAL
                    
                </td>
                <td> 
                    TIPO
                    
                </td>
                </tr>
                <tr>
                <td>
                        USUARIO
                    
                </td>
                <td> 
                    FECHA INICIO
                    
                </td>
                <td> 
                    FECHA FINAL
                    
                </td>
                <td> 
                    TIPO
                    
                </td>
                </tr>
                <tr>
                <td>
                        USUARIO
                    
                </td>
                <td> 
                    FECHA INICIO
                    
                </td>
                <td> 
                    FECHA FINAL
                    
                </td>
                <td> 
                    TIPO
                    
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
  