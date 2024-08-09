import { Router } from "express";
const router = Router();
import {
  traerTasks,
  crearTareas,
  traerTareaPorId,
  actualizarPorId,
  eliminarPorId,
}  from "./../controllers/tasks.controllers.js";

router.get("/tasks", traerTasks);
router.post("/tasks", crearTareas);
router.get("/tasks/:id", traerTareaPorId);
router.put("/tasks/:id", actualizarPorId);
router.delete("/tasks/:id", eliminarPorId);

export {router};
