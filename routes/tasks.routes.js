const { Router } = require('express');
const { traerInventario} = require('../controllers/tasks.controllers')

const router = Router();

router.get('/traerInventario', traerInventario)

module.exports = router;