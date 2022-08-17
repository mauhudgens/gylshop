const express = require('express')

const app = express()

app.get('/', (req, res=> res.setEncoding("Hola Mundo")))

app.listen(process.env.PORT || 3000)
console.log('Server on port', process.env.PORT || 3000)

