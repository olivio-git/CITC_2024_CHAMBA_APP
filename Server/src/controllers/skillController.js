// controllers/skillController.js
const skillService = require('../services/skillService');

// Create a new skill
const createSkill = async (req, res) => {
  const { name } = req.body;

  try {
    const newSkill = await skillService.createSkill(name);
    return res.status(201).json(newSkill);  // Return the newly created skill
  } catch (error) {
    return res.status(500).json({
      error: 'Error creating skill: ' + error.message,
    });
  }
};

// Get all skills
const getSkills = async (req, res) => {
  try {
    const skills = await skillService.getSkills();
    return res.status(200).json(skills);
  } catch (error) {
    return res.status(500).json({
      error: 'Error fetching skills: ' + error.message,
    });
  }
};

// Get skill by ID
const getSkillById = async (req, res) => {
  const { id } = req.params;

  try {
    const skill = await skillService.getSkillById(id);
    return res.status(200).json(skill);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

// Update a skill by ID
const updateSkill = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const skill = await skillService.updateSkill(id, name);
    return res.status(200).json(skill);
  } catch (error) {
    return res.status(500).json({
      error: 'Error updating skill: ' + error.message,
    });
  }
};

// Delete a skill by ID
const deleteSkill = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await skillService.deleteSkill(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      error: 'Error deleting skill: ' + error.message,
    });
  }
};

module.exports = {
  createSkill,
  getSkills,
  getSkillById,
  updateSkill,
  deleteSkill,
};
