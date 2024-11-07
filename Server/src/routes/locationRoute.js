// routes/locationRoutes.js
const express = require('express');
const locationController = require('../controllers/locationController');

const router = express.Router();

router.post('/', locationController.crearUbicacion);
router.get('/', locationController.obtenerUbicaciones);
router.get('/:id', locationController.obtenerUbicacionPorId);
router.put('/:id', locationController.actualizarUbicacion);
router.delete('/:id', locationController.eliminarUbicacion);

module.exports = router;
