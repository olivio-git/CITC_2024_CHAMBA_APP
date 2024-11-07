const { JobOfferCategory } = require("../db");

class JobOfferCategoryDAO {
  // Create a new JobOfferCategory
  static async createJobOfferCategory(offerId, categoryId) {
    try {
      const jobOfferCategory = await JobOfferCategory.create({ offerId, categoryId });
      return jobOfferCategory;
    } catch (error) {
      throw new Error("Error creating JobOfferCategory: " + error.message);
    }
  }

  // Get all JobOfferCategories
  static async getAllJobOfferCategories() {
    try {
      const jobOfferCategories = await JobOfferCategory.findAll();
      return jobOfferCategories;
    } catch (error) {
      throw new Error("Error getting JobOfferCategories: " + error.message);
    }
  }

  // Get JobOfferCategory by ID
  static async getJobOfferCategoryById(jobOfferCategoryId) {
    try {
      const jobOfferCategory = await JobOfferCategory.findByPk(jobOfferCategoryId);
      return jobOfferCategory;
    } catch (error) {
      throw new Error("Error getting JobOfferCategory: " + error.message);
    }
  }

  // Delete a JobOfferCategory by ID
  static async deleteJobOfferCategory(jobOfferCategoryId) {
    try {
      const result = await JobOfferCategory.destroy({ where: { jobOfferCategoryId } });
      return result;
    } catch (error) {
      throw new Error("Error deleting JobOfferCategory: " + error.message);
    }
  }

  // Update a JobOfferCategory
  static async updateJobOfferCategory(jobOfferCategoryId, offerId, categoryId) {
    try {
      const jobOfferCategory = await JobOfferCategory.findByPk(jobOfferCategoryId);
      if (!jobOfferCategory) throw new Error("JobOfferCategory not found");

      jobOfferCategory.offerId = offerId;
      jobOfferCategory.categoryId = categoryId;
      await jobOfferCategory.save();
      return jobOfferCategory;
    } catch (error) {
      throw new Error("Error updating JobOfferCategory: " + error.message);
    }
  }
}

module.exports = JobOfferCategoryDAO;
