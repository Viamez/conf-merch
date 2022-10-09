import React from 'react'
import "../styles/components/Success.css"
const Success = () => {
  return (
    <div className="Success">
      <section className="Success-content">
        <h2>Gracias por tu compra</h2>
        <span>Tu pedido llegará en 3 dias</span>
        <div className="Success-map">
          Google Maps
        </div>
      </section>
    </div>
  )
}

export {Success}