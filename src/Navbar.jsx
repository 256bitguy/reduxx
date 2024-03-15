import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
 
const Navbar = () => {
 
  return (
   <nav className='navbar'>
      <Link to='/coctails' ><Button>Cart</Button></Link>

   </nav>
  )
}

export default Navbar
