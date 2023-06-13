const { Router } = require('express');
const { getAllTask} = require('../controllers/tasks.controllers')

const router = Router();

router.get('/tasks', getAllTask)

module.exports = router;