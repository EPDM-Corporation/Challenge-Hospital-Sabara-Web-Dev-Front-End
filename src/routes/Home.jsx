import React, { useEffect, useState } from 'react';
import './Home.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Home = () => {
  const [userDisplay, setUserDisplay] = useState('');
  const [tasks, setTasks] = useState([]); // Inicialize como array vazio

  useEffect(() => {
    const usuarioSalvo = JSON.parse(localStorage.getItem("user"));
    if (usuarioSalvo) {
      setUserDisplay(usuarioSalvo['displayName'] || '');
      
      const usuarioTasks = JSON.parse(localStorage.getItem(usuarioSalvo["localStorageID"]));
      console.log(usuarioTasks)
      setTasks(usuarioTasks || []); // Garante que seja sempre array
      
    }
  }, []);

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    
    const usuarioSalvo = JSON.parse(localStorage.getItem("user"));
    if (usuarioSalvo) {
      localStorage.setItem(
        usuarioSalvo["localStorageID"],
        JSON.stringify(updatedTasks)
      );
    }
  };

  return (
    <div>
      <Header/>
      <div id='homeContent'>
        <h2 style={{margin:'25px'}}>Olá {userDisplay}</h2>
        <section className='taskPanel overflow-auto'>
          <div className='taskPanelTop'></div>

          <div className='taskCards'>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div key={task.id}>
                  <div className='taskInfo'>
                    <div className='taskTitle'>{task.title}</div> 
                    <div className='taskHour'>{task.date}</div> 
                    <div className='taskDesc'>{task.desc}</div> 
                    <button 
                      className='taskButton' 
                      onClick={() => deleteTask(task.id)}
                    >
                      Finalizar
                    </button>
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <p>Nenhuma tarefa encontrada</p> // Mensagem para lista vazia
            )}
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Home