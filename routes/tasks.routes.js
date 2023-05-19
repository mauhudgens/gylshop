const { Router } = require('express');
const { getAllTask, getTask, createTask, deleteTask, updateTask, m1_descripcion, m1_datos, m2_descripcion, m2_datos, m3_descripcion, m3_datos_1, m3_datos_2, 
    m4_descripcion, m4_datos, m5_descripcion, m5_datos, m6_descripcion, m6_datos, m7_descripcion, m7_datos } = require('../controllers/tasks.controllers')

const router = Router();

router.get('/tasks', getAllTask)
router.get('/tasks/:id', getTask)
router.get('/m1_descripcion/:id', m1_descripcion)
router.get('/m1_datos/:id', m1_datos)
router.get('/m2_descripcion/:id', m2_descripcion)
router.get('/m2_datos/:id', m2_datos)
router.get('/m3_descripcion/:id', m3_descripcion)
router.get('/m3_datos_1/:id', m3_datos_1)
router.get('/m3_datos_2/:id', m3_datos_2)
router.get('/m4_descripcion/:id', m4_descripcion)
router.get('/m4_datos/:id', m4_datos)
router.get('/m5_descripcion/:id', m5_descripcion)
router.get('/m5_datos/:id', m5_datos)
router.get('/m6_descripcion/:id', m6_descripcion)
router.get('/m6_datos/:id', m6_datos)
router.get('/m7_descripcion/:id', m7_descripcion)
router.get('/m7_datos/:id', m7_datos)
router.post('/tasks', createTask)
router.delete('/tasks/:id', deleteTask)
router.put('/tasks/:id', updateTask)


module.exports = router;