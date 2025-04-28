const express = require('express')
const app = express()

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('formulario')
})

app.use((req, res) => {
    res.send('Página não encontrada!')
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Servidor está rodando na porta ${port}...`))