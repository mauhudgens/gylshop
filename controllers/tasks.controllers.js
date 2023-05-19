const pool = require('../db')

const getAllTask = async(req, res, next) => {
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
//UBICACION
const m1_descripcion = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select descripcion_de_mapa from capas.datos.catalogo_mapas where id = $1', [id]);
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")

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

const m1_datos = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select a.proyecto,a.ubicacion from public."Radio 500 mts" a where id_proyecto = $1', [id]);
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")

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
//RECURSOS EXTERNOS
const m2_descripcion = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select descripcion_de_mapa from capas.datos.catalogo_mapas where id = $1', [id]);
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")

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

const m2_datos = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select count (*) as unidades, a.tipo_recurso from zmg.denue_jalisco a inner join "Radio 500 mts" b  on ST_Intersects(b.geom, a.geom)  where b.id_proyecto = $1 and a.tipo_recurso is not null group by a.tipo_recurso', [id]);
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")

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
//INFRAESTRUCTURA HIDRAULICA
const m3_descripcion = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select descripcion_de_mapa from capas.datos.catalogo_mapas where id = $1', [id]);
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")

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

const m3_datos_1 = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select a.cobertura from zmg."vwPOTmetCobertura_agua_D511" a inner join "Radio 500 mts" b  on ST_Intersects(b.geom, a.geom)  or st_area(st_intersection(a.geom, b.geom))/st_area(a.geom) > .6 where b.id_proyecto = $1 group by a.cobertura', [id]);
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")

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

const m3_datos_2 = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select a.cobertura from zmg."vwPOTmetCobertura_drenaje_D511" a inner join "Radio 500 mts" b on ST_Intersects(b.geom, a.geom)  and st_area(st_intersection(a.geom, b.geom))/st_area(a.geom) > .2 where b.id_proyecto = $1 group by a.cobertura', [id]);
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")

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
//LITOLOGIA
const m4_descripcion = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select descripcion_de_mapa from capas.datos.catalogo_mapas where id = $1', [id]);
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")

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

const m4_datos = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select a.roca , (select descripcion from datos.componentes where componentes = a.roca) as descripcion_clase, a.litologia , (select descripcion from datos.componentes where componentes = a.litologia) as descripcion_tipo from zmg.litologia_jalisco a inner join "Proyecto_ubicacion" b on ST_Intersects(a.geom, b.geom)  and st_area(st_intersection(b.geom, a.geom))/st_area(b.geom) > .6 where b.id = $1', [id]);
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")

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

//GEOMORFOLOGIA
const m5_descripcion = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select descripcion_de_mapa from capas.datos.catalogo_mapas where id = $1', [id]);
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")

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

const m5_datos = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select a.nombre , (select descripcion from datos.componentes where componentes = a.nombre) as descripcion_tipo from zmg.sistema_de_topoformas_general a inner join "Radio 500 mts" b on ST_Intersects(a.geom, b.geom) and st_area(st_intersection(b.geom, a.geom))/st_area(b.geom) > .6 where b.id_proyecto = $1', [id]);
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")

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
//EDAFOLOGIA
const m6_descripcion = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select descripcion_de_mapa from capas.datos.catalogo_mapas where id = $1', [id]);
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")

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

const m6_datos = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select  a.tipo , (select descripcion from datos.componentes where componentes = a.tipo) as descripcion_tipo from zmg.edafologia_zmg_conabio  a inner join "Radio 500 mts" b on ST_Intersects(a.geom, b.geom)  and st_area(st_intersection(b.geom, a.geom))/st_area(b.geom) > .6 where b.id_proyecto = $1', [id]);
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")

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

//USO DE SUELO Y VEGETACION
const m7_descripcion = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select descripcion_de_mapa from capas.datos.catalogo_mapas where id = $1', [id]);
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")

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

const m7_datos = async(req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select a.tipo from zmg.vwpotmetusosuelovegetacion a inner join "Radio 500 mts" b on ST_Intersects(a.geom, b.geom)  and st_area(st_intersection(b.geom, a.geom))/st_area(b.geom) > .5 where b.id_proyecto  = $1 group by a.tipo', [id]);
        res.setHeader("Access-Control-Allow-Origin", "https://descripcionmapas.gis-code.com")

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
    m1_descripcion,
    m1_datos,
    m2_descripcion,
    m2_datos,
    m3_descripcion,
    m3_datos_1,
    m3_datos_2,
    m4_descripcion,
    m4_datos,
    m5_descripcion,
    m5_datos,
    m6_descripcion,
    m6_datos,
    m7_descripcion,
    m7_datos
}