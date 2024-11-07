const express =require ('express'); 
const { create } = require('../services/empleadores.service');
const { createEmpleador, findAll, deleteEmpleador, updateEmpleador } = require('../controllers/empleadores');
const router = express.Router();

router.post('/create', createEmpleador );
router.get('/find/:id', );
router.delete('/:id', deleteEmpleador);
router.put('/:id',updateEmpleador);
router.get('/',findAll);
module.exports = router;