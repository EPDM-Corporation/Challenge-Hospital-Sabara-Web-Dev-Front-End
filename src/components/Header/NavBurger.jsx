import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Link } from 'react-router-dom';
import NavProfile from '../NavProfile/NavProfile';
import './NavBurger.css';


const NavBurger = () => {
  return (
    <div>
      <button
        className="btn btn-outline-light buttonMenu"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#menuLateral"
        aria-controls="menuLateral"
      >
        ☰
      </button>

      <div
        className="offcanvas offcanvas-start "
        tabIndex="-1"
        id="menuLateral"
        aria-labelledby="menuLateralLabel"
      >
        <div className="offcanvas-header">
          <NavProfile />
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Fechar"
          ></button>

        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li><Link to={"/home"} className='navText'>Tarefas</Link></li>
            <li><Link to={"/pacientes"} className='navText'>Pacientes</Link></li>
            <li><Link to={"/sobre"} className='navText'>Sobre</Link></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default NavBurger
