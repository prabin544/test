import React, {useState} from 'react'
import logo from '../images/logo.png'
import { Route, Switch } from "react-router";
import AutomationBox from '../Page/AutomationBox';


export default function Navbar() {

  const [nav, setNav] = useState(false)
  const changeBackground = () =>{
      if(window.scrollY >= 50){
          setNav(true);
      }else{
          setNav(false);
      }
  }
  window.addEventListener('scroll', changeBackground);
  
  return (
    <nav className={nav ? 'nav active' : 'nav'}>
        <a href='#' className='logo'>
            <img src={logo} alt=''/>
        </a>
        <input className='menu-btn' type='checkbox' id='menu-btn'></input>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Features</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>UI SS</a></li>
            <li><a href='#'>Download</a></li>
            <li><a href='#'>Automation</a></li>
        </ul>
    </nav>
  )
}
