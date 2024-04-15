
export default function Perfil() {
    return (
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Perfil</title>
      </head>
      <header className="header">
      <div className="logo">
        <a href="#">
          <img src="/ZafirLogo.jpg" alt="ZAFIR AIRLINES" />
        </a>
        <a className="MENUA" href="#">Reservar</a>
      <a className="MENUA" href="#">Información</a>
      <a className="MENUA" href="#">Mis vuelos</a>
      
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
                      NOMBRE
                  </li>
                  <li> 
                    CORREO@CORREO.com 
                  </li>
                  <li> 
                    USUARIO
                  </li>
              </ul>
  
              
          </div>
          <div className='Usuarios'>
          <h2 className='RegistroH2'>Cambiar contraseña</h2>
                    
                    <form className="form form-login">
                        <div>
                            <label >
                                <input type="text" placeholder="Contraseña actual" name="Contraseñaactual"/>
                            </label>
                        </div>
                        <div>
                            
                            <label >
                            <input type="password" placeholder="Contraseña" name="Contraseña" id="Contraseña" /> 
                            
                            </label>
                            <label >
                            <input type="password" placeholder="Confirmar contraseña" name="ConfContraseña" id="ConfContraseña" />
                            </label>
                            
                        </div>
                        <button id='CrearUsuario' className='BUSCARV'> Cambiar Contraseña </button>
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
  