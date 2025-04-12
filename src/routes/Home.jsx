import React from 'react'
import './Home.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Header/>
      <div id='homeContent'>
        <h2 style={{margin:'25px'}}>Olá André Matos</h2>
        <div className='taskPanel overflow-auto'>
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
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
