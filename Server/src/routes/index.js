// routes/index.js
const express = require("express");
const locationRoutes = require("./locationRoute");
const skillRoutes = require("./skillRoute");
const jobOffer = require("./jobOfferRoute");
const jobOfferCategory = require("./jobOfferCategoryRoute");
const jobCategory = require("./jobCategoryRoute");
const usuario = require("../routes/usuario");
const empleadores = require("../routes/empleadores");
const trabajadores = require("../routes/trabajadores");
const ciudadania = require("../routes/ciudadaniaDigital")
const router = express.Router();

router.use("/locations", locationRoutes); // Mounting location routes
router.use("/skills", skillRoutes); // Mounting location routes
router.use("/jobOffer", jobOffer);
router.use("/jobOfferCategory", jobOfferCategory);
router.use("/jobCategory", jobCategory);
router.use("/usuario", usuario);
router.use("/empleadores", empleadores)
router.use("/trabajadores", trabajadores)
router.use("/ciudadania", ciudadania)


//server.use("/v1/usuario", usuario);  
//  server.use("/v1/empleadores", empleadores);  
//  server.use("/v1/trabajadores", trabajadores);  

module.exports = router;
