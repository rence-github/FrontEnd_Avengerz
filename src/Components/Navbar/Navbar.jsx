import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.jpg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
        <p>AVENGERZ</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <Link to='/'>Home</Link> {menu === "home" ? <hr /> : null}  
        </li>
        <li onClick={() => setMenu("services")}>
          <Link to='/services'>Services</Link> {menu === "services" ? <hr /> : null}  
        </li>
        <li onClick={() => setMenu("about")}>
          <Link to='/about'>About Us</Link> {menu === "about" ? <hr /> : null}  
        </li>
        <li onClick={() => setMenu("contact")}>
          <Link to='/contact'>Contact Us</Link> {menu === "contact" ? <hr /> : null} 
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
