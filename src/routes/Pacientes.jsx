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
        <div className="form-wrapper">
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
        </div>

        {/* TABELA */}
        <div className="table-wrapper">
          <div className="table-responsive">
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
                <tr>
                  <td>Mark</td>
                  <td>32</td>
                  <td>Estável</td>
                  <td>Dor no estômago</td>
                  <td>
                    <div className="d-flex flex-wrap">
                      <button type="button" className="btn btn-warning btn-sm">Editar</button>
                      <button type="button" className="btn btn-danger btn-sm">Excluir</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Sarah</td>
                  <td>28</td>
                  <td>Grave</td>
                  <td>Perna quebrada</td>
                  <td>
                    <div className="d-flex flex-wrap">
                      <button type="button" className="btn btn-warning btn-sm">Editar</button>
                      <button type="button" className="btn btn-danger btn-sm">Excluir</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer/>
    </section>
  )
}

export default Pacientes