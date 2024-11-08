const express =require ('express'); 
const { create } = require('../services/usuario.service');
const { createUser, findAll, deleteUser, updateUser,login } = require('../controllers/usuario');
const router = express.Router();

router.post('/create', createUser );
router.get('/find/:id', );
router.delete('/:id', deleteUser);
router.put('/:id',updateUser);

router.get('/',findAll);


router.post('/login',login)
module.exports = router;