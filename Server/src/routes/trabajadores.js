const express =require ('express'); 
const { create } = require('../services/trabajadores.service');
const { createTrabajador, findAll, deleteTrabajador, updateTrabajador } = require('../controllers/trabajadores');
const router = express.Router();

router.post('/create', createTrabajador );
router.get('/find/:id', );
router.delete('/:id', deleteTrabajador);
router.put('/:id',updateTrabajador);

module.exports = router;