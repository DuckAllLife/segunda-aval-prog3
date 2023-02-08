
//Carregando o Express
const express = require('express')

//Express instance
const app = express()

//Middleware
app.use(express.static('./html'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Ouvindo na porta 8000
app.listen(8000, function () {
  console.log('Server listening localhost:8000')
})