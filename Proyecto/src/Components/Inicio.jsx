
import './Inicio.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Inicio() {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [idaVuelta, setIdaVuelta] = useState('Ida y vuelta');
  const [fechaSalida, setFechaSalida] = useState('');
  const [fechaRegreso, setFechaRegreso] = useState('');
  const [pasajeros, setPasajeros] = useState(1);

  // Manejadores de eventos para actualizar el estado cuando cambian los valores seleccionados
  const handleOrigenChange = (event) => {
    setOrigen(event.target.value);
  };

  const handleDestinoChange = (event) => {
    setDestino(event.target.value);
  };

  const handleIdaVueltaChange = (event) => {
    setIdaVuelta(event.target.value);
  };

  const handleFechaSalidaChange = (event) => {
    setFechaSalida(event.target.value);
  };

  const handleFechaRegresoChange = (event) => {
    setFechaRegreso(event.target.value);
  };

  const handlePasajerosChange = (event) => {
    setPasajeros(parseInt(event.target.value));
  };
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
        <Link to={"/Inicio"} >
        <img src="/ZafirLogo.jpg" alt="ZAFIR AIRLINES" />
        </Link>
        
      <a className="MENUA" href="#">Reservar</a>
      <a className="MENUA" href="#">Información</a>
      <a className="MENUA" href="#">Mis vuelos</a>
      
    </div>
    <nav >
      
      <a className="MENUA" id="margen" href="#">
        <Link to='/IniciarSesion' className="MENUA" id="margen">
        <img src="/person.png" alt="Usuario" />
        </Link>
        
      </a>
    </nav>
    
  </header>
  <body >
    <div className='InicioA'>
    <div className="Select-Container">
        
    <select className="Select-box" value={origen} onChange={handleOrigenChange}>
        <option value="SJO">SJO</option>
        <option value="COL">COL</option>
        <option value="BRZ">BRZ</option>
        <option value="ESP">ESP</option>
      </select>

      <img src="/DoubleLines.png" alt="To" id="LineasDobles" />

      <select className="Select-box" value={destino} onChange={handleDestinoChange}>
        <option value="COL">COL</option>
        <option value="SJO">SJO</option>
        <option value="BRZ">BRZ</option>
        <option value="ESP">ESP</option>
      </select>

      <select className="Select-box2" value={idaVuelta} onChange={handleIdaVueltaChange}  id='SelectIda'>
        <option value="Ida y vuelta">Ida y vuelta</option>
        <option value="Solo ida">Solo ida</option>
      </select>

      <h2>Salida</h2>
      <input type="date" id="fecha" value={fechaSalida} onChange={handleFechaSalidaChange} />

      {idaVuelta === 'Ida y vuelta' && (
        <>
          <h2 className="Regreso">Regreso</h2>
          <input type="date"  id="fecha" value={fechaRegreso} onChange={handleFechaRegresoChange} />
        </>
      )}

      <input placeholder="1" id="CantPasajeros"  type="number" value={pasajeros} onChange={handlePasajerosChange} />
      <h2 className="Regreso">Pasajeros</h2>
          <Link to={`/busqueda?origen=${origen}&destino=${destino}&idaVuelta=${idaVuelta}&fechaSalida=${fechaSalida}&fechaRegreso=${fechaRegreso}&pasajeros=${pasajeros}`}>
        <button id='BuscarV' className='BUSCARV'>BUSCAR</button>
      </Link>

        
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
