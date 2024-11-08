const express =require ('express'); 
const { create } = require('../services/trabajadores.service');
const { createTrabajador, findAll, obtenerWorkers, deleteTrabajador, updateTrabajador } = require('../controllers/trabajadores');
const router = express.Router();

router.post('/create', createTrabajador );
router.get('/find/:id', );
router.delete('/:id', deleteTrabajador);
router.put('/:id',updateTrabajador);
router.get('/',findAll);
// Ruta para obtener workers con filtros opcionales
router.get("/", obtenerWorkers);

module.exports = router;