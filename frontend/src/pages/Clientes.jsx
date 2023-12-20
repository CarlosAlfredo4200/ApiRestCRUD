import React from 'react'

import RegistrarCliente from './RegistrarCliente'
import axios from 'axios'

const Clientes = () => {
  const consultarAPI = async () => {
    const clistaClientes = await axios.get('')

  }
  return (
    <div>
      <h2>CLIENTES</h2>
      <p>Administra tus clientes</p>
      
    </div>
  )
}

export default Clientes