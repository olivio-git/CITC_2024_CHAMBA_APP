//const { createTrabajador } = require("../controllers/trabajadores");
const {
  createTrabajadorDao,
  findAll,
  deleteTrabajadorDao,
  updateTrabajadorDao,
} = require("../dao/trabajadoresDao");
//const { update } = require("./categoria");

module.exports = {
  createTrabajadorService: async ({
    workExperience,
    education,
    certifications,
  }) => {
    if (!nombre) {
      throw new Error("nombre is required");
    }
    if (!apellido) {
      throw new Error("apellido is required");
    }
    const trabajadores = await createTrabajadorDao({
      workExperience,
      education,
      certifications,
    });
  },
  findAll: async () => {
    const trab = await findAll();
    return trab;
  },
  deleteTrabajadorService: async (id) => {
    const trabDel = await deleteTrabajadorDao(id);
    return trabDel;
  },
  updateTrabajadorService: async (
    id,
    workExperience,
    education,
    certifications
  ) => {
    const trabUpd = await updateTrabajadorDao(
      id,
      workExperience,
      education,
      certifications
    );
    return trabUpd;
  },
  obtenerWorkersFiltrados: async (filters) => {
    try {
      const workers = await workerDao.findFilteredWorkers(filters);
      return workers;
    } catch (error) {
      throw new Error(
        "Error in service while fetching filtered workers: " + error.message
      );
    }
  },
};
