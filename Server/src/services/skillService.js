// services/skillService.js
const skillDao = require('../dao/skillDao');

// Create a new skill
const createSkill = async (name) => {
  try {
    // Add any validation or business logic before creating the skill
    if (!name || name.trim() === '') {
      throw new Error('Skill name is required');
    }

    // Check if the skill already exists
    const existingSkills = await skillDao.getSkills();
    if (existingSkills.find(skill => skill.name.toLowerCase() === name.toLowerCase())) {
      throw new Error('Skill already exists');
    }

    return await skillDao.createSkill(name);
  } catch (error) {
    throw new Error('Error creating skill: ' + error.message);
  }
};

// Get all skills
const getSkills = async () => {
  try {
    return await skillDao.getSkills();
  } catch (error) {
    throw new Error('Error fetching skills: ' + error.message);
  }
};

// Get skill by ID
const getSkillById = async (id) => {
  try {
    return await skillDao.getSkillById(id);
  } catch (error) {
    throw new Error('Error fetching skill by ID: ' + error.message);
  }
};

// Update a skill by ID
const updateSkill = async (id, name) => {
  try {
    // Check if the skill exists before updating
    const skill = await skillDao.getSkillById(id);
    if (!skill) {
      throw new Error('Skill not found');
    }

    // Add validation or business logic
    if (!name || name.trim() === '') {
      throw new Error('Skill name is required');
    }

    return await skillDao.updateSkill(id, name);
  } catch (error) {
    throw new Error('Error updating skill: ' + error.message);
  }
};

// Delete a skill by ID
const deleteSkill = async (id) => {
  try {
    const skill = await skillDao.getSkillById(id);
    if (!skill) {
      throw new Error('Skill not found');
    }

    return await skillDao.deleteSkill(id);
  } catch (error) {
    throw new Error('Error deleting skill: ' + error.message);
  }
};

module.exports = {
  createSkill,
  getSkills,
  getSkillById,
  updateSkill,
  deleteSkill,
};
