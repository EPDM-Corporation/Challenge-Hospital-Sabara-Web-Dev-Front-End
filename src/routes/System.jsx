import React from 'react'
import Footer from '../components/Footer/Footer'
import Logo from "../assets/Logo.png"
import {Link} from 'react-router-dom'
import './System.css'

const System = () => {
  return (
    <div>
      <header>
        <img src={Logo} id='logo' alt="" />
        <Link to={'/'} id='systemExit'>Sair</Link>
      </header>

        <Footer/>
    </div>
  )
}

export default System
