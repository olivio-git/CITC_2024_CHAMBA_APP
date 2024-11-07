const JobOfferCategoryService = require("../services/jobOfferJobCategory");

class JobOfferCategoryController {
  // Create a new JobOfferCategory
  static async createJobOfferCategory(req, res) {
    const { offerId, categoryId } = req.body;
    try {
      const newJobOfferCategory = await JobOfferCategoryService.createJobOfferCategory(offerId, categoryId);
      return res.status(201).json(newJobOfferCategory);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Get all JobOfferCategories
  static async getAllJobOfferCategories(req, res) {
    try {
      const jobOfferCategories = await JobOfferCategoryService.getAllJobOfferCategories();
      return res.status(200).json(jobOfferCategories);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Get JobOfferCategory by ID
  static async getJobOfferCategoryById(req, res) {
    const { id } = req.params;
    try {
      const jobOfferCategory = await JobOfferCategoryService.getJobOfferCategoryById(id);
      if (!jobOfferCategory) {
        return res.status(404).json({ error: "JobOfferCategory not found" });
      }
      return res.status(200).json(jobOfferCategory);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Delete JobOfferCategory by ID
  static async deleteJobOfferCategory(req, res) {
    const { id } = req.params;
    try {
      const result = await JobOfferCategoryService.deleteJobOfferCategory(id);
      if (!result) {
        return res.status(404).json({ error: "JobOfferCategory not found" });
      }
      return res.status(200).json({ message: "JobOfferCategory deleted successfully" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Update a JobOfferCategory
  static async updateJobOfferCategory(req, res) {
    const { id } = req.params;
    const { offerId, categoryId } = req.body;
    try {
      const updatedJobOfferCategory = await JobOfferCategoryService.updateJobOfferCategory(id, offerId, categoryId);
      return res.status(200).json(updatedJobOfferCategory);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = JobOfferCategoryController;
