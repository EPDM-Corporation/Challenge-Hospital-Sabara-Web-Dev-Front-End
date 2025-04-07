import React from 'react'
import './Login.css'
import Image from "../assets/Logo.png";

const Login = () => {
  return (
    <section className='login'>
      <div id='login-title'>
        <h1>Login</h1>
      </div>

      <div id='login-box'>
        <img src={Image} alt="" width={100} height={100}/>
        <input type="text" placeholder='Insira o seu nome'/>
        <input type="password" placeholder='Insira sua senha'/>
        <button>Entrar</button>
      </div>
    </section>
  )
}

export default Login
