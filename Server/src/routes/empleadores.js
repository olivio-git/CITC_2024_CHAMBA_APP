const express =require ('express'); 
const { create } = require('../services/empleadores.service');

const router = express.Router();

router.post('/create', create);
router.get('/find/:id',  );
router.get('/',);

module.exports = router;