import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "/src/assets/Logo.png";
import Footer from '../components/Footer/Footer';
import './System.css';

const System = () => {
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    date: '',
    desc: '',
  })



  const formSend = (e) =>{
    e.preventDefault();
    if (formData.title == '' || formData.action == ''){
      alert("Preencha todos os campos");
      return;
    }
    formData.id = Date.now();
    formData.date = new Date().toLocaleString('pt-BR');

    let medic = document.getElementById('systemMedic').value;
    let localUser = localStorage.getItem(medic);

    if (localUser) {
      localUser = JSON.parse(localUser);
    } else {
      localUser = [];
    }

    
    localUser.push(formData);
    localStorage.setItem(medic, JSON.stringify(localUser));
    localUser = localStorage.getItem(medic);
    setFormData({
      id: null,
      title: '',
      date: '',
      desc: '',
    })
    alert("Dados enviados!")
    window.location.reload();
  }
  const formReset = () =>{
    localStorage.clear();
    alert("Dados resetados")

  }
  return (
    <div className='systemBody'>
      <header>
        <img src={Logo} id='logo' alt="" />
        <Link to={'/'} id='systemExit'>Sair</Link>
      </header>
      <section className='systemSection'>
        <h2 id='systemH2'>Sistema</h2>
        <form className='systemForms' >
          <label>Título:</label>
          <input type="text" id="systemTitle" onChange={(c) => formData.title = c.target.value}></input>

          <label>Médico:</label>
          <select id="systemMedic" name="medico">
            <option value="andre1">André</option>
            <option value="nicolas2">Nicolas</option>
          </select>

          <label>Serviço/Ação: </label>
          <input type="text" id="systemAction" onChange={(c) => formData.desc = c.target.value}></input>
          <button className='systemButton' onClick={formSend}>Enviar</button>
          
        </form>
        <button className='systemButton' onClick={formReset}>Resetar dados locais</button>
      </section>
      <Footer />
    </div>
  )
}

export default System
