import React from 'react';
import './Header.css';
import Logo from "../../assets/Logo.png";
import NavBurger from './NavBurger';


const Header = () => {
  return (
    <header >
        <img src={Logo} alt="Logo" id="logo" height={50} />
        <NavBurger/>
    </header>
  );
};

export default Header;