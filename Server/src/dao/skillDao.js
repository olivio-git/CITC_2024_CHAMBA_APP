// dao/skillDao.js
const { Skill } = require('../db');

// Create a new skill
const createSkill = async (name) => {
  try {
    const newSkill = await Skill.create({ name });
    return newSkill;
  } catch (error) {
    throw new Error('Error creating skill: ' + error.message);
  }
};

// Get all skills
const getSkills = async () => {
  try {
    const skills = await Skill.findAll();
    return skills;
  } catch (error) {
    throw new Error('Error fetching skills: ' + error.message);
  }
};

// Get skill by ID
const getSkillById = async (id) => {
  try {
    const skill = await Skill.findByPk(id);
    if (!skill) {
      throw new Error('Skill not found');
    }
    return skill;
  } catch (error) {
    throw new Error('Error fetching skill: ' + error.message);
  }
};

// Update a skill by ID
const updateSkill = async (id, name) => {
  try {
    const skill = await Skill.findByPk(id);
    if (!skill) {
      throw new Error('Skill not found');
    }

    skill.name = name || skill.name;
    await skill.save();

    return skill;
  } catch (error) {
    throw new Error('Error updating skill: ' + error.message);
  }
};

// Delete a skill by ID
const deleteSkill = async (id) => {
  try {
    const skill = await Skill.findByPk(id);
    if (!skill) {
      throw new Error('Skill not found');
    }

    await skill.destroy();  // Delete the skill
    return { message: 'Skill deleted successfully' };
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
