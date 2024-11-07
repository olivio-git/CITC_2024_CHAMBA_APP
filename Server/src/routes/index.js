// routes/index.js
const express = require("express");
const locationRoutes = require("./locationRoute");
const skillRoutes = require("./skillRoute");
const jobOffer = require("./jobOfferRoute");
const jobOfferCategory = require("./jobOfferCategoryRoute");
const jobCategory = require("./jobCategoryRoute");

const router = express.Router();

router.use("/locations", locationRoutes); // Mounting location routes
router.use("/skills", skillRoutes); // Mounting location routes
router.use("/jobOffer", jobOffer);
router.use("/jobOfferCategory", jobOfferCategory);
router.use("/jobCategory", jobCategory);

module.exports = router;
