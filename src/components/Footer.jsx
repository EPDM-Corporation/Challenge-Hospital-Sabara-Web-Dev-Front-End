import React from 'react'
import './Footer.css'
import Facebook from '../assets/icons/Facebook.png'
import Instagram from '../assets/icons/instagram.png'
import Youtube from '../assets/icons/youtube.png'
import Linkedin from '../assets/icons/linkedin.png'

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={Youtube} alt="" />
          <img src={Linkedin} alt="" />
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
