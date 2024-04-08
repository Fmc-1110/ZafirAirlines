export default function EditAerolineas() {
    return (
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Editar Aerolineas</title>
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
                          Consecutivos
                      </a> 
                  </li>
                  <li> <a href="">
                          Países
                      </a> 
                  </li>
                  <li> <a href="">
                          Aerolíneas
                      </a> 
                  </li>
                  <li> <a href="">
                          Puertas del aeropuerto
                      </a> 
                  </li>
              </ul>
              
          </div>
          <div className='Usuarios'>
          <h2 className='RegistroH2'>Información de la aerolinea</h2>
                    <form className="form form-login">
                        <div>
                            
                            <label >
                                <p>ID:</p>
                                <input type="text" placeholder="ID" name="Consecutivo" id="Consecutivo" /> 
                            
                            </label>
                            <label >
                                <p>Aerolinea:</p>
                                <input type="text" placeholder="Aerolinea" name="Consecutivo" id="Consecutivo" /> 
                            
                            </label>
                            
                            <label >
                                <p>Logo:</p>
                                <p>[Archivo]</p>
                                <button>Subir logo</button>
                            </label>
                            <label >
                                <p>Agencia</p>
                                <input type="text" placeholder="Agencia" name="Consecutivo" id="Consecutivo" /> 
                            
                            </label>
                            <label >
                                <p>País</p>
                                <input type="text" placeholder="País" name="Consecutivo" id="Consecutivo" /> 
                            
                            </label>
                            
                        </div>
                        <button id='CrearUsuario' className='BUSCARV'> Aceptar </button>
                        <button id='CrearUsuario' className='BUSCARV'> Cancelar</button>
                    </form>
              <hr />
              
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
  