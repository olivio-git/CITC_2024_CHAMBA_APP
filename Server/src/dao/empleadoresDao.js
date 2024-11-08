// employerDao.js
const { Employer } = require("../db");

module.exports = {
  createEmployerDao: async (data) => {
    return await Employer.create(data);
  },
  findAllEmployersDao: async () => {
    return await Employer.findAll();
  },
  findEmployerByIdDao: async (id) => {
    return await Employer.findOne({ where: { employerId: id } });
  },
  updateEmployerDao: async (id, data) => {
    return await Employer.update(data, { where: { employerId: id } });
  },
  deleteEmployerDao: async (id) => {
    return await Employer.destroy({ where: { employerId: id } });
  },
};
