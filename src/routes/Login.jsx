import React, { useState } from 'react';
import Image from "../assets/Logo.png";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Dados from '../dados.json'

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();

  const loginProblemText = () => {
    if (document.querySelector('.login-problem')){
      return
    }
    const loginDiv = document.createElement("div");
    loginDiv.textContent = "Usuário não encontrado";
    loginDiv.className = "login-problem"
    document.getElementById('login-form-error').appendChild(loginDiv);
  }

  const userLogin = (e) => {
    e.preventDefault();
    for (let i = 0; i < Dados.length; i++){
      let user = Dados[i]
      if (name == user['name'] && password == user['password']){
        localStorage.setItem("user",JSON.stringify(user))
        Navigate('/home');
        return
      }
    }
    loginProblemText();
  }
  return (
    <section className='login'>
      <div id='login-box'>
        <img src={Image} alt="" width={100} height={100} />
        <div id='login-title'>
          <h1>Login</h1>
        </div>
        <form>
          <div id='login-form-error'></div>
          <input type="text" className='loginInput'placeholder='Insira o seu nome'  required onChange={(c) => setName(c.target.value)}/>
          <input type="password" className='loginInput' placeholder='Insira sua senha'  required onChange={(c) => setPassword(c.target.value)}/>
          <button className='loginButton' onClick={userLogin}>Entrar</button>
        </form>
      </div>
    </section>
  )
}

export default Login
