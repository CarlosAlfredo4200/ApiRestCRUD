import React from 'react'
import { Link } from 'react-router-dom'

 
import RegistrarCliente from './clientes/RegistrarCliente'

const Clientes = () => {
  return (
    <div>
      <h2>CLIENTES</h2>
      <p>Administra tus clientes</p>
      <div className="clientesRouter">
        <p>a</p>
      </div>
      <RegistrarCliente />
    </div>
  )
}

export default Clientes