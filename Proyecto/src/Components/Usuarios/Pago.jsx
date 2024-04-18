import React from 'react'

export default function Pago() {
  return (
    <div>
        <head>
        <title>Inicio</title>
        <link rel="stylesheet" href="ccs/fontawesome/css/all.cs" />
        <link rel="stylesheet" href="./Inicio.css" />
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"/>

    </head>
    <div className="wrapper">

    
        <h2> REALICE SU PAGO AHORA </h2>
        <div className="input_group">
                <div className="input_box">
                    <h4>DETALLES DE PAGO</h4>
                    <input type="radio" name="pay" className="radio" id="bc1" checked/>
                    <label htmlFor="bc1"><span>
                            <i className="fa fa-cc-visa"></i>Tarjeta de crédito</span></label>
                    <input type="radio" name="pay" className="radio" id="bc2"/>
                    <label htmlFor='bc2'><span>
                            <i className="fa fa-cc-paypal"></i>EasyPay</span></label>
            </div>

            </div>
            <div className="input_group">
                <div className="input_box">
                    <input type="tel" name="" className="name" placeholder="Número 1111-2222-3333-4444" required/>
                    <i className="fa fa-credit-card icon"></i>
                </div>
            </div>
            <div className="input_group">
                <div className="input_box">
                    <input type="tel" name="" className="name" placeholder="CVC" required/>
                    <i className="fa fa-user icon"></i>
                </div>
            </div>
            <div className="input_group">
                <div className="input_box">
                    <div className="input_box">
                        <input type="number" placeholder="Mes de exp" required className="name"/>
                        <i className="fa fa-calendar icon" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="input_box">
                    <input type="number" placeholder="Año de exp" required className="name"/>
                    <i className="fa fa-calendar-o icon" aria-hidden="true"></i>
                </div>
            </div>

            <div className="input_group">
                <div className="input_box">
                    <button type="submit">PAGAR AHORA</button>
                </div>
            </div>

    </div>
    </div>
  )
}
