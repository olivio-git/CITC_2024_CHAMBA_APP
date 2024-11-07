const express = require("express");
const router = express.Router();
const JobOfferCategoryController = require("../controllers/jobOfferController");

router.post("/", JobOfferCategoryController.createJobOffer);
router.get("/", JobOfferCategoryController.getJobOffers);
router.get("/:id", JobOfferCategoryController.getJobOfferById);
router.put("/:id", JobOfferCategoryController.updateJobOffer);
router.delete("/:id", JobOfferCategoryController.deleteJobOffer);

module.exports = router;
