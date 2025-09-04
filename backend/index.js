
const express = require('express')
const app = express()

const path = require('path');
const cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static(path.join(__dirname, '../frontend/public')));
app.use(cors({
    origin: 'http://localhost:5500'
}))

const db = require('./config/db')
const Filmes = require('./models/Filmes')
const FilmesController = require('./controllers/FilmesController')

db.sync().then(() => {
    console.log('Conectado ao Banco de Dados...')
    app.listen(3000)
}).catch((error) => console.log(error)) 
