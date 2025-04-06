import React from 'react'
import './Login.css'
import Image from "../assets/Logo.png";

const Login = () => {
  return (
    <section className='login'>
      <div className=''>
        <h1>Login</h1>
      </div>

      <div id='login-box'>
        <img src={Image} alt="" width={100} height={100}/>
      </div>
    </section>
  )
}

export default Login
