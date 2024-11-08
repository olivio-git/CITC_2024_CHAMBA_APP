// controllers/jobOfferController.js
const jobOfferController = require("../services/jobOfferService");

// Create a new job offer
const createJobOffer = async (req, res) => {
  const { title, description, salary, location, contractType } = req.body;

  try {
    const newJobOffer = await jobOfferController.createJobOffer(
      title,
      description,
      salary,
      location,
      contractType
    );
    return res.status(201).json(newJobOffer); // Return the newly created job offer
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get all job offers
const getJobOffers = async (req, res) => {
  try {
    const jobOffers = await jobOfferController.getJobOffers();
    return res.status(200).json(jobOffers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get job offer by ID
const getJobOfferById = async (req, res) => {
  const { id } = req.params;

  try {
    const jobOffer = await jobOfferController.getJobOfferById(id);
    return res.status(200).json(jobOffer);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

// Update job offer by ID
const updateJobOffer = async (req, res) => {
  const { id } = req.params;
  const { title, description, salary, location, contractType } = req.body;

  try {
    const updatedJobOffer = await jobOfferController.updateJobOffer(
      id,
      title,
      description,
      salary,
      location,
      contractType
    );
    return res.status(200).json(updatedJobOffer);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete job offer by ID
const deleteJobOffer = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await jobOfferController.deleteJobOffer(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const obtenerJobOffers = async (req, res) => {
  try {
    // Tomamos los filtros de los parámetros de la consulta
    const filters = {
      title: req.query.title,
      location: req.query.location,
      contractType: req.query.contractType,
      state:
        req.query.state === "true"
          ? true
          : req.query.state === "false"
          ? false
          : undefined,
      salaryMin: req.query.salaryMin
        ? parseFloat(req.query.salaryMin)
        : undefined,
      salaryMax: req.query.salaryMax
        ? parseFloat(req.query.salaryMax)
        : undefined,
    };

    const jobOffers = await jobOfferService.obtenerJobOffersFiltrados(filters);
    res.status(200).json(jobOffers);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Error fetching job offers with filters: " + error.message,
      });
  }
};
module.exports = {
  createJobOffer,
  getJobOffers,
  getJobOfferById,
  updateJobOffer,
  deleteJobOffer,
  obtenerJobOffers,
};
