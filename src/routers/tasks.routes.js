import { Router } from "express";
const router = Router();
import {
  traerTasks,
  crearTareas,
  traerTareaPorId,
  actualizarPorId,
  eliminarPorId,
}  from "./../controllers/tasks.controllers.js";
import { validador } from "../validations/validation.js";
import { applyValidation } from "../validations/applyValidations.js";

router.get("/tasks", traerTasks);
router.post("/tasks",validador,applyValidation,crearTareas);
router.get("/tasks/:id", traerTareaPorId);
router.put("/tasks/:id", actualizarPorId);
router.delete("/tasks/:id", eliminarPorId);

export {router};
