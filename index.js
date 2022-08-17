const express = require('express')

const app = express()

app.get('/', (req, res) => res.send("Hola Mundo"))

//app.use(express.static('public'))

app.listen(process.env.PORT || 3000)
console.log('Server on port', process.env.PORT || 3000)

