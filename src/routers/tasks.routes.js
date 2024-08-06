const router = require("express").Router();
const {
  traerTasks,
  crearTareas,
  traerTareaPorId,
  actualizarPorId,
  eliminarPorId,
} = require("./../controllers/tasks.controllers");

router.get("/tasks", traerTasks);
router.post("/tasks", crearTareas);
router.get("/tasks/:id", traerTareaPorId);
router.put("/tasks/:id", actualizarPorId);
router.delete("/tasks/:id", eliminarPorId);

module.exports = router;
