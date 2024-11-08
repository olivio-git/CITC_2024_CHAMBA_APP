// employerController.js
const {
  createEmployerService,
  getAllEmployersService,
  getEmployerByIdService,
  updateEmployerService,
  deleteEmployerService,
} = require("../services/empleadoresService");

module.exports = {
  createEmployerController: async (req, res) => {
    try {
      const employer = await createEmployerService(req.body);
      res.status(201).json(employer);
    } catch (error) {
      res.status(500).json({ error: "Error creating employer" });
    }
  },
  getAllEmployersController: async (req, res) => {
    try {
      const employers = await getAllEmployersService();
      res.status(200).json(employers);
    } catch (error) {
      res.status(500).json({ error: "Error fetching employers" });
    }
  },
  getEmployerByIdController: async (req, res) => {
    try {
      const employer = await getEmployerByIdService(req.params.id);
      if (employer) {
        res.status(200).json(employer);
      } else {
        res.status(404).json({ error: "Employer not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching employer" });
    }
  },
  updateEmployerController: async (req, res) => {
    try {
      const employer = await updateEmployerService(req.params.id, req.body);
      res.status(200).json(employer);
    } catch (error) {
      res.status(500).json({ error: "Error updating employer" });
    }
  },
  deleteEmployerController: async (req, res) => {
    try {
      await deleteEmployerService(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Error deleting employer" });
    }
  },
};
