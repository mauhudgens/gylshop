const pool = require('../db')

const traerInventario = async (req, res, next) => {
    try {
        //throw new Error('Error en getAllTask')
        const result = await pool.query(`select * from public.productos`)
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send({
            rows: result.rows
        })
    } catch (error) {
        next(error)
    }

}

const obtenerReportes = async (req, res, next) => {
    try {
        //throw new Error('Error en getAllTask')
        const result = await pool.query(`select v.fecha, v.tipo, v.total, e.nombre as empleado
        from public.ventas v
        left join empleados e on v.id_empleado = e.id`)
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send({
            rows: result.rows
        })
    } catch (error) {
        next(error)
    }

}


const buscarProducto = async (req, res, next) => {
    try {
        const { codigo } = req.params
        //throw new Error('Error en getAllTask')
        const result = await pool.query('select * from public.productos where codigo = $1', [codigo])
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send({
            rows: result.rows
        })
    } catch (error) {
        next(error)
    }

}

module.exports = {
    traerInventario,
    obtenerReportes,
    buscarProducto
}