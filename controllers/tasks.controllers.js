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

module.exports = {
    traerInventario,
}