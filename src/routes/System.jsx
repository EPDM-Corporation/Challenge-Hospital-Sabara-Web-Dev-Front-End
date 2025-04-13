import React from 'react'
import Footer from '../components/Footer/Footer'
import Logo from "../assets/Logo.png"
import {Link} from 'react-router-dom'
import './System.css'

const System = () => {
  return (
    <div className='systemBody'>
      <header>
        <img src={Logo} id='logo' alt="" />
        <Link to={'/'} id='systemExit'>Sair</Link>
      </header>
        <section className='systemSection'>
            <h2 id='systemH2'>Sistema</h2>
            <form className='systemForms'>
                <label for="systemTitle">Título:</label>
                <input type="text" id="systemTitle"></input>

                <label for="systemMedic">Médico:</label>
                <select id="systemMedic" name="medico">
                  <option value="andre1">André</option>
                  <option value="nicolas2">Nicolas</option>
                </select>

                <label for="systemAction">Serviço/Ação: </label>
                <input type="text" id="systemAction"></input>
                <button className='systemButton'>Enviar</button>
                <button className='systemButton'>Resetar dados</button>
            </form>

        </section>
        <Footer/>
    </div>
  )
}

export default System
