const express = require("express");
const router = express.Router();
const workerController = require("../controllers/trabajadores");

router.post("/", workerController.createWorkerController); // Crear trabajador
router.get("/", workerController.getAllWorkersController); // Obtener todos los trabajadores
router.delete("/:id", workerController.deleteWorkerController); // Eliminar trabajador
router.put("/:id", workerController.updateWorkerController); // Actualizar trabajador
router.get("/filter", workerController.filterWorkersController); // Filtrar trabajadores

module.exports = router;
