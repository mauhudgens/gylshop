const { Router } = require('express');
const { traerInventario,
    obtenerReportes,
    buscarProducto,
    insertarVenta
} = require('../controllers/tasks.controllers')

const router = Router();

router.get('/traerInventario', traerInventario)
router.get('/obtenerReportes', obtenerReportes)
router.get('/buscarProducto/:codigo', buscarProducto)
router.post('/insertarVenta', insertarVenta)

module.exports = router;