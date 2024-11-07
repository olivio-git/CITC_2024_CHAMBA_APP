const JobOfferCategoryDAO = require("../dao/jobOfferJobCategory");

class JobOfferCategoryService {
  // Create a new JobOfferCategory
  static async createJobOfferCategory(offerId, categoryId) {
    try {
      const jobOfferCategory = await JobOfferCategoryDAO.createJobOfferCategory(offerId, categoryId);
      return jobOfferCategory;
    } catch (error) {
      throw new Error("Service Error: " + error.message);
    }
  }

  // Get all JobOfferCategories
  static async getAllJobOfferCategories() {
    try {
      const jobOfferCategories = await JobOfferCategoryDAO.getAllJobOfferCategories();
      return jobOfferCategories;
    } catch (error) {
      throw new Error("Service Error: " + error.message);
    }
  }

  // Get JobOfferCategory by ID
  static async getJobOfferCategoryById(jobOfferCategoryId) {
    try {
      const jobOfferCategory = await JobOfferCategoryDAO.getJobOfferCategoryById(jobOfferCategoryId);
      return jobOfferCategory;
    } catch (error) {
      throw new Error("Service Error: " + error.message);
    }
  }

  // Delete JobOfferCategory
  static async deleteJobOfferCategory(jobOfferCategoryId) {
    try {
      const result = await JobOfferCategoryDAO.deleteJobOfferCategory(jobOfferCategoryId);
      return result;
    } catch (error) {
      throw new Error("Service Error: " + error.message);
    }
  }

  // Update a JobOfferCategory
  static async updateJobOfferCategory(jobOfferCategoryId, offerId, categoryId) {
    try {
      const jobOfferCategory = await JobOfferCategoryDAO.updateJobOfferCategory(jobOfferCategoryId, offerId, categoryId);
      return jobOfferCategory;
    } catch (error) {
      throw new Error("Service Error: " + error.message);
    }
  }
}

module.exports = JobOfferCategoryService;
