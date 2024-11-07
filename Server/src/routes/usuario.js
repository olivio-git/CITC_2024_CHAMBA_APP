const express =require ('express'); 
const { create } = require('../services/usuario.service');
const { createUser, findAll, deleteUser, updateUser } = require('../controllers/usuario');
const router = express.Router();

router.post('/create', createUser );
router.get('/find/:id', );
router.delete('/:id', deleteUser);
router.put('/:id',updateUser);

router.get('/',findAll);

module.exports = router;