const pool = require('../db')

const getAllTask = async (req, res, next) => {
    try {
        //throw new Error('Error en getAllTask')
        const result = await pool.query(`select id, proyecto, tipo from public."Proyecto_ubicacion" order by id`)
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")
        res.send({
            rows: result.rows
        })
    } catch (error) {
        next(error)
    }

}

module.exports = {
    getAllTask,
}