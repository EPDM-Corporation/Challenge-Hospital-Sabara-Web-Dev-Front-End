import React, { useEffect, useState } from 'react';
import './Home.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Home = () => {
  const [userDisplay, setUserDisplay] = useState(null);
  const [tasks, setTasks] = useState([
    {
      id:1744512211790,
      title: "Entregar pacote para o quarto 205",
      date: '07/03/2025 13:43',
      desc: 'Entregar o pacote de água e comida para o quarto 205'
    },
  ]);

  useEffect(() => {
    let usuarioSalvo = JSON.parse(localStorage.getItem("user"));
    setUserDisplay(usuarioSalvo['displayName'])
  }, []);

  const deleteTask = (taskId) =>{
    setTasks(tasks.filter(task => task.id !== taskId))
  };
  console.log(Date.now())
  return (
    <div>
      <Header/>
      <div id='homeContent'>
        <h2 style={{margin:'25px'}}>Olá {userDisplay}</h2>
        <section className='taskPanel overflow-auto'>
          <div className='taskPanelTop'></div>

          <div className='taskCards'>
          {tasks.map((task) => (
            <div key={task.id}>
              <div className='taskInfo'>
                <div className='taskTitle'>{task.title}</div> 
                <div className='taskHour'>{task.date}</div> 
                <div className='taskDesc'>{task.desc}</div> 
                <button className='taskButton' onClick={() => deleteTask(task.id)}>Finalizar</button>
              </div>
              <hr />
            </div>
          ))}
        </div>



        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
