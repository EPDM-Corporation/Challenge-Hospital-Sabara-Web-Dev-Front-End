import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './Sobre.css'


const Sobre = () => {
    return (
        <section>
            <Header />
            <section id='sobre'>
                <h1>Sobre</h1>
                <div id='sobreSection'>
                    <h2 id='sobreTitle'>Problemas Identificados no Atendimento Hospitalar</h2>
                    <p id='sobreP'>Um dos principais problemas identificados nas análises de pacientes antigos foi a falta de atenção,
                    organização e agilidade no atendimento. Essa combinação resultou em um alto nível de insatisfação por
                    parte dos atendidos e gerou um estresse significativo entre os colaboradores envolvidos no processo.</p>
                </div>

                <div id='sobreSection'>
                    <h2 id='sobreTitle'>Proposta de Solução da Equipe EPDM</h2>
                    <p id='sobreP' className='overflow'>Diante desses desafios, nossa equipe EPDM se uniu para desenvolver uma solução eficaz.
                         Pensamos em aprimorar o sistema de atendimento do hospital, tornando-o o mais simples e funcional possível 
                         para médicos e enfermeiros. Entre as melhorias propostas, destacam-se a automatização das agendas de cada profissional 
                         e a organização dos atendimentos em formato de lista, contendo a ordem dos próximos pacientes e as respectivas informações
                          sobre suas necessidades e procedimentos.</p>
                </div>
            </section>
            <Footer />
        </section>
    )
}

export default Sobre
