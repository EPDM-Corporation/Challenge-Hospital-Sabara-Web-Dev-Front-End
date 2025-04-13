import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';
import Logo from "../../assets/Logo.png";
import NavBurger from './NavBurger';
import NavProfile from '../NavProfile/NavProfile';

const Header = () => {
  return (
    <header >
        <div id='mobileDesign'>
          <img src={Logo} alt="Logo" id="logo" height={50} />
          <NavBurger className='teste'/>
        </div>

        <div id='desktopDesign'>
          <div id='desktopNav'>
            <img src={Logo} alt="Logo" id="logo" height={50} />
            <Link to={"/home"} className='desktopText'>Tarefas</Link>
            <Link to={"/"} className='desktopText'>Sobre</Link>
          </div>
          <NavProfile/>
        </div>
    </header>
  );
};

export default Header;