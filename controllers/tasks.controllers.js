const pool = require('../db')

const getAllTask = async(req, res, next) => {
    try {
        //throw new Error('Error en getAllTask')
        const result = await pool.query(`SELECT * FROM public."Proyecto_ubicacion"`)
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send({
            rows: result.rows
        })
    } catch (error) {
        next(error)
    }

}

const getTask = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('SELECT * FROM relacional.EMPLEADOS WHERE empleadoid = $1', [id]);

        console.log(result)

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Id no encontrado"
            })

        res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
}

const createTask = async(req, res, next) => {
    const { title, description } = req.body

    try {
        const result = await pool.query('INSERT INTO "Proyecto_ubicacion" (proyecto, ubicacion) VALUES ($1, $2) RETURNING *', [
            title,
            description
        ]);

        res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
}

const deleteTask = async(req, res, next) => {

    try {
        const { id } = req.params

        const result = await pool.query('DELETE FROM "Proyecto_ubicacion" WHERE id = $1', [id]);

        console.log(result)

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "Id no encontrado"
            })

        return res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const updateTask = async(req, res, next) => {

    try {
        const { id } = req.params;

        const { title, description } = req.body;

        const result = await pool.query('UPDATE "Proyecto_ubicacion" SET proyecto = $1, ubicacion =$2 WHERE id = $3 RETURNING *', [
            title, description, id
        ]);

        console.log(result)

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Id no encontrado"
            })
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
}

const litologia = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select a.roca , (select descripcion from datos.componentes where componentes = a.roca) as descripcion_clase, a.litologia , (select descripcion from datos.componentes where componentes = a.litologia) as descripcion_tipo from zmg.litologia_jalisco a inner join "Proyecto_ubicacion" b on ST_Intersects(a.geom, b.geom)  and st_area(st_intersection(b.geom, a.geom))/st_area(b.geom) > .6 where b.id = $1', [id]);
        res.setHeader("Access-Control-Allow-Origin", "*")

        console.log(result)

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Id no encontrado"
            })

        res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllTask,
    getTask,
    createTask,
    deleteTask,
    updateTask,
    litologia
}