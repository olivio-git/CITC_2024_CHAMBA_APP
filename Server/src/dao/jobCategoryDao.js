const { JobCategory } = require("../db");

class JobCategoryDAO {
  // Create a new JobCategory
  static async createJobCategory(name) {
    try {
      const jobCategory = await JobCategory.create({ name });
      return jobCategory;
    } catch (error) {
      throw new Error("Error creating JobCategory: " + error.message);
    }
  }

  // Get all JobCategories
  static async getAllJobCategories() {
    try {
      const jobCategories = await JobCategory.findAll();
      return jobCategories;
    } catch (error) {
      throw new Error("Error getting JobCategories: " + error.message);
    }
  }

  // Get JobCategory by ID
  static async getJobCategoryById(categoryId) {
    try {
      const jobCategory = await JobCategory.findByPk(categoryId);
      return jobCategory;
    } catch (error) {
      throw new Error("Error getting JobCategory: " + error.message);
    }
  }

  // Delete JobCategory by ID
  static async deleteJobCategory(categoryId) {
    try {
      const result = await JobCategory.destroy({ where: { categoryId } });
      return result;
    } catch (error) {
      throw new Error("Error deleting JobCategory: " + error.message);
    }
  }

  // Update JobCategory
  static async updateJobCategory(categoryId, name) {
    try {
      const jobCategory = await JobCategory.findByPk(categoryId);
      if (!jobCategory) throw new Error("JobCategory not found");

      jobCategory.name = name;
      await jobCategory.save();
      return jobCategory;
    } catch (error) {
      throw new Error("Error updating JobCategory: " + error.message);
    }
  }
}

module.exports = JobCategoryDAO;
