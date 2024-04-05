import React from 'react'

export default function CrearUsuario() {
  return (
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Crear usuario</title>
    </head>
    <header className="header">
    <div className="logo">
      <a href="#">
        <img src="/ZafirLogo.jpg" alt="ZAFIR AIRLINES" />
      </a>
      <a className="MENUA" href="#">Seguridad</a>
      
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
                        Crear usuario
                    </a> 
                </li>
                <li> <a href="">
                        Editar roles
                    </a> 
                </li>
                <li> <a href="">
                        Cambiar contraseña
                    </a> 
                </li>
            </ul>

            
        </div>
        <div className='Usuarios'>
        <h2 className='RegistroH2'>Usuarios</h2>
                  
                  <form className="form form-login">
                      <div>
                          <label >
                              <input type="text" placeholder="Nombre" name="Nombre"/>
                          </label>
                      </div>
                      <div>
                          <label>
                              <input type="text" placeholder="Primer apellido" name="PApellido"/>
                             
                          </label>
                          <label >
                          <input type="text" placeholder="Segundo apellido" name="SApellido" id="SApellido" />
                          </label>
                          <label >
                          <input type="email" placeholder="Correo electrónico" name="Correo" id="Correo" />
                          </label>
                          <label >
                          <input type="password" placeholder="Contraseña" name="Contraseña" id="Contraseña" /> 
                          
                          </label>
                          <label >
                          <input type="password" placeholder="Confirmar contraseña" name="ConfContraseña" id="ConfContraseña" />
                          </label>
                          <label >
                            <select name="PreguntaSeguridad" id="PSeguridad">
                                <option value="Pregunta de seguridad">Pregunta de seguridad</option>
                            </select>
                            <input type="text" placeholder="Respuesta de seguridad" />
                          </label>
                          <label >
                            <input type="text" placeholder="Usuario" />
                          </label>
                      </div>
                      <button id='CrearUsuario' className='BUSCARV'> Crear Usaurio</button>
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
