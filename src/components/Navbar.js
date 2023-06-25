import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { House, ShoppingCart } from 'phosphor-react'
// import {FaSun,FaMoon} from 'react-icons/fa'


function Navbar() {
  const [showing,isshowing] = useState(0);
  const change = () =>{
    isshowing(!showing);
  }
  return (
    <div className='navbar'>
    <Link className="item1" to="/"><House size={30} showing={showing} isshowing={isshowing}></House></Link>
    <Link className="item2"to="/cart"><ShoppingCart size={30}></ShoppingCart></Link>
    {/* <button className='but' onClick={change}>{showing ? <FaMoon/> : <FaSun/> }</button> */}
    </div>
  )
}
export default Navbar
