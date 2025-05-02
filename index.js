const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cadastro', (req, res) => {
    res.render('cadastro')
})

app.get('/usuarios', (req,res) => {
    res.render('usuarios')
})

app.use((req, res) => {
    res.send('Página não encontrada!')
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Servidor está rodando na porta ${port}...`))