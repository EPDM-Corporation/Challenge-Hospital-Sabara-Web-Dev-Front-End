import React from 'react'
import {Link} from 'react-router-dom'
import './NavProfile.css'
import Profile from '../../assets/andrepfp.png'

const NavProfile = () => {
  return (
    <div>
        <div id='profile'>
            <img src={Profile} alt="" id='pfp' />
            <div>
                <div className='profileText'>André Matos</div>
                <Link to={"/"} id='exitButton'>Sair</Link>
            </div>
        </div>
    </div>
  )
}

export default NavProfile
