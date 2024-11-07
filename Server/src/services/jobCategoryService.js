const JobCategoryDAO = require("../dao/jobCategoryDao");

class JobCategoryService {
  // Create a new JobCategory
  static async createJobCategory(name) {
    try {
      const jobCategory = await JobCategoryDAO.createJobCategory(name);
      return jobCategory;
    } catch (error) {
      throw new Error("Service Error: " + error.message);
    }
  }

  // Get all JobCategories
  static async getAllJobCategories() {
    try {
      const jobCategories = await JobCategoryDAO.getAllJobCategories();
      return jobCategories;
    } catch (error) {
      throw new Error("Service Error: " + error.message);
    }
  }

  // Get JobCategory by ID
  static async getJobCategoryById(categoryId) {
    try {
      const jobCategory = await JobCategoryDAO.getJobCategoryById(categoryId);
      return jobCategory;
    } catch (error) {
      throw new Error("Service Error: " + error.message);
    }
  }

  // Delete JobCategory
  static async deleteJobCategory(categoryId) {
    try {
      const result = await JobCategoryDAO.deleteJobCategory(categoryId);
      return result;
    } catch (error) {
      throw new Error("Service Error: " + error.message);
    }
  }

  // Update JobCategory
  static async updateJobCategory(categoryId, name) {
    try {
      const jobCategory = await JobCategoryDAO.updateJobCategory(categoryId, name);
      return jobCategory;
    } catch (error) {
      throw new Error("Service Error: " + error.message);
    }
  }
}

module.exports = JobCategoryService;
