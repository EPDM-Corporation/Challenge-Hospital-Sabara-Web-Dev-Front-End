import React, { useState } from 'react';
import Image from "../assets/Logo.png";
import './Login.css';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const userLogin = (e) => {
    e.preventDefault();
    
  }
  return (
    <section className='login'>
      <div id='login-box'>
        <img src={Image} alt="" width={100} height={100} />
        <div id='login-title'>
          <h1>Login</h1>
        </div>
        <form>
          <input type="text" className='loginInput'placeholder='Insira o seu nome'  required onChange={(c) => setName(c.target.value)}/>
          <input type="password" className='loginInput' placeholder='Insira sua senha'  required onChange={(c) => setPassword(c.target.value)}/>
          <button className='loginButton' onClick={userLogin}>Entrar</button>
        </form>
      </div>
    </section>
  )
}

export default Login
