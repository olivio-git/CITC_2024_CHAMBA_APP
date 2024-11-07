// services/jobOfferService.js
const jobOfferDao = require('../dao/jobOfferDao');

// Create a new job offer
const createJobOffer = async (title, description, salary, location, contractType) => {
  try {
    // Validate job offer data
    if (!title || !description || !contractType) {
      throw new Error('Title, description, and contract type are required');
    }

    // Create the job offer by calling the DAO
    return await jobOfferDao.createJobOffer(title, description, salary, location, contractType);
  } catch (error) {
    throw new Error('Error creating job offer: ' + error.message);
  }
};

// Get all job offers
const getJobOffers = async () => {
  try {
    return await jobOfferDao.getJobOffers();
  } catch (error) {
    throw new Error('Error fetching job offers: ' + error.message);
  }
};

// Get a job offer by ID
const getJobOfferById = async (id) => {
  try {
    return await jobOfferDao.getJobOfferById(id);
  } catch (error) {
    throw new Error('Error fetching job offer: ' + error.message);
  }
};

// Update a job offer by ID
const updateJobOffer = async (id, title, description, salary, location, contractType) => {
  try {
    return await jobOfferDao.updateJobOffer(id, title, description, salary, location, contractType);
  } catch (error) {
    throw new Error('Error updating job offer: ' + error.message);
  }
};

// Delete a job offer by ID
const deleteJobOffer = async (id) => {
  try {
    return await jobOfferDao.deleteJobOffer(id);
  } catch (error) {
    throw new Error('Error deleting job offer: ' + error.message);
  }
};

module.exports = {
  createJobOffer,
  getJobOffers,
  getJobOfferById,
  updateJobOffer,
  deleteJobOffer,
};
