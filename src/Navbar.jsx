import React from 'react'
import { Link } from 'react-router-dom'
  
 
const Navbar = () => {
 
  return (
   <nav className='navbar'>
      <Link to='/coctails' ><button>cart</button></Link>

   </nav>
  )
}

export default Navbar
