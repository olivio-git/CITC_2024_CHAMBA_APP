// employerService.js
const { createEmployerDao, findAllEmployersDao, findEmployerByIdDao, updateEmployerDao, deleteEmployerDao } = require("../dao/empleadoresDao");

module.exports = {
  createEmployerService: async (data) => {
    return await createEmployerDao(data);
  },
  getAllEmployersService: async () => {
    return await findAllEmployersDao();
  },
  getEmployerByIdService: async (id) => {
    return await findEmployerByIdDao(id);
  },
  updateEmployerService: async (id, data) => {
    return await updateEmployerDao(id, data);
  },
  deleteEmployerService: async (id) => {
    return await deleteEmployerDao(id);
  }
};
