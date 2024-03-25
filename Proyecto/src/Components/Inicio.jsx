
import './Inicio.css'

export default function Inicio() {
  return (
    <html lang='eng'>
    <head>
        <title>Inicio</title>
        <link rel="stylesheet" href="ccs/fontawesome/css/all.cs" />
        <link rel="stylesheet" href="./Inicio.css" />
    </head>
    <body>
    
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
  <body >
    <div className='InicioA'>
    <div className="Select-Container">
        
        <select className="Select-box" id='SelectPaises'>
            <option value="">SJO</option>
            <option value="">COL</option>
            <option value="">BRZ</option>
            <option value="">ESP</option>
        </select>

        <img src="/DoubleLines.png" alt="To" id='LineasDobles' />

        <select className="Select-box" id='SelectPaises'>
            <option value="">COL</option>
            <option value="">SJO</option>
            <option value="">BRZ</option>
            <option value="">ESP</option>
        </select>

        <select className="Select-box2" id='SelectIda'>
            <option value="">Ida y vuelta</option>
            <option value="">Solo ida</option>
            <option value="">Solo vuelta</option>
        </select>
          <h2>Salida</h2>
          <input type="date" id="fecha" name="fecha"/>
        
          <h2 className='Regreso'>Regreso</h2>
          <input type="date" id="fecha" name="fecha"/>

          
          <input placeholder='1' type="number" id="CantPasajeros" name="numero"/>
          <h2 className='Regreso'>Pasajeros</h2>

          <a href="#">
          <button id='BuscarV' className='BUSCARV'> BUSCAR</button>
          </a>

          
        
    </div>
    </div>
    <div className='DivImagen'>
        <img src="/VueloInicio.png" alt="Vuelo" id='ImagenPrincipal'/>
    </div>
    <h1 className='Destinos'>Nuestros destinos</h1>
    <div className='cartas'>
      
    <div className="card">
        <div className="face front">
            <img src="/Colombia.jpg" alt=""/>
            <h3>Colombia</h3>
        </div>
        <div className="face back">
            <h3>Colombia</h3>
            <p>Un país diverso y cautivador en América del Sur, ofrece una combinación única de impresionantes paisajes naturales, rica cultura y hospitalidad excepcional. ¡Descúbrela con nuestra aerolínea y sumérgete en su encanto!</p>
            <div className="link">
                <a href="#">Reserve un viaje</a>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="face front">
            <img src="/Costa_Rica.jpg" alt=""/>
            <h3>Costa Rica</h3>
        </div>
        <div className="face back">
            <h3>Costa Rica</h3>
            <p>Un paraíso natural en el corazón de Centroamérica, donde exuberantes selvas tropicales se encuentran con playas de arena blanca y volcanes majestuosos. Descubre la biodiversidad única, la cultura vibrante y la hospitalidad cálida de este destino impresionante. ¡Vuela con nosotros y vive la aventura en Costa Rica!</p>
            <div className="link">
                <a href="#">Reserve un viaje</a>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="face front">
            <img src="/Brazil.png" alt=""/>
            <h3>Brazil</h3>
        </div>
        <div className="face back">
            <h3>Brazil</h3>
            <p>Desde las exuberantes selvas del Amazonas hasta las playas de arena blanca de Río de Janeiro, Brazil ofrece una experiencia única llena de diversión y emoción. Explora la pasión del fútbol, la riqueza cultural y la deliciosa gastronomía brasileña. ¡Viaja con nosotros y descubre la magia de Brazil!</p>
            <div className="link">
                <a href="#">Reserve un viaje</a>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="face front">
            <img src="/España.jpg" alt=""/>
            <h3>España</h3>
        </div>
        <div className="face back">
            <h3>España</h3>
            <p>España ofrece una mezcla perfecta de cultura, gastronomía y paisajes impresionantes. Sumérgete en la rica herencia cultural, disfruta de la cocina española y maravíllate con la arquitectura icónica. ¡Embárcate en una aventura española con nuestra aerolínea y deja que España te enamore!</p>
            <div className="link">
                <a href="#">Reserve un viaje</a>
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
        
    </body>
    </html>
  )
}
