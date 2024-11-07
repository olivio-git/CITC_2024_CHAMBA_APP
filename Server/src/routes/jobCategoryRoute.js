const express = require("express");
const router = express.Router();
const JobCategoryController = require("../controllers/jobCategoryController");

router.post("/", JobCategoryController.createJobCategory);
router.get("/", JobCategoryController.getAllJobCategories);
router.get("/:id", JobCategoryController.getJobCategoryById);
router.put("/:id", JobCategoryController.updateJobCategory);
router.delete("/:id", JobCategoryController.deleteJobCategory);

module.exports = router;
