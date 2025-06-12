import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "/src/assets/Logo.png";
import NavProfile from '../NavProfile/NavProfile';
import './Header.css';
import NavBurger from './NavBurger';

const Header = () => {
  return (
    <header >
      <div id='mobileDesign'>
       <img src={Logo} alt="Logo" id="logo" height={50} />
        <NavBurger className='teste' />
      </div>

      <div id='desktopDesign'>
        <div id='desktopNav'>
          <Link to={"/home"}><img src={Logo} alt="Logo" id="logo" height={50} /></Link>
          <Link to={"/home"} className='desktopText'>Tarefas</Link>
          <Link to={"/pacientes"} className='desktopText'>Pacientes</Link>
          <Link to={"/sobre"} className='desktopText'>Sobre</Link>
        </div>
        <NavProfile />
      </div>
    </header>
  );
};

export default Header;