import { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import axios from 'axios'
import './Pacientes.css'


const Pacientes = () => {

  const [novoPaciente, setNovoPaciente] = useState({nome:'',idade:'',estado:'',detalhes:''})
  const [pacientes, setPacientes] = useState([])
  const [editar, setEditar] = useState(false)

  const API_URL = 'http://localhost:3000/pacientes';

  const cadastrarPacientes = async()=>{
    if (!novoPaciente.nome || !novoPaciente.idade || !novoPaciente.estado || !novoPaciente.detalhes){
        alert("Campo Obrigatório.")
        return
    }
    try{
        const response = await axios.post(API_URL,novoPaciente);
        setPacientes([...pacientes,response.data]);
        setNovoPaciente({nome:'',idade:'',estado:'',detalhes:''})
        setEditar(false)
    }
    catch(error){
        console.log("Erro ao criar os dados do paciente.", error);
    }
}
  const consultarPacientes = async()=>{
      try{
          const response = await axios.get(API_URL);
          setPacientes(response.data);
      }catch(error){
          console.log("Erro ao buscar o código", error);
      }
  }


  const alterarPacientes = async()=>{
    if(!novoPaciente.nome ||!novoPaciente.idade || !novoPaciente.estado || !novoPaciente.detalhes){
        alert("Campo Obrigatório.")
        return
    }
    try{
        const response = await axios.put(`${API_URL}/${novoPaciente.id}`, novoPaciente);
        setPacientes(pacientes.map(paciente => paciente.id === novoPaciente.id ? response.data :paciente))
        setNovoPaciente({nome:'',idade:'',estado:'',detalhes:''})
        setEditar(false)
    }
    catch(error){
        console.log("Erro ao atualizar o paciente", error)
    }
}

  const deletarPaciente = async(id)=>{
      if(window.confirm("Tem certeza que quer deletar os dados do paciente?")){
          try{
              await axios.delete(`${API_URL}/${id}`)
              setPacientes(pacientes.filter((paciente) => paciente.id !== id));
          } catch(error){
              console.log("Erro ao excluir um paciente", error)
          }
      }else{
          console.log("Exclusão do paciente cancelada.")
      }
  }

  const handleEditar = (paciente)=>{
    setNovoPaciente(paciente);
    setEditar(true)
}

  const handleSubmit = () =>{
      if(editar){
          alterarPacientes();
      }else{
          cadastrarPacientes();
      }
  }

  useEffect(()=>{
      consultarPacientes()
  })

  return (
    <section>
      <Header/>
      <section id='forms-section' className='container'>
        {/* FORMULARIO */}
        <div className="form-wrapper" id='pacientes-forms'>
          <form  onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input type="text" className="form-control" id="nome" placeholder="Digite o nome" required value={novoPaciente.nome} onChange={(e) => setNovoPaciente({...novoPaciente, nome:e.target.value})}/>
            </div>

            <div className="mb-3">
              <label htmlFor="idade" className="form-label">Idade</label>
              <input type="number" className="form-control" id="idade" placeholder="Digite a idade" min="0" required value={novoPaciente.idade} onChange={(e) => setNovoPaciente({...novoPaciente, idade:e.target.value})}/>
            </div>

            <div className="mb-3">
              <label htmlFor="estado" className="form-label">Estado de Saúde</label>
              <select className="form-select" id="estado" required value={novoPaciente.estado} onChange={(e) => setNovoPaciente({...novoPaciente, estado:e.target.value})}>
                <option value="">Selecione...</option>
                <option value="estavel">Estável</option>
                <option value="recuperacao">Em recuperação</option>
                <option value="critico">Crítico</option>
                <option value="pos-op">Pós-operatório</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="detalhes" className="form-label">Detalhes Médicos</label>
              <textarea className="form-control" id="detalhes" rows="3" placeholder="Descreva sintomas, condições, etc." required value={novoPaciente.detalhes} onChange={(e) => setNovoPaciente({...novoPaciente, detalhes:e.target.value})}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleSubmit} >{editar ? "Alterar Dados" : "Salvar Dados"}</button>
          </form>
        </div>

        {/* TABELA */}
        <div className="table-wrapper container table-responsive tabela-pacientes">
            <table className="table table-striped" id="pacientes-table">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Idade</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Detalhes</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                {pacientes.length > 0 ?(
                  pacientes.map(paciente => (
                <tr key={paciente.id}>
                  <td>{paciente.nome}</td>
                  <td>{paciente.idade}</td>
                  <td>{paciente.estado}</td>
                  <td>{paciente.detalhes}</td>
                  <td>
                    <div className="d-flex flex-wrap">
                      <button type="button" className="btn btn-warning btn-sm">Editar</button>
                      <button type="button" className="btn btn-danger btn-sm">Excluir</button>
                    </div>
                  </td>
                </tr>
                  ))
                ) : (
                <tr>
                  <td>Nenhum Paciente Registrado</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                )}


              </tbody>
            </table>
        </div>

      </section>
      <Footer/>
    </section>
  )
}

export default Pacientes