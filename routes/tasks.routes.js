const { Router } = require('express');
const { traerInventario,
    obtenerReportes,
    buscarProducto,
} = require('../controllers/tasks.controllers')

const router = Router();

router.get('/traerInventario', traerInventario)
router.get('/obtenerReportes', obtenerReportes)
router.get('/buscarProducto/:codigo', buscarProducto)


module.exports = router;