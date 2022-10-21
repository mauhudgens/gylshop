const { Router } = require('express');
const { getAllTask, getTask, createTask, deleteTask, updateTask, litologia } = require('../controllers/tasks.controllers')

const router = Router();

router.get('/tasks', getAllTask)

router.get('/tasks/:id', getTask)

router.get('/desc_litologia/:id', litologia)

router.post('/tasks', createTask)

router.delete('/tasks/:id', deleteTask)

router.put('/tasks/:id', updateTask)


module.exports = router;