import React from 'react'
import { Link } from 'react-router-dom';
export default function MenuInicial() {
  return (
    <div>
    <head>
        <title>Inicio</title>
        <link rel="stylesheet" href="ccs/fontawesome/css/all.cs" />
        <link rel="stylesheet" href="./Inicio.css" />
    </head>
    
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
    </div>
  )
}
