const { Router } = require('express');
const { traerInventario,
    obtenerReportes
} = require('../controllers/tasks.controllers')

const router = Router();

router.get('/traerInventario', traerInventario)
router.get('/obtenerReportes', obtenerReportes)

module.exports = router;