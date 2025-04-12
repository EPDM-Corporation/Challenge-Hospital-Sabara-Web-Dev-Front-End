import React from 'react'
import './Home.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Header/>
      <div id='homeContent'>
        <h2>Olá André Matos</h2>
        <div className='taskPanel'>
          <div className='taskPanelTop'></div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
