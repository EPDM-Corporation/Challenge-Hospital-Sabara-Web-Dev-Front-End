import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './NavProfile.css'
import Image from '/public/andrepfp.png'

const NavProfile = () => {
    const [profileName, setProfileName] = useState(null);
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
    let usuarioSalvo = JSON.parse(localStorage.getItem("user"));
    setProfileName(usuarioSalvo['displayName'])
    setProfileImage(usuarioSalvo['profileImage'])
    }, []);
  return (
    <div>
        <div id='profile'>
            <img src={profileImage} alt="" id='pfp' />
            <div>
                <div className='profileText'>{profileName}</div>
                <Link to={"/"} id='exitButton'>Sair</Link>
            </div>
        </div>
    </div>
  )
}

export default NavProfile
