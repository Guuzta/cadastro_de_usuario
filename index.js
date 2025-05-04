const express = require('express')
const fs = require('fs')
const path = require('path')
const multer = require('multer')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({extended: true}))

const upload = multer({dest: 'public/uploads/'})


app.get('/', (req, res) => {
    res.render('home' ,{
        title: 'Página Inicial'
    })
})

app.get('/cadastro', (req, res) => {
    res.render('cadastro', {
        title: 'Cadastro'
    })
})

app.post('/data-users', upload.single('image'), (req, res) => {

    const {name, age } = req.body
    const data = fs.readFileSync('public/store/user.json')
    const users = JSON.parse(data)

    const {filename} = req.file
    const path = `/uploads/${filename}`

    users.push(
        {
            name,
            age,
            image: path,
        }
    )

    const usersString = JSON.stringify(users)

    fs.writeFileSync('public/store/user.json', usersString)
    res.redirect('/cadastro')
})


app.get('/usuarios', (req,res) => {

    const data = fs.readFileSync('public/store/user.json')
    const users = JSON.parse(data)

    console.log(users)

    res.render('usuarios', {
        title: 'Usuários',
        users: users,
    })

   
})

app.use((req, res) => {
    res.send('Página não encontrada!')
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Servidor está rodando na porta ${port}...`))