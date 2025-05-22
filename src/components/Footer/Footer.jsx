import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import './Footer.css'
import Facebook from '/src/assets/facebook.png'
import Instagram from '/src/assets/icons/instagram.png'
import Youtube from '/src/assets/icons/youtube.png'
import Linkedin from '/src/assets/icons/linkedin.png'

const Footer = () => {
  return (
    <footer>
      <div id='footerInfo'>
        <div id='footerSocials'>
          <FontAwesomeIcon icon={faFacebook}  size='3x'/>
          <FontAwesomeIcon icon={faInstagram}  size='3x'/>
          <FontAwesomeIcon icon={faLinkedin}  size='3x'/>
          <FontAwesomeIcon icon={faWhatsapp}  size='3x'/>
        </div>
        <div id='footerText'>
        © Projeto de gestão de tarefas  Todos os direitos reservados
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
