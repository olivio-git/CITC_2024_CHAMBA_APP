// dao/jobOfferDao.js
const { JobOffer, JobCategory } = require("../db");

// Create a new job offer
const createJobOffer = async (
  title,
  description,
  salary,
  location,
  contractType
) => {
  try {
    const newJobOffer = await JobOffer.create({
      title,
      description,
      salary,
      location,
      contractType,
    });
    return newJobOffer;
  } catch (error) {
    throw new Error("Error creating job offer: " + error.message);
  }
};

// Get all job offers
const getJobOffers = async () => {
  try {
    const jobOffers = await JobOffer.findAll();
    return jobOffers;
  } catch (error) {
    throw new Error("Error fetching job offers: " + error.message);
  }
};

// Get job offer by ID
const getJobOfferById = async (id) => {
  try {
    const jobOffer = await JobOffer.findByPk(id);
    if (!jobOffer) {
      throw new Error("Job offer not found");
    }
    return jobOffer;
  } catch (error) {
    throw new Error("Error fetching job offer: " + error.message);
  }
};

// Update job offer by ID
const updateJobOffer = async (
  id,
  title,
  description,
  salary,
  location,
  contractType
) => {
  try {
    const jobOffer = await JobOffer.findByPk(id);
    if (!jobOffer) {
      throw new Error("Job offer not found");
    }

    jobOffer.title = title || jobOffer.title;
    jobOffer.description = description || jobOffer.description;
    jobOffer.salary = salary || jobOffer.salary;
    jobOffer.location = location || jobOffer.location;
    jobOffer.contractType = contractType || jobOffer.contractType;

    await jobOffer.save();
    return jobOffer;
  } catch (error) {
    throw new Error("Error updating job offer: " + error.message);
  }
};

// Delete job offer by ID
const deleteJobOffer = async (id) => {
  try {
    const jobOffer = await JobOffer.findByPk(id);
    if (!jobOffer) {
      throw new Error("Job offer not found");
    }

    await jobOffer.destroy(); // Delete the job offer
    return { message: "Job offer deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting job offer: " + error.message);
  }
};
const findFilteredJobOffers = async (filters) => {
  const queryOptions = {
    where: {},
    include: [],
  };

  if (filters.title) {
    queryOptions.where.title = { $like: `%${filters.title}%` };
  }
  if (filters.location) {
    queryOptions.where.location = filters.location;
  }
  if (filters.contractType) {
    queryOptions.where.contractType = filters.contractType;
  }
  if (filters.state !== undefined) {
    queryOptions.where.state = filters.state;
  }
  if (filters.salaryMin || filters.salaryMax) {
    queryOptions.where.salary = {};
    if (filters.salaryMin) {
      queryOptions.where.salary.$gte = filters.salaryMin;
    }
    if (filters.salaryMax) {
      queryOptions.where.salary.$lte = filters.salaryMax;
    }
  }
  if (filters.categoryId) {
    queryOptions.include.push({
      model: JobCategory,
      where: { categoryId: filters.categoryId },
      through: { attributes: [] }, // Omite la tabla intermedia en el resultado
    });
  }

  try {
    const jobOffers = await JobOffer.findAll(queryOptions);
    return jobOffers;
  } catch (error) {
    throw new Error("Error retrieving job offers with filters");
  }
};

module.exports = {
  createJobOffer,
  getJobOffers,
  getJobOfferById,
  updateJobOffer,
  deleteJobOffer,
  findFilteredJobOffers,
};
