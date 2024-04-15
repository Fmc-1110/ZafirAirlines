
export default function Busqueda() {
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
    <div className='BUSQUEDA'>
              <ul>
                  <li> 
                    <h1>VUELOS</h1>
                  </li>
                  <li> 
                  <h3>ORIGEN</h3> 
                    <p>pais 1</p>
                  </li>
                  <li> 
                  <h3>DESTINO</h3> 
                    <p>pais 2</p>
                  </li>
                  <li>
                  <h3>SALIDA</h3> 
                    <p>00/00/0000</p>
                  </li>
                  <li>
                  <h3>PASAJEROS</h3> 
                    <p> X persona(s)</p>
                  </li>
              </ul>
          </div>
          <div className='TABLAVUELOSV'>
          <table className=''>
            <div className="FILTROSV">
            <select className="" id='FIltros'>
                <option value="">Arribados</option>
                <option value="">Salientes</option>
                <option value="">Demorados</option>
            </select>
            <button>
                Aplicar filtro
            </button>
            </div>
          
                <tr>
                <th>VUELO</th>
                <th>AEROLINEA</th>
                <th>PROCEDENCIA</th>
                <th>FECHA</th>
                <th>HORA</th>
                <th>ESTADO</th>
                <th>PUERTA</th>
                </tr>
                <tr>
                <td>
                        CODVUELO
                    
                </td>
                <td> 
                        AEROLINEA
                    
                </td>
                <td> 
                        PAIS
                    
                </td>
                <td> 
                        00/00/0000
                </td>
                <td>
                        00:00pm
                </td>
                <td>
                        estado
                </td>
                <td>
                        N/A
                </td>
                </tr>
                <tr>
                <td>
                        CODVUELO
                    
                </td>
                <td> 
                        AEROLINEA
                    
                </td>
                <td> 
                        PAIS
                    
                </td>
                <td> 
                        00/00/0000
                </td>
                <td>
                        00:00pm
                </td>
                <td>
                        estado
                </td>
                <td>
                        N/A
                </td>
                </tr>
                <tr>
                <td>
                        CODVUELO
                    
                </td>
                <td> 
                        AEROLINEA
                    
                </td>
                <td> 
                        PAIS
                    
                </td>
                <td> 
                        00/00/0000
                </td>
                <td>
                        00:00pm
                </td>
                <td>
                        estado
                </td>
                <td>
                        N/A
                </td>
                </tr>
                <tr>
                <td>
                        CODVUELO
                    
                </td>
                <td> 
                        AEROLINEA
                    
                </td>
                <td> 
                        PAIS
                    
                </td>
                <td> 
                        00/00/0000
                </td>
                <td>
                        00:00pm
                </td>
                <td>
                        estado
                </td>
                <td>
                        N/A
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
        
    </body>
    </html>
  )
}
