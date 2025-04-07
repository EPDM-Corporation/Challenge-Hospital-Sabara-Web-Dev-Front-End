import React from 'react';
import Image from "../assets/Logo.png";
import './Login.css';

const Login = () => {
  console.log('Hello World')
  return (
    <section className='login'>
      <div id='login-box'>
        <img src={Image} alt="" width={100} height={100} />
        <div id='login-title'>
          <h1>Login</h1>
        </div>
        <input type="text" placeholder='Insira o seu nome' />
        <input type="password" placeholder='Insira sua senha' />
        <button>Entrar</button>
      </div>
    </section>
  )
}

export default Login
