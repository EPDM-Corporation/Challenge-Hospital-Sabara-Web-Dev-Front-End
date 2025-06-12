import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer>
        <div id='footerSocials'>
          <FontAwesomeIcon icon={faFacebook}  size='3x'/>
          <FontAwesomeIcon icon={faInstagram}  size='3x'/>
          <FontAwesomeIcon icon={faLinkedin}  size='3x'/>
          <FontAwesomeIcon icon={faWhatsapp}  size='3x'/>
        </div>
        <div id='footerText'>
        © Projeto de gestão de tarefas  Todos os direitos reservados
        </div>
      
    </footer>
  )
}

export default Footer
