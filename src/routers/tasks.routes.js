const router = require('express').Router();
const traerTasks = require('./../controllers/tasks.controllers')

router.get('/tasks', traerTasks);

module.exports = router;