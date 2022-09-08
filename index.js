const express = require('express')
const path = require('path')
const ejs = require('ejs')
const pool = require('./db')

const taskRoutes = require('./routes/tasks.routes')



const app = express()

// configuracion
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// rutas
app.get('/api/users', (req, res) => res.json([{name: 'ryan'}, {name: "jeo"}]))

app.get('/profile', (req, res) => {
    res.render('profile', {
        name: 'Ivan',
        age: 28
    })
})


// app.get('/ping', async (req, res) => {
//     const result = await pool.query(`SELECT * FROM relacional.EMPLEADOS`)
//     res.send({
//         rows: result.rows
//     })
// })

//archivos estaticos
app.use(express.static('public'))
app.use(taskRoutes)
//inicio servidor
app.listen(process.env.PORT || 3000)
console.log('Server on port', process.env.PORT || 3000)

