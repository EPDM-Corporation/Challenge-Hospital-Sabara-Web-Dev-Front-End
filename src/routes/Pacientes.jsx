import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Table from '../components/Table/Table'
import Forms from '../components/Forms/Forms'

const Pacientes = () => {
  return (
    <section>
        <Header/>
            <Forms></Forms>
            <Table></Table>
        <Footer/>
    </section>
  )
}

export default Pacientes
