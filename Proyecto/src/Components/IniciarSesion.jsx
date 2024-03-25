

export default function IniciarSesion() {
  return (
    <html lang="en">
    <head>
        <title>Iniciar sesión</title>
        <link rel="stylesheet" href="./Inicio.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
        
    </head>
    <body className='IniciarSesión' style={{}}>
    <div className="container-form login ">
    
        <div className="information">
            
            <div className="info-childs">
                <h2>Tu viaje, nuestro compromiso</h2>
                <p>Inicia sesión y disfruta de nuestros servicios</p>
                <a href="#">
                <input type="button" value="¿No tienes una cuenta? Registrate" id="sign-up"/>
                </a>
                
            </div>
        </div>
        <div className="form-information">
            <div className="form-information-childs">
                <h2>Iniciar Sesión</h2>
                
                <form className="form form-login">
                    <div>
                        <label >
                            <i className='bx bx-envelope' ></i>
                            <input type="email" placeholder="Correo Electronico" name="userPassword"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <i className='bx bx-lock-alt' ></i>
                            <input type="password" placeholder="Contraseña" name="userPassword"/>
                        </label>
                    </div>
                    <input type="submit" value="Iniciar Sesión"/>
                </form>
                <p>Iniciar sesión con </p>
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
