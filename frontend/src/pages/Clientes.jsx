import React from 'react'
<<<<<<< HEAD

import RegistrarCliente from './RegistrarCliente'
import axios from 'axios'
=======
import { Link } from 'react-router-dom'

 
import RegistrarCliente from './clientes/RegistrarCliente'
>>>>>>> a90c92cb67c4af1095a5a487678c6a44a1fb0cb9

const Clientes = () => {
  const consultarAPI = async () => {
    const clistaClientes = await axios.get('')

  }
  return (
    <div>
      <h2>CLIENTES</h2>
      <p>Administra tus clientes</p>
<<<<<<< HEAD
      
=======
      <div className="clientesRouter">
        <p>a</p>
      </div>
      <RegistrarCliente />
>>>>>>> a90c92cb67c4af1095a5a487678c6a44a1fb0cb9
    </div>
  )
}

export default Clientes