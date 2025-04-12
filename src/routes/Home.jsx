import React, { useEffect, useState } from 'react';
import './Home.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'


const Home = () => {
  const [userDisplay, setUserDisplay] = useState(null);
  useEffect(() => {
    let usuarioSalvo = JSON.parse(localStorage.getItem("user"));
    console.log(usuarioSalvo['displayName'])
    setUserDisplay(usuarioSalvo['displayName'])
  }, []);
  return (
    <div>
      <Header/>
      <div id='homeContent'>
        <h2 style={{margin:'25px'}}>Olá {userDisplay}</h2>
        <section className='taskPanel overflow-auto'>
          <div className='taskPanelTop'></div>
          {/* <div className='taskCards'>
            <div className='taskInfo'>
              <div className='taskTitle'>Entregar pacote para o quarto 205</div>
              <div className='taskHour'>07/03/2025 13:43</div>
              <div className='taskDesc'>Entregar o pacote de água e comida para o quarto 205</div>
              <button className='taskButton'>Finalizar</button>
            </div>
            <hr />
          </div> */}
           <div className='taskCards'>
            <div className='taskInfo'>
              <div className='taskTitle'>Entregar pacote para o quarto 205</div>
              <div className='taskHour'>07/03/2025 13:43</div>
              <div className='taskDesc'>Entregar o pacote de água e comida para o quarto 205</div>
              <button className='taskButton'>Finalizar</button>
            </div>
            <hr />
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
