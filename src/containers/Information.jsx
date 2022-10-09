import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/components/Information.css"
const Information = () => {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <section className="Information-form">
          <form action="">
            <input type="text" placeholder='Nombre completo' name='name' />
            <input type="text" placeholder='Correo Electronico' name='email' />
            <input type="text" placeholder='Direccion' name='address' />
            <input type="text" placeholder='Apto' name='apto' />
            <input type="text" placeholder='Pais' name='Country' />
            <input type="text" placeholder='Ciudad' name='city' />
            <input type="text" placeholder='Estado' name='state' />
            <input type="text" placeholder='Codigo Postal' name='cp' />
            <input type="text" placeholder='Telefono' name='phone' />
          </form>
        </section>
        <div className="Information-button">
          <div className="Information-back">
            Regresar
          </div>
          <div className="Information-next">
            <Link to="/checkout/payment" >
              <button type='button'>Pagar</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>ITEM Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Information}