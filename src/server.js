const express = require('express')
const path = require('path')

const app = express()

// Definindo template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// Habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

//  Rotas
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Título Teste'
  })
})

// 404 error (not found)
app.use((req, res) => {
  res.send('Página não encontrada')
})

// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Servidor listening on port ${port}`))