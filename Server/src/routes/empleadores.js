// employerRoutes.js
const express = require("express");
const router = express.Router();
const {
  createEmployerController,
  getAllEmployersController,
  getEmployerByIdController,
  updateEmployerController,
  deleteEmployerController,
} = require("../controllers/empleadores");

router.post("/", createEmployerController);
router.get("/", getAllEmployersController);
router.get("/:id", getEmployerByIdController);
router.put("/:id", updateEmployerController);
router.delete("/:id", deleteEmployerController);

module.exports = router;
