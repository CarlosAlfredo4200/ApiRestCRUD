import React from 'react'
import { Link } from "react-router-dom";
import { PiUsersThreeBold } from 'react-icons/pi';
import { FaHome } from 'react-icons/fa';
import { RiProductHuntLine } from 'react-icons/ri';
import { BsBorderStyle } from 'react-icons/bs';


const Sidebar = () => {
  return (
    <>
      <h2 className='sidebarH2'>ADMINISTRACIÓN</h2>
    <nav className='containerNav'>
       
      <Link className='linkNav' to='/'><FaHome className='icons' /><p>Home</p></Link>
      <Link className='linkNav' to='/clientes'><PiUsersThreeBold className='icons' /><p>Clientes</p></Link>
      <Link className='linkNav' to='/clientes/nuevocliente'><PiUsersThreeBold className='icons' /><p>Nuevo Cliente</p></Link>
      <Link className='linkNav' to='/productos'><RiProductHuntLine className='icons' /><p>Productos</p></Link>
      <Link className='linkNav' to='/pedidos'><BsBorderStyle className='icons' /><p>Pedidos</p></Link>
       
    </nav>
    </>
  )
} 

export default Sidebar