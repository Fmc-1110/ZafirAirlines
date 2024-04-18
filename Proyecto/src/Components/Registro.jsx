
import { Link } from 'react-router-dom';
export default function Registro() {
    return (
      <html lang="en">
      <head>
          <title>Registro</title>
          <link rel="stylesheet" href="./Inicio.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
          
      </head>
      <body className='Registro' style={{}}>
      <div className="container-form login ">
      
          <div className="information">
              
              <div className="info-childs">
                  <h2>Tu viaje, nuestro compromiso</h2>
                  <p>Registrate y disfruta de nuestros servicios</p>
                  <Link to={'/IniciarSesion'}>
                  <input type="button" value="¿Ya tienes una cuenta? Inicia sesión" id="sign-up"/>
                  </Link>
                  
              </div>
          </div>
          <div className="form-information">
              <div className="form-information-childs">
                  <h2>Registro</h2>
                  
                  <form className="form form-login">
                      <div>
                          <label >
                              <input type="text" placeholder="Nombre" name="Nombre"/>
                          </label>
                      </div>
                      <div>
                          <label>
                              <input type="text" placeholder="Primer apellido" name="PApellido"/>
                              <input type="text" placeholder="Segundo apellido" name="SApellido" id="SApellido" />
                          </label>
                          <label >
                          <input type="email" placeholder="Correo electrónico" name="Correo" id="Correo" />
                          </label>
                          <label >
                          <input type="password" placeholder="Contraseña" name="Contraseña" id="Contraseña" /> 
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
                      <input type="submit" value="Registrarse"/>
                  </form>
                  <p>Registrarse con </p>
                  <div className="icons">
                      <i className='bx bxl-google'></i>
                      <i className='bx bxl-twitter'></i>
                      <i className='bx bxl-facebook' ></i>
                  </div>
                  
              </div>
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
  