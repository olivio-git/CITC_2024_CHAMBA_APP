// dao/jobOfferDao.js
const { JobOffer } = require('../db');

// Create a new job offer
const createJobOffer = async (title, description, salary, location, contractType) => {
  try {
    const newJobOffer = await JobOffer.create({ title, description, salary, location, contractType });
    return newJobOffer;
  } catch (error) {
    throw new Error('Error creating job offer: ' + error.message);
  }
};

// Get all job offers
const getJobOffers = async () => {
  try {
    const jobOffers = await JobOffer.findAll();
    return jobOffers;
  } catch (error) {
    throw new Error('Error fetching job offers: ' + error.message);
  }
};

// Get job offer by ID
const getJobOfferById = async (id) => {
  try {
    const jobOffer = await JobOffer.findByPk(id);
    if (!jobOffer) {
      throw new Error('Job offer not found');
    }
    return jobOffer;
  } catch (error) {
    throw new Error('Error fetching job offer: ' + error.message);
  }
};

// Update job offer by ID
const updateJobOffer = async (id, title, description, salary, location, contractType) => {
  try {
    const jobOffer = await JobOffer.findByPk(id);
    if (!jobOffer) {
      throw new Error('Job offer not found');
    }

    jobOffer.title = title || jobOffer.title;
    jobOffer.description = description || jobOffer.description;
    jobOffer.salary = salary || jobOffer.salary;
    jobOffer.location = location || jobOffer.location;
    jobOffer.contractType = contractType || jobOffer.contractType;

    await jobOffer.save();
    return jobOffer;
  } catch (error) {
    throw new Error('Error updating job offer: ' + error.message);
  }
};

// Delete job offer by ID
const deleteJobOffer = async (id) => {
  try {
    const jobOffer = await JobOffer.findByPk(id);
    if (!jobOffer) {
      throw new Error('Job offer not found');
    }

    await jobOffer.destroy();  // Delete the job offer
    return { message: 'Job offer deleted successfully' };
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
