const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { v4: uuid } = require("uuid")
  
const app = express();
const Port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.listen(Port, () => {
    console.log(`Servidor rodando na porta ${Port}`)
})

let pacientes = []

app.get('/pacientes', (req, res) => {
    res.json(pacientes)
})

app.post('/pacientes', (req, res) => {
    const { nome, idade, estado, detalhes} = req.body;
    if (!nome || !idade || !estado || !detalhes ) {
        return res.status(400).json({ error: 'Campo Obrigatorios' })
    }
    const novoItem = { id: uuid(), nome, idade, estado, detalhes }
    pacientes.push(novoItem);
    res.status(201).json(novoItem);
})

app.put('/pacientes/:id', (req, res) => {
    const pacienteId = req.params.id;
    const { nome, idade, estado, detalhes } = req.body;

    if (!nome || !idade || !estado || !detalhes) {
         return res.status(400).json({ error: 'O campo é obrigatório' })
    }
    const pacienteIndex = pacientes.findIndex(item => item.id === pacienteId)
    if (pacienteIndex === -1) {
        return res.status(404).json({ error: 'Paciente não encontrado' })
    }
    pacientes[pacienteIndex] = { id: pacienteId, nome, idade, estado, detalhes }
    res.json(pacientes[pacienteIndex])
})

app.delete('/pacientes/:id', (req, res) => {
    const pacienteId = req.params.id;
    const inicioPaciente = pacientes.length;
    pacientes = pacientes.filter(item => item.id !== pacienteId)
    if (pacientes.length === inicioPaciente) {
        return res.status(404).json({ error: 'Paciente não encontrado' })
    }
    res.sendStatus(204)
})