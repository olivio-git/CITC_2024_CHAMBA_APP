// routes/skillRoutes.js
const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');

router.post('/', skillController.createSkill);
router.get('/', skillController.getSkills);
router.get('/:id', skillController.getSkillById);
router.put('/:id', skillController.updateSkill);
router.delete('/:id', skillController.deleteSkill);

module.exports = router;
