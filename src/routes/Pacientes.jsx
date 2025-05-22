import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './Pacientes.css'

const Pacientes = () => {
  return (
    <section>
        <Header/>
        <section>
          {/* FORMULARIO */}
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

          {/* TABELA */}
            <table className="table table-striped">
              <thead>
                <tr>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
                <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
                <tr>
                <td>John</td>
                <td>Doe</td>
                <td>@social</td>
              </tr>
              </tbody>
            </table>
          </section>
        <Footer/>
    </section>
  )
}

export default Pacientes
