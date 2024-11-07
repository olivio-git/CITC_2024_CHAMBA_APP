const JobCategoryService = require("../services/jobCategoryService");

class JobCategoryController {
  // Create a new JobCategory
  static async createJobCategory(req, res) {
    const { name } = req.body;
    try {
      const newJobCategory = await JobCategoryService.createJobCategory(name);
      return res.status(201).json(newJobCategory);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Get all JobCategories
  static async getAllJobCategories(req, res) {
    try {
      const jobCategories = await JobCategoryService.getAllJobCategories();
      return res.status(200).json(jobCategories);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Get JobCategory by ID
  static async getJobCategoryById(req, res) {
    const { id } = req.params;
    try {
      const jobCategory = await JobCategoryService.getJobCategoryById(id);
      if (!jobCategory) {
        return res.status(404).json({ error: "JobCategory not found" });
      }
      return res.status(200).json(jobCategory);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Delete JobCategory by ID
  static async deleteJobCategory(req, res) {
    const { id } = req.params;
    try {
      const result = await JobCategoryService.deleteJobCategory(id);
      if (!result) {
        return res.status(404).json({ error: "JobCategory not found" });
      }
      return res.status(200).json({ message: "JobCategory deleted successfully" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Update JobCategory
  static async updateJobCategory(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const updatedJobCategory = await JobCategoryService.updateJobCategory(id, name);
      return res.status(200).json(updatedJobCategory);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = JobCategoryController;
