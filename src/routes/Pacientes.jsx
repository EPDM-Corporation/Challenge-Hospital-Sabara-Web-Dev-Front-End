import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './Pacientes.css'

const Pacientes = () => {
  return (
    <section>
        <Header/>
        <section id='forms-section'>
          {/* FORMULARIO */}
            <form>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" className="form-control" id="nome" placeholder="Digite o nome" required />
              </div>

              <div className="mb-3">
                <label htmlFor="idade" className="form-label">Idade</label>
                <input type="number" className="form-control" id="idade" placeholder="Digite a idade" min="0" required />
              </div>

              <div className="mb-3">
                <label htmlFor="estado" className="form-label">Estado de Saúde</label>
                <select className="form-select" id="estado" required>
                  <option value="">Selecione...</option>
                  <option value="estavel">Estável</option>
                  <option value="recuperacao">Em recuperação</option>
                  <option value="critico">Crítico</option>
                  <option value="pos-op">Pós-operatório</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="detalhes" className="form-label">Detalhes Médicos</label>
                <textarea className="form-control" id="detalhes" rows="3" placeholder="Descreva sintomas, condições, etc." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Salvar Dados</button>
            </form>

          {/* TABELA */}
            <div className="table-responsive">
              <table className="table table-striped" id="pacientes-table">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Idade</th>
                    <th scope="col">Estado de Saúde</th>
                    <th scope="col">Detalhes Médicos</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>14</td>
                    <td>Estável</td>
                    <td>Dor no estômago</td>
                    <td>e</td>
                  </tr>
                  <tr>
                    <td>Sarah</td>
                    <td>11</td>
                    <td>Grave</td>
                    <td>Perna quebrada</td>
                    <td>e</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </section>
        <Footer/>
    </section>
  )
}

export default Pacientes
