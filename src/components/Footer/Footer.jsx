import React from 'react'
import './Footer.css'
import Facebook from '/src/assets/icons/Facebook.png'
import Instagram from '/src/assets/icons/instagram.png'
import Youtube from '/src/assets/icons/youtube.png'
import Linkedin from '/src/assets/icons/linkedin.png'

const Footer = () => {
  return (
    <footer>
      <div id='footerInfo'>
        <div id='footerSocials'>
          <img src={Facebook} className='footerIcon' alt="" />
          <img src={Instagram} className='footerIcon' alt="" />
          <img src={Youtube} className='footerIcon' alt="" />
          <img src={Linkedin} className='footerIcon' alt="" />
        </div>
        <div id='footerText'>
        © Projeto de gestão de tarefas  Todos os direitos reservados
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
