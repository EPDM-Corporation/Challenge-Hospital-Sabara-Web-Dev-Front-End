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
    const { nome, descricao } = req.body;
    if (!nome || !descricao) {
        return res.status(400).json({ error: 'Campo Obrigatorios' })
    }
    const novoItem = { id: uuid(), nome, descricao }
    produtos.push(novoItem);
    res.status(201).json(novoItem);
})