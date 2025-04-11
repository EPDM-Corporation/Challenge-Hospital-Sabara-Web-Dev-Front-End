import React from 'react'
import './NavBurger.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Profile from '../../assets/andrepfp.png'


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
          <div id='profile'>
            <img src={Profile} alt="" id='pfp' />
            <div className='profileText'>André Matos</div>
          </div>
          
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Fechar"
          ></button>

        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li><a className="navText" href="#">Tarefas</a></li>
            <li><a className="navText" href="#">Sobre</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default NavBurger
