const router = require('express').Router();
const traerTasks = require('./../controllers/tasks.controllers')

router.get('/tasks', traerTasks);
router.post('/tasks',)

module.exports = router;